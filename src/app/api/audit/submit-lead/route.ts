import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import type { PageSpeedResult } from '@/lib/audit/pagespeed';

const resend = new Resend(process.env.RESEND_API_KEY);

const fmt = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}s` : `${Math.round(n)}ms`;

// Disposable/throwaway email domains — fake success so bots don't retry
const DISPOSABLE_DOMAINS = new Set([
  'isfew.com', 'tempmail.com', 'guerrillamail.com', 'mailinator.com', 'yopmail.com',
  'throwaway.email', 'temp-mail.org', 'dispostable.com', 'sharklasers.com', 'guerrillamailblock.com',
  'grr.la', 'guerrillamail.info', 'guerrillamail.net', 'guerrillamail.de', 'emailondeck.com',
  'getnada.com', 'tempail.com', 'tempr.email', 'mohmal.com', 'minutemail.com',
  'maildrop.cc', 'harakirimail.com', 'trashmail.com', 'trashmail.me', 'trashmail.net',
  'mailnesia.com', 'mailcatch.com', 'fakeinbox.com', 'mailnull.com', 'spamgourmet.com',
  'mytemp.email', 'tmpmail.net', 'tmpmail.org', 'bupmail.com', 'emailfake.com',
  'crazymailing.com', 'tmail.ws', 'tempinbox.com', 'discard.email', 'discardmail.com',
  'mailsac.com', 'inboxkitten.com', 'burnermail.io', 'tempmailaddress.com', '10minutemail.com',
  'guerrillamail.org', 'mailforspam.com', 'safetymail.info', 'filzmail.com', 'mailexpire.com',
]);

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

function buildOwnerNotification(email: string, url: string, auditData: PageSpeedResult, geo: { country: string; city: string; region: string; ip: string }): string {
  const hasDeep = auditData.deepChecks && auditData.deepChecks.checks.length > 0;
  const perfScore = auditData.performanceScore;
  const failCount = hasDeep ? auditData.deepChecks!.checks.filter(c => c.status === 'fail').length : auditData.criticalIssues;
  const warnCount = hasDeep ? auditData.deepChecks!.checks.filter(c => c.status === 'warn').length : auditData.warnings;
  const issueCount = failCount + warnCount;
  const emailDomain = email.split('@')[1] || '';

  let text = `NEW AUDIT LEAD\n`;
  text += `${new Date().toUTCString()}\n\n`;

  // Lead info
  text += `LEAD\n`;
  text += `Email: ${email}\n`;
  text += `Domain: ${emailDomain}\n`;
  text += `Website: ${url}\n`;
  text += `Platform: ${auditData.platformDetected}\n\n`;

  // Location
  text += `LOCATION\n`;
  text += `Country: ${geo.country || 'Unknown'}\n`;
  if (geo.city && geo.city !== 'Unknown') text += `City: ${geo.city}\n`;
  if (geo.region && geo.region !== 'Unknown') text += `Region: ${geo.region}\n`;
  text += `IP: ${geo.ip || 'Unknown'}\n\n`;

  // Quick verdict
  text += `VERDICT: ${perfScore >= 80 && failCount === 0 ? 'Healthy site (soft CTA sent)' : `${issueCount} issues found (urgency CTA sent)`}\n\n`;

  // Scores
  text += `SCORES\n`;
  text += `Performance: ${perfScore}/100\n`;
  text += `SEO: ${auditData.seoScore}/100\n`;
  text += `Accessibility: ${auditData.accessibilityScore}/100\n`;
  text += `Best Practices: ${auditData.bestPracticesScore}/100\n\n`;

  // Core Web Vitals
  text += `CORE WEB VITALS\n`;
  text += `FCP: ${fmt(auditData.fcp)}\n`;
  text += `LCP: ${fmt(auditData.lcp)}\n`;
  text += `TBT: ${fmt(auditData.tbt)}\n`;
  text += `CLS: ${auditData.cls.toFixed(3)}\n`;
  text += `Load Time: ${auditData.loadTime}s\n\n`;

  // 11-Point Inspection
  if (hasDeep) {
    text += `11-POINT INSPECTION\n`;
    for (const check of auditData.deepChecks!.checks) {
      const icon = check.status === 'pass' ? 'PASS' : check.status === 'warn' ? 'WARN' : 'FAIL';
      text += `[${icon}] ${check.name} (${check.score}/100)\n`;
    }
    text += `\n`;
  }

  // Top issues with fixes (owner sees everything)
  if (auditData.topIssues.length > 0) {
    text += `TOP ISSUES\n`;
    for (const issue of auditData.topIssues) {
      text += `- ${issue.title}${issue.savings ? ` (${issue.savings})` : ''}\n`;
    }
    text += `\n`;
  }

  // Deep check findings + fixes (owner gets full detail)
  if (hasDeep) {
    const problems = auditData.deepChecks!.checks.filter(c => c.status !== 'pass');
    if (problems.length > 0) {
      text += `DETAILED FINDINGS\n`;
      for (const check of problems) {
        text += `\n${check.name} (${check.score}/100):\n`;
        for (const finding of check.findings) {
          text += `  - ${finding}\n`;
        }
        text += `  Fix: ${check.fix}\n`;
      }
    }
  }

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

    // Block disposable emails (fake success so they don't retry)
    const emailDomain = email.split('@')[1]?.toLowerCase() || '';
    if (DISPOSABLE_DOMAINS.has(emailDomain)) {
      return NextResponse.json({ success: true, message: 'Lead enrolled successfully' }, { status: 200 });
    }

    // Extract geo data from Vercel headers (available on Vercel deployments)
    const geo = {
      country: request.headers.get('x-vercel-ip-country') || 'Unknown',
      city: decodeURIComponent(request.headers.get('x-vercel-ip-city') || 'Unknown'),
      region: request.headers.get('x-vercel-ip-country-region') || 'Unknown',
      ip: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'Unknown',
    };

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

    // 2. Send plain text lead notification to business owner (full technical details + geo)
    await resend.emails.send({
      from: fromEmail,
      to: fromEmail,
      subject: `Lead: ${perfScore}/100 | ${auditData.platformDetected} | ${geo.country} | ${email}`,
      text: buildOwnerNotification(email, url, auditData, geo),
    }).catch((err) => console.error('Owner notification failed:', err));

    return NextResponse.json({ success: true, message: 'Lead enrolled successfully' }, { status: 200 });
  } catch (error) {
    console.error('Submit lead error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
