import assert from 'node:assert/strict';
import test from 'node:test';
import { safeAuditAnalyticsSummary } from '../analyticsSummary.ts';

test('audit analytics uses coarse score bands and an allowlisted platform', () => {
  assert.deepEqual(
    safeAuditAnalyticsSummary({ performanceScore: 91, platformDetected: 'WordPress' }),
    { performance_band: '90-100', platform_detected: 'WordPress' },
  );
  assert.deepEqual(
    safeAuditAnalyticsSummary({ performanceScore: 72, platformDetected: 'unexpected free text' }),
    { performance_band: '50-89', platform_detected: 'Custom / Unknown' },
  );
  assert.deepEqual(
    safeAuditAnalyticsSummary({ performanceScore: 20, platformDetected: 'Shopify' }),
    { performance_band: '0-49', platform_detected: 'Shopify' },
  );
});
