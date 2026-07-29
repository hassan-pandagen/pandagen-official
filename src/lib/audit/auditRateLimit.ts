import { createHmac, randomBytes } from 'node:crypto';
import { isIP } from 'node:net';
import type { NextRequest } from 'next/server';

export type AuditBackendMode = 'redis' | 'memory';

export interface AuditRedisConfig {
  url: string;
  token: string;
}

export interface AuditBackendSelection {
  mode: AuditBackendMode;
  redis: AuditRedisConfig | null;
}

interface RateLimitRule {
  key: string;
  name: 'client' | 'target' | 'global';
  limit: number;
  windowMs: number;
}

interface MemoryBucket {
  count: number;
  expiresAt: number;
}

interface MemoryQuoteClaim {
  claimId: string;
  expiresAt: number;
}

export interface AuditRateLimitResult {
  allowed: boolean;
  backend: AuditBackendMode;
  retryAfterSeconds: number;
  blockedBy?: RateLimitRule['name'];
}

export interface QuoteSubmissionClaim {
  acquired: boolean;
  backend: AuditBackendMode;
  key: string;
  claimId: string;
}

export class AuditRateLimitConfigurationError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = 'AuditRateLimitConfigurationError';
  }
}

const memoryBuckets = new Map<string, MemoryBucket>();
const MAX_MEMORY_BUCKETS = 10_000;
const memoryQuoteClaims = new Map<string, MemoryQuoteClaim>();
const MAX_MEMORY_QUOTE_CLAIMS = 5_000;
const QUOTE_IDEMPOTENCY_WINDOW_MS = 10 * 60 * 1_000;
const RELEASE_QUOTE_CLAIM_SCRIPT = `
if redis.call('GET', KEYS[1]) == ARGV[1] then
  return redis.call('DEL', KEYS[1])
end
return 0
`.trim();

const REDIS_SCRIPT = `
local retry = 0
local denied = 0

for i, key in ipairs(KEYS) do
  local count = tonumber(redis.call('GET', key) or '0')
  local limit = tonumber(ARGV[(i - 1) * 2 + 1])
  if count >= limit then
    denied = i
    local ttl = redis.call('PTTL', key)
    if ttl > retry then retry = ttl end
  end
end

if denied > 0 then
  return {0, denied, retry}
end

for i, key in ipairs(KEYS) do
  local window = tonumber(ARGV[(i - 1) * 2 + 2])
  local count = redis.call('INCR', key)
  if count == 1 then redis.call('PEXPIRE', key, window) end
end

return {1, 0, 0}
`.trim();

function envInt(name: string, fallback: number, min: number, max: number): number {
  const raw = process.env[name];
  if (!raw) return fallback;
  const value = Number(raw);
  if (!Number.isInteger(value) || value < min || value > max) {
    throw new AuditRateLimitConfigurationError(
      `${name} must be an integer between ${min} and ${max}.`
    );
  }
  return value;
}

function redisConfig(): AuditRedisConfig | null {
  const url =
    process.env.AUDIT_RATE_LIMIT_REDIS_REST_URL ||
    process.env.KV_REST_API_URL ||
    process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.AUDIT_RATE_LIMIT_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN ||
    process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url && !token) return null;
  if (!url || !token) {
    throw new AuditRateLimitConfigurationError(
      'The Redis REST URL and token must both be configured for audit rate limiting.'
    );
  }

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch (cause) {
    throw new AuditRateLimitConfigurationError('The Redis REST URL is invalid.', { cause });
  }
  if (parsed.protocol !== 'https:' || parsed.username || parsed.password) {
    throw new AuditRateLimitConfigurationError(
      'The Redis REST endpoint must be an HTTPS URL without embedded credentials.'
    );
  }

  return { url: parsed.toString().replace(/\/$/, ''), token };
}

