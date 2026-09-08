import { lookup } from 'node:dns/promises';
import * as http from 'node:http';
import * as https from 'node:https';
import { BlockList, isIP, type LookupFunction } from 'node:net';
import type { IncomingMessage } from 'node:http';

const DEFAULT_TIMEOUT_MS = 8_000;
const DEFAULT_MAX_BYTES = 1_500_000;
const DEFAULT_MAX_REDIRECTS = 3;
const MAX_URL_LENGTH = 2_048;
const MAX_DNS_ADDRESSES = 16;
const MAX_HEADER_BYTES = 16 * 1024;

const BLOCKED_IPV4 = new BlockList();
for (const [network, prefix] of [
  ['0.0.0.0', 8],
  ['10.0.0.0', 8],
  ['100.64.0.0', 10],
  ['127.0.0.0', 8],
  ['169.254.0.0', 16],
  ['172.16.0.0', 12],
  ['192.0.0.0', 24],
  ['192.0.2.0', 24],
  ['192.88.99.0', 24],
  ['192.168.0.0', 16],
  ['198.18.0.0', 15],
  ['198.51.100.0', 24],
  ['203.0.113.0', 24],
  ['224.0.0.0', 4],
  ['240.0.0.0', 4],
] as const) {
  BLOCKED_IPV4.addSubnet(network, prefix, 'ipv4');
}

// Globally routable unicast IPv6 currently lives in 2000::/3. Keeping this an
// allow-list also excludes unspecified, loopback, ULA, link-local, multicast,
// IPv4-compatible/mapped, NAT64, and other special-use ranges by default.
const GLOBAL_IPV6 = new BlockList();
GLOBAL_IPV6.addSubnet('2000::', 3, 'ipv6');

const BLOCKED_IPV6 = new BlockList();
for (const [network, prefix] of [
  ['2001::', 32], // Teredo
  ['2001:2::', 48], // benchmarking
  ['2001:10::', 28], // ORCHID (deprecated)
  ['2001:20::', 28], // ORCHIDv2
  ['2001:db8::', 32], // documentation
  ['2002::', 16], // 6to4
] as const) {
  BLOCKED_IPV6.addSubnet(network, prefix, 'ipv6');
}

const SPECIAL_HOST_SUFFIXES = [
  '.localhost',
  '.local',
  '.internal',
  '.home.arpa',
  '.test',
  '.invalid',
  '.example',
];

export type PublicFetchErrorCode =
  | 'INVALID_URL'
  | 'FORBIDDEN_TARGET'
  | 'DNS_FAILED'
  | 'TOO_MANY_REDIRECTS'
  | 'REQUEST_TIMEOUT'
  | 'RESPONSE_TOO_LARGE'
  | 'UNSUPPORTED_CONTENT'
  | 'NETWORK_ERROR';

export class PublicFetchError extends Error {
  public readonly code: PublicFetchErrorCode;

  constructor(
    code: PublicFetchErrorCode,
    message: string,
    options?: ErrorOptions
  ) {
    super(message, options);
    this.name = 'PublicFetchError';
    this.code = code;
  }
}

export interface PublicTextResponse {
  ok: boolean;
  status: number;
  url: string;
  text: string;
  headers: Headers;
}

export interface PublicFetchOptions {
  timeoutMs?: number;
  maxBytes?: number;
  maxRedirects?: number;
  allowedContentTypes?: readonly string[];
}

interface ResolvedAddress {
  address: string;
  family: 4 | 6;
}

function stripIpv6Brackets(hostname: string): string {
  return hostname.startsWith('[') && hostname.endsWith(']')
    ? hostname.slice(1, -1)
    : hostname;
}

function mappedIpv4Address(address: string): string | null {
  const dotted = address.match(/^::ffff:(\d{1,3}(?:\.\d{1,3}){3})$/i);
  if (dotted && isIP(dotted[1]) === 4) return dotted[1];

  const hexadecimal = address.match(/^::ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i);
  if (!hexadecimal) return null;
  const high = Number.parseInt(hexadecimal[1], 16);
  const low = Number.parseInt(hexadecimal[2], 16);
  return `${high >> 8}.${high & 255}.${low >> 8}.${low & 255}`;
}

