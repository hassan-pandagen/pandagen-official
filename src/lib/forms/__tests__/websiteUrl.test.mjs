/**
 * The website field accepts what a person actually types.
 *
 * Found 29 Aug 2026: the hero form's "your website (optional)" field carried
 * type="url", so the browser blocked submission on "www.testing.com", and the
 * server would have rejected it too. An optional field that stops the form is
 * worse than no field, and a bare domain is what a non-technical owner types.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeWebsiteUrl } from '../quoteRequest.ts';

test('a bare domain becomes https', () => {
  assert.equal(normalizeWebsiteUrl('example.com'), 'https://example.com');
});

test('a www host becomes https, which is the case that was failing', () => {
  assert.equal(normalizeWebsiteUrl('www.testing.com'), 'https://www.testing.com');
});

test('an existing https scheme is left alone', () => {
  assert.equal(normalizeWebsiteUrl('https://example.com/path'), 'https://example.com/path');
});

test('an existing http scheme is left alone rather than upgraded', () => {
  // Upgrading here would misreport what the visitor told us their site is.
  assert.equal(normalizeWebsiteUrl('http://example.com'), 'http://example.com');
});

test('surrounding whitespace from a paste is trimmed', () => {
  assert.equal(normalizeWebsiteUrl('  example.com  '), 'https://example.com');
});

test('empty stays empty, because the field is optional', () => {
  assert.equal(normalizeWebsiteUrl(''), '');
  assert.equal(normalizeWebsiteUrl('   '), '');
});

test('a non-http scheme is passed through unchanged for validation to reject', () => {
  // Must NOT become https://javascript:alert(1)
  assert.equal(normalizeWebsiteUrl('javascript:alert(1)'), 'javascript:alert(1)');
  assert.equal(normalizeWebsiteUrl('ftp://example.com'), 'ftp://example.com');
});

test('a path-only string still gets a scheme and fails validation on the host', () => {
  assert.equal(normalizeWebsiteUrl('/just/a/path'), 'https:///just/a/path');
});
