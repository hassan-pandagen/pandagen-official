import { createHash } from 'node:crypto';
import { parseLeadDetails, reviewDueAt } from '@/lib/audit/leadDetails';
import { platformAdvice } from '@/lib/audit/advice';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import type { PageSpeedResult } from '@/lib/audit/pagespeed';
import { readVercelApproximateGeo } from '@/lib/audit/requestMetadata';
import {
  AuditLeadTokenError,
  consumeAuditLeadToken,
  restoreAuditLeadToken,
  type AuditLeadRecord,
} from '@/lib/audit/auditLeadToken';
import {
  AuditRateLimitConfigurationError,
  enforceAuditLeadRateLimit,
} from '@/lib/audit/auditRateLimit';
import {
  assertSameOriginAuditLeadRequest,
  AuditLeadRequestError,
  readBoundedAuditLeadJson,
} from '@/lib/audit/auditLeadRequest';

let resendClient: Resend | null = null;
function getResend(): Resend {
  if (!resendClient) resendClient = new Resend(process.env.RESEND_API_KEY);
  return resendClient;
}

// PageSpeed-derived values are null when Google did not return lab data. They
// are reported as unavailable rather than as a zero or an invented figure.
const UNAVAILABLE = 'Not available (PageSpeed lab data did not return)';
const fmt = (n: number | null) => n === null
  ? UNAVAILABLE
  : n >= 1000 ? `${(n / 1000).toFixed(1)}s` : `${Math.round(n)}ms`;
const fmtScore = (n: number | null) => n === null ? UNAVAILABLE : `${n}/100`;
const MAX_LEAD_REQUEST_BYTES = 8_192;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

class AuditLeadDeliveryError extends Error {
  constructor(public readonly status: 502 | 503, message: string) {
    super(message);
    this.name = 'AuditLeadDeliveryError';
  }
}

function jsonResponse(body: unknown, status: number, extraHeaders?: HeadersInit) {
  return NextResponse.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      ...Object.fromEntries(new Headers(extraHeaders).entries()),
    },
  });
}

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

function buildUserConfirmationText(url: string, data: PageSpeedResult): string {
  const hasDeep = data.deepChecks && data.deepChecks.checks.length > 0;
  const failCount = hasDeep
    ? data.deepChecks!.checks.filter((check) => check.status === 'fail').length
    : (data.criticalIssues ?? 0);
  const warnCount = hasDeep
    ? data.deepChecks!.checks.filter((check) => check.status === 'warn').length
    : (data.warnings ?? 0);
  const issueCount = failCount + warnCount;

  let text = `Here is a summary of the automated website audit you requested.\n\n`;
  text += `Automated checks are point-in-time diagnostics, not a guarantee of field performance, rankings, conversions, revenue, security, or accessibility conformance.\n\n`;
  text += `Audit summary:\n`;
  text += `Site: ${url}\n`;
  text += `Performance: ${fmtScore(data.performanceScore)}\n`;
  text += `First Contentful Paint: ${fmt(data.fcp)}\n`;
  if (data.platformDetected && data.platformDetected !== 'Custom / Unknown') {
    text += `Platform: ${data.platformDetected}\n`;
  }
  if (issueCount > 0) text += `Issues found: ${issueCount}\n`;
  for (const check of data.deepChecks?.checks ?? []) {
    text += `\n${check.name} (${check.status}):\n${check.findings.map(f => `- ${f}`).join('\n')}\nNext step: ${check.fix}\n`;
  }
  text += `\nReply if you want us to clarify a finding. Implementation, account access and any paid work require a separately agreed scope.\n\n`;
  text += `PandaCodeGen\nhttps://www.pandacodegen.com\n`;
  return text;
}

