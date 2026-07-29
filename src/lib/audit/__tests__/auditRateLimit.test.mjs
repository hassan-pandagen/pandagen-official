import assert from 'node:assert/strict';
import test from 'node:test';
import {
  AuditRateLimitConfigurationError,
  claimQuoteSubmission,
  enforceAuditLeadRateLimit,
  enforceAuditRateLimit,
  enforceQuoteRateLimit,
  hashedAuditClientIdentifier,
  releaseQuoteSubmission,
  resetAuditRateLimitMemoryForTests,
} from '../auditRateLimit.ts';

const redisVariables = [
  'AUDIT_RATE_LIMIT_REDIS_REST_URL',
  'AUDIT_RATE_LIMIT_REDIS_REST_TOKEN',
  'KV_REST_API_URL',
  'KV_REST_API_TOKEN',
  'UPSTASH_REDIS_REST_URL',
  'UPSTASH_REDIS_REST_TOKEN',
];

function preserveEnvironment(names) {
  const before = new Map(names.map((name) => [name, process.env[name]]));
  return () => {
    for (const [name, value] of before) {
      if (value === undefined) delete process.env[name];
      else process.env[name] = value;
    }
  };
}

test('production fails closed when no durable limiter is configured', async () => {
  const names = ['NODE_ENV', 'AUDIT_RATE_LIMIT_MODE', ...redisVariables];
  const restore = preserveEnvironment(names);

  try {
    process.env.NODE_ENV = 'production';
    delete process.env.AUDIT_RATE_LIMIT_MODE;
    redisVariables.forEach((name) => delete process.env[name]);

    await assert.rejects(
      enforceAuditRateLimit(
        { headers: { get: () => null } },
        new URL('https://example.com/'),
      ),
      AuditRateLimitConfigurationError,
    );
  } finally {
    restore();
  }
});

test('production rejects an explicit in-memory limiter', async () => {
  const names = ['NODE_ENV', 'AUDIT_RATE_LIMIT_MODE', ...redisVariables];
  const restore = preserveEnvironment(names);

  try {
    process.env.NODE_ENV = 'production';
    process.env.AUDIT_RATE_LIMIT_MODE = 'memory';
    redisVariables.forEach((name) => delete process.env[name]);

    await assert.rejects(
      enforceAuditRateLimit(
        { headers: { get: () => null } },
        new URL('https://example.com/'),
      ),
      AuditRateLimitConfigurationError,
    );
  } finally {
    restore();
  }
});

test('lead limits hash client identifiers and enforce client and global budgets', async () => {
  const names = ['NODE_ENV', 'AUDIT_RATE_LIMIT_MODE', 'AUDIT_RATE_LIMIT_SECRET'];
  const restore = preserveEnvironment(names);

  try {
    process.env.NODE_ENV = 'development';
    process.env.AUDIT_RATE_LIMIT_MODE = 'memory';
    process.env.AUDIT_RATE_LIMIT_SECRET = 'test-audit-secret-that-is-long-enough';
    resetAuditRateLimitMemoryForTests();

    const clientRequest = {
      headers: new Headers({ 'x-forwarded-for': '198.51.100.10' }),
    };
    const digest = hashedAuditClientIdentifier(clientRequest);
    assert.match(digest, /^[a-f0-9]{32}$/);
    assert.equal(digest.includes('198.51.100.10'), false);

    for (let index = 0; index < 5; index += 1) {
      assert.equal((await enforceAuditLeadRateLimit(clientRequest)).allowed, true);
    }
    const clientBlocked = await enforceAuditLeadRateLimit(clientRequest);
    assert.equal(clientBlocked.allowed, false);
    assert.equal(clientBlocked.blockedBy, 'client');

    resetAuditRateLimitMemoryForTests();
    for (let index = 0; index < 100; index += 1) {
      const uniqueRequest = {
        headers: new Headers({ 'x-forwarded-for': `198.51.100.${index + 1}` }),
      };
      assert.equal((await enforceAuditLeadRateLimit(uniqueRequest)).allowed, true);
    }
    const globalBlocked = await enforceAuditLeadRateLimit({
      headers: new Headers({ 'x-forwarded-for': '203.0.113.250' }),
    });
    assert.equal(globalBlocked.allowed, false);
    assert.equal(globalBlocked.blockedBy, 'global');
  } finally {
    process.env.NODE_ENV = 'development';
    resetAuditRateLimitMemoryForTests();
    restore();
  }
});

