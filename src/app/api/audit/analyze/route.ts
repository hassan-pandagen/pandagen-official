import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { runPageSpeedAnalysis } from '@/lib/audit/pagespeed';
import { runDeepChecks } from '@/lib/audit/deepChecks';
import type { PageSpeedResult } from '@/lib/audit/pagespeed';

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory dedup cache. Lives as long as the serverless function stays warm.
// Good enough for early phase. Prevents accidental double-fires from refresh/retry.
const recentAudits = new Map<string, number>();
const DEDUP_WINDOW_MS = 60 * 1000; // 60 seconds

function shouldSkipNotification(normalizedUrl: string): boolean {
  // Skip own domain (testing the widget on your own site)
  if (normalizedUrl.includes('pandacodegen.com')) return true;

  // Skip if same URL audited in last 60 seconds
  const last = recentAudits.get(normalizedUrl);
  const now = Date.now();
  if (last && now - last < DEDUP_WINDOW_MS) return true;

  recentAudits.set(normalizedUrl, now);

  // Lightweight cleanup: drop entries older than the dedup window
  if (recentAudits.size > 500) {
    for (const [key, ts] of recentAudits) {
      if (now - ts > DEDUP_WINDOW_MS) recentAudits.delete(key);
    }
  }

  return false;
}

function fmt(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}s` : `${Math.round(n)}ms`;
}

function buildAuditNotification(
  url: string,
  data: PageSpeedResult,
  geo: { country: string; city: string; region: string }
): string {
  const hasDeep = data.deepChecks && data.deepChecks.checks.length > 0;
  const failCount = hasDeep
    ? data.deepChecks!.checks.filter((c) => c.status === 'fail').length
    : data.criticalIssues;
  const warnCount = hasDeep
    ? data.deepChecks!.checks.filter((c) => c.status === 'warn').length
    : data.warnings;

  let text = `AUDIT WIDGET USED (no email submitted yet)\n`;
  text += `${new Date().toUTCString()}\n\n`;

  text += `SITE\n`;
  text += `URL: ${url}\n`;
  text += `Platform: ${data.platformDetected}\n\n`;

  text += `LOCATION\n`;
  text += `Country: ${geo.country || 'Unknown'}\n`;
  if (geo.city && geo.city !== 'Unknown') text += `City: ${geo.city}\n`;
  if (geo.region && geo.region !== 'Unknown') text += `Region: ${geo.region}\n\n`;

  text += `SCORES\n`;
  text += `Performance: ${data.performanceScore}/100\n`;
  text += `SEO: ${data.seoScore}/100\n`;
  text += `Accessibility: ${data.accessibilityScore}/100\n`;
  text += `Best Practices: ${data.bestPracticesScore}/100\n\n`;

  text += `CORE WEB VITALS\n`;
  text += `LCP: ${fmt(data.lcp)}\n`;
  text += `FCP: ${fmt(data.fcp)}\n`;
  text += `TBT: ${fmt(data.tbt)}\n`;
  text += `CLS: ${data.cls.toFixed(3)}\n`;
  text += `Load Time: ${data.loadTime}s\n\n`;

  if (failCount + warnCount > 0) {
    text += `Issues found: ${failCount + warnCount} (${failCount} fail, ${warnCount} warn)\n\n`;
  }

  text += `Note: This is a usage notification only. The visitor has not yet left an email. If they do, you will receive a separate full lead notification.\n`;

  return text;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    let normalizedUrl = url.trim();
    if (!normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
      normalizedUrl = 'https://' + normalizedUrl;
    }

    try {
      new URL(normalizedUrl);
    } catch {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
    }

    const pageSpeedResult = await runPageSpeedAnalysis(normalizedUrl);

    // Run deep checks in parallel with minimal added latency
    let deepChecks;
    try {
      deepChecks = await runDeepChecks(normalizedUrl, pageSpeedResult);
    } catch (err) {
      console.error('Deep checks error:', err);
      deepChecks = null;
    }

    const result = { ...pageSpeedResult, deepChecks: deepChecks ?? undefined };

    // Fire-and-forget usage notification. Skips own domain + 60-sec dedup.
    // Wrapped in try/catch so notification failure never breaks the audit response.
    if (!shouldSkipNotification(normalizedUrl)) {
      const geo = {
        country: request.headers.get('x-vercel-ip-country') || 'Unknown',
        city: decodeURIComponent(request.headers.get('x-vercel-ip-city') || 'Unknown'),
        region: request.headers.get('x-vercel-ip-country-region') || 'Unknown',
      };

      const fromEmail = process.env.RESEND_FROM_EMAIL;
      if (fromEmail && process.env.RESEND_API_KEY) {
        const subject = `[AUDIT USED] ${pageSpeedResult.performanceScore}/100 | ${pageSpeedResult.platformDetected} | ${geo.country} | ${normalizedUrl}`;
        resend.emails
          .send({
            from: fromEmail,
            to: fromEmail,
            subject,
            text: buildAuditNotification(normalizedUrl, result, geo),
          })
          .catch((err) => console.error('Audit usage notification failed:', err));
      }
    }

    return NextResponse.json({ success: true, data: result }, { status: 200 });
  } catch (error) {
    console.error('PageSpeed analysis error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Analysis failed. Try again.' },
      { status: 500 }
    );
  }
}
