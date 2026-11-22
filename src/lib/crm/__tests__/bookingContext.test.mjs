/**
 * Booked-call context (22 Nov 2026). The CRM trusts a booking's consent and country only when
 * this signature verifies, so a drift between the two sides would silently drop every booking
 * from Meta. The fixed vector below is checked by the CRM's booking-context.test.ts too.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { canonicalBookingContext, signBookingContext } from '../bookingContext.ts';

const input = {
  clientIp: '203.0.113.7', userAgent: 'Mozilla/5.0\n(Test)', country: 'US', region: 'WA', gpc: false,
  marketingConsent: false, origin: 'https://www.pandacodegen.com', fbc: '', fbp: '', fbclid: 'abc123',
  gclid: '', gbraid: '', wbraid: '', utmSource: 'facebook', utmMedium: 'paid', utmCampaign: 'asam',
  utmTerm: '', utmContent: '', landingPage: '/work/a-step-above-medical',
  firstVisit: '2026-11-22T10:00:00.000Z', submittedFrom: '/work/a-step-above-medical',
};
const now = new Date('2026-11-22T10:05:00Z');

test('signs every pcg_ value with HMAC-SHA256 over the sorted key=value lines', () => {
  const m = signBookingContext(input, 'test-secret', now);
  const expected = createHmac('sha256', 'test-secret').update(canonicalBookingContext(m)).digest('hex');
  assert.equal(m.pcg_sig, expected);
  assert.equal(m.pcg_sig, 'a22d780f339da83d1a0e6272ac2b3c388caf4b6085378023f09fd2ffc25246c0');
});

test('leaves out blanks, strips control characters and builds the source URL', () => {
  const m = signBookingContext(input, 'test-secret', now);
  assert.equal(m.pcg_fbp, undefined);
  assert.equal(m.pcg_ua, 'Mozilla/5.0(Test)');
  assert.equal(m.pcg_consent, '0');
  assert.equal(m.pcg_iat, '1795341900');
  assert.equal(m.pcg_source_url, 'https://www.pandacodegen.com/work/a-step-above-medical');
});

test('respects cal.com metadata limits: keys up to 40 characters, values up to 500, under 50 keys', () => {
  const m = signBookingContext({ ...input, userAgent: 'x'.repeat(900) }, 'test-secret', now);
  assert.ok(Object.keys(m).length < 50);
  for (const [key, value] of Object.entries(m)) {
    assert.ok(key.length <= 40, key);
    assert.ok(value.length <= 500, key);
  }
});

test('a changed value no longer matches the signature', () => {
  const m = signBookingContext(input, 'test-secret', now);
  const forged = { ...m, pcg_consent: '1' };
  const sig = createHmac('sha256', 'test-secret').update(canonicalBookingContext(forged)).digest('hex');
  assert.notEqual(sig, m.pcg_sig);
});
