/**
 * The shared lead sender (14 Nov 2026).
 *
 * Five places used to post to /api/submit-quote with their own copy of the attribution and
 * tracking code. The copies drifted, and the chat's inline form ended up sending no event id,
 * so the CRM dropped every lead from it while the email still went out. Nobody noticed,
 * because a dropped CRM lead is silent. These tests make that kind of drift fail loudly.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { appendLeadContext, quoteErrorMessage } from '../leadPayload.ts';
import { LEAD_SOURCES } from '../leadSources.ts';
import { buildIngestPayload } from '../../crm/forwardLead.ts';
import { validateQuoteScalarFields } from '../quoteRequest.ts';

const attribution = { source: 'Google', medium: 'organic', campaign: 'spring', landingPage: '/blog/x', firstVisit: '2026-11-14T00:00:00.000Z' };

test('every lead gets attribution, the sending page, the fill time and the language', () => {
  const form = new FormData();
  appendLeadContext(form, { attribution, submittedFrom: '/contact', formLoadedAt: 1234, locale: 'de' });
  assert.equal(form.get('_t'), '1234');
  assert.equal(form.get('trafficSource'), 'Google');
  assert.equal(form.get('trafficMedium'), 'organic');
  assert.equal(form.get('trafficCampaign'), 'spring');
  assert.equal(form.get('landingPage'), '/blog/x');
  assert.equal(form.get('submittedFrom'), '/contact');
  assert.equal(form.get('locale'), 'de');
  assert.equal(form.get('firstVisit'), '2026-11-14T00:00:00.000Z');
});

test('empty values are left out rather than sent blank', () => {
  const form = new FormData();
  appendLeadContext(form, { attribution: { source: 'Direct', medium: 'none', campaign: 'none' }, submittedFrom: '/', formLoadedAt: 0 });
  for (const key of ['_t', 'trafficCampaign', 'landingPage', 'locale', 'firstVisit']) assert.equal(form.get(key), null, key);
});

test('the route still accepts what the sender adds', () => {
  const form = new FormData();
  form.set('name', 'Jane Doe');
  form.set('email', 'jane@example.com');
  appendLeadContext(form, { attribution, submittedFrom: '/contact', formLoadedAt: Date.now() - 30_000, locale: 'fr' });
  const fields = validateQuoteScalarFields(form);
  assert.equal(fields.locale, 'fr');
  assert.equal(fields.trafficSource, 'Google');
});

test('the route message is shown when there is one, otherwise the fallback', async () => {
  const json = (body) => new Response(JSON.stringify(body), { status: 400, headers: { 'content-type': 'application/json' } });
  assert.equal(await quoteErrorMessage(json({ error: 'Invalid email.' }), 'fallback'), 'Invalid email.');
  assert.equal(await quoteErrorMessage(json({ error: '  ' }), 'fallback'), 'fallback');
  assert.equal(await quoteErrorMessage(new Response('<html>502</html>', { status: 502 }), 'fallback'), 'fallback');
});

test('the CRM accepts a lead from every source a form can send', () => {
  for (const leadSource of LEAD_SOURCES) {
    const payload = buildIngestPayload({
      fields: { name: 'Jane', email: 'jane@example.com', phone: '', service: '', details: '', alreadyTried: '', currentUrl: '', currentPlatform: '', primaryGoal: '', trafficBand: '', timeline: '', budget: '', trafficSource: '', trafficMedium: '', trafficCampaign: '', landingPage: '', submittedFrom: '/', firstVisit: '', locale: '' },
      tracking: { leadSource, eventId: '3f2b8c1e-9a4d-4e6b-8c2a-1d5e7f9a0b3c', fbp: '', fbc: '', fbclid: '', gclid: '', gbraid: '', wbraid: '', utmSource: '', utmMedium: '', utmCampaign: '', utmTerm: '', utmContent: '', marketingConsent: false },
      context: { origin: 'https://www.pandacodegen.com', clientIp: '', userAgent: '', country: '', region: '', gpc: false },
    });
    assert.ok(payload, leadSource);
    assert.equal(payload.source, leadSource);
  }
});

test('only the shared sender posts to /api/submit-quote', () => {
  const sender = path.normalize('src/lib/forms/submitQuoteLead.ts');
  const offenders = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== '__tests__' && entry.name !== 'api') walk(file);
      } else if (/\.(ts|tsx)$/.test(entry.name) && file !== sender && /["'`]\/api\/submit-quote/.test(fs.readFileSync(file, 'utf8'))) {
        offenders.push(file);
      }
    }
  };
  walk('src');
  assert.deepEqual(offenders, [], 'post leads with submitQuoteLead() so they carry tracking and reach the CRM');
});
