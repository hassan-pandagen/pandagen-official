/**
 * The gate behind useSubmission (14 Nov 2026), which every lead form now uses.
 *
 * Two bugs it exists to prevent: a double click sending the lead twice (and firing two
 * conversion events), and a late answer flipping a form the visitor already closed to "sent".
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { SubmissionGate } from '../submissionGate.ts';

test('a second attempt cannot start while the first is running', () => {
  const gate = new SubmissionGate();
  const first = gate.start();
  assert.notEqual(first, null);
  assert.equal(gate.start(), null);
  assert.equal(gate.settle(first), true);
  assert.notEqual(gate.start(), null, 'after the first settles, the form can be sent again');
});

test('a failed attempt can be retried', () => {
  const gate = new SubmissionGate();
  const first = gate.start();
  gate.settle(first);
  const retry = gate.start();
  assert.notEqual(retry, null);
  assert.notEqual(retry, first);
});

test('after a reset, the old attempt cannot change the form', () => {
  const gate = new SubmissionGate();
  const old = gate.start();
  gate.reset();
  assert.equal(gate.isCurrent(old), false);
  assert.equal(gate.settle(old), false);
});

test('after a reset, a new attempt can start while the old one is still in flight', () => {
  const gate = new SubmissionGate();
  const old = gate.start();
  gate.reset();
  const fresh = gate.start();
  assert.notEqual(fresh, null);
  assert.equal(gate.settle(old), false, 'the old answer arriving now is ignored');
  assert.equal(gate.isCurrent(fresh), true);
  assert.equal(gate.start(), null, 'and the fresh attempt still blocks a double click');
  assert.equal(gate.settle(fresh), true);
});
