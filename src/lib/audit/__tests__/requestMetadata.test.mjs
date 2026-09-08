import assert from 'node:assert/strict';
import test from 'node:test';
import {
  decodeVercelCity,
  readVercelApproximateGeo,
} from '../requestMetadata.ts';

test('decodes valid Vercel city metadata', () => {
  assert.equal(decodeVercelCity('S%C3%A3o%20Paulo'), 'São Paulo');
});

test('falls back safely for missing or malformed Vercel city metadata', () => {
  assert.equal(decodeVercelCity(null), 'Unknown');
  assert.equal(decodeVercelCity('%E0%A4%A'), 'Unknown');
});

test('returns approximate location without retaining a forwarding IP', () => {
  const headers = new Headers({
    'x-vercel-ip-country': 'PK',
    'x-vercel-ip-city': 'Karachi',
    'x-vercel-ip-country-region': 'SD',
    'x-forwarded-for': '203.0.113.42',
  });

  const geo = readVercelApproximateGeo(headers);
  assert.deepEqual(geo, { country: 'PK', city: 'Karachi', region: 'SD' });
  assert.equal('ip' in geo, false);
});