function selectMode(): AuditBackendSelection {
  const redis = redisConfig();
  const requested = process.env.AUDIT_RATE_LIMIT_MODE?.toLowerCase();

  if (requested && requested !== 'redis' && requested !== 'memory') {
    throw new AuditRateLimitConfigurationError(
      'AUDIT_RATE_LIMIT_MODE must be either "redis" or "memory".'
    );
  }

  if (requested === 'redis') {
    if (!redis) {
      throw new AuditRateLimitConfigurationError(
        'AUDIT_RATE_LIMIT_MODE=redis requires a Redis REST URL and token.'
      );
    }
    return { mode: 'redis', redis };
  }

  if (requested === 'memory') {
    if (process.env.NODE_ENV === 'production') {
      throw new AuditRateLimitConfigurationError(
        'AUDIT_RATE_LIMIT_MODE=memory is limited to development. Production requires Redis.'
      );
    }
    return { mode: 'memory', redis: null };
  }

  if (redis) return { mode: 'redis', redis };
  if (process.env.NODE_ENV !== 'production') return { mode: 'memory', redis: null };

  // A warm-instance map is not a durable limiter on a horizontally scaled or
  // serverless deployment. Refuse expensive audits instead of silently failing
  // open when production has no enforceable backend.
  throw new AuditRateLimitConfigurationError(
    'Audit rate limiting is not configured for production. Configure a Redis REST backend.'
  );
}

function clientAddress(request: NextRequest): string {
  // Vercel overwrites its forwarding headers before a Function receives the
  // request. In production, only trust that provider-managed header when the
  // Vercel runtime marker is present. Generic forwarding headers are accepted
  // only for local development, where they support route and limiter tests.
  // A different production proxy needs an explicit, reviewed adapter here.
  const candidates = process.env.VERCEL === '1'
    ? [request.headers.get('x-vercel-forwarded-for')]
    : process.env.NODE_ENV !== 'production'
      ? [request.headers.get('x-forwarded-for'), request.headers.get('x-real-ip')]
      : [];

  for (const value of candidates) {
    if (!value) continue;
    for (const candidate of value.split(',')) {
      const address = candidate.trim();
      if (isIP(address)) return address;
    }
  }

  // Unknown clients intentionally share one conservative bucket rather than
  // receiving an unlimited path through the endpoint.
  return 'unknown';
}

function hashingSecret(): string {
  const secret = process.env.AUDIT_RATE_LIMIT_SECRET;
  if (secret && secret.length >= 32) return secret;
  if (process.env.NODE_ENV === 'production') {
    throw new AuditRateLimitConfigurationError(
      'AUDIT_RATE_LIMIT_SECRET must be at least 32 characters in production.'
    );
  }
  return 'development-only-audit-rate-limit-secret';
}

function privateKey(value: string): string {
  return createHmac('sha256', hashingSecret()).update(value).digest('hex').slice(0, 32);
}

export function getAuditBackend(): AuditBackendSelection {
  return selectMode();
}

export function hashAuditIdentifier(value: string): string {
  return privateKey(value);
}

export function hashedAuditClientIdentifier(request: NextRequest): string {
  return privateKey(clientAddress(request));
}

function rulesFor(request: NextRequest, target: URL): RateLimitRule[] {
  const ipLimit = envInt('AUDIT_RATE_LIMIT_IP_MAX', 5, 1, 1_000);
  const ipWindowSeconds = envInt('AUDIT_RATE_LIMIT_IP_WINDOW_SECONDS', 900, 10, 86_400);
  const targetLimit = envInt('AUDIT_RATE_LIMIT_TARGET_MAX', 20, 1, 10_000);
  const targetWindowSeconds = envInt('AUDIT_RATE_LIMIT_TARGET_WINDOW_SECONDS', 900, 10, 86_400);
  const globalLimit = envInt('AUDIT_RATE_LIMIT_GLOBAL_MAX', 200, 1, 100_000);
  const globalWindowSeconds = envInt('AUDIT_RATE_LIMIT_GLOBAL_WINDOW_SECONDS', 3_600, 10, 86_400);
  const prefix = process.env.AUDIT_RATE_LIMIT_KEY_PREFIX || 'pandacodegen:audit:v1';

  return [
    {
      key: `${prefix}:client:${privateKey(clientAddress(request))}`,
      name: 'client',
      limit: ipLimit,
      windowMs: ipWindowSeconds * 1_000,
    },
    {
      key: `${prefix}:target:${privateKey(target.hostname.toLowerCase())}`,
      name: 'target',
      limit: targetLimit,
      windowMs: targetWindowSeconds * 1_000,
    },
    {
      key: `${prefix}:global`,
      name: 'global',
      limit: globalLimit,
      windowMs: globalWindowSeconds * 1_000,
    },
  ];
}

