/**
 * Conversion-tracking fields on the quote form (22 Oct 2026).
 *
 * submit-quote rejects any form field it does not know, so these fields had to be allowlisted
 * before any form could send them. The opposite risk matters more: a bad tracking value must
 * never turn an enquiry into a 400. So tracking is read leniently, and these assertions pin both.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readQuoteTracking, validateQuoteScalarFields } from '../quoteRequest.ts';

const EVENT_ID = '3f2b8c1e-9a4d-4e6b-8c2a-1d5e7f9a0b3c';

function form(extra = {}) {
  const data = new FormData();
  data.append('name', 'Jane Doe');
  data.append('email', 'jane@example.com');
  for (const [key, value] of Object.entries(extra)) data.append(key, value);
  return data;
}

test('the form accepts every tracking field and returns them', () => {
  const fields = validateQuoteScalarFields(form({
    leadSource: 'hero_form', eventId: EVENT_ID, fbp: 'fb.1.1.2', fbc: 'fb.1.1.AbCd', fbclid: 'AbCd',
    gclid: 'G1', gbraid: 'GB', wbraid: 'WB', utmSource: 'meta', utmMedium: 'paid', utmCampaign: 'oct',
    utmTerm: 'migration', utmContent: 'ad1', marketingConsent: '1',
  }));
  assert.equal(fields.tracking.leadSource, 'hero_form');
  assert.equal(fields.tracking.eventId, EVENT_ID);
  assert.equal(fields.tracking.fbc, 'fb.1.1.AbCd');
  assert.equal(fields.tracking.gclid, 'G1');
  assert.equal(fields.tracking.utmTerm, 'migration');
  assert.equal(fields.tracking.marketingConsent, true);
});

test('a form that sends no tracking still validates', () => {
  const fields = validateQuoteScalarFields(form());
  assert.equal(fields.tracking.eventId, '');
  assert.equal(fields.tracking.leadSource, '');
  assert.equal(fields.tracking.marketingConsent, false);
});

test('bad tracking values are dropped, never an error', () => {
  const t = readQuoteTracking(form({
    leadSource: 'not-a-source', eventId: 'not-a-uuid', fbp: 'x'.repeat(301), gclid: 'bad\u0007value', utmSource: 'ok',
  }));
  assert.equal(t.leadSource, '');
  assert.equal(t.eventId, '');
  assert.equal(t.fbp, '');
  assert.equal(t.gclid, '');
  assert.equal(t.utmSource, 'ok', 'a good value next to bad ones is kept');
});

test('a repeated tracking field is dropped, not trusted', () => {
  const data = form({ eventId: EVENT_ID });
  data.append('eventId', '00000000-0000-4000-8000-000000000000');
  assert.equal(readQuoteTracking(data).eventId, '');
});

test('marketing consent is true only for the exact value "1"', () => {
  for (const value of ['0', 'true', 'yes', '11', '']) {
    assert.equal(readQuoteTracking(form({ marketingConsent: value })).marketingConsent, false, `"${value}"`);
  }
  assert.equal(readQuoteTracking(form({ marketingConsent: '1' })).marketingConsent, true);
});

test('the event id is normalised to lower case, matching what the browser Pixel was given', () => {
  assert.equal(readQuoteTracking(form({ eventId: EVENT_ID.toUpperCase() })).eventId, EVENT_ID);
});

test('an unknown field is still refused: the allowlist was extended, not removed', () => {
  assert.throws(() => validateQuoteScalarFields(form({ somethingElse: 'x' })), /Unexpected form field/);
});
