import assert from 'node:assert/strict';
import test from 'node:test';
import {
  assertSameOriginQuoteRequest,
  QuoteRequestError,
  readBoundedQuoteFormData,
  validateQuoteScalarFields,
} from '../../forms/quoteRequest.ts';

function quoteForm(overrides = {}) {
  const form = new FormData();
  form.set('name', 'Ada Lovelace');
  form.set('email', 'ada@example.com');
  form.set('details', 'Migration planning');
  for (const [key, value] of Object.entries(overrides)) form.set(key, value);
  return form;
}

function quoteRequest(form, origin = 'https://www.pandacodegen.com') {
  return new Request('https://www.pandacodegen.com/api/submit-quote', {
    method: 'POST',
    headers: {
      origin,
      'sec-fetch-site': origin === 'https://www.pandacodegen.com' ? 'same-origin' : 'cross-site',
    },
    body: form,
  });
}

test('parses a bounded multipart quote and keeps phone and timing optional', async () => {
  const request = quoteRequest(quoteForm({
    service: 'WordPress Migration',
    currentUrl: 'https://example.com/',
    currentPlatform: 'WordPress',
    primaryGoal: 'SEO-safe migration',
    trafficBand: '1,000–10,000',
    timeline: '1–3 months',
    budget: '$3,500–$7,500',
  }));
  assert.doesNotThrow(() => assertSameOriginQuoteRequest(request));
  const form = await readBoundedQuoteFormData(request);
  const fields = validateQuoteScalarFields(form);
  assert.equal(fields.name, 'Ada Lovelace');
  assert.equal(fields.phone, '');
  assert.equal(fields.service, 'WordPress Migration');
  assert.equal(fields.formLoadedAt, null);
  assert.equal(fields.currentPlatform, 'WordPress');
  assert.equal(fields.primaryGoal, 'SEO-safe migration');
});

test('rejects cross-origin quote submissions', () => {
  const request = quoteRequest(quoteForm(), 'https://attacker.example');
  assert.throws(
    () => assertSameOriginQuoteRequest(request),
    (error) => error instanceof QuoteRequestError && error.status === 403
  );

  const missingFetchMetadata = quoteRequest(quoteForm());
  missingFetchMetadata.headers.delete('sec-fetch-site');
  assert.throws(
    () => assertSameOriginQuoteRequest(missingFetchMetadata),
    (error) => error instanceof QuoteRequestError && error.status === 403
  );
});

test('rejects multipart bodies over the streamed byte limit', async () => {
  const request = new Request('https://www.pandacodegen.com/api/submit-quote', {
    method: 'POST',
    headers: {
      origin: 'https://www.pandacodegen.com',
      'sec-fetch-site': 'same-origin',
      'content-type': 'multipart/form-data; boundary=test-boundary',
    },
    body: new Uint8Array(1_000),
  });
  await assert.rejects(
    readBoundedQuoteFormData(request, 256),
    (error) => error instanceof QuoteRequestError && error.status === 413
  );
});

test('rejects unexpected services, duplicate scalars, and oversized text', () => {
  const invalidService = quoteForm({ service: 'Invented Service' });
  assert.throws(
    () => validateQuoteScalarFields(invalidService),
    (error) => error instanceof QuoteRequestError && error.status === 400
  );

  const duplicateEmail = quoteForm();
  duplicateEmail.append('email', 'other@example.com');
  assert.throws(
    () => validateQuoteScalarFields(duplicateEmail),
    (error) => error instanceof QuoteRequestError && error.status === 400
  );

  const oversizedName = quoteForm({ name: 'x'.repeat(101) });
  assert.throws(
    () => validateQuoteScalarFields(oversizedName),
    (error) => error instanceof QuoteRequestError && error.status === 400
  );
});

test('rejects files and invalid qualifier values', () => {
  const withFile = quoteForm();
  withFile.set('file', new File(['hello'], 'brief.txt', { type: 'text/plain' }));
  assert.throws(
    () => validateQuoteScalarFields(withFile),
    (error) => error instanceof QuoteRequestError
      && error.status === 400
      && /File uploads are not accepted/.test(error.message)
  );

  const invalidBudget = quoteForm({ budget: '$1' });
  assert.throws(
    () => validateQuoteScalarFields(invalidBudget),
    (error) => error instanceof QuoteRequestError && error.status === 400
  );

  const credentialedUrl = quoteForm({ currentUrl: 'https://user:pass@example.com/' });
  assert.throws(
    () => validateQuoteScalarFields(credentialedUrl),
    (error) => error instanceof QuoteRequestError && error.status === 400
  );
});

test('accepts timing as non-authoritative telemetry but rejects malformed timing', () => {
  const timed = validateQuoteScalarFields(quoteForm({ _t: String(Date.now() - 50) }));
  assert.equal(typeof timed.formLoadedAt, 'number');

  assert.throws(
    () => validateQuoteScalarFields(quoteForm({ _t: 'yesterday' })),
    (error) => error instanceof QuoteRequestError && error.status === 400
  );
});
