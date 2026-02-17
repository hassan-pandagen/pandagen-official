"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false); // Default false to match server
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      // 768px is the standard md breakpoint
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // While loading, just render children to prevent mismatch
  if (!mounted) {
    return <div className="overflow-x-hidden relative z-10">{children}</div>;
  }

  // If mobile, disable Lenis (Native Scroll is better on phone)
  if (isMobile) {
    return <div className="overflow-x-hidden relative z-10">{children}</div>;
  }

  // Desktop Luxury Scroll
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="relative z-10">
        {children}
      </div>
    </ReactLenis>
  );
}
