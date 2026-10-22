import { createHmac } from "node:crypto";

/**
 * Sends a submitted lead to the CRM (crm.pandacodegen.com, POST /api/ingest/lead).
 *
 * The CRM is where each lead's server-side Meta and Google events are created, from the same
 * event_id the browser Pixel used. Rules this file keeps:
 *   - It never throws and never blocks the visitor. The caller runs it after the response.
 *   - It does nothing unless CRM_INGEST_URL and CRM_INGEST_SECRET are both set, so deploying
 *     this code changes nothing until those are added.
 *   - The email is not the thing being protected here: the lead email still goes out first.
 *     A CRM outage costs a CRM record, not an enquiry.
 *   - Logs carry a status and the event id, never a name, email or phone number.
 *
 * Body and signature follow the CRM's ingest-schema.ts (version 1) and signing.ts: HMAC-SHA256,
 * hex, over `${timestamp}.${rawBody}`, with the timestamp in seconds.
 */

export interface LeadFields {
  name: string;
  email: string;
  phone: string;
  service: string;
  details: string;
  alreadyTried: string;
  currentUrl: string;
  currentPlatform: string;
  primaryGoal: string;
  trafficBand: string;
  timeline: string;
  budget: string;
  trafficSource: string;
  trafficMedium: string;
  trafficCampaign: string;
  landingPage: string;
  submittedFrom: string;
  firstVisit: string;
  locale: string;
}

export interface LeadTracking {
  leadSource: string;
  eventId: string;
  fbp: string;
  fbc: string;
  fbclid: string;
  gclid: string;
  gbraid: string;
  wbraid: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  marketingConsent: boolean;
}

export interface LeadRequestContext {
  origin: string;
  clientIp: string;
  userAgent: string;
  country: string;
  region: string;
  gpc: boolean;
}

export interface LeadForwardInput {
  fields: LeadFields;
  tracking: LeadTracking;
  context: LeadRequestContext;
}

export type ForwardResult = "sent" | "skipped" | "failed";

const CRM_SOURCES = new Set(["quote_modal", "contact_page", "hero_form", "assistant"]);

/** Keeps only non-empty strings, so the CRM never stores blank answers. */
function present(entries: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(entries).filter(([, value]) => value));
}

/**
 * The CRM's lead body, or null when the lead cannot be recorded there: the CRM needs an email
 * address (the site's forms accept a phone number alone), a valid event id and a known source.
 */
export function buildIngestPayload({ fields, tracking, context }: LeadForwardInput): Record<string, unknown> | null {
  if (!fields.email || !tracking.eventId || !CRM_SOURCES.has(tracking.leadSource)) return null;

  return {
    v: 1,
    source: tracking.leadSource,
    event_id: tracking.eventId,
    contact: present({
      email: fields.email,
      name: fields.name,
      phone: fields.phone,
      website: fields.currentUrl,
    }),
    form: present({
      locale: fields.locale,
      current_platform: fields.currentPlatform,
      primary_goal: fields.primaryGoal,
      traffic_band: fields.trafficBand,
      already_tried: fields.alreadyTried,
      traffic_source: fields.trafficSource,
      traffic_medium: fields.trafficMedium,
      traffic_campaign: fields.trafficCampaign,
    }),
    service: fields.service,
    budget: fields.budget,
    timeline: fields.timeline,
    details: fields.details,
    attribution: present({
      landing_page: fields.landingPage,
      first_visit: fields.firstVisit,
      submitted_from: fields.submittedFrom,
      event_source_url: fields.submittedFrom ? `${context.origin}${fields.submittedFrom}` : "",
      utm_source: tracking.utmSource,
      utm_medium: tracking.utmMedium,
      utm_campaign: tracking.utmCampaign,
      utm_term: tracking.utmTerm,
      utm_content: tracking.utmContent,
      gclid: tracking.gclid,
      gbraid: tracking.gbraid,
      wbraid: tracking.wbraid,
      fbclid: tracking.fbclid,
      fbc: tracking.fbc,
      fbp: tracking.fbp,
    }),
    context: {
      ...present({
        client_ip: context.clientIp,
        user_agent: context.userAgent,
        country: context.country,
        region: context.region,
      }),
      gpc: context.gpc,
      marketing_consent: tracking.marketingConsent,
    },
  };
}

export function signIngest(rawBody: string, timestamp: string, secret: string): string {
  return createHmac("sha256", secret).update(`${timestamp}.${rawBody}`).digest("hex");
}

const TIMEOUT_MS = 3000;
const ATTEMPTS = 2;

export async function forwardLeadToCrm(
  input: LeadForwardInput,
  env: Record<string, string | undefined> = process.env,
  fetchImpl: typeof fetch = fetch,
): Promise<ForwardResult> {
  try {
    const url = env.CRM_INGEST_URL?.trim();
    const secret = env.CRM_INGEST_SECRET?.trim();
    if (!url || !secret) return "skipped";

    const payload = buildIngestPayload(input);
    if (!payload) return "skipped";
    const rawBody = JSON.stringify(payload);
    const eventId = input.tracking.eventId;

    for (let attempt = 1; attempt <= ATTEMPTS; attempt += 1) {
      // A retry signs again with a fresh timestamp: the CRM rejects an exact replay, and it
      // treats the same event_id as the same lead, so a second try cannot duplicate it.
      const timestamp = String(Math.floor(Date.now() / 1000));
      try {
        const response = await fetchImpl(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-timestamp": timestamp,
            "x-signature": signIngest(rawBody, timestamp, secret),
          },
          body: rawBody,
          signal: AbortSignal.timeout(TIMEOUT_MS),
        });
        if (response.ok) return "sent";
        // A 4xx means the CRM rejected this lead; trying again with the same body cannot help.
        if (response.status < 500) {
          console.error(`CRM ingest rejected lead ${eventId}: HTTP ${response.status}`);
          return "failed";
        }
        console.error(`CRM ingest error for lead ${eventId}: HTTP ${response.status} (attempt ${attempt})`);
      } catch (error) {
        const reason = error instanceof Error ? error.name : "unknown";
        console.error(`CRM ingest unreachable for lead ${eventId}: ${reason} (attempt ${attempt})`);
      }
    }
    return "failed";
  } catch (error) {
    console.error("CRM ingest forwarding error:", error instanceof Error ? error.name : "unknown");
    return "failed";
  }
}