function leadRulesFor(request: NextRequest): RateLimitRule[] {
  const prefix = process.env.AUDIT_RATE_LIMIT_KEY_PREFIX || 'pandacodegen:audit:v1';
  const oneHourMs = 60 * 60 * 1_000;

  return [
    {
      key: `${prefix}:lead:client:${hashedAuditClientIdentifier(request)}`,
      name: 'client',
      limit: 5,
      windowMs: oneHourMs,
    },
    {
      key: `${prefix}:lead:global`,
      name: 'global',
      limit: 100,
      windowMs: oneHourMs,
    },
  ];
}

function quoteRulesFor(request: NextRequest): RateLimitRule[] {
  const prefix = process.env.AUDIT_RATE_LIMIT_KEY_PREFIX || 'pandacodegen:audit:v1';
  const oneHourMs = 60 * 60 * 1_000;

  return [
    {
      key: `${prefix}:quote:client:${hashedAuditClientIdentifier(request)}`,
      name: 'client',
      limit: 5,
      windowMs: oneHourMs,
    },
    {
      key: `${prefix}:quote:global`,
      name: 'global',
      limit: 100,
      windowMs: oneHourMs,
    },
  ];
}

function applyMemoryLimit(rules: RateLimitRule[]): AuditRateLimitResult {
  const now = Date.now();
  for (const rule of rules) {
    const bucket = memoryBuckets.get(rule.key);
    if (bucket && bucket.expiresAt > now && bucket.count >= rule.limit) {
      return {
        allowed: false,
        backend: 'memory',
        blockedBy: rule.name,
        retryAfterSeconds: Math.max(1, Math.ceil((bucket.expiresAt - now) / 1_000)),
      };
    }
  }

  for (const rule of rules) {
    const bucket = memoryBuckets.get(rule.key);
    if (!bucket || bucket.expiresAt <= now) {
      memoryBuckets.set(rule.key, { count: 1, expiresAt: now + rule.windowMs });
    } else {
      bucket.count += 1;
    }
  }

  if (memoryBuckets.size > MAX_MEMORY_BUCKETS) {
    for (const [key, bucket] of memoryBuckets) {
      if (bucket.expiresAt <= now) memoryBuckets.delete(key);
    }
    // Keep memory bounded even under a high-cardinality attack.
    while (memoryBuckets.size > MAX_MEMORY_BUCKETS) {
      const oldestKey = memoryBuckets.keys().next().value as string | undefined;
      if (!oldestKey) break;
      memoryBuckets.delete(oldestKey);
    }
  }

  return { allowed: true, backend: 'memory', retryAfterSeconds: 0 };
}

export async function executeAuditRedisCommand(
  config: AuditRedisConfig,
  command: Array<string | number>,
  maxResponseBytes = 256 * 1024
): Promise<unknown> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 2_500);
  try {
    const response = await fetch(config.url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(command),
      cache: 'no-store',
      signal: controller.signal,
    });

    const raw = await response.text();
    if (!response.ok || raw.length > maxResponseBytes) {
      throw new Error(`Redis REST request failed with status ${response.status}.`);
    }

    const parsed = JSON.parse(raw) as { result?: unknown; error?: string };
    if (parsed.error || !Object.prototype.hasOwnProperty.call(parsed, 'result')) {
      throw new Error(parsed.error || 'Redis REST returned an invalid response.');
    }
    return parsed.result;
  } catch (cause) {
    throw new AuditRateLimitConfigurationError(
      'The audit persistence service is temporarily unavailable.',
      { cause }
    );
  } finally {
    clearTimeout(timer);
  }
}

