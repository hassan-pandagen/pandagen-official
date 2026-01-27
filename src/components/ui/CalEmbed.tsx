"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery" });

      // Custom styling to match the Dark & Neon theme
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: {
            "cal-brand": "#22d3ee", // Neon Cyan Color
            "cal-text": "#ffffff",
            "cal-background": "#050505", // Dark Background
          },
          light: {
            "cal-brand": "#22d3ee", // Neon Cyan Color
            "cal-text": "#000000",
            "cal-background": "#ffffff", // Light Background
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return null; // This component is invisible
}
