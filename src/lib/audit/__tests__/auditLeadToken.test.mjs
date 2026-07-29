import assert from 'node:assert/strict';
import test from 'node:test';
import {
  AUDIT_LEAD_TOKEN_TTL_MS,
  AuditLeadTokenError,
  consumeAuditLeadToken,
  issueAuditLeadToken,
  resetAuditLeadTokenMemoryForTests,
  restoreAuditLeadToken,
} from '../auditLeadToken.ts';
import { AuditRateLimitConfigurationError } from '../auditRateLimit.ts';

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

function useDevelopmentMemory() {
  process.env.NODE_ENV = 'development';
  process.env.AUDIT_RATE_LIMIT_MODE = 'memory';
  process.env.AUDIT_RATE_LIMIT_SECRET = 'test-audit-secret-that-is-long-enough';
  resetAuditLeadTokenMemoryForTests();
}

function auditResult() {
  return {
    performanceScore: 91,
    seoScore: 95,
    accessibilityScore: 93,
    bestPracticesScore: 90,
    pageSize: '120 KB',
    fcp: 900,
    lcp: 1500,
    cls: 0.01,
    tbt: 20,
    speedIndex: 1100,
    platformDetected: 'Custom / Unknown',
    criticalIssues: 0,
    warnings: 1,
    passedChecks: 10,
    topIssues: [],
  };
}

test('opaque lead tokens recover only the server-issued audit result once', async () => {
  const names = ['NODE_ENV', 'AUDIT_RATE_LIMIT_MODE', 'AUDIT_RATE_LIMIT_SECRET'];
  const restoreEnvironment = preserveEnvironment(names);
  try {
    useDevelopmentMemory();
    const token = await issueAuditLeadToken('https://example.com/', auditResult());
    assert.match(token, /^[A-Za-z0-9_-]{43}$/);

    const record = await consumeAuditLeadToken(token);
    assert.equal(record.url, 'https://example.com/');
    assert.equal(record.auditData.performanceScore, 91);
    await assert.rejects(
      consumeAuditLeadToken(token),
      (error) => error instanceof AuditLeadTokenError && error.code === 'EXPIRED_OR_USED'
    );
  } finally {
    resetAuditLeadTokenMemoryForTests();
    restoreEnvironment();
  }
});

test('tampered and unknown lead tokens are rejected', async () => {
  const names = ['NODE_ENV', 'AUDIT_RATE_LIMIT_MODE', 'AUDIT_RATE_LIMIT_SECRET'];
  const restoreEnvironment = preserveEnvironment(names);
  try {
    useDevelopmentMemory();
    const token = await issueAuditLeadToken('https://example.com/', auditResult());
    const tampered = `${token[0] === 'A' ? 'B' : 'A'}${token.slice(1)}`;

    await assert.rejects(
      consumeAuditLeadToken(tampered),
      (error) => error instanceof AuditLeadTokenError && error.code === 'EXPIRED_OR_USED'
    );
    await assert.rejects(
      consumeAuditLeadToken('A'.repeat(43)),
      (error) => error instanceof AuditLeadTokenError && error.code === 'EXPIRED_OR_USED'
    );
  } finally {
    resetAuditLeadTokenMemoryForTests();
    restoreEnvironment();
  }
});

test('expired tokens are rejected and consumed', async () => {
  const names = ['NODE_ENV', 'AUDIT_RATE_LIMIT_MODE', 'AUDIT_RATE_LIMIT_SECRET'];
  const restoreEnvironment = preserveEnvironment(names);
  try {
    useDevelopmentMemory();
    const issuedAt = Date.now();
    const token = await issueAuditLeadToken('https://example.com/', auditResult(), issuedAt);
    await assert.rejects(
      consumeAuditLeadToken(token, issuedAt + AUDIT_LEAD_TOKEN_TTL_MS + 1),
      (error) => error instanceof AuditLeadTokenError && error.code === 'EXPIRED_OR_USED'
    );
  } finally {
    resetAuditLeadTokenMemoryForTests();
    restoreEnvironment();
  }
});

