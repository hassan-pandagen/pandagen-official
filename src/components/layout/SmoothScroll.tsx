"use client";

import { MotionConfig } from "framer-motion";
import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopViewport = window.matchMedia("(min-width: 768px)");
    let lenis: Lenis | null = null;
    let disposed = false;

    const destroyLenis = () => {
      lenis?.destroy();
      lenis = null;
    };

    const init = () => {
      if (lenis || disposed || reducedMotion.matches || !desktopViewport.matches) return;

      lenis = new Lenis({
        autoRaf: true,
        lerp: 0.12,
        smoothWheel: true,
        wheelMultiplier: 1,
        anchors: { offset: -96 },
        stopInertiaOnNavigate: true,
      });
    };

    const reconcile = () => {
      if (reducedMotion.matches || !desktopViewport.matches) {
        destroyLenis();
        return;
      }

      init();
    };

    reducedMotion.addEventListener("change", reconcile);
    desktopViewport.addEventListener("change", reconcile);
    reconcile();

    return () => {
      disposed = true;
      reducedMotion.removeEventListener("change", reconcile);
      desktopViewport.removeEventListener("change", reconcile);
      destroyLenis();
    };
  }, []);

  // This adds no DOM wrapper and makes every Framer Motion consumer respect the
  // operating-system motion preference, including dialogs and audit states.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
