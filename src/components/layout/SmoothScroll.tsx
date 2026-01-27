"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent hydration mismatch

  useEffect(() => {
    // Check if we are on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Run once on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // If mobile, return children WITHOUT Lenis (Native Scroll)
  if (isMobile) {
    return <div className="overflow-x-hidden">{children}</div>;
  }

  // If Desktop, return children WITH Lenis (Luxury Scroll)
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
