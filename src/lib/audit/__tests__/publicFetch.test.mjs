import assert from 'node:assert/strict';
import net from 'node:net';
import test from 'node:test';
import {
  assertPublicUrl,
  fetchPublicText,
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

// ---------------------------------------------------------------------------
// Regression: the DNS `lookup` pinning contract.
//
// requestAtAddress() hands https.request a custom `lookup` that pins the socket
// to the single address already validated as public. Node 20.13 and later
// invoke a custom lookup with `{ all: true }` and require the ARRAY callback
// form; the older scalar form fails at "Invalid IP address: undefined" before a
// socket is opened, so every audit fetch silently returned nothing.
//
// `lookupPinned` is a closure inside requestAtAddress and is deliberately not
// exported, so these tests capture the real production function at the socket
// layer instead of re-implementing it: net.Socket.prototype.connect is patched
// to record `options.lookup` and abort before any packet is sent. Nothing here
// touches DNS or the network - the URL is an IP literal, so
// resolvePublicAddresses short-circuits, and the connection is destroyed at
// entry to connect().

/** Runs one fetch far enough to capture the pinned lookup, then aborts it. */
async function capturePinnedLookup(url) {
  const realConnect = net.Socket.prototype.connect;
  let pinned = null;

  net.Socket.prototype.connect = function patchedConnect(...args) {
    const candidates = args.flatMap((argument) => (Array.isArray(argument) ? argument : [argument]));
    const options = candidates.find(
      (argument) => argument && typeof argument === 'object' && typeof argument.lookup === 'function'
    );
    if (options) pinned = options.lookup;
    // Never call through: fail the socket instead of opening one.
    process.nextTick(() => this.destroy(new Error('test: connection intercepted')));
    return this;
  };

  try {
    await assert.rejects(fetchPublicText(url, { timeoutMs: 2_000 }), PublicFetchError);
  } finally {
    net.Socket.prototype.connect = realConnect;
  }

  assert.equal(typeof pinned, 'function', 'no custom lookup was passed to the request');
  return pinned;
}

/** Collects one lookup callback invocation as an argument array. */
function callLookup(pinned, lookupOptions) {
  const calls = [];
  pinned('audit.example.com', lookupOptions, (...args) => calls.push(args));
  assert.equal(calls.length, 1, 'the pinned lookup must call back exactly once, synchronously');
  return calls[0];
}

test('this Node runtime asks a custom lookup for the array form', () => {
  // The premise of the regression. If this ever stops holding, the scalar-only
  // form would have been survivable and the test below can be revisited.
  const asked = [];
  const socket = net.connect({
    host: 'pinned.example.invalid',
    port: 65_000,
    lookup(_hostname, options, callback) {
      asked.push(options);
      callback(new Error('test: lookup intercepted'));
    },
  });
  socket.on('error', () => {});
  socket.destroy();

  assert.equal(asked.length, 1);
  assert.equal(asked[0].all, true, 'Node invoked the custom lookup without { all: true }');
});

test('the pinned lookup answers { all: true } with an array of address records', async () => {
  const pinned = await capturePinnedLookup('https://8.8.8.8/');
  const [error, addresses, extra] = callLookup(pinned, { hints: 0, all: true });

  assert.equal(error, null);
  assert.ok(
    Array.isArray(addresses),
    `{ all: true } must be answered with an array, got ${typeof addresses}: ${JSON.stringify(addresses)}`
  );
  assert.equal(addresses.length, 1, 'the socket must stay pinned to exactly one validated address');
  assert.deepEqual(addresses[0], { address: '8.8.8.8', family: 4 });
  assert.equal(extra, undefined, 'the array form takes no third callback argument');
});

test('the pinned lookup still answers the scalar form when { all } is not requested', async () => {
  const pinned = await capturePinnedLookup('https://8.8.8.8/');

  for (const lookupOptions of [{ hints: 0 }, { hints: 0, all: false }]) {
    const [error, address, family] = callLookup(pinned, lookupOptions);
    assert.equal(error, null);
    assert.equal(address, '8.8.8.8');
    assert.equal(family, 4);
  }
});

test('the pinned lookup ignores the hostname it is asked about', async () => {
  // The SSRF guarantee: whatever Node asks for, the answer is the one address
  // resolvePublicAddresses already validated.
  const pinned = await capturePinnedLookup('https://8.8.8.8/');
  const [, addresses] = callLookup(pinned, { hints: 0, all: true });
  assert.deepEqual(addresses, [{ address: '8.8.8.8', family: 4 }]);
});
