import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  AuditRateLimitConfigurationError,
  claimQuoteSubmission,
  enforceQuoteRateLimit,
  releaseQuoteSubmission,
  type QuoteSubmissionClaim,
} from "@/lib/audit/auditRateLimit";
import {
  assertSameOriginQuoteRequest,
  QuoteRequestError,
  readBoundedQuoteFormData,
  readQuoteHoneypot,
  validateQuoteScalarFields,
} from "@/lib/forms/quoteRequest";

class QuoteEmailNotConfiguredError extends Error {
  constructor() {
    super("RESEND_API_KEY is not set, so quote emails cannot be sent.");
    this.name = "QuoteEmailNotConfiguredError";
  }
}

let resendClient: Resend | null = null;
function getResend(): Resend {
  // Fail with a named error rather than constructing a client around `undefined`
  // and letting the send throw into the generic 500 handler. A missing key is a
  // deployment problem and should say so in the logs, not surface to the visitor
  // as "Internal server error" -- which is what sent this form's last outage
  // undiagnosed for as long as it was.
  if (!process.env.RESEND_API_KEY) throw new QuoteEmailNotConfiguredError();
  if (!resendClient) resendClient = new Resend(process.env.RESEND_API_KEY);
  return resendClient;
}

function escHtml(value: string | null | undefined): string {
  if (!value) return "";
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function detailRow(label: string, value: string): string {
  if (!value) return "";
  return `<p style="margin:10px 0"><strong>${escHtml(label)}:</strong> ${escHtml(value)}</p>`;
}

export async function POST(request: NextRequest) {
  let quoteClaim: QuoteSubmissionClaim | null = null;
  let emailSent = false;

  try {
    assertSameOriginQuoteRequest(request);

    const rateLimit = await enforceQuoteRateLimit(request);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many quote requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Cache-Control": "no-store",
            "Retry-After": String(rateLimit.retryAfterSeconds),
            "X-RateLimit-Backend": rateLimit.backend,
          },
        }
      );
    }

    const formData = await readBoundedQuoteFormData(request);
    if (readQuoteHoneypot(formData)) {
      return NextResponse.json(
        { success: true, message: "Quote request sent successfully" },
        { status: 200, headers: { "Cache-Control": "no-store" } }
      );
    }

    const fields = validateQuoteScalarFields(formData);
    const submissionFingerprint = createHash("sha256")
      .update(JSON.stringify({
        name: fields.name,
        email: fields.email,
        phone: fields.phone,
        service: fields.service,
        details: fields.details,
        currentUrl: fields.currentUrl,
        currentPlatform: fields.currentPlatform,
        primaryGoal: fields.primaryGoal,
        trafficBand: fields.trafficBand,
        timeline: fields.timeline,
        budget: fields.budget,
        trafficSource: fields.trafficSource,
        trafficMedium: fields.trafficMedium,
        trafficCampaign: fields.trafficCampaign,
        landingPage: fields.landingPage,
        firstVisit: fields.firstVisit,
      }))
      .digest("hex");

    quoteClaim = await claimQuoteSubmission(request, submissionFingerprint);
    if (!quoteClaim.acquired) {
      return NextResponse.json(
        { success: true, message: "Quote request sent successfully" },
        { status: 200, headers: { "Cache-Control": "no-store" } }
      );
    }

    const safeEmail = escHtml(fields.email);
    const safePhone = escHtml(fields.phone);

    // The localized hero form tags its submissions so we answer in the language the
    // visitor actually used. This goes in the subject, not just a row in the body,
    // so the language is visible in the inbox list before the mail is opened.
    const localeNames: Record<string, string> = { FR: "French", DE: "German" };
    const localeCode = /\((FR|DE)\)\s*$/.exec(fields.service)?.[1] ?? "";
    const replyLanguage = localeNames[localeCode] ?? "English";
    const subjectPrefix = localeCode ? `[${localeCode}] ` : "";

    const response = await getResend().emails.send({
      from: process.env.RESEND_FROM_EMAIL || "noreply@pandacodegen.com",
      to: process.env.QUOTE_RECIPIENT_EMAIL || "info@pandacodegen.com",
      replyTo: fields.email,
      subject: `${subjectPrefix}New website request from ${fields.name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;background:#f5f5f4;padding:24px;border-radius:12px;color:#1c1917">
          <h2 style="margin:0 0 20px">New website request</h2>
          ${localeCode ? `<p style="margin:0 0 16px;padding:12px 14px;background:#7c4a2d;color:#fff;border-radius:8px;font-weight:bold">Submitted from the ${replyLanguage} site. Reply in ${replyLanguage}.</p>` : ""}
          <div style="background:#fff;padding:20px;border-radius:8px">
            ${detailRow("Name", fields.name)}
            ${detailRow("Reply language", replyLanguage)}
            <p style="margin:10px 0"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            ${safePhone ? `<p style="margin:10px 0"><strong>Phone:</strong> <a href="tel:${safePhone}">${safePhone}</a></p>` : ""}
            ${detailRow("Current website", fields.currentUrl)}
            ${detailRow("Current platform", fields.currentPlatform)}
            ${detailRow("Primary goal", fields.primaryGoal)}
            ${detailRow("Monthly traffic", fields.trafficBand)}
            ${detailRow("Timeline", fields.timeline)}
            ${detailRow("Indicative budget", fields.budget)}
            ${detailRow("Service", fields.service)}
            ${fields.details ? `<p style="margin:14px 0 6px"><strong>Project details:</strong></p><p style="white-space:pre-wrap;background:#f5f5f4;padding:12px;border-radius:6px">${escHtml(fields.details)}</p>` : ""}
          </div>
          ${fields.trafficSource || fields.landingPage ? `
            <div style="margin-top:16px;background:#fff;padding:16px;border-radius:8px">
              <h3 style="margin:0 0 10px;font-size:15px">Attribution</h3>
              ${detailRow("Source", fields.trafficSource)}
              ${detailRow("Medium", fields.trafficMedium)}
              ${detailRow("Campaign", fields.trafficCampaign)}
              ${detailRow("Landing page", fields.landingPage)}
              ${detailRow("First visit", fields.firstVisit)}
            </div>
          ` : ""}
          <p style="margin:16px 0 0;font-size:12px;color:#57534e">Reply directly to the requester. This form intentionally does not accept attachments.</p>
        </div>
      `,
    }, {
      idempotencyKey: `quote-${submissionFingerprint}`,
    });

    if (response.error) {
      await releaseQuoteSubmission(quoteClaim);
      quoteClaim = null;
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500, headers: { "Cache-Control": "no-store" } }
      );
    }

    emailSent = true;
    return NextResponse.json(
      { success: true, message: "Quote request sent successfully" },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    if (quoteClaim?.acquired && !emailSent) {
      try {
        await releaseQuoteSubmission(quoteClaim);
      } catch (releaseError) {
        console.error("Quote idempotency release failed:", releaseError);
      }
    }

    if (error instanceof QuoteRequestError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status, headers: { "Cache-Control": "no-store" } }
      );
    }
    if (error instanceof AuditRateLimitConfigurationError) {
      console.error("Quote rate-limit/idempotency error:", error);
      return NextResponse.json(
        { error: "Quote submission is temporarily unavailable. Please try again later." },
        { status: 503, headers: { "Cache-Control": "no-store", "Retry-After": "60" } }
      );
    }

    if (error instanceof QuoteEmailNotConfiguredError) {
      console.error(
        "Quote email is not configured: set RESEND_API_KEY (and optionally " +
          "RESEND_FROM_EMAIL and QUOTE_RECIPIENT_EMAIL) in this environment."
      );
      return NextResponse.json(
        { error: "We could not send your request. Please email info@pandacodegen.com and we will reply the same day." },
        { status: 503, headers: { "Cache-Control": "no-store" } }
      );
    }

    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
