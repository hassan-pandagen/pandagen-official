"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Skip on mobile — smooth scroll is a desktop-only enhancement
    if (window.innerWidth < 768) return;

    let lenis: import("lenis").default | null = null;
    let rafId: number;
    let loaded = false;

    const init = async () => {
      if (loaded) return;
      loaded = true;

      const { default: Lenis } = await import("lenis");
      lenis = new Lenis({ lerp: 0.075, duration: 1.2, smoothWheel: true, touchMultiplier: 0 });

      function raf(time: number) {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    };

    // Defer briefly so it never blocks LCP paint, but starts quickly
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => init(), { timeout: 1000 });
    } else {
      setTimeout(() => init(), 1000);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  // No wrapper div — children render exactly as-is, zero re-render on mount
  return <>{children}</>;
}
