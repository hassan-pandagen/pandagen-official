"use client";

import { useEffect, useRef } from "react";
import { hasConsent, useConsent } from "@/components/consent/ConsentProvider";
import { trackGAEvent } from "@/components/GoogleAnalytics";

const CAL_LINK = (() => {
  const candidate = process.env.NEXT_PUBLIC_CAL_LINK?.trim();
  return candidate && /^[a-z0-9][a-z0-9_-]*\/[a-z0-9][a-z0-9_-]*$/i.test(candidate)
    ? candidate
    : "pandagen/discovery";
})();

export default function CalEmbed() {
  const { preferences, openPreferences } = useConsent();
  const allowed = preferences?.functional === true;
  const trackedBookings = useRef(new Set<string>());

  useEffect(() => {
    if (allowed && CAL_LINK) return;

    const blockUnconsentedCalendar = (event: MouseEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest('[data-cal-link], [data-cal-namespace="discovery"]')
        : null;
      if (!target) return;
      event.preventDefault();
      event.stopPropagation();
      if (!CAL_LINK) {
        window.dispatchEvent(new Event("open-quote-modal"));
        return;
      }
      window.__calOpenPending = true;
      openPreferences("calendar");
    };

    document.addEventListener("click", blockUnconsentedCalendar, true);
    return () => document.removeEventListener("click", blockUnconsentedCalendar, true);
  }, [allowed, openPreferences]);

  useEffect(() => {
    if (!allowed || !CAL_LINK) return;
    const calLink: string = CAL_LINK;
    let loaded = false;
    let cancelled = false;
    let unsubscribe: (() => void) | undefined;

    async function loadCal() {
      if (loaded || cancelled) return;
      loaded = true;
      const { getCalApi } = await import("@calcom/embed-react");
      if (cancelled) return;
      const cal = await getCalApi({ namespace: "discovery" });
      if (cancelled) return;
      // One listener for the whole site, rather than one per booking button.
      const onBooking = (event: CustomEvent<{ data: { uid?: string } }>) => {
        if (cancelled || !hasConsent("functional") || !hasConsent("analytics")) return;
        const uid = event.detail.data.uid;
        if (uid && trackedBookings.current.has(uid)) return;
        if (uid) trackedBookings.current.add(uid);
        // The booking ID is used only in memory for deduplication, never sent.
        trackGAEvent("cal_booking", { form_id: "discovery_calendar" });
      };
      cal("on", { action: "bookingSuccessfulV2", callback: onBooking });
      unsubscribe = () => cal("off", { action: "bookingSuccessfulV2", callback: onBooking });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: { "cal-brand": "#B8410C", "cal-text": "#ffffff", "cal-background": "#1C1917" },
          light: { "cal-brand": "#B8410C", "cal-text": "#1C1917", "cal-background": "#ffffff" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      if (window.__calOpenPending) {
        window.__calOpenPending = false;
        cal("modal", { calLink, config: { layout: "month_view" } });
      }
    }

    // Register as soon as functional consent is granted, including when the
    // visitor opens the calendar immediately after accepting preferences.
    void loadCal().catch(() => { /* A later booking-button click can retry loading. */ });

    return () => {
      cancelled = true;
      unsubscribe?.();
    };
  }, [allowed]);

  return null;
}
