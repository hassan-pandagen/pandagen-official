"use client";

import { useCallback, ReactNode } from "react";
import { useConsent } from "@/components/consent/ConsentProvider";
import { CAL_LINK } from "@/lib/booking";

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

// CAL_LINK falls back to the default handle when NEXT_PUBLIC_CAL_LINK is unset, so
// an unset env var never silently downgrades the modal to a new browser tab.

export default function CalModalButton({ children, className, fallbackHref }: CalModalButtonProps) {
  const { preferences, openPreferences } = useConsent();
  const allowed = preferences?.functional === true;

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
