import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import ts from 'typescript';
import { parseLeadDetails, reviewDueAt } from '../leadDetails.ts';
import { platformAdvice } from '../advice.ts';

const require = createRequire(import.meta.url);
const compiled = ts.transpileModule(readFileSync(new URL('../../../app/api/audit/submit-lead/route.ts', import.meta.url), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

function harness({ failAt, tokenAction = 'report' } = {}) {
  const sent = [];
  let restored = 0;
  class TokenError extends Error {}
  class RateError extends Error {}
  class RequestError extends Error { constructor(status, message) { super(message); this.status = status; } }
  const record = { action: tokenAction, issuedAt: Date.parse('2026-09-19T10:00:00Z'), url: 'https://example.com', auditData: {
    performanceScore: null, seoScore: null, accessibilityScore: null, bestPracticesScore: null,
    fcp: null, lcp: null, cls: null, tbt: null, topIssues: [], criticalIssues: 0, warnings: 0,
    deepChecks: { checks: [{ name: 'Title', status: 'warn', score: 50, findings: ['Missing title'], fix: 'Review title' }] },
  } };
  const mocks = {
    'next/server': { NextResponse: { json: (body, options) => ({ body, status: options.status }) } },
    resend: { Resend: class { emails = { send: async (payload, options) => { sent.push({ payload, options }); return { error: sent.length === failAt ? { name: 'test_failure' } : null }; } }; } },
    '@/lib/audit/leadDetails': { parseLeadDetails, reviewDueAt },
    '@/lib/audit/advice': { platformAdvice },
    '@/lib/audit/requestMetadata': { readVercelApproximateGeo: () => ({ country: '', city: '', region: '' }) },
    '@/lib/audit/auditLeadToken': { AuditLeadTokenError: TokenError, consumeAuditLeadToken: async () => record, restoreAuditLeadToken: async () => { restored++; } },
    '@/lib/audit/auditRateLimit': { AuditRateLimitConfigurationError: RateError, enforceAuditLeadRateLimit: async () => ({ allowed: true }) },
    '@/lib/audit/auditLeadRequest': { AuditLeadRequestError: RequestError, assertSameOriginAuditLeadRequest: () => {}, readBoundedAuditLeadJson: async request => request.body },
  };
  const testModule = { exports: {} };
  vm.runInNewContext(compiled, { exports: testModule.exports, module: testModule, require: name => mocks[name] ?? require(name),
    process: { env: { RESEND_API_KEY: 'mock-only', RESEND_FROM_EMAIL: 'test@example.com', AUDIT_NOTIFY_EMAIL: 'owner@example.com' } }, Headers, console });
  return { sent, restored: () => restored, submit: (body = {}) => testModule.exports.POST({ body: { email: 'buyer@example.com', leadToken: 'test-token', ...body }, headers: new Headers() }) };
}

test('Resend records report lead before delivering complete report; no live mail', async () => {
  const h = harness();
  assert.equal((await h.submit()).status, 200);
  assert.equal(h.sent[0].payload.to, 'owner@example.com');
  assert.match(h.sent[1].payload.text, /Missing title/);
  assert.match(h.sent[1].payload.text, /Review title/);
  assert.notEqual(h.sent[0].options.idempotencyKey, h.sent[1].options.idempotencyKey);
});
test('owner delivery failure does not acknowledge a review or email the customer', async () => {
  const h = harness({ failAt: 1, tokenAction: 'review' });
  assert.equal((await h.submit({ action: 'review', concern: 'Our bookings are slow.' })).status, 502);
  assert.equal(h.sent.length, 1);
  assert.equal(h.restored(), 1);
});
test('confirmation failure restores session and retries use stable payload and keys', async () => {
  const h = harness({ failAt: 2 });
  assert.equal((await h.submit()).status, 502);
  assert.equal(h.restored(), 1);
  assert.equal((await h.submit()).status, 200);
  assert.deepEqual(h.sent[0], h.sent[2]);
  assert.deepEqual(h.sent[1], h.sent[3]);
});
test('review token cannot be repurposed as report token', async () => {
  const h = harness({ tokenAction: 'review' });
  assert.equal((await h.submit()).status, 400);
  assert.equal(h.sent.length, 0);
});
test('accepted founder request carries its promised due date to both parties', async () => {
  const h = harness({ tokenAction: 'review' });
  const result = await h.submit({ action: 'review', concern: 'Our bookings are slow.' });
  assert.equal(result.status, 200);
  assert.equal(result.body.dueAt, '2026-09-20T10:00:00.000Z');
  assert.match(h.sent[0].payload.subject, /FOUNDER REVIEW/);
  assert.match(h.sent[1].payload.text, /20 Sep 2026/);
});
