"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function MicrosoftClarity() {
  const pathname = usePathname();

  useEffect(() => {
    if (!CLARITY_ID) return;

    let loaded = false;

    const loadClarity = () => {
      if (loaded) return;
      loaded = true;

      (function (c: any, l: any, a: string, r: string, i: string) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        const t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        const y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", CLARITY_ID);
    };

    // Load on first user interaction to avoid hurting Core Web Vitals
    const events = ['mousedown', 'touchstart', 'scroll', 'keydown'];
    const handleInteraction = () => {
      loadClarity();
      events.forEach(e => window.removeEventListener(e, handleInteraction));
    };

    events.forEach(e => window.addEventListener(e, handleInteraction, { passive: true, once: true }));

    // Fallback: load after 4s if no interaction
    const fallback = setTimeout(loadClarity, 4000);

    return () => {
      clearTimeout(fallback);
      events.forEach(e => window.removeEventListener(e, handleInteraction));
    };
  }, []);

  // Track page changes
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity('set', 'page', pathname);
    }
  }, [pathname]);

  return null;
}
