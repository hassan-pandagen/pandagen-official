/**
 * Website -> CRM lead hand-off (22 Oct 2026).
 *
 * The CRM rejects a request whose signature, shape or timing is off, and a rejected lead is
 * silent: the visitor sees success and the enquiry email still goes out. So these assertions
 * pin the parts that would fail without anyone noticing: the exact signing formula, the
 * "does nothing until configured" rule, and that nothing here can throw into the form route
 * or write a visitor's details to the logs.
 *
 * The signing vector was cross-checked against the CRM's own signing.ts and ingest-schema.ts
 * when this was written (payload accepted, signature verified).
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { buildIngestPayload, forwardLeadToCrm, signIngest } from '../forwardLead.ts';

const input = {
  fields: {
    name: 'Jane Doe', email: 'jane@example.com', phone: '+1 555 123 4567', service: 'Website migration',
    details: 'Move from Wix', alreadyTried: '', currentUrl: 'https://example.com', currentPlatform: 'Wix',
    primaryGoal: '', trafficBand: '', timeline: '1-2 months', budget: '$3,500', trafficSource: 'Google',
    trafficMedium: 'organic', trafficCampaign: '', landingPage: '/blog/wix-migration-cost',
    submittedFrom: '/contact', firstVisit: '2026-10-22T10:00:00.000Z', locale: 'en',
  },
  tracking: {
    leadSource: 'contact_page', eventId: '3f2b8c1e-9a4d-4e6b-8c2a-1d5e7f9a0b3c', fbp: 'fb.1.1700000000000.123',
    fbc: 'fb.1.1700000000000.AbCd', fbclid: 'AbCd', gclid: '', gbraid: '', wbraid: '', utmSource: 'meta',
    utmMedium: 'paid', utmCampaign: 'oct', utmTerm: '', utmContent: '', marketingConsent: true,
  },
  context: { origin: 'https://www.pandacodegen.com', clientIp: '203.0.113.9', userAgent: 'Mozilla/5.0', country: 'US', region: 'TX', gpc: false },
};
const env = { CRM_INGEST_URL: 'https://crm.example.test/api/ingest/lead', CRM_INGEST_SECRET: 'test-secret' };

/** Captures console.error so a test can assert what was (not) logged. */
function captureErrors(fn) {
  const lines = [];
  const original = console.error;
  console.error = (...args) => lines.push(args.join(' '));
  return fn().finally(() => { console.error = original; }).then((result) => ({ result, lines }));
}

test('signature is HMAC-SHA256 hex over "<timestamp>.<raw body>"', () => {
  const body = '{"v":1}';
  const expected = createHmac('sha256', 'secret').update('1760000000.{"v":1}').digest('hex');
  assert.equal(signIngest(body, '1760000000', 'secret'), expected);
  // Changing the timestamp must change the signature, or it could be swapped in transit.
  assert.notEqual(signIngest(body, '1760000001', 'secret'), expected);
});

test('payload maps the form to the CRM body and drops blank values', () => {
  const body = buildIngestPayload(input);
  assert.equal(body.v, 1);
  assert.equal(body.source, 'contact_page');
  assert.equal(body.event_id, input.tracking.eventId);
  assert.deepEqual(body.contact, { email: 'jane@example.com', name: 'Jane Doe', phone: '+1 555 123 4567', website: 'https://example.com' });
  assert.equal(body.attribution.event_source_url, 'https://www.pandacodegen.com/contact');
  assert.equal(body.attribution.fbc, 'fb.1.1700000000000.AbCd');
  assert.equal(body.attribution.utm_source, 'meta');
  assert.ok(!('gclid' in body.attribution), 'blank click IDs are not sent');
  assert.ok(!('primary_goal' in body.form), 'blank answers are not sent');
  assert.deepEqual(body.context, { client_ip: '203.0.113.9', user_agent: 'Mozilla/5.0', country: 'US', region: 'TX', gpc: false, marketing_consent: true });
});

