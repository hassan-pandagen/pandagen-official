import assert from 'node:assert/strict';
import test from 'node:test';
import {
  assertPublicUrl,
  isPublicIpAddress,
  normalizePublicUrl,
  PublicFetchError,
} from '../publicFetch.ts';

test('accepts ordinary public IPv4 and IPv6 addresses', () => {
  assert.equal(isPublicIpAddress('8.8.8.8'), true);
  assert.equal(isPublicIpAddress('2606:4700:4700::1111'), true);
  assert.equal(isPublicIpAddress('::ffff:8.8.8.8'), true);
});

test('blocks private, loopback, link-local, documentation, and mapped addresses', () => {
  for (const address of [
    '0.0.0.0',
    '10.1.2.3',
    '100.64.0.1',
    '127.0.0.1',
    '169.254.169.254',
    '172.16.0.1',
    '192.168.1.1',
    '198.51.100.4',
    '203.0.113.8',
    '::1',
    'fc00::1',
    'fe80::1',
    '2001:db8::1',
    '::ffff:127.0.0.1',
    '::ffff:7f00:1',
  ]) {
    assert.equal(isPublicIpAddress(address), false, address);
  }
});

test('rejects credentials, non-web schemes, local names, and non-web ports', () => {
  const rejected = [
    'file:///etc/passwd',
    'ftp://example.com/file',
    'https://user:password@example.com/',
    'http://localhost/',
    'http://service.internal/',
    'http://example.com:22/',
    'http://127.0.0.1/',
    'http://[::1]/',
  ];

  for (const url of rejected) {
    assert.throws(() => normalizePublicUrl(url), PublicFetchError, url);
  }
});

test('normalizes a public URL and removes fragments', () => {
  const url = normalizePublicUrl('https://Example.COM./path?q=1#fragment');
  assert.equal(url.toString(), 'https://example.com/path?q=1');
});

test('rejects a private literal before attempting a network request', async () => {
  await assert.rejects(
    assertPublicUrl('http://169.254.169.254/latest/meta-data/'),
    (error) => error instanceof PublicFetchError && error.code === 'FORBIDDEN_TARGET'
  );
});
