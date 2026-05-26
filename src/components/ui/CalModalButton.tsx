"use client";

import { useEffect, useCallback, ReactNode } from "react";

interface CalModalButtonProps {
  children: ReactNode;
  className?: string;
}

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

export default function CalModalButton({ children, className }: CalModalButtonProps) {
  useEffect(() => {
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
            "cal-brand": "#3B82F6",
            "cal-text": "#ffffff",
            "cal-background": "#050505",
          },
          light: {
            "cal-brand": "#3B82F6",
            "cal-text": "#000000",
            "cal-background": "#ffffff",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      cal("on", {
        action: "bookingSuccessful",
        callback: (event) => {
          const data = event?.detail?.data;
          const eventTypeTitle =
            (data?.eventType as { title?: string } | undefined)?.title ?? "discovery";
          const gtag = (window as GtagWindow).gtag;
          if (typeof gtag === "function") {
            gtag("event", "cal_booking", {
              event_category: "conversion",
              event_label: eventTypeTitle,
              booking_date: data?.date,
            });
          }
        },
      });
    }

    loadCal();
  }, []);

  const openModal = useCallback(async () => {
    const { getCalApi } = await import("@calcom/embed-react");
    const cal = await getCalApi({ namespace: "discovery" });
    cal("modal", {
      calLink: "pandagen/discovery",
      config: { layout: "month_view" },
    });
  }, []);

  return (
    <button onClick={openModal} className={className}>
      {children}
    </button>
  );
}
