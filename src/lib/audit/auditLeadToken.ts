import { randomBytes } from 'node:crypto';
import type { PageSpeedResult } from './pagespeed';
import {
  AuditRateLimitConfigurationError,
  executeAuditRedisCommand,
  getAuditBackend,
  hashAuditIdentifier,
// @ts-expect-error -- Node's strip-only test runner requires the explicit
// extension; the application is type-checked with noEmit and bundled by Next.
} from './auditRateLimit.ts';

const TOKEN_TTL_MS = 30 * 60 * 1_000;
const MAX_MEMORY_TOKENS = 1_000;
const MAX_RECORD_BYTES = 256 * 1024;
const TOKEN_PATTERN = /^[A-Za-z0-9_-]{43}$/;
const CONSUME_SCRIPT = `
local value = redis.call('GET', KEYS[1])
if value then redis.call('DEL', KEYS[1]) end
return value
`.trim();

export interface AuditLeadRecord {
  version: 1;
  url: string;
  auditData: PageSpeedResult;
  issuedAt: number;
  expiresAt: number;
}

interface MemoryToken {
  serialized: string;
  expiresAt: number;
}

export class AuditLeadTokenError extends Error {
  public readonly code: 'INVALID' | 'EXPIRED_OR_USED';

  constructor(code: 'INVALID' | 'EXPIRED_OR_USED', message: string) {
    super(message);
    this.name = 'AuditLeadTokenError';
    this.code = code;
  }
}

const memoryTokens = new Map<string, MemoryToken>();

function tokenKey(token: string): string {
  const prefix = process.env.AUDIT_RATE_LIMIT_KEY_PREFIX || 'pandacodegen:audit:v1';
  return `${prefix}:lead-token:${hashAuditIdentifier(token)}`;
}

function pruneMemoryTokens(now: number): void {
  for (const [key, value] of memoryTokens) {
    if (value.expiresAt <= now) memoryTokens.delete(key);
  }
  while (memoryTokens.size >= MAX_MEMORY_TOKENS) {
    const oldest = memoryTokens.keys().next().value as string | undefined;
    if (!oldest) break;
    memoryTokens.delete(oldest);
  }
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function isPageSpeedResult(value: unknown): value is PageSpeedResult {
  if (!value || typeof value !== 'object') return false;
  const data = value as Partial<PageSpeedResult>;
  return [
    data.performanceScore,
    data.seoScore,
    data.accessibilityScore,
    data.bestPracticesScore,
    data.fcp,
    data.lcp,
    data.cls,
    data.tbt,
    data.speedIndex,
    data.criticalIssues,
    data.warnings,
    data.passedChecks,
  ].every(isFiniteNumber)
    && typeof data.pageSize === 'string'
    && typeof data.platformDetected === 'string'
    && Array.isArray(data.topIssues)
    && (data.deepChecks === undefined
      || (!!data.deepChecks && Array.isArray(data.deepChecks.checks)));
}

function parseRecord(serialized: string, now: number): AuditLeadRecord {
  let value: unknown;
  try {
    value = JSON.parse(serialized);
  } catch {
    throw new AuditLeadTokenError('INVALID', 'The audit session is invalid.');
  }

  if (!value || typeof value !== 'object') {
    throw new AuditLeadTokenError('INVALID', 'The audit session is invalid.');
  }
  const record = value as Partial<AuditLeadRecord>;
  if (
    record.version !== 1
    || typeof record.url !== 'string'
    || record.url.length > 2_048
    || !isPageSpeedResult(record.auditData)
    || !isFiniteNumber(record.issuedAt)
    || !isFiniteNumber(record.expiresAt)
  ) {
    throw new AuditLeadTokenError('INVALID', 'The audit session is invalid.');
  }
  if (record.expiresAt <= now) {
    throw new AuditLeadTokenError('EXPIRED_OR_USED', 'The audit session has expired.');
  }
  return record as AuditLeadRecord;
}

export async function issueAuditLeadToken(
  url: string,
  auditData: PageSpeedResult,
  now = Date.now()
): Promise<string> {
  const backend = getAuditBackend();
  const token = randomBytes(32).toString('base64url');
  const record: AuditLeadRecord = {
    version: 1,
    url,
    auditData,
    issuedAt: now,
    expiresAt: now + TOKEN_TTL_MS,
  };
  const serialized = JSON.stringify(record);
  if (Buffer.byteLength(serialized, 'utf8') > MAX_RECORD_BYTES) {
    throw new AuditRateLimitConfigurationError('The audit result is too large to persist safely.');
  }

  const key = tokenKey(token);
  if (backend.mode === 'memory') {
    pruneMemoryTokens(now);
    memoryTokens.set(key, { serialized, expiresAt: record.expiresAt });
    return token;
  }

  const result = await executeAuditRedisCommand(
    backend.redis!,
    ['SET', key, serialized, 'PX', TOKEN_TTL_MS, 'NX'],
    8_192
  );
  if (result !== 'OK') {
    throw new AuditRateLimitConfigurationError('The audit result could not be persisted.');
  }
  return token;
}

export async function consumeAuditLeadToken(
  token: string,
  now = Date.now()
): Promise<AuditLeadRecord> {
  if (!TOKEN_PATTERN.test(token)) {
    throw new AuditLeadTokenError('INVALID', 'The audit session is invalid.');
  }

  const backend = getAuditBackend();
  const key = tokenKey(token);
  let serialized: string | null = null;

  if (backend.mode === 'memory') {
    const stored = memoryTokens.get(key);
    memoryTokens.delete(key);
    serialized = stored?.serialized ?? null;
  } else {
    const result = await executeAuditRedisCommand(
      backend.redis!,
      ['EVAL', CONSUME_SCRIPT, 1, key],
      MAX_RECORD_BYTES + 8_192
    );
    serialized = typeof result === 'string' ? result : null;
  }

  if (!serialized) {
    throw new AuditLeadTokenError(
      'EXPIRED_OR_USED',
      'The audit session has expired or was already used.'
    );
  }
  return parseRecord(serialized, now);
}

export async function restoreAuditLeadToken(
  token: string,
  record: AuditLeadRecord,
  now = Date.now()
): Promise<void> {
  if (!TOKEN_PATTERN.test(token) || record.expiresAt <= now) return;

  const backend = getAuditBackend();
  const key = tokenKey(token);
  const serialized = JSON.stringify(record);
  const remainingMs = Math.max(1, record.expiresAt - now);

  if (backend.mode === 'memory') {
    pruneMemoryTokens(now);
    if (!memoryTokens.has(key)) {
      memoryTokens.set(key, { serialized, expiresAt: record.expiresAt });
    }
    return;
  }

  await executeAuditRedisCommand(
    backend.redis!,
    ['SET', key, serialized, 'PX', remainingMs, 'NX'],
    8_192
  );
}

export function resetAuditLeadTokenMemoryForTests(): void {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Cannot reset audit lead-token state in production.');
  }
  memoryTokens.clear();
}

export const AUDIT_LEAD_TOKEN_TTL_MS = TOKEN_TTL_MS;
