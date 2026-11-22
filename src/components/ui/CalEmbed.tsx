"use client";

import { useEffect, useRef } from "react";
import { hasConsent, useConsent } from "@/components/consent/ConsentProvider";
import { trackGAEvent } from "@/components/GoogleAnalytics";
import { trackFBEvent } from "@/components/FacebookPixel";
import { CAL_LINK, requestBookingAfterConsent, takePendingBooking } from "@/lib/booking";

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
      requestBookingAfterConsent();
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
        if (cancelled || !hasConsent("functional")) return;
        const uid = event.detail.data.uid;
        if (uid && trackedBookings.current.has(uid)) return;
        if (uid) trackedBookings.current.add(uid);
        // The booking ID also deduplicates repeat events in memory.
        if (hasConsent("analytics")) trackGAEvent("cal_booking", { form_id: "discovery_calendar" });
        // 18 Nov 2026: Meta ads need a booked-call conversion. trackFBEvent sends nothing
        // unless the visitor accepted marketing cookies and the pixel has loaded.
        // 22 Nov 2026: the CRM sends this booking's server Lead and Schedule with the booking
        // uid as event id, so the browser uses the same id and Meta counts each once.
        trackFBEvent("Lead", { content_name: "discovery_calendar" }, uid);
        trackFBEvent("Schedule", { content_name: "discovery_calendar" }, uid);
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

      if (takePendingBooking()) {
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
