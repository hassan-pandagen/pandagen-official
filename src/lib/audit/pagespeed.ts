import type { DeepChecksResult } from './deepChecks';

/**
 * Every field except `deepChecks` is derived from Google's PageSpeed Insights
 * response. When that request fails, times out, or omits a metric, the field is
 * `null` and `pageSpeedAvailable` is false. Nothing here is ever defaulted to
 * zero: a zero would be indistinguishable from a genuine measurement of zero,
 * and the audit must never present absent data as a score.
 */
export interface PageSpeedResult {
  pageSpeedAvailable: boolean;
  performanceScore: number | null;
  seoScore: number | null;
  accessibilityScore: number | null;
  bestPracticesScore: number | null;
  pageSize: string | null;
  fcp: number | null;
  lcp: number | null;
  cls: number | null;
  tbt: number | null;
  speedIndex: number | null;
  platformDetected: string | null;
  criticalIssues: number | null;
  warnings: number | null;
  passedChecks: number | null;
  topIssues: AuditIssue[] | null;
  deepChecks?: DeepChecksResult;
}

/**
 * The shape returned when PageSpeed could not be reached. The deep checks can
 * still run and be reported alongside this.
 */
export function unavailablePageSpeedResult(): PageSpeedResult {
  return {
    pageSpeedAvailable: false,
    performanceScore: null,
    seoScore: null,
    accessibilityScore: null,
    bestPracticesScore: null,
    pageSize: null,
    fcp: null,
    lcp: null,
    cls: null,
    tbt: null,
    speedIndex: null,
    platformDetected: null,
    criticalIssues: null,
    warnings: null,
    passedChecks: null,
    topIssues: null,
  };
}

export interface AuditIssue {
  title: string;
  savings: string;
  severity: 'warning' | 'error';
}

interface LighthouseCategory {
  score?: number | null;
  auditRefs?: Array<{ id: string }>;
}

interface LighthouseAudit {
  numericValue?: number;
  score?: number | null;
  scoreDisplayMode?: string;
  title?: string;
  displayValue?: string;
}

interface LighthouseResult {
  categories: Record<string, LighthouseCategory | undefined>;
  audits: Record<string, LighthouseAudit | undefined>;
  stackPacks?: Array<{ id?: string }>;
}

// Kept below the serverless platform's own execution ceiling on purpose. Being
// killed by the platform returns nothing we control; timing out here returns a
// response we can shape, so the deep checks still reach the visitor.
const PAGESPEED_TIMEOUT_MS = 20_000;
const PAGESPEED_MAX_RESPONSE_BYTES = 10 * 1024 * 1024;

async function readBoundedJson(response: Response): Promise<unknown> {
  const contentType = response.headers.get('content-type')?.toLowerCase() || '';
  if (!contentType.startsWith('application/json')) {
    throw new Error('PageSpeed API returned an unexpected content type.');
  }

  const declaredLength = Number(response.headers.get('content-length'));
  if (Number.isFinite(declaredLength) && declaredLength > PAGESPEED_MAX_RESPONSE_BYTES) {
    throw new Error('PageSpeed API response exceeded the safety limit.');
  }

  if (!response.body) throw new Error('PageSpeed API returned an empty response.');
  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let received = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    received += value.byteLength;
    if (received > PAGESPEED_MAX_RESPONSE_BYTES) {
      await reader.cancel('Response exceeded the configured byte limit.');
      throw new Error('PageSpeed API response exceeded the safety limit.');
    }
    chunks.push(value);
  }

  const body = new Uint8Array(received);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return JSON.parse(new TextDecoder().decode(body));
}

export async function runPageSpeedAnalysis(url: string): Promise<PageSpeedResult> {
  const apiKey = process.env.PAGESPEED_API_KEY;
  if (!apiKey) throw new Error('PageSpeed API is not configured.');

  const categories = ['performance', 'seo', 'accessibility', 'best-practices'];
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}&${categories.map(c => `category=${c}`).join('&')}&strategy=mobile`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PAGESPEED_TIMEOUT_MS);
  let response: Response;
  try {
    response = await fetch(apiUrl, { cache: 'no-store', signal: controller.signal });
    if (!response.ok) {
      await response.body?.cancel();
      throw new Error(`PageSpeed API request failed with status ${response.status}.`);
    }
    const data = await readBoundedJson(response);
    return parsePageSpeedResult(data);
  } finally {
    clearTimeout(timer);
  }
}

/** A Lighthouse category score as 0-100, or null when the category is absent. */
function categoryScore(category: LighthouseCategory | undefined): number | null {
  const score = category?.score;
  return typeof score === 'number' && Number.isFinite(score) ? Math.round(score * 100) : null;
}

/** A Lighthouse numeric metric, or null when the audit did not report one. */
function auditMetric(audit: LighthouseAudit | undefined): number | null {
  const value = audit?.numericValue;
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

function parsePageSpeedResult(data: unknown): PageSpeedResult {
  const lighthouse = data && typeof data === 'object' && 'lighthouseResult' in data
    ? (data as { lighthouseResult?: LighthouseResult }).lighthouseResult
    : undefined;
  if (!lighthouse?.categories || !lighthouse?.audits) {
    throw new Error('PageSpeed API response did not contain Lighthouse results.');
  }
  const cats = lighthouse.categories;
  const audits = lighthouse.audits;

  const performanceScore = categoryScore(cats.performance);
  const seoScore = categoryScore(cats.seo);
  const accessibilityScore = categoryScore(cats.accessibility);
  const bestPracticesScore = categoryScore(cats['best-practices']);

  const fcp = auditMetric(audits['first-contentful-paint']);
  const lcp = auditMetric(audits['largest-contentful-paint']);
  const cls = auditMetric(audits['cumulative-layout-shift']);
  const tbt = auditMetric(audits['total-blocking-time']);
  const speedIndex = auditMetric(audits['speed-index']);

  const totalByteWeight = auditMetric(audits['total-byte-weight']);
  const pageSize = totalByteWeight === null ? null : formatBytes(totalByteWeight);
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
    } else if (typeof audit.score !== 'number' || audit.score < 0.5) {
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
    pageSpeedAvailable: true,
    performanceScore, seoScore, accessibilityScore, bestPracticesScore,
    pageSize, fcp, lcp, cls, tbt, speedIndex,
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

function detectPlatform(lighthouse: LighthouseResult): string {
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
