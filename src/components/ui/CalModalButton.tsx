"use client";

import { useEffect, useCallback, ReactNode } from "react";

interface CalModalButtonProps {
  children: ReactNode;
  className?: string;
}

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
