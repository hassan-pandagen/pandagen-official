"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const [loadLib, setLoadLib] = useState(false);

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
    if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
    window.gtag("event", "page_view", { page_path: pathname });
  }, [pathname]);

  if (!GA_ID) return null;

  return (
    <>
      {/* Lightweight stub: defines gtag + dataLayer immediately so page_view and
          trackGAEvent() calls queue before the heavy library arrives. Near-zero cost. */}
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}
      </Script>
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
 * Falls back to dataLayer push if gtag hasn't loaded yet.
 * Usage: trackGAEvent("audit_url_submit", { url: "..." });
 */
export function trackGAEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (window.gtag) {
    window.gtag("event", name, params);
  } else {
    // gtag not ready yet — push directly to dataLayer queue
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });
  }
}
