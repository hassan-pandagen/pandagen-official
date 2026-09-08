import { NextRequest, NextResponse } from 'next/server';
import {
  runPageSpeedAnalysis,
  unavailablePageSpeedResult,
  type PageSpeedResult,
} from '@/lib/audit/pagespeed';
import {
  evaluateDeepChecks,
  fetchDeepCheckSources,
  type DeepChecksResult,
} from '@/lib/audit/deepChecks';
import {
  assertPublicUrl,
  normalizePublicUrl,
  PublicFetchError,
} from '@/lib/audit/publicFetch';
import {
  AuditRateLimitConfigurationError,
  enforceAuditRateLimit,
} from '@/lib/audit/auditRateLimit';
import { issueAuditLeadToken } from '@/lib/audit/auditLeadToken';
import {
  assertSameOriginAuditRequest,
  AuditLeadRequestError,
} from '@/lib/audit/auditLeadRequest';
const MAX_REQUEST_BYTES = 4_096;
let activeAudits = 0;

class AuditRequestError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
    this.name = 'AuditRequestError';
  }
}

function jsonResponse(body: unknown, status: number, extraHeaders?: HeadersInit) {
  return NextResponse.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      ...Object.fromEntries(new Headers(extraHeaders).entries()),
    },
  });
}

async function readBoundedJson(request: NextRequest): Promise<unknown> {
  const contentType = request.headers.get('content-type')?.toLowerCase() || '';
  if (!contentType.startsWith('application/json')) {
    throw new AuditRequestError(415, 'Content-Type must be application/json.');
  }

  const declaredLength = Number(request.headers.get('content-length'));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_REQUEST_BYTES) {
    throw new AuditRequestError(413, 'Request body is too large.');
  }
  if (!request.body) throw new AuditRequestError(400, 'Request body is required.');

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let received = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    received += value.byteLength;
    if (received > MAX_REQUEST_BYTES) {
      await reader.cancel('Request exceeded the byte limit.');
      throw new AuditRequestError(413, 'Request body is too large.');
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(received);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    throw new AuditRequestError(400, 'Request body must contain valid JSON.');
  }
}

function maxConcurrentAudits(): number {
  const configured = Number(process.env.AUDIT_MAX_CONCURRENT || 2);
  return Number.isInteger(configured) && configured >= 1 && configured <= 20 ? configured : 2;
}

// No `maxDuration` is exported here on purpose: the correct value depends on
// the Vercel plan this deploys to, and that has not been confirmed. The
// platform default therefore applies, which on Hobby is a hard 10 seconds. This
// design does not fit inside 10 seconds for a URL that PageSpeed has not
// cached, because Google runs a fresh Lighthouse pass (roughly 15-30 seconds)
// on the first request for a URL and only serves a cached result afterwards.
// Our own budget is 20s for PageSpeed and 8s per deep-check fetch, running
// concurrently. Setting maxDuration is the owner's decision.
export async function POST(request: NextRequest) {
  let hasConcurrencySlot = false;
  try {
    assertSameOriginAuditRequest(request);
    const body = await readBoundedJson(request);
    const url = body && typeof body === 'object' && 'url' in body
      ? (body as { url?: unknown }).url
      : undefined;

    if (!url || typeof url !== 'string') {
      throw new AuditRequestError(400, 'URL is required.');
    }

    const trimmedUrl = url.trim();
    const submittedUrl = /^[a-z][a-z0-9+.-]*:/i.test(trimmedUrl)
      ? trimmedUrl
      : `https://${trimmedUrl}`;

    // Syntactic policy comes before the rate limiter so malformed input is
    // cheap, while DNS lookup comes after it so an attacker cannot get
    // unlimited resolver work by cycling hostnames.
    const parsedUrl = normalizePublicUrl(submittedUrl);
    const rateLimit = await enforceAuditRateLimit(request, parsedUrl);
    if (!rateLimit.allowed) {
      return jsonResponse(
        { error: 'Too many audit requests. Please try again later.' },
        429,
        {
          'Retry-After': String(rateLimit.retryAfterSeconds),
          'X-RateLimit-Backend': rateLimit.backend,
        }
      );
    }

    // Resolve and reject private/reserved/mixed answers before spending a
    // PageSpeed API request. The later direct fetch repeats this validation and
    // pins the connection, protecting against DNS rebinding between stages.
    const publicUrl = await assertPublicUrl(parsedUrl);
    const normalizedUrl = publicUrl.toString();

    if (activeAudits >= maxConcurrentAudits()) {
      return jsonResponse(
        { error: 'The audit service is busy. Please try again shortly.' },
        503,
        { 'Retry-After': '10' }
      );
    }
    activeAudits += 1;
    hasConcurrencySlot = true;

    // The PageSpeed request and the deep-check fetches are genuinely
    // concurrent. Only checkMobileFirstUX consults the PageSpeed result, and it
    // needs no network of its own, so the checks are evaluated after both
    // network phases have settled rather than after PageSpeed alone.
    const [pageSpeedSettled, deepSourcesSettled] = await Promise.allSettled([
      runPageSpeedAnalysis(normalizedUrl),
      fetchDeepCheckSources(normalizedUrl),
    ]);

    let pageSpeedResult: PageSpeedResult | null = null;
    if (pageSpeedSettled.status === 'fulfilled') {
      pageSpeedResult = pageSpeedSettled.value;
    } else {
      // A PageSpeed failure no longer discards the deep checks. The response
      // carries pageSpeedAvailable: false and null lab metrics instead.
      console.error('PageSpeed analysis error:', pageSpeedSettled.reason);
    }

    let deepChecks: DeepChecksResult | null = null;
    if (deepSourcesSettled.status === 'fulfilled') {
      try {
        deepChecks = evaluateDeepChecks(deepSourcesSettled.value, pageSpeedResult);
      } catch (err) {
        console.error('Deep checks error:', err);
      }
    } else {
      console.error('Deep checks fetch error:', deepSourcesSettled.reason);
    }

    // Nothing was measured at all, so there is no honest partial result.
    if (!pageSpeedResult && !deepChecks) {
      return jsonResponse(
        { error: 'The website could not be analyzed right now. Please try again.' },
        502
      );
    }

    const result: PageSpeedResult = {
      ...(pageSpeedResult ?? unavailablePageSpeedResult()),
      deepChecks: deepChecks ?? undefined,
    };
    const leadToken = await issueAuditLeadToken(normalizedUrl, result);

    return jsonResponse({ success: true, data: result, leadToken }, 200);
  } catch (error) {
    if (error instanceof AuditLeadRequestError) {
      return jsonResponse({ error: error.message }, error.status);
    }
    if (error instanceof AuditRequestError) {
      return jsonResponse({ error: error.message }, error.status);
    }
    if (error instanceof PublicFetchError) {
      return jsonResponse(
        { error: 'URL must resolve to a public HTTP or HTTPS website.' },
        400
      );
    }
    if (error instanceof AuditRateLimitConfigurationError) {
      console.error('Audit rate-limit error:', error);
      return jsonResponse(
        { error: 'The audit service is temporarily unavailable. Please try again later.' },
        503,
        { 'Retry-After': '60' }
      );
    }
    console.error('Audit analyze error:', error);
    return jsonResponse(
      { error: 'The website could not be analyzed right now. Please try again.' },
      502
    );
  } finally {
    if (hasConcurrencySlot) activeAudits -= 1;
  }
}
