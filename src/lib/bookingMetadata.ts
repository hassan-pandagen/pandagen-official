"use client";

import { appendClickTracking } from "@/lib/analytics/leadTracking";
import { getAttribution } from "@/lib/analytics/trafficSource";
import { appendLeadContext } from "@/lib/forms/leadPayload";

/**
 * cal.com embed config entries that carry the signed visitor context into a booking, as
 * `metadata[key]` (22 Nov 2026; see src/lib/crm/bookingContext.ts). Returns {} on any failure
 * or after 1.5 seconds, so the calendar always opens.
 */
export async function bookingMetadataConfig(): Promise<Record<string, string>> {
  try {
    const formData = new FormData();
    appendLeadContext(formData, { attribution: getAttribution(), submittedFrom: window.location.pathname });
    appendClickTracking(formData);
    const response = await fetch("/api/booking-context", {
      method: "POST",
      body: formData,
      signal: AbortSignal.timeout(1500),
    });
    if (!response.ok) return {};
    const { metadata } = (await response.json()) as { metadata?: Record<string, string> };
    return Object.fromEntries(Object.entries(metadata ?? {}).map(([key, value]) => [`metadata[${key}]`, value]));
  } catch {
    return {};
  }
}
