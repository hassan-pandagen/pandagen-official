import { createHmac } from "node:crypto";

/**
 * The visitor context a booked call carries to the CRM (22 Nov 2026).
 *
 * A cal.com booking has no consent choice, country or ad-click id of its own, so the CRM could
 * only send a booking to Meta when the same person had filled in a form first. Before the
 * calendar opens, the site asks /api/booking-context for these values, signs them, and the
 * calendar passes them into the booking as metadata. cal.com sends that metadata back in the
 * BOOKING_CREATED webhook, and the CRM checks the signature before trusting any of it.
 *
 * Keys and values follow cal.com's metadata limits (keys up to 40 characters, values up to
 * 500). The signature covers every pcg_ key, so a visitor cannot edit the consent or country
 * in the booking URL. Mirrors the CRM's booking-context.ts; change both together.
 */

export const BOOKING_CONTEXT_VERSION = "1";
const MAX_VALUE = 500;

export interface BookingContextInput {
  clientIp: string;
  userAgent: string;
  country: string;
  region: string;
  gpc: boolean;
  marketingConsent: boolean;
  origin: string;
  fbc: string;
  fbp: string;
  fbclid: string;
  gclid: string;
  gbraid: string;
  wbraid: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  landingPage: string;
  firstVisit: string;
  submittedFrom: string;
}

/** Control characters would break the signed text, so they are removed, not escaped. */
function clean(value: string): string {
  return value.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, MAX_VALUE);
}

/** The exact text that is signed: every pcg_ key except the signature, sorted, one per line. */
export function canonicalBookingContext(metadata: Record<string, string>): string {
  return Object.keys(metadata)
    .filter((key) => key.startsWith("pcg_") && key !== "pcg_sig")
    .sort()
    .map((key) => `${key}=${metadata[key]}`)
    .join("\n");
}

export function signBookingContext(
  input: BookingContextInput,
  secret: string,
  now: Date = new Date()
): Record<string, string> {
  const fields: Record<string, string> = {
    pcg_v: BOOKING_CONTEXT_VERSION,
    pcg_iat: String(Math.floor(now.getTime() / 1000)),
    pcg_consent: input.marketingConsent ? "1" : "0",
    pcg_gpc: input.gpc ? "1" : "0",
    pcg_ip: input.clientIp,
    pcg_ua: input.userAgent,
    pcg_country: input.country,
    pcg_region: input.region,
    pcg_fbc: input.fbc,
    pcg_fbp: input.fbp,
    pcg_fbclid: input.fbclid,
    pcg_gclid: input.gclid,
    pcg_gbraid: input.gbraid,
    pcg_wbraid: input.wbraid,
    pcg_utm_source: input.utmSource,
    pcg_utm_medium: input.utmMedium,
    pcg_utm_campaign: input.utmCampaign,
    pcg_utm_term: input.utmTerm,
    pcg_utm_content: input.utmContent,
    pcg_landing_page: input.landingPage,
    pcg_first_visit: input.firstVisit,
    pcg_submitted_from: input.submittedFrom,
    pcg_source_url: input.submittedFrom ? `${input.origin}${input.submittedFrom}` : "",
  };
  // Empty values are left out, as the lead hand-off does, so the CRM never stores blanks.
  const metadata = Object.fromEntries(
    Object.entries(fields)
      .map(([key, value]) => [key, clean(value)] as const)
      .filter(([, value]) => value)
  );
  metadata.pcg_sig = createHmac("sha256", secret).update(canonicalBookingContext(metadata)).digest("hex");
  return metadata;
}
