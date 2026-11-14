/**
 * The fields every lead form adds to its own answers before posting to /api/submit-quote.
 *
 * 14 Nov 2026: five places used to append these by hand, and three times one of them fell
 * behind (no attribution on the contact page until 28 Aug, no `_t` there until 28 Aug, no
 * `locale` there at all). The browser half, which reads storage and fires analytics, is in
 * submitQuoteLead.ts. This half is pure so the node tests can load it.
 */

export interface LeadAttribution {
  source: string;
  medium: string;
  campaign?: string;
  landingPage?: string;
  firstVisit?: string;
}

export interface LeadContext {
  attribution: LeadAttribution;
  /** The path the form was sent from. */
  submittedFrom: string;
  /** When the visitor first touched the form, in ms. The route treats under 2 s as a bot. */
  formLoadedAt?: number;
  /** Tells the inbox which language to reply in. See ALLOWED_LOCALES in quoteRequest.ts. */
  locale?: string;
}

export function appendLeadContext(formData: FormData, context: LeadContext): void {
  const { attribution } = context;
  if (context.formLoadedAt && context.formLoadedAt > 0) formData.append("_t", String(context.formLoadedAt));
  formData.append("trafficSource", attribution.source);
  formData.append("trafficMedium", attribution.medium);
  if (attribution.campaign && attribution.campaign !== "none") formData.append("trafficCampaign", attribution.campaign);
  if (attribution.landingPage) formData.append("landingPage", attribution.landingPage);
  formData.append("submittedFrom", context.submittedFrom);
  if (context.locale) formData.append("locale", context.locale);
  if (attribution.firstVisit) formData.append("firstVisit", attribution.firstVisit);
}

/** The route's own error text when it sent one, otherwise the form's fallback. */
export async function quoteErrorMessage(response: Response, fallback: string): Promise<string> {
  try {
    const body = (await response.json()) as { error?: unknown };
    if (typeof body.error === "string" && body.error.trim()) return body.error;
  } catch {
    // A proxy can answer with HTML; the fallback is safer than showing that.
  }
  return fallback;
}
