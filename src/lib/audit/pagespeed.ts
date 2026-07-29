import type { DeepChecksResult } from './deepChecks';

export interface PageSpeedResult {
  performanceScore: number;
  seoScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
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
  deepChecks?: DeepChecksResult;
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

const PAGESPEED_TIMEOUT_MS = 35_000;
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

function parsePageSpeedResult(data: unknown): PageSpeedResult {
  const lighthouse = data && typeof data === 'object' && 'lighthouseResult' in data
    ? (data as { lighthouseResult?: LighthouseResult }).lighthouseResult
    : undefined;
  if (!lighthouse?.categories || !lighthouse?.audits) {
    throw new Error('PageSpeed API response did not contain Lighthouse results.');
  }
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
