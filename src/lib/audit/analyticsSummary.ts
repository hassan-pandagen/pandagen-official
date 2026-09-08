const ALLOWED_PLATFORMS = new Set([
  'WordPress',
  'Shopify',
  'Wix',
  'Squarespace',
  'Webflow',
  'Drupal',
  'Magento',
  'Custom / Unknown',
]);

type AuditAnalyticsInput = {
  performanceScore?: unknown;
  platformDetected?: unknown;
} | null | undefined;

/**
 * Returns only coarse, allowlisted audit dimensions for consented analytics.
 * Never pass the submitted URL or full audit payload to an analytics vendor.
 */
export function safeAuditAnalyticsSummary(data: AuditAnalyticsInput) {
  const score = typeof data?.performanceScore === 'number' && Number.isFinite(data.performanceScore)
    ? data.performanceScore
    : null;
  const performanceBand = score === null
    ? 'unknown'
    : score >= 90
      ? '90-100'
      : score >= 50
        ? '50-89'
        : '0-49';

  const candidate = typeof data?.platformDetected === 'string'
    ? data.platformDetected
    : 'Custom / Unknown';

  return {
    performance_band: performanceBand,
    platform_detected: ALLOWED_PLATFORMS.has(candidate) ? candidate : 'Custom / Unknown',
  };
}
