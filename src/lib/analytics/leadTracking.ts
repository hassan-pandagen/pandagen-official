"use client";

import { hasConsent } from "@/components/consent/ConsentProvider";
import { readClickIds } from "@/lib/analytics/clickIds";

/**
 * What a form sends along with a lead so the CRM can report it to Meta and Google.
 *
 * `eventId` is generated here, once per submission. The browser Pixel `Lead` and the CRM's
 * server-side `Lead` both carry it, which is how Meta recognises them as one event instead
 * of counting two. The caller passes the returned id to trackFBEvent.
 *
 * Nothing here can fail a submission: every read is guarded and a missing value is simply
 * left out. `marketingConsent` is the visitor's actual cookie-banner choice; the CRM decides
 * from it, the visitor's country and Global Privacy Control whether anything may be sent.
 */

export type LeadSource = "quote_modal" | "contact_page" | "hero_form" | "assistant";

function newEventId(): string {
  try {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  } catch {
    return "";
  }
}

function readCookie(name: string): string {
  try {
    const match = document.cookie.split("; ").find((part) => part.startsWith(`${name}=`));
    return match ? decodeURIComponent(match.slice(name.length + 1)) : "";
  } catch {
    return "";
  }
}

export function appendLeadTracking(formData: FormData, source: LeadSource): { eventId: string } {
  const eventId = newEventId();
  const put = (key: string, value: string | undefined) => {
    if (value) formData.append(key, value);
  };

  put("eventId", eventId);
  put("leadSource", source);
  formData.append("marketingConsent", hasConsent("marketing") ? "1" : "0");

  const ids = readClickIds();
  put("gclid", ids.gclid);
  put("gbraid", ids.gbraid);
  put("wbraid", ids.wbraid);
  put("fbclid", ids.fbclid);
  put("utmSource", ids.utm_source);
  put("utmMedium", ids.utm_medium);
  put("utmCampaign", ids.utm_campaign);
  put("utmTerm", ids.utm_term);
  put("utmContent", ids.utm_content);

  // _fbp exists only once the Pixel has loaded, which needs marketing consent. When there is
  // an fbclid but no _fbc yet, build it the way Meta documents: fb.<domain level>.<ms>.<fbclid>.
  put("fbp", readCookie("_fbp"));
  const fbc = readCookie("_fbc") || (ids.fbclid ? `fb.1.${ids.fbclid_at ?? Date.now()}.${ids.fbclid}` : "");
  put("fbc", fbc);

  return { eventId };
}