function buildOwnerNotification(
  email: string,
  url: string,
  auditData: PageSpeedResult,
  geo: { country: string; city: string; region: string },
  issuedAt: number
): string {
  const hasDeep = auditData.deepChecks && auditData.deepChecks.checks.length > 0;
  const failCount = hasDeep
    ? auditData.deepChecks!.checks.filter((check) => check.status === 'fail').length
    : (auditData.criticalIssues ?? 0);
  const warnCount = hasDeep
    ? auditData.deepChecks!.checks.filter((check) => check.status === 'warn').length
    : (auditData.warnings ?? 0);
  const issueCount = failCount + warnCount;
  const emailDomain = email.split('@')[1] || '';

  let text = `NEW AUDIT LEAD\n${new Date(issuedAt).toUTCString()}\n\n`;
  text += `LEAD\nEmail: ${email}\nDomain: ${emailDomain}\nWebsite: ${url}\n`;
  text += `Platform: ${auditData.platformDetected ?? 'Not detected'}\n\n`;
  text += `LOCATION\nCountry: ${geo.country || 'Unknown'}\n`;
  if (geo.city && geo.city !== 'Unknown') text += `City: ${geo.city}\n`;
  if (geo.region && geo.region !== 'Unknown') text += `Region: ${geo.region}\n`;
  text += `\n`;
  // A null performance score cannot support a "healthy site" verdict, so the
  // null case falls through to the issue count rather than being treated as 0.
  const performanceScore = auditData.performanceScore;
  text += `VERDICT: ${performanceScore !== null && performanceScore >= 80 && failCount === 0
    ? 'No failing automated checks detected; not a complete website assessment'
    : `${issueCount} automated checks flagged for review`}\n\n`;
  text += `SCORES\nPerformance: ${fmtScore(performanceScore)}\n`;
  text += `SEO: ${fmtScore(auditData.seoScore)}\n`;
  text += `Accessibility: ${fmtScore(auditData.accessibilityScore)}\n`;
  text += `Best Practices: ${fmtScore(auditData.bestPracticesScore)}\n\n`;
  text += `LIGHTHOUSE METRICS\nFCP: ${fmt(auditData.fcp)}\n`;
  text += `LCP: ${fmt(auditData.lcp)}\nTBT: ${fmt(auditData.tbt)}\n`;
  text += `CLS: ${auditData.cls === null ? UNAVAILABLE : auditData.cls.toFixed(3)}\n\n`;

  if (hasDeep) {
    text += `11-POINT INSPECTION\n`;
    for (const check of auditData.deepChecks!.checks) {
      const status = check.status === 'pass' ? 'PASS' : check.status === 'warn' ? 'WARN' : 'FAIL';
      text += `[${status}] ${check.name} (${check.score}/100)\n`;
    }
    text += `\n`;
  }
  if (auditData.topIssues !== null && auditData.topIssues.length > 0) {
    text += `TOP ISSUES\n`;
    for (const issue of auditData.topIssues) {
      text += `- ${issue.title}${issue.savings ? ` (${issue.savings})` : ''}\n`;
    }
    text += `\n`;
  }
  if (hasDeep) {
    const problems = auditData.deepChecks!.checks.filter((check) => check.status !== 'pass');
    if (problems.length > 0) {
      text += `DETAILED FINDINGS\n`;
      for (const check of problems) {
        text += `\n${check.name} (${check.score}/100):\n`;
        for (const finding of check.findings) text += `  - ${finding}\n`;
        text += `  Fix: ${check.fix}\n`;
      }
    }
  }
  return text;
}