test('consent and Global Privacy Control are passed through exactly as the visitor set them', () => {
  const body = buildIngestPayload({
    ...input,
    tracking: { ...input.tracking, marketingConsent: false },
    context: { ...input.context, country: '', region: '', gpc: true },
  });
  assert.equal(body.context.marketing_consent, false);
  assert.equal(body.context.gpc, true);
  assert.ok(!('country' in body.context), 'an unknown country is left out, not guessed');
});

test('a lead the CRM cannot record is not built: no email, no event id, unknown source', () => {
  assert.equal(buildIngestPayload({ ...input, fields: { ...input.fields, email: '' } }), null);
  assert.equal(buildIngestPayload({ ...input, tracking: { ...input.tracking, eventId: '' } }), null);
  assert.equal(buildIngestPayload({ ...input, tracking: { ...input.tracking, leadSource: 'audit' } }), null);
  assert.equal(buildIngestPayload({ ...input, tracking: { ...input.tracking, leadSource: '' } }), null);
});

test('does nothing, and does not call out, until both settings exist', async () => {
  let calls = 0;
  const fetchImpl = async () => { calls += 1; return new Response('{}', { status: 200 }); };
  assert.equal(await forwardLeadToCrm(input, {}, fetchImpl), 'skipped');
  assert.equal(await forwardLeadToCrm(input, { CRM_INGEST_URL: env.CRM_INGEST_URL }, fetchImpl), 'skipped');
  assert.equal(await forwardLeadToCrm(input, { CRM_INGEST_SECRET: 'x' }, fetchImpl), 'skipped');
  assert.equal(calls, 0);
});

test('sends one signed POST with the headers the CRM checks', async () => {
  const seen = [];
  const fetchImpl = async (url, init) => { seen.push({ url, init }); return new Response('{}', { status: 200 }); };
  assert.equal(await forwardLeadToCrm(input, env, fetchImpl), 'sent');
  assert.equal(seen.length, 1);
  const { url, init } = seen[0];
  assert.equal(url, env.CRM_INGEST_URL);
  assert.equal(init.method, 'POST');
  assert.equal(init.headers['content-type'], 'application/json');
  assert.match(init.headers['x-timestamp'], /^\d{10}$/, 'timestamp is epoch seconds');
  assert.equal(init.headers['x-signature'], signIngest(init.body, init.headers['x-timestamp'], env.CRM_INGEST_SECRET));
});

test('a rejected lead (4xx) is not retried; a server error is retried once with a fresh signature', async () => {
  let calls = 0;
  const reject = async () => { calls += 1; return new Response('{}', { status: 400 }); };
  const { result: rejected } = await captureErrors(() => forwardLeadToCrm(input, env, reject));
  assert.equal(rejected, 'failed');
  assert.equal(calls, 1);

  calls = 0;
  const signatures = [];
  const flaky = async (_url, init) => { calls += 1; signatures.push(init.headers['x-signature']); return new Response('{}', { status: calls === 1 ? 503 : 200 }); };
  assert.equal(await captureErrors(() => forwardLeadToCrm(input, env, flaky)).then((r) => r.result), 'sent');
  assert.equal(calls, 2);
});

test('never throws, and never writes the visitor\'s details to the log', async () => {
  const down = async () => { throw new TypeError('connection refused for jane@example.com'); };
  const { result, lines } = await captureErrors(() => forwardLeadToCrm(input, env, down));
  assert.equal(result, 'failed');
  const logged = lines.join('\n');
  assert.ok(logged.includes(input.tracking.eventId), 'logs the event id so a failure can be traced');
  for (const secret of ['jane@example.com', 'Jane Doe', '555 123 4567', '203.0.113.9', 'test-secret']) {
    assert.ok(!logged.includes(secret), `log must not contain ${secret}`);
  }
});