test('a claimed token can be restored after a delivery failure', async () => {
  const names = ['NODE_ENV', 'AUDIT_RATE_LIMIT_MODE', 'AUDIT_RATE_LIMIT_SECRET'];
  const restoreEnvironment = preserveEnvironment(names);
  try {
    useDevelopmentMemory();
    const token = await issueAuditLeadToken('https://example.com/', auditResult());
    const record = await consumeAuditLeadToken(token);
    await restoreAuditLeadToken(token, record);
    assert.equal((await consumeAuditLeadToken(token)).url, 'https://example.com/');
  } finally {
    resetAuditLeadTokenMemoryForTests();
    restoreEnvironment();
  }
});

test('production token issuance fails closed without Redis and a secret', async () => {
  const names = [
    'NODE_ENV',
    'AUDIT_RATE_LIMIT_MODE',
    'AUDIT_RATE_LIMIT_SECRET',
    ...redisVariables,
  ];
  const restoreEnvironment = preserveEnvironment(names);
  try {
    process.env.NODE_ENV = 'production';
    delete process.env.AUDIT_RATE_LIMIT_MODE;
    delete process.env.AUDIT_RATE_LIMIT_SECRET;
    redisVariables.forEach((name) => delete process.env[name]);

    await assert.rejects(
      issueAuditLeadToken('https://example.com/', auditResult()),
      AuditRateLimitConfigurationError
    );
  } finally {
    process.env.NODE_ENV = 'development';
    resetAuditLeadTokenMemoryForTests();
    restoreEnvironment();
  }
});

test('production token issuance also fails closed when Redis exists but the hashing secret is absent', async () => {
  const names = [
    'NODE_ENV',
    'AUDIT_RATE_LIMIT_MODE',
    'AUDIT_RATE_LIMIT_SECRET',
    ...redisVariables,
  ];
  const restoreEnvironment = preserveEnvironment(names);
  try {
    process.env.NODE_ENV = 'production';
    process.env.AUDIT_RATE_LIMIT_MODE = 'redis';
    process.env.AUDIT_RATE_LIMIT_REDIS_REST_URL = 'https://redis.example';
    process.env.AUDIT_RATE_LIMIT_REDIS_REST_TOKEN = 'redis-token';
    delete process.env.AUDIT_RATE_LIMIT_SECRET;

    await assert.rejects(
      issueAuditLeadToken('https://example.com/', auditResult()),
      AuditRateLimitConfigurationError
    );
  } finally {
    process.env.NODE_ENV = 'development';
    resetAuditLeadTokenMemoryForTests();
    restoreEnvironment();
  }
});

test('Redis-backed tokens use atomic consume semantics', async () => {
  const names = [
    'NODE_ENV',
    'AUDIT_RATE_LIMIT_MODE',
    'AUDIT_RATE_LIMIT_SECRET',
    ...redisVariables,
  ];
  const restoreEnvironment = preserveEnvironment(names);
  const originalFetch = globalThis.fetch;
  const stored = new Map();

  try {
    process.env.NODE_ENV = 'production';
    process.env.AUDIT_RATE_LIMIT_MODE = 'redis';
    process.env.AUDIT_RATE_LIMIT_REDIS_REST_URL = 'https://redis.example';
    process.env.AUDIT_RATE_LIMIT_REDIS_REST_TOKEN = 'redis-token';
    process.env.AUDIT_RATE_LIMIT_SECRET = 'production-test-secret-that-is-long';

    globalThis.fetch = async (_url, options) => {
      const command = JSON.parse(options.body);
      let result = null;
      if (command[0] === 'SET') {
        const [, key, value] = command;
        if (!stored.has(key)) {
          stored.set(key, value);
          result = 'OK';
        }
      } else if (command[0] === 'EVAL') {
        const key = command[3];
        result = stored.get(key) ?? null;
        stored.delete(key);
      }
      return new Response(JSON.stringify({ result }), {
        headers: { 'content-type': 'application/json' },
      });
    };

    const token = await issueAuditLeadToken('https://example.com/', auditResult());
    assert.equal((await consumeAuditLeadToken(token)).auditData.performanceScore, 91);
    await assert.rejects(
      consumeAuditLeadToken(token),
      (error) => error instanceof AuditLeadTokenError && error.code === 'EXPIRED_OR_USED'
    );
  } finally {
    globalThis.fetch = originalFetch;
    process.env.NODE_ENV = 'development';
    resetAuditLeadTokenMemoryForTests();
    restoreEnvironment();
  }
});
