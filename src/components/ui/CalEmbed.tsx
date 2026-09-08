"use client";

import { useEffect } from "react";
import { useConsent } from "@/components/consent/ConsentProvider";

const CAL_LINK = (() => {
  const candidate = process.env.NEXT_PUBLIC_CAL_LINK?.trim();
  return candidate && /^[a-z0-9][a-z0-9_-]*\/[a-z0-9][a-z0-9_-]*$/i.test(candidate)
    ? candidate
    : null;
})();

export default function CalEmbed() {
  const { preferences, openPreferences } = useConsent();
  const allowed = preferences?.functional === true;

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

    async function loadCal() {
      if (loaded || cancelled) return;
      loaded = true;
      const { getCalApi } = await import("@calcom/embed-react");
      if (cancelled) return;
      const cal = await getCalApi({ namespace: "discovery" });
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

    const trigger = () => void loadCal();
    const events = ["mousedown", "touchstart", "scroll", "keydown"] as const;
    events.forEach((event) => window.addEventListener(event, trigger, { once: true, passive: true }));
    const timer = window.setTimeout(trigger, 10000);
    if (window.__calOpenPending) trigger();

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, trigger));
    };
  }, [allowed]);

  return null;
}
