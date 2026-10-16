"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const [loadLib, setLoadLib] = useState(false);
  const initialized = useRef(false);

  // Defer the heavy gtag/js library (155 KiB, ~178ms main-thread) until the
  // first real user interaction, with a 10s fallback for non-interactors.
  // This keeps GTM out of the Lighthouse TBT window (FCP -> TTI) entirely,
  // while the lightweight stub below still queues every event in the meantime.
  useEffect(() => {
    if (!GA_ID || loadLib) return;

    const fire = () => setLoadLib(true);
    const events = ["scroll", "mousemove", "touchstart", "keydown", "click"];
    const opts: AddEventListenerOptions = { once: true, passive: true };
    events.forEach((e) => window.addEventListener(e, fire, opts));
    const timer = window.setTimeout(fire, 10000);

    return () => {
      events.forEach((e) => window.removeEventListener(e, fire, opts));
      window.clearTimeout(timer);
    };
  }, [loadLib]);

  useEffect(() => {
    if (!GA_ID || typeof window === "undefined") return;

    const gtag = ensureGtag();

    if (!initialized.current) {
      gtag("js", new Date());
      gtag("config", GA_ID, { send_page_view: false });
      initialized.current = true;
    }

    // Queue exactly one view on consent-time mount, then one per route change.
    gtag("event", "page_view", { page_path: pathname });
  }, [pathname]);

  if (!GA_ID) return null;

  return (
    <>
      {/* Heavy library: loaded only after interaction or the 10s fallback. It
          drains the queued dataLayer events on arrival, so nothing is lost. */}
      {loadLib && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
      )}
    </>
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
