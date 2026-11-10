"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { hasConsent } from "@/components/consent/ConsentProvider";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// The gtag stub must push the `arguments` object, exactly as Google's snippet does.
// gtag.js skips plain arrays, so until 17 Oct 2026 the old `(...args) => push(args)`
// stub queued every command and GA4 received nothing at all.
function ensureGtag(): (...args: unknown[]) => void {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag() {
      window.dataLayer!.push(arguments);
    };
  }
  return window.gtag;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const initialized = useRef(false);
  const previousView = useRef<{ pathname: string; location: string } | null>(null);

  useEffect(() => {
    if (!GA_ID || !pathname || !hasConsent("analytics")) return;
    // Also prevents React's development effect replay from duplicating a view.
    if (previousView.current?.pathname === pathname) return;

    const gtag = ensureGtag();

    if (!initialized.current) {
      gtag("js", new Date());
      gtag("config", GA_ID, { send_page_view: false });
      initialized.current = true;
    }

    // Capture navigation context now, not when a delayed library drains its queue.
    // Query strings and fragments can contain contact details: omit them from
    // reported URLs. Keep automatic history pageviews disabled in GA4 as well.
    const location = `${window.location.origin}${pathname}`;
    let referrer = previousView.current?.location ?? "";
    if (!previousView.current && document.referrer) {
      try {
        const url = new URL(document.referrer);
        referrer = `${url.origin}${url.pathname}`;
      } catch { /* Ignore malformed referrers. */ }
    }
    gtag("event", "page_view", {
      page_path: pathname,
      page_location: location,
      page_title: document.title,
      page_referrer: referrer,
    });
    previousView.current = { pathname, location };
  }, [pathname]);

  if (!GA_ID) return null;

  return (
    // ConsentManagedServices mounts this only after analytics consent.
    // Load promptly: waiting for interaction can lose consented short visits.
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      strategy="afterInteractive"
    />
  );
}

/**
 * Helper to fire custom GA4 events from anywhere in the app.
 * Before gtag.js loads, the stub queues the event and gtag.js sends it on arrival.
 * Usage: trackGAEvent("lead_form_completed", { form_id: "quote_modal" });
 * Do not include URLs, contact details, or form-field values in event params.
 */
export function trackGAEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !hasConsent("analytics")) return;
  ensureGtag()("event", name, params);
}
