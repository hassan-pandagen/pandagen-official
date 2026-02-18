export interface PageSpeedResult {
  performanceScore: number;
  seoScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
  loadTime: number;
  pageSize: string;
  fcp: number;
  lcp: number;
  cls: number;
  tbt: number;
  speedIndex: number;
  platformDetected: string;
  criticalIssues: number;
  warnings: number;
  passedChecks: number;
  topIssues: AuditIssue[];
}

export interface AuditIssue {
  title: string;
  savings: string;
  severity: 'warning' | 'error';
}

export async function runPageSpeedAnalysis(url: string): Promise<PageSpeedResult> {
  const apiKey = process.env.PAGESPEED_API_KEY;
  const categories = ['performance', 'seo', 'accessibility', 'best-practices'];
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}&${categories.map(c => `category=${c}`).join('&')}&strategy=mobile`;

  const response = await fetch(apiUrl, { cache: 'no-store' });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`PageSpeed API error: ${response.status} - ${errorBody}`);
  }

  const data = await response.json();
  const lighthouse = data.lighthouseResult;
  const cats = lighthouse.categories;
  const audits = lighthouse.audits;

  const performanceScore = Math.round((cats.performance?.score || 0) * 100);
  const seoScore = Math.round((cats.seo?.score || 0) * 100);
  const accessibilityScore = Math.round((cats.accessibility?.score || 0) * 100);
  const bestPracticesScore = Math.round((cats['best-practices']?.score || 0) * 100);

  const fcp = audits['first-contentful-paint']?.numericValue || 0;
  const lcp = audits['largest-contentful-paint']?.numericValue || 0;
  const cls = audits['cumulative-layout-shift']?.numericValue || 0;
  const tbt = audits['total-blocking-time']?.numericValue || 0;
  const speedIndex = audits['speed-index']?.numericValue || 0;

  const loadTime = parseFloat((fcp / 1000).toFixed(1));
  const totalByteWeight = audits['total-byte-weight']?.numericValue || 0;
  const pageSize = formatBytes(totalByteWeight);
  const platformDetected = detectPlatform(lighthouse);

  let criticalIssues = 0;
  let warnings = 0;
  let passedChecks = 0;
  const topIssues: AuditIssue[] = [];

  const perfAuditRefs = cats.performance?.auditRefs || [];
  for (const ref of perfAuditRefs) {
    const audit = audits[ref.id];
    if (!audit || audit.scoreDisplayMode === 'informative' || audit.scoreDisplayMode === 'notApplicable') continue;

    if (audit.score === 1) {
      passedChecks++;
    } else if (audit.score === null || audit.score < 0.5) {
      criticalIssues++;
      if (topIssues.length < 5 && audit.title) {
        topIssues.push({ title: audit.title, savings: audit.displayValue || '', severity: 'error' });
      }
    } else {
      warnings++;
      if (topIssues.length < 5 && audit.title) {
        topIssues.push({ title: audit.title, savings: audit.displayValue || '', severity: 'warning' });
      }
    }
  }

  return {
    performanceScore, seoScore, accessibilityScore, bestPracticesScore,
    loadTime, pageSize, fcp, lcp, cls, tbt, speedIndex,
    platformDetected, criticalIssues, warnings, passedChecks, topIssues,
  };
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function detectPlatform(lighthouse: any): string {
  const stacks = lighthouse.stackPacks || [];
  for (const stack of stacks) {
    const id = (stack.id || '').toLowerCase();
    if (id.includes('wordpress')) return 'WordPress';
    if (id.includes('shopify')) return 'Shopify';
    if (id.includes('wix')) return 'Wix';
    if (id.includes('squarespace')) return 'Squarespace';
    if (id.includes('webflow')) return 'Webflow';
    if (id.includes('drupal')) return 'Drupal';
    if (id.includes('magento')) return 'Magento';
  }
  return 'Custom / Unknown';
}
