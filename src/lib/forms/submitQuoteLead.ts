"use client";

import { trackFBEvent } from "@/components/FacebookPixel";
import { trackGAEvent } from "@/components/GoogleAnalytics";
import { appendLeadTracking } from "@/lib/analytics/leadTracking";
import { getAttribution } from "@/lib/analytics/trafficSource";
import { appendLeadContext, quoteErrorMessage } from "@/lib/forms/leadPayload";
import type { LeadSource } from "@/lib/forms/leadSources";
import { localeFromPathname } from "@/lib/i18n/config";

export interface QuoteLeadOptions {
  /** Which form this is, for the CRM. */
  source: LeadSource;
  /** What the Meta Pixel `Lead` event calls it. Value and currency are added here. */
  pixel: { content_name: string; content_category: string };
  /** Parameters of the GA4 `quote_submit` event, which every form fires on success. */
  ga: Record<string, unknown>;
  /** Shown when the route fails without its own message. */
  fallbackError: string;
  formLoadedAt?: number;
  /** Defaults to the language of the page the form is on. */
  locale?: string;
  signal?: AbortSignal;
}

/**
 * Sends a lead to /api/submit-quote and, only if the route accepts it, fires the analytics.
 *
 * 14 Nov 2026: every lead form calls this. Each used to carry its own copy, and the copies
 * drifted: the chat's inline form sent no event id, so the CRM dropped its leads, and the
 * contact page never fired `quote_submit`. A new form calls this too, so it cannot forget.
 *
 * Throws an Error carrying the route's message when the route refuses. Returns quietly when
 * `signal` was aborted after the route answered, without firing anything, because the caller
 * has already moved on.
 */
export async function submitQuoteLead(formData: FormData, options: QuoteLeadOptions): Promise<void> {
  const pathname = window.location.pathname;
  appendLeadContext(formData, {
    attribution: getAttribution(),
    submittedFrom: pathname,
    formLoadedAt: options.formLoadedAt,
    locale: options.locale ?? localeFromPathname(pathname),
  });
  // The same id goes to the server with the lead and to the Pixel below, so Meta counts it once.
  const { eventId } = appendLeadTracking(formData, options.source);

  const response = await fetch("/api/submit-quote", { method: "POST", body: formData, signal: options.signal });
  if (options.signal?.aborted) return;
  if (!response.ok) throw new Error(await quoteErrorMessage(response, options.fallbackError));

  trackFBEvent("Lead", { ...options.pixel, value: 0, currency: "USD" }, eventId);
  trackGAEvent("quote_submit", options.ga);
}
