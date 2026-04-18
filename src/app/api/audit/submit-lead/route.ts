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

function buildUserConfirmationText(url: string, d: PageSpeedResult): string {
  const hasDeep = d.deepChecks && d.deepChecks.checks.length > 0;
  const failCount = hasDeep ? d.deepChecks!.checks.filter(c => c.status === 'fail').length : d.criticalIssues;
  const warnCount = hasDeep ? d.deepChecks!.checks.filter(c => c.status === 'warn').length : d.warnings;
  const issueCount = failCount + warnCount;
  const perfScore = d.performanceScore;

  let text = `Thanks for requesting an optimization report.\n\n`;
  text += `Hassan is personally putting together your full report right now. This is not automated. You will get:\n\n`;
  text += `  - A custom PDF with the full 11-point optimization breakdown of your site\n`;
  text += `  - A personal video walkthrough showing exactly what is slowing your site down and how to fix it\n`;
  text += `  - Specific fixes ranked by revenue impact\n\n`;

  text += `Expected delivery: within 24 business hours.\n\n`;

  text += `Quick preview from the initial scan:\n`;
  text += `Site: ${url}\n`;
  text += `Performance: ${perfScore}/100\n`;
  text += `Load Time: ${d.loadTime}s\n`;
  if (d.platformDetected !== 'Custom / Unknown') {
    text += `Platform: ${d.platformDetected}\n`;
  }
  if (issueCount > 0) {
    text += `Issues found: ${issueCount}\n`;
  }
  text += `\n`;

  text += `No sales call. No sign-up. Just your report.\n\n`;

  text += `If you have any questions before the report arrives, feel free to reply to this email.\n\n`;

  text += `Hassan Jamal\n`;
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

    // 1. Send confirmation email to the user (NOT the full report — Hassan sends that manually within 24h)
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: `Your optimization report is being prepared. Expect it within 24 business hours.`,
      text: buildUserConfirmationText(url, auditData),
    });

    // 2. Send lead notification to business owner (full technical details + geo) — Hassan uses this to prepare the Gamma PDF + Loom
    await resend.emails.send({
      from: fromEmail,
      to: fromEmail,
      subject: `NEW AUDIT LEAD — prepare report within 24h: ${perfScore}/100 | ${auditData.platformDetected} | ${geo.country} | ${email}`,
      text: buildOwnerNotification(email, url, auditData, geo),
    }).catch((err) => console.error('Owner notification failed:', err));

    return NextResponse.json({ success: true, message: 'Lead enrolled successfully' }, { status: 200 });
  } catch (error) {
    console.error('Submit lead error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