function configuredPorts(): Set<string> {
  const configured = process.env.AUDIT_ALLOWED_PORTS || '80,443';
  return new Set(
    configured
      .split(',')
      .map((port) => port.trim())
      .filter((port) => /^\d{1,5}$/.test(port) && Number(port) >= 1 && Number(port) <= 65_535)
  );
}

/** True only for ordinary, globally routable unicast addresses. */
export function isPublicIpAddress(address: string): boolean {
  const normalized = stripIpv6Brackets(address.split('%')[0]);
  const family = isIP(normalized);

  if (family === 4) {
    return !BLOCKED_IPV4.check(normalized, 'ipv4');
  }

  if (family === 6) {
    const mapped = mappedIpv4Address(normalized);
    if (mapped) return isPublicIpAddress(mapped);
    return GLOBAL_IPV6.check(normalized, 'ipv6') && !BLOCKED_IPV6.check(normalized, 'ipv6');
  }

  return false;
}

/**
 * Parses and canonicalizes a user URL without doing network I/O.
 * Redirect locations use the same policy by passing the previous URL as base.
 */
export function normalizePublicUrl(input: string, base?: URL): URL {
  if (!input || input.length > MAX_URL_LENGTH || /[\u0000-\u001f\u007f]/.test(input)) {
    throw new PublicFetchError('INVALID_URL', 'URL is empty, too long, or contains control characters.');
  }

  let url: URL;
  try {
    url = base ? new URL(input, base) : new URL(input);
  } catch (cause) {
    throw new PublicFetchError('INVALID_URL', 'URL is not valid.', { cause });
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new PublicFetchError('INVALID_URL', 'Only HTTP and HTTPS URLs are accepted.');
  }

  if (url.username || url.password) {
    throw new PublicFetchError('INVALID_URL', 'Credentials in URLs are not accepted.');
  }

  let hostname = stripIpv6Brackets(url.hostname).toLowerCase();
  if (!hostname) {
    throw new PublicFetchError('INVALID_URL', 'URL must include a hostname.');
  }

  // A trailing root-label dot is semantically redundant and can bypass naïve
  // hostname/suffix comparisons, so remove it before all policy checks.
  if (hostname.endsWith('.')) hostname = hostname.slice(0, -1);

  const ipFamily = isIP(hostname);
  if (ipFamily === 0) {
    if (
      hostname === 'localhost' ||
      !hostname.includes('.') ||
      SPECIAL_HOST_SUFFIXES.some((suffix) => hostname.endsWith(suffix))
    ) {
      throw new PublicFetchError('FORBIDDEN_TARGET', 'URL must use a public DNS hostname.');
    }
    url.hostname = hostname;
  } else if (!isPublicIpAddress(hostname)) {
    throw new PublicFetchError('FORBIDDEN_TARGET', 'Private and special-use IP addresses are not accepted.');
  }

  const effectivePort = url.port || (url.protocol === 'https:' ? '443' : '80');
  if (!configuredPorts().has(effectivePort)) {
    throw new PublicFetchError('FORBIDDEN_TARGET', 'This network port is not allowed for website audits.');
  }

  url.hash = '';
  return url;
}