export async function POST(request: NextRequest) {
  let claimedRecord: AuditLeadRecord | null = null;
  let claimedToken = '';
  let confirmationSent = false;

  try {
    assertSameOriginAuditLeadRequest(request);
    const body = await readBoundedAuditLeadJson(request, MAX_LEAD_REQUEST_BYTES);
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      throw new AuditLeadRequestError(400, 'A valid submission is required.');
    }

    const raw = body as Record<string, unknown>;
    let details: ReturnType<typeof parseLeadDetails>;
    try { details = parseLeadDetails(raw); } catch (error) { throw new AuditLeadRequestError(400, error instanceof Error ? error.message : 'Invalid request.'); }
    const email = typeof raw.email === 'string' ? raw.email.trim() : '';
    const leadToken = typeof raw.leadToken === 'string' ? raw.leadToken : '';
    if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
      throw new AuditLeadRequestError(400, 'Invalid email format.');
    }
    if (!leadToken) {
      throw new AuditLeadRequestError(400, 'The audit session is required.');
    }
    const rateLimit = await enforceAuditLeadRateLimit(request);
    if (!rateLimit.allowed) {
      return jsonResponse(
        { error: 'Too many report requests. Please try again later.' },
        429,
        {
          'Retry-After': String(rateLimit.retryAfterSeconds),
          'X-RateLimit-Backend': rateLimit.backend,
        }
      );
    }

    const emailDomain = email.split('@')[1]?.toLowerCase() || '';
    if (DISPOSABLE_DOMAINS.has(emailDomain)) {
      throw new AuditLeadRequestError(400, 'Please use an email address that can receive the audit summary.');
    }

    claimedToken = leadToken;
    claimedRecord = await consumeAuditLeadToken(leadToken);
    if ((claimedRecord.action ?? 'report') !== details.action) {
      throw new AuditLeadRequestError(400, 'This session belongs to a different audit action.');
    }
    const { url, auditData } = claimedRecord;
    const geo = readVercelApproximateGeo(request.headers);

    const fromEmail = process.env.RESEND_FROM_EMAIL;
    if (!process.env.RESEND_API_KEY || !fromEmail) {
      throw new AuditLeadDeliveryError(503, 'Audit email delivery is not configured.');
    }

    const requestId = createHash('sha256').update(leadToken).digest('hex');
    const contactId = createHash('sha256').update(email.toLowerCase()).digest('hex').slice(0, 16);
    const dueAt = details.action === 'review' ? reviewDueAt(claimedRecord.issuedAt) : null;
    const context = `Lead type: ${details.action}\nContact reference: ${contactId}\nRequest: ${requestId}\nOwner-selected platform: ${details.platform || 'Not sure'}\nGoal: ${details.goal || 'General check'}\nConcern: ${details.concern || 'Not supplied'}\nExtra pages (owner-supplied, not scanned):\n${details.pages.join('\n') || 'None'}\n${dueAt ? `Review due by: ${dueAt} (UTC)\nScope: up to three public pages, three recommendations.\n` : ''}`;
    const notifyEmail = process.env.AUDIT_NOTIFY_EMAIL || fromEmail;
    // Owner delivery is required: this inbox is the pilot's review queue.
    // Stable keys avoid repeat emails if a later step fails and the visitor retries.
    const ownerNotification = await getResend().emails.send({
      from: fromEmail,
      to: notifyEmail,
      replyTo: email,
      subject: `${details.action === 'review' ? 'FOUNDER REVIEW - 24H' : 'AUDIT REPORT LEAD'} | ${contactId}`,
      text: context + '\n' + buildOwnerNotification(email, url, auditData, geo, claimedRecord.issuedAt),
    }, { idempotencyKey: `audit-owner-${requestId}` });
    if (ownerNotification.error) throw new AuditLeadDeliveryError(502, 'We could not record your request. Please try again.');

    const confirmation = await getResend().emails.send({
      from: fromEmail,
      to: email,
      replyTo: notifyEmail,
      subject: details.action === 'review' ? 'Your free founder review request' : 'Your website audit report',
      text: (dueAt ? `Your free founder review is requested. We will review up to three public pages and email our recommendations by ${new Date(dueAt).toUTCString()}. No obligation to hire us.\n\n` : '')
        + buildUserConfirmationText(url, auditData)
        + `\nPlatform guidance (based on your selection): ${platformAdvice(details.platform)}\n`
        + (dueAt ? '' : '\nWant a free founder review? Return to your open audit and select Request my free founder review, or reply with your main concern and up to two additional public pages. We will confirm the review timing by email.\n'),
    }, { idempotencyKey: `audit-customer-${requestId}` });
    if (confirmation.error) throw new AuditLeadDeliveryError(502, 'Your request was recorded, but the confirmation could not be sent. Please retry.');
    confirmationSent = true;
    return jsonResponse({ success: true, message: details.action === 'review' ? 'Review requested' : 'Audit report sent', dueAt }, 200);

  } catch (error) {
    if (claimedRecord && !confirmationSent) {
      try {
        await restoreAuditLeadToken(claimedToken, claimedRecord);
      } catch (restoreError) {
        console.error('Audit lead token restore failed:', restoreError);
      }
    }

    if (error instanceof AuditLeadRequestError) {
      return jsonResponse({ error: error.message }, error.status);
    }
    if (error instanceof AuditLeadTokenError) {
      return jsonResponse(
        { error: 'This audit session has expired or was already used. Please run the audit again.' },
        410
      );
    }
    if (error instanceof AuditRateLimitConfigurationError) {
      console.error('Audit lead persistence/rate-limit error:', error);
      return jsonResponse(
        { error: 'Report submission is temporarily unavailable. Please try again later.' },
        503,
        { 'Retry-After': '60' }
      );
    }
    if (error instanceof AuditLeadDeliveryError) {
      console.error('Audit lead delivery error:', error.message);
      return jsonResponse(
        { error: 'The report request could not be delivered right now. Please try again.' },
        error.status
      );
    }
    console.error('Submit lead error:', error);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}
