"use client";

import { useEffect, useCallback, ReactNode } from "react";
import { useConsent } from "@/components/consent/ConsentProvider";
import { trackGAEvent } from "@/components/GoogleAnalytics";

interface CalModalButtonProps {
  children: ReactNode;
  className?: string;
  /**
   * Where to send the visitor when NEXT_PUBLIC_CAL_LINK is not configured.
   *
   * Without this the component dispatches `open-quote-modal`, which is the right
   * fallback on a blog post but wrong when the button already lives INSIDE the
   * quote modal -- the visitor asked to talk to someone and would be handed back
   * the form they just declined. Pass the booking URL there instead.
   */
  fallbackHref?: string;
}

// The booking handle is not a secret and it was already hardcoded in two page
// files, so the env var is an override rather than a requirement. Leaving it
// required meant NEXT_PUBLIC_CAL_LINK being unset silently downgraded every
// "Book a discovery call" button to a new browser tab -- which is the behaviour
// the modal exists to replace.
const DEFAULT_CAL_LINK = 'pandagen/discovery';

const CAL_LINK = (() => {
  const candidate = process.env.NEXT_PUBLIC_CAL_LINK?.trim();
  return candidate && /^[a-z0-9][a-z0-9_-]*\/[a-z0-9][a-z0-9_-]*$/i.test(candidate)
    ? candidate
    : DEFAULT_CAL_LINK;
})();

export default function CalModalButton({ children, className, fallbackHref }: CalModalButtonProps) {
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
      if (fallbackHref) {
        window.open(fallbackHref, "_blank", "noopener,noreferrer");
        return;
      }
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
  }, [allowed, openPreferences, fallbackHref]);

  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  );
}
