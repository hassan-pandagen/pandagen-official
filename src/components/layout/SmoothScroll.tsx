"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Only load Lenis on desktop — never downloaded on mobile
const DesktopLenis = dynamic(
  () => import("lenis/react").then((m) => {
    const ReactLenis = m.ReactLenis;
    return function LenisWrapper({ children }: { children: React.ReactNode }) {
      return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
          <div className="relative z-10">{children}</div>
        </ReactLenis>
      );
    };
  }),
  { ssr: false }
);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(true); // Default true — safe for SSR
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (!mounted || isMobile) {
    return <div className="overflow-x-hidden relative z-10">{children}</div>;
  }

  return <DesktopLenis>{children}</DesktopLenis>;
}