test('production trusts only the Vercel-managed forwarding header on Vercel', () => {
  const names = ['NODE_ENV', 'VERCEL', 'AUDIT_RATE_LIMIT_SECRET'];
  const restore = preserveEnvironment(names);

  try {
    process.env.NODE_ENV = 'production';
    process.env.AUDIT_RATE_LIMIT_SECRET = 'test-audit-secret-that-is-long-enough';
    delete process.env.VERCEL;

    const firstSpoof = hashedAuditClientIdentifier({
      headers: new Headers({ 'x-forwarded-for': '198.51.100.40' }),
    });
    const secondSpoof = hashedAuditClientIdentifier({
      headers: new Headers({ 'x-forwarded-for': '198.51.100.41' }),
    });
    assert.equal(firstSpoof, secondSpoof, 'untrusted production headers share the unknown bucket');

    process.env.VERCEL = '1';
    const firstVercelClient = hashedAuditClientIdentifier({
      headers: new Headers({
        'x-vercel-forwarded-for': '198.51.100.50',
        'x-forwarded-for': '203.0.113.50',
      }),
    });
    const secondVercelClient = hashedAuditClientIdentifier({
      headers: new Headers({
        'x-vercel-forwarded-for': '198.51.100.51',
        'x-forwarded-for': '203.0.113.50',
      }),
    });
    assert.notEqual(firstVercelClient, secondVercelClient);
  } finally {
    restore();
  }
});

test('quote limits fail closed in production and enforce the development client budget', async () => {
  const names = [
    'NODE_ENV',
    'AUDIT_RATE_LIMIT_MODE',
    'AUDIT_RATE_LIMIT_SECRET',
    ...redisVariables,
  ];
  const restore = preserveEnvironment(names);
  try {
    process.env.NODE_ENV = 'production';
    delete process.env.AUDIT_RATE_LIMIT_MODE;
    delete process.env.AUDIT_RATE_LIMIT_SECRET;
    redisVariables.forEach((name) => delete process.env[name]);
    const request = { headers: new Headers({ 'x-forwarded-for': '198.51.100.20' }) };
    await assert.rejects(enforceQuoteRateLimit(request), AuditRateLimitConfigurationError);

    process.env.NODE_ENV = 'development';
    process.env.AUDIT_RATE_LIMIT_MODE = 'memory';
    process.env.AUDIT_RATE_LIMIT_SECRET = 'test-audit-secret-that-is-long-enough';
    resetAuditRateLimitMemoryForTests();
    for (let index = 0; index < 5; index += 1) {
      assert.equal((await enforceQuoteRateLimit(request)).allowed, true);
    }
    assert.equal((await enforceQuoteRateLimit(request)).allowed, false);
  } finally {
    process.env.NODE_ENV = 'development';
    resetAuditRateLimitMemoryForTests();
    restore();
  }
});

test('quote idempotency claims suppress duplicates without storing raw identifiers', async () => {
  const names = ['NODE_ENV', 'AUDIT_RATE_LIMIT_MODE', 'AUDIT_RATE_LIMIT_SECRET'];
  const restore = preserveEnvironment(names);
  try {
    process.env.NODE_ENV = 'development';
    process.env.AUDIT_RATE_LIMIT_MODE = 'memory';
    process.env.AUDIT_RATE_LIMIT_SECRET = 'test-audit-secret-that-is-long-enough';
    resetAuditRateLimitMemoryForTests();

    const request = { headers: new Headers({ 'x-forwarded-for': '198.51.100.30' }) };
    const fingerprint = 'a'.repeat(64);
    const first = await claimQuoteSubmission(request, fingerprint);
    const duplicate = await claimQuoteSubmission(request, fingerprint);
    assert.equal(first.acquired, true);
    assert.equal(duplicate.acquired, false);
    assert.equal(first.key.includes('198.51.100.30'), false);
    assert.equal(first.key.includes(fingerprint), false);

    await releaseQuoteSubmission(first);
    assert.equal((await claimQuoteSubmission(request, fingerprint)).acquired, true);
  } finally {
    process.env.NODE_ENV = 'development';
    resetAuditRateLimitMemoryForTests();
    restore();
  }
});
