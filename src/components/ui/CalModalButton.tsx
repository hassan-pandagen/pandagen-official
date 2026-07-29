"use client";

import { useEffect, useCallback, ReactNode } from "react";
import { useConsent } from "@/components/consent/ConsentProvider";
import { trackGAEvent } from "@/components/GoogleAnalytics";

interface CalModalButtonProps {
  children: ReactNode;
  className?: string;
}

const CAL_LINK = (() => {
  const candidate = process.env.NEXT_PUBLIC_CAL_LINK?.trim();
  return candidate && /^[a-z0-9][a-z0-9_-]*\/[a-z0-9][a-z0-9_-]*$/i.test(candidate)
    ? candidate
    : null;
})();

export default function CalModalButton({ children, className }: CalModalButtonProps) {
  const { preferences, openPreferences } = useConsent();
  const allowed = preferences?.functional === true;

  useEffect(() => {
    if (!allowed || !CAL_LINK) return;
    let loaded = false;

    async function loadCal() {
      if (loaded) return;
      loaded = true;

      const { getCalApi } = await import("@calcom/embed-react");
      const cal = await getCalApi({ namespace: "discovery" });

      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: {
            "cal-brand": "#B8410C",
            "cal-text": "#ffffff",
            "cal-background": "#050505",
          },
          light: {
            "cal-brand": "#B8410C",
            "cal-text": "#000000",
            "cal-background": "#ffffff",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      cal("on", {
        action: "bookingSuccessful",
        callback: () => {
          trackGAEvent("cal_booking", {
            form_id: "discovery_calendar",
          });
        },
      });
    }

    loadCal();
  }, [allowed]);

  const openModal = useCallback(async () => {
    if (!CAL_LINK) {
      window.dispatchEvent(new Event("open-quote-modal"));
      return;
    }
    if (!allowed) {
      window.__calOpenPending = true;
      openPreferences("calendar");
      return;
    }
    const { getCalApi } = await import("@calcom/embed-react");
    const cal = await getCalApi({ namespace: "discovery" });
    cal("modal", {
      calLink: CAL_LINK,
      config: { layout: "month_view" },
    });
  }, [allowed, openPreferences]);

  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  );
}
