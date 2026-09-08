/**
 * The submit-quote timing filter.
 *
 * Written 28 Aug 2026, when `_t` turned out to have been parsed and discarded
 * since the forms were built. The behaviour that matters most here is the
 * FAIL-OPEN direction: a rejected bot costs nothing, a rejected customer is
 * never told why and never comes back. Every ambiguous case must pass.
 *
 * These assertions are the contract. If a future change makes any "allows"
 * case reject, that is a lost enquiry, not a tightened filter.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { isQuoteFilledTooFast, MIN_QUOTE_FILL_MS } from '../quoteRequest.ts';

const NOW = 1_756_000_000_000;

test('rejects a submission posted instantly', () => {
  assert.equal(isQuoteFilledTooFast(NOW, NOW), true);
});

test('rejects a submission a hair under the floor', () => {
  assert.equal(isQuoteFilledTooFast(NOW - (MIN_QUOTE_FILL_MS - 1), NOW), true);
});

test('allows a submission exactly at the floor', () => {
  assert.equal(isQuoteFilledTooFast(NOW - MIN_QUOTE_FILL_MS, NOW), false);
});

test('allows an unhurried human', () => {
  assert.equal(isQuoteFilledTooFast(NOW - 45_000, NOW), false);
});

test('allows a form with no stamp at all', () => {
  // The audit email gate and any future form that omits `_t`. Absence of a
  // signal must never be read as a bad signal.
  assert.equal(isQuoteFilledTooFast(null, NOW), false);
});

test('allows a stamp from the future rather than treating skew as fraud', () => {
  // Client clocks are wrong all the time. A negative elapsed is unreadable, so
  // it has to pass.
  assert.equal(isQuoteFilledTooFast(NOW + 60_000, NOW), false);
});

test('allows a stale tab left open for a day', () => {
  assert.equal(isQuoteFilledTooFast(NOW - 86_400_000, NOW), false);
});