async function applyRedisLimit(
  config: NonNullable<ReturnType<typeof redisConfig>>,
  rules: RateLimitRule[]
): Promise<AuditRateLimitResult> {
  const command: Array<string | number> = ['EVAL', REDIS_SCRIPT, rules.length];
  command.push(...rules.map((rule) => rule.key));
  for (const rule of rules) command.push(rule.limit, rule.windowMs);

  const result = await executeAuditRedisCommand(config, command, 8_192);
  if (!Array.isArray(result) || result.length < 3) {
    throw new AuditRateLimitConfigurationError(
      'Redis REST returned an invalid rate-limit result.'
    );
  }

  const allowed = Number(result[0]) === 1;
  const deniedIndex = Number(result[1]);
  const retryMs = Number(result[2]);
  return {
    allowed,
    backend: 'redis',
    retryAfterSeconds: allowed ? 0 : Math.max(1, Math.ceil(retryMs / 1_000)),
    blockedBy: allowed ? undefined : rules[deniedIndex - 1]?.name,
  };
}

export async function enforceAuditRateLimit(
  request: NextRequest,
  target: URL
): Promise<AuditRateLimitResult> {
  const { mode, redis } = selectMode();
  const rules = rulesFor(request, target);
  if (mode === 'memory') return applyMemoryLimit(rules);
  return applyRedisLimit(redis!, rules);
}

export async function enforceAuditLeadRateLimit(
  request: NextRequest
): Promise<AuditRateLimitResult> {
  const { mode, redis } = selectMode();
  const rules = leadRulesFor(request);
  if (mode === 'memory') return applyMemoryLimit(rules);
  return applyRedisLimit(redis!, rules);
}

export async function enforceQuoteRateLimit(
  request: NextRequest
): Promise<AuditRateLimitResult> {
  const { mode, redis } = selectMode();
  const rules = quoteRulesFor(request);
  if (mode === 'memory') return applyMemoryLimit(rules);
  return applyRedisLimit(redis!, rules);
}

function pruneMemoryQuoteClaims(now: number): void {
  for (const [key, claim] of memoryQuoteClaims) {
    if (claim.expiresAt <= now) memoryQuoteClaims.delete(key);
  }
  while (memoryQuoteClaims.size >= MAX_MEMORY_QUOTE_CLAIMS) {
    const oldest = memoryQuoteClaims.keys().next().value as string | undefined;
    if (!oldest) break;
    memoryQuoteClaims.delete(oldest);
  }
}

export async function claimQuoteSubmission(
  request: NextRequest,
  fingerprint: string,
  now = Date.now()
): Promise<QuoteSubmissionClaim> {
  if (!/^[a-f0-9]{64}$/.test(fingerprint)) {
    throw new Error('Quote submission fingerprint must be a SHA-256 digest.');
  }

  const { mode, redis } = selectMode();
  const prefix = process.env.AUDIT_RATE_LIMIT_KEY_PREFIX || 'pandacodegen:audit:v1';
  const key = `${prefix}:quote:idempotency:${privateKey(
    `${clientAddress(request)}\0${fingerprint}`
  )}`;
  const claimId = randomBytes(16).toString('hex');

  if (mode === 'memory') {
    pruneMemoryQuoteClaims(now);
    const existing = memoryQuoteClaims.get(key);
    if (existing && existing.expiresAt > now) {
      return { acquired: false, backend: mode, key, claimId };
    }
    memoryQuoteClaims.set(key, {
      claimId,
      expiresAt: now + QUOTE_IDEMPOTENCY_WINDOW_MS,
    });
    return { acquired: true, backend: mode, key, claimId };
  }

  const result = await executeAuditRedisCommand(
    redis!,
    ['SET', key, claimId, 'PX', QUOTE_IDEMPOTENCY_WINDOW_MS, 'NX'],
    8_192
  );
  return { acquired: result === 'OK', backend: mode, key, claimId };
}

export async function releaseQuoteSubmission(
  claim: QuoteSubmissionClaim
): Promise<void> {
  if (!claim.acquired) return;

  const { mode, redis } = selectMode();
  if (mode === 'memory') {
    const existing = memoryQuoteClaims.get(claim.key);
    if (existing?.claimId === claim.claimId) memoryQuoteClaims.delete(claim.key);
    return;
  }

  await executeAuditRedisCommand(
    redis!,
    ['EVAL', RELEASE_QUOTE_CLAIM_SCRIPT, 1, claim.key, claim.claimId],
    8_192
  );
}

export function resetAuditRateLimitMemoryForTests(): void {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Cannot reset audit rate-limit state in production.');
  }
  memoryBuckets.clear();
  memoryQuoteClaims.clear();
}