async function withDeadline<T>(promise: Promise<T>, deadline: number): Promise<T> {
  const remaining = deadline - Date.now();
  if (remaining <= 0) {
    throw new PublicFetchError('REQUEST_TIMEOUT', 'The remote website took too long to respond.');
  }

  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      promise,
      new Promise<never>((_, reject) => {
        timer = setTimeout(
          () => reject(new PublicFetchError('REQUEST_TIMEOUT', 'The remote website took too long to respond.')),
          remaining
        );
      }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

/** Resolves every address and rejects a hostname if any answer is non-public. */
export async function resolvePublicAddresses(url: URL, deadline: number): Promise<ResolvedAddress[]> {
  const hostname = stripIpv6Brackets(url.hostname);
  const literalFamily = isIP(hostname);
  if (literalFamily) {
    if (!isPublicIpAddress(hostname)) {
      throw new PublicFetchError('FORBIDDEN_TARGET', 'Target IP address is not public.');
    }
    return [{ address: hostname, family: literalFamily as 4 | 6 }];
  }

  let records: Array<{ address: string; family: number }>;
  try {
    records = await withDeadline(lookup(hostname, { all: true, verbatim: true }), deadline);
  } catch (cause) {
    if (cause instanceof PublicFetchError) throw cause;
    throw new PublicFetchError('DNS_FAILED', 'The website hostname could not be resolved.', { cause });
  }

  if (records.length === 0 || records.length > MAX_DNS_ADDRESSES) {
    throw new PublicFetchError('DNS_FAILED', 'The website hostname returned an invalid DNS response.');
  }

  const addresses: ResolvedAddress[] = records.map(({ address, family }) => ({
    address,
    family: family as 4 | 6,
  }));

  if (addresses.some(({ address }) => !isPublicIpAddress(address))) {
    // Reject mixed public/private answers too. Selecting only the public answer
    // would still leave room for rebinding and split-horizon bypasses.
    throw new PublicFetchError('FORBIDDEN_TARGET', 'The website hostname resolves to a non-public address.');
  }

  return addresses;
}

function responseHeaders(message: IncomingMessage): Headers {
  const headers = new Headers();
  for (const [name, value] of Object.entries(message.headers)) {
    if (Array.isArray(value)) {
      for (const entry of value) headers.append(name, entry);
    } else if (value !== undefined) {
      headers.set(name, value);
    }
  }
  return headers;
}

function requestAtAddress(url: URL, target: ResolvedAddress, deadline: number): Promise<IncomingMessage> {
  return new Promise((resolve, reject) => {
    const remaining = deadline - Date.now();
    if (remaining <= 0) {
      reject(new PublicFetchError('REQUEST_TIMEOUT', 'The remote website took too long to respond.'));
      return;
    }

    const lookupPinned: LookupFunction = (_hostname, _options, callback) => {
      callback(null, target.address, target.family);
    };

    const transport = url.protocol === 'https:' ? https : http;
    const request = transport.request(
      url,
      {
        method: 'GET',
        headers: {
          'User-Agent': 'PandaCodeGen-Audit/2.0',
          Accept: 'text/html,application/xhtml+xml,text/plain,application/xml,text/xml;q=0.9,*/*;q=0.1',
          'Accept-Encoding': 'identity',
          Connection: 'close',
        },
        lookup: lookupPinned,
        maxHeaderSize: MAX_HEADER_BYTES,
        agent: false,
      },
      resolve
    );

    request.once('socket', (socket) => {
      socket.once('connect', () => {
        const remoteAddress = socket.remoteAddress;
        if (!remoteAddress || !isPublicIpAddress(remoteAddress)) {
          request.destroy(
            new PublicFetchError('FORBIDDEN_TARGET', 'Connection was redirected to a non-public address.')
          );
        }
      });
    });

    request.once('error', reject);
    request.setTimeout(remaining, () => {
      request.destroy(new PublicFetchError('REQUEST_TIMEOUT', 'The remote website took too long to respond.'));
    });
    request.end();
  });
}

async function requestWithAddressFallback(
  url: URL,
  addresses: ResolvedAddress[],
  deadline: number
): Promise<IncomingMessage> {
  let lastError: unknown;
  for (const address of addresses) {
    try {
      return await requestAtAddress(url, address, deadline);
    } catch (error) {
      if (error instanceof PublicFetchError && error.code === 'FORBIDDEN_TARGET') throw error;
      lastError = error;
    }
  }

  if (lastError instanceof PublicFetchError) throw lastError;
  throw new PublicFetchError('NETWORK_ERROR', 'The remote website could not be reached.', {
    cause: lastError,
  });
}

async function readTextBody(
  response: IncomingMessage,
  maxBytes: number,
  deadline: number,
  allowedContentTypes: readonly string[]
): Promise<string> {
  const declaredLength = Number(response.headers['content-length']);
  if (Number.isFinite(declaredLength) && declaredLength > maxBytes) {
    response.destroy();
    throw new PublicFetchError('RESPONSE_TOO_LARGE', 'Remote response is too large to audit safely.');
  }

  const contentEncoding = String(response.headers['content-encoding'] || '').toLowerCase();
  if (contentEncoding && contentEncoding !== 'identity') {
    response.destroy();
    throw new PublicFetchError('UNSUPPORTED_CONTENT', 'Compressed remote responses are not accepted.');
  }

  const contentType = String(response.headers['content-type'] || '').toLowerCase();
  if (contentType && !allowedContentTypes.some((allowed) => contentType.startsWith(allowed))) {
    response.destroy();
    throw new PublicFetchError('UNSUPPORTED_CONTENT', 'Remote response is not a supported text format.');
  }

  const chunks: Buffer[] = [];
  let received = 0;
  for await (const chunk of response) {
    if (Date.now() > deadline) {
      response.destroy();
      throw new PublicFetchError('REQUEST_TIMEOUT', 'The remote website took too long to respond.');
    }

    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    received += buffer.length;
    if (received > maxBytes) {
      response.destroy();
      throw new PublicFetchError('RESPONSE_TOO_LARGE', 'Remote response is too large to audit safely.');
    }
    chunks.push(buffer);
  }

  const body = Buffer.concat(chunks, received);
  // Reject obvious binary payloads even when a server omits or lies about its
  // Content-Type. HTML/XML/plain text should never contain NUL bytes.
  if (body.includes(0)) {
    throw new PublicFetchError('UNSUPPORTED_CONTENT', 'Remote response appears to be binary data.');
  }

  return body.toString('utf8');
}

/**
 * Fetches a bounded text resource from the public internet. DNS is resolved and
 * validated before each request, the connection is pinned to that answer, the
 * connected peer is checked again, and every redirect repeats the full policy.
 */
export async function fetchPublicText(
  input: string | URL,
  options: PublicFetchOptions = {}
): Promise<PublicTextResponse> {
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const maxBytes = options.maxBytes ?? DEFAULT_MAX_BYTES;
  const maxRedirects = options.maxRedirects ?? DEFAULT_MAX_REDIRECTS;
  const allowedContentTypes = options.allowedContentTypes ?? [
    'text/',
    'application/xhtml+xml',
    'application/xml',
  ];
  const deadline = Date.now() + timeoutMs;
  let currentUrl = normalizePublicUrl(input.toString());

  for (let redirectCount = 0; redirectCount <= maxRedirects; redirectCount++) {
    const addresses = await resolvePublicAddresses(currentUrl, deadline);
    const response = await requestWithAddressFallback(currentUrl, addresses, deadline);
    const status = response.statusCode || 0;
    const headers = responseHeaders(response);

    if ([301, 302, 303, 307, 308].includes(status) && headers.get('location')) {
      response.destroy();
      if (redirectCount === maxRedirects) {
        throw new PublicFetchError('TOO_MANY_REDIRECTS', 'Remote website redirected too many times.');
      }
      currentUrl = normalizePublicUrl(headers.get('location')!, currentUrl);
      continue;
    }

    const text = await readTextBody(response, maxBytes, deadline, allowedContentTypes);
    return {
      ok: status >= 200 && status < 300,
      status,
      url: currentUrl.toString(),
      text,
      headers,
    };
  }

  throw new PublicFetchError('TOO_MANY_REDIRECTS', 'Remote website redirected too many times.');
}

/** Performs DNS validation without downloading the page. */
export async function assertPublicUrl(input: string | URL, timeoutMs = 3_000): Promise<URL> {
  const url = normalizePublicUrl(input.toString());
  await resolvePublicAddresses(url, Date.now() + timeoutMs);
  return url;
}
