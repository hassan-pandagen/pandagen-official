import assert from 'node:assert/strict';
import test from 'node:test';
import {
  assertSameOriginAuditLeadRequest,
  AuditLeadRequestError,
  readBoundedAuditLeadJson,
} from '../auditLeadRequest.ts';

function request(body, origin = 'https://www.pandacodegen.com') {
  return new Request('https://www.pandacodegen.com/api/audit/submit-lead', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      origin,
      'sec-fetch-site': origin === 'https://www.pandacodegen.com' ? 'same-origin' : 'cross-site',
    },
    body,
  });
}

test('accepts a bounded same-origin JSON submission', async () => {
  const input = request(JSON.stringify({ email: 'person@example.com' }));
  assert.doesNotThrow(() => assertSameOriginAuditLeadRequest(input));
  assert.deepEqual(
    await readBoundedAuditLeadJson(input, 2_048),
    { email: 'person@example.com' }
  );
});

test('rejects cross-origin submissions', () => {
  const input = request('{}', 'https://attacker.example');
  assert.throws(
    () => assertSameOriginAuditLeadRequest(input),
    (error) => error instanceof AuditLeadRequestError && error.status === 403
  );

  const missingFetchMetadata = request('{}');
  missingFetchMetadata.headers.delete('sec-fetch-site');
  assert.throws(
    () => assertSameOriginAuditLeadRequest(missingFetchMetadata),
    (error) => error instanceof AuditLeadRequestError && error.status === 403
  );
});

test('rejects a streamed JSON body over the byte limit', async () => {
  const input = request(JSON.stringify({ padding: 'x'.repeat(100) }));
  await assert.rejects(
    readBoundedAuditLeadJson(input, 32),
    (error) => error instanceof AuditLeadRequestError && error.status === 413
  );
});
