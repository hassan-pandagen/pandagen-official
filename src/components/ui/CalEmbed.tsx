"use client";

import { useEffect } from "react";

export default function CalEmbed() {
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
    }

    // Load on first user interaction (whichever comes first)
    const trigger = () => loadCal();
    const events = ["mousedown", "touchstart", "scroll", "keydown"] as const;
    events.forEach((e) => window.addEventListener(e, trigger, { once: true, passive: true }));

    // Fallback: load during browser idle time, or after 3s on Safari
    let idleId: ReturnType<typeof setTimeout> | number;
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => loadCal(), { timeout: 3000 });
    } else {
      idleId = setTimeout(() => loadCal(), 3000);
    }

    return () => {
      events.forEach((e) => window.removeEventListener(e, trigger));
      if ("cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId as number);
      } else {
        clearTimeout(idleId as ReturnType<typeof setTimeout>);
      }
    };
  }, []);

  return null;
}
