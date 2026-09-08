import assert from 'node:assert/strict';
import test from 'node:test';
import { runPageSpeedAnalysis } from '../pagespeed.ts';

test('returns First Contentful Paint without mislabelling it as load time', async () => {
  const originalFetch = globalThis.fetch;
  const originalApiKey = process.env.PAGESPEED_API_KEY;

  process.env.PAGESPEED_API_KEY = 'test-key';
  globalThis.fetch = async () => new Response(JSON.stringify({
    lighthouseResult: {
      categories: {
        performance: { score: 0.9, auditRefs: [] },
        seo: { score: 1 },
        accessibility: { score: 1 },
        'best-practices': { score: 1 },
      },
      audits: {
        'first-contentful-paint': { numericValue: 1234 },
        'largest-contentful-paint': { numericValue: 2345 },
        'cumulative-layout-shift': { numericValue: 0.01 },
        'total-blocking-time': { numericValue: 25 },
        'speed-index': { numericValue: 1500 },
        'total-byte-weight': { numericValue: 1024 },
      },
      stackPacks: [],
    },
  }), {
    headers: { 'content-type': 'application/json' },
  });

  try {
    const result = await runPageSpeedAnalysis('https://example.com/');
    assert.equal(result.fcp, 1234);
    assert.equal('loadTime' in result, false);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalApiKey === undefined) delete process.env.PAGESPEED_API_KEY;
    else process.env.PAGESPEED_API_KEY = originalApiKey;
  }
});
