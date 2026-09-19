import test from 'node:test';
import assert from 'node:assert/strict';
import { parseLeadDetails, reviewDueAt } from '../leadDetails.ts';

test('report request does not require a sales enquiry', () => {
  assert.equal(parseLeadDetails({}).action, 'report');
});
test('review requires a useful concern and bounds additional page input', () => {
  assert.throws(() => parseLeadDetails({ action: 'review' }));
  const valid = { action: 'review', concern: 'Our booking page is slow.' };
  assert.equal(parseLeadDetails(valid).concern, valid.concern);
  for (const pages of ['javascript:alert(1)', 'https://name:secret@example.com/', 'https://a.com\nhttps://b.com\nhttps://c.com']) {
    assert.throws(() => parseLeadDetails({ ...valid, pages }));
  }
  assert.throws(() => parseLeadDetails({ action: 'subscribe' }));
  assert.throws(() => parseLeadDetails({ goal: 'x'.repeat(81) }));
});
test('24 hour promise includes weekends and is stable for delivery retries', () => {
  const issued = Date.parse('2026-09-19T10:00:00Z');
  assert.equal(reviewDueAt(issued), '2026-09-20T10:00:00.000Z');
});
