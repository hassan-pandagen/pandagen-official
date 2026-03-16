import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import type { PageSpeedResult } from '@/lib/audit/pagespeed';

const resend = new Resend(process.env.RESEND_API_KEY);

const scoreColor = (s: number) => s >= 90 ? '#22c55e' : s >= 50 ? '#f59e0b' : '#ef4444';
const fmt = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}s` : `${Math.round(n)}ms`;

// Business-friendly check names
const businessName: Record<string, string> = {
  'visual-hierarchy': 'Page Layout & Design',
  'mobile-first-ux': 'Mobile Experience',
  'cta-placement': 'Call-to-Action Effectiveness',
  'heading-structure': 'Content Organization',
  'structured-data': 'Google Rich Results Eligibility',
  'crawl-budget': 'Search Engine Visibility',
  'indexing-speed': 'How Fast Google Finds You',
  'trust-signals': 'Trust & Credibility Signals',
  'security-headers': 'Website Security',
  'mobile-checkout': 'Checkout & Conversion Flow',
  'ai-readiness': 'AI Search Visibility (ChatGPT, Perplexity)',
};

function buildUserReportText(url: string, d: PageSpeedResult): string {
  const hasDeep = d.deepChecks && d.deepChecks.checks.length > 0;
  const failCount = hasDeep ? d.deepChecks!.checks.filter(c => c.status === 'fail').length : d.criticalIssues;
  const warnCount = hasDeep ? d.deepChecks!.checks.filter(c => c.status === 'warn').length : d.warnings;
  const issueCount = failCount + warnCount;

  // Use performance score as the primary score (matches what the widget shows)
  const perfScore = d.performanceScore;
  const isHealthy = perfScore >= 80 && failCount === 0;

  let text = `Your website audit is ready.\n\n`;
  text += `Site: ${url}\n`;
  text += `Performance Score: ${perfScore}/100\n`;
  text += `Load Time: ${d.loadTime}s\n`;
  if (d.platformDetected !== 'Custom / Unknown') {
    text += `Platform Detected: ${d.platformDetected}\n`;
  }
  text += `\n`;

  text += `---\n\n`;

  // Google scores
  text += `GOOGLE SCORES\n`;
  text += `Performance: ${d.performanceScore}/100\n`;
  text += `SEO: ${d.seoScore}/100\n`;
  text += `Accessibility: ${d.accessibilityScore}/100\n`;
  text += `Best Practices: ${d.bestPracticesScore}/100\n\n`;

  // 11-Point Inspection
  if (hasDeep) {
    text += `---\n\n`;
    text += `YOUR 11-POINT INSPECTION\n\n`;

    for (const check of d.deepChecks!.checks) {
      const name = businessName[check.id] || check.name;
      const icon = check.status === 'pass' ? 'PASS' : check.status === 'warn' ? 'WARN' : 'FAIL';
      text += `[${icon}] ${name} (${check.score}/100)\n`;
    }

    text += `\n`;
  }

  // Platform specific note (only for known platforms with issues)
  if (d.platformDetected !== 'Custom / Unknown' && perfScore < 80) {
    const platformNotes: Record<string, string> = {
      'WordPress': 'WordPress sites commonly suffer from plugin bloat, slow shared hosting, and security vulnerabilities.',
      'Shopify': 'Shopify themes often struggle with render-blocking scripts and limited control over page speed.',
      'Wix': 'Wix sites have inherent speed limitations due to heavy JavaScript bundles and restricted hosting control.',
      'Squarespace': 'Squarespace sites often load slowly due to bloated templates and limited optimization options.',
      'Webflow': 'Webflow sites can face performance issues from complex animations and limited server-side optimization.',
    };
    const note = platformNotes[d.platformDetected];
    if (note) {
      text += `Note: ${note}\n\n`;
    }
  }

  // CTA: different message based on whether this is a real lead or a healthy site
  text += `---\n\n`;

  if (isHealthy) {
    // Healthy site: acknowledge it, suggest improvements, soft CTA
    text += `YOUR SITE IS IN GOOD SHAPE\n\n`;
    if (warnCount > 0) {
      text += `We found ${warnCount} area${warnCount !== 1 ? 's' : ''} that could be improved, but nothing critical. The warnings above are worth addressing if you want to squeeze more speed and conversions out of your site.\n\n`;
    } else {
      text += `No major issues found. Your site is performing well across all 11 checks.\n\n`;
    }
    text += `If you're looking to improve conversions, explore a new build, or want to discuss anything else, feel free to reply to this email or book a call.\n\n`;
    text += `https://cal.com/pandagen/discovery\n\n`;
  } else {
    // Real lead: revenue impact + urgency
    if (d.loadTime > 1) {
      const loss = Math.round((d.loadTime - 1) * 7);
      text += `YOUR SITE IS LOSING CUSTOMERS\n\n`;
      text += `Your site takes ${d.loadTime}s to load. Research shows every second of delay reduces conversions by up to 7%. That means you could be losing up to ${loss}% of potential customers before they even see your page.\n\n`;
    } else {
      text += `WHAT'S NEXT?\n\n`;
    }
    text += `We found ${issueCount} issue${issueCount !== 1 ? 's' : ''} that ${issueCount === 1 ? 'is' : 'are'} directly impacting your revenue and search rankings. On a free 30-minute strategy call, we'll walk you through exactly how to fix each one, what it costs, and how fast your site can be.\n\n`;
    text += `Book your free call here:\n`;
    text += `https://cal.com/pandagen/discovery\n\n`;
    text += `Or just reply to this email with any questions.\n\n`;
  }

  text += `PandaCodeGen\n`;
  text += `https://www.pandacodegen.com\n`;

  return text;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, url, auditData, _t } = body as {
      email: string;
      url: string;
      auditData: PageSpeedResult;
      _t?: number;
    };

    // Anti-spam: time-based check (reject if submitted in under 3 seconds)
    if (_t && (Date.now() - _t) < 3000) {
      return NextResponse.json({ success: true, message: 'Lead enrolled successfully' }, { status: 200 });
    }

    if (!email || !url || !auditData) {
      return NextResponse.json({ error: 'Email, URL, and audit data are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL!;
    const hasDeep = auditData.deepChecks && auditData.deepChecks.checks.length > 0;
    const perfScore = auditData.performanceScore;
    const failCount = hasDeep ? auditData.deepChecks!.checks.filter(c => c.status === 'fail').length : auditData.criticalIssues;
    const warnCount = hasDeep ? auditData.deepChecks!.checks.filter(c => c.status === 'warn').length : auditData.warnings;
    const issueCount = failCount + warnCount;

    // 1. Send plain text audit report to the user
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: issueCount > 0
        ? `Your site scored ${perfScore}/100 (${issueCount} issue${issueCount !== 1 ? 's' : ''} found)`
        : `Your site scored ${perfScore}/100. Looking good.`,
      text: buildUserReportText(url, auditData),
    });

    // 2. Send lead notification to business owner (HTML with full technical details)
    await resend.emails.send({
      from: fromEmail,
      to: fromEmail,
      subject: `New Audit Lead: ${url} | ${email} | Perf ${perfScore}/100 | ${issueCount} issues`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#fff;padding:32px;border-radius:12px">
          <h1 style="font-size:22px;margin:0 0 4px">New Audit Lead</h1>
          <p style="color:#888;margin:0 0 24px;font-size:14px">${new Date().toUTCString()}</p>

          <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
            <tr><td style="padding:8px 0;color:#888;font-size:13px">Email</td><td style="padding:8px 0;font-weight:600">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px">Website</td><td style="padding:8px 0"><a href="${url}" style="color:#3b82f6">${url}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px">Platform</td><td style="padding:8px 0;font-weight:600">${auditData.platformDetected}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px">Performance</td><td style="padding:8px 0;font-weight:600;color:${scoreColor(perfScore)}">${perfScore}/100</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px">Issues</td><td style="padding:8px 0;font-weight:600;color:${issueCount > 0 ? '#f59e0b' : '#22c55e'}">${failCount} critical, ${warnCount} warnings</td></tr>
          </table>

          <h2 style="font-size:16px;margin:0 0 12px;color:#888;text-transform:uppercase;letter-spacing:1px">Scores</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
            ${[
              ['Performance', auditData.performanceScore],
              ['SEO', auditData.seoScore],
              ['Accessibility', auditData.accessibilityScore],
              ['Best Practices', auditData.bestPracticesScore],
            ].map(([label, score]) => `
              <tr>
                <td style="padding:8px 0;color:#ccc;font-size:14px">${label}</td>
                <td style="padding:8px 0;text-align:right">
                  <span style="background:${scoreColor(score as number)};color:#000;font-weight:700;padding:2px 10px;border-radius:20px;font-size:14px">${score}/100</span>
                </td>
              </tr>`).join('')}
          </table>

          <h2 style="font-size:16px;margin:0 0 12px;color:#888;text-transform:uppercase;letter-spacing:1px">Core Web Vitals</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
            ${[
              ['FCP', auditData.fcp],
              ['LCP', auditData.lcp],
              ['TBT', auditData.tbt],
              ['CLS', auditData.cls],
            ].map(([label, val]) => `
              <tr>
                <td style="padding:6px 0;color:#ccc;font-size:13px">${label}</td>
                <td style="padding:6px 0;text-align:right;font-weight:600;font-size:13px">${label === 'CLS' ? (val as number).toFixed(3) : fmt(val as number)}</td>
              </tr>`).join('')}
          </table>

          ${hasDeep ? `
          <h2 style="font-size:16px;margin:0 0 12px;color:#888;text-transform:uppercase;letter-spacing:1px">11-Point Inspection</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
            ${auditData.deepChecks!.checks.map(c => `
              <tr>
                <td style="padding:6px 0;color:${scoreColor(c.score)};font-size:14px;font-weight:600">${c.status === 'pass' ? '✓' : c.status === 'warn' ? '⚠' : '✗'}</td>
                <td style="padding:6px 0;color:#ccc;font-size:13px">${c.name}</td>
                <td style="padding:6px 0;text-align:right;font-weight:600;font-size:13px;color:${scoreColor(c.score)}">${c.score}/100</td>
              </tr>`).join('')}
          </table>` : ''}

          ${auditData.topIssues.length > 0 ? `
          <h2 style="font-size:16px;margin:0 0 12px;color:#888;text-transform:uppercase;letter-spacing:1px">Top Issues</h2>
          <ul style="padding-left:20px;margin:0">
            ${auditData.topIssues.map(i => `<li style="color:#ccc;font-size:13px;margin-bottom:4px">${i.title} ${i.savings ? `(${i.savings})` : ''}</li>`).join('')}
          </ul>` : ''}
        </div>
      `,
    }).catch((err) => console.error('Owner notification failed:', err));

    return NextResponse.json({ success: true, message: 'Lead enrolled successfully' }, { status: 200 });
  } catch (error) {
    console.error('Submit lead error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
