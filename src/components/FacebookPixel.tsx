"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { hasConsent } from '@/components/consent/ConsentProvider';

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();

export default function FacebookPixel() {
  const pathname = usePathname();

  useEffect(() => {
    if (!META_PIXEL_ID) return;

    let loaded = false;

    // Load Facebook Pixel only on user interaction (click, scroll, touch)
    const loadFBPixel = () => {
      if (loaded) return;
      loaded = true;

      const f: any = window;
      const b: any = document;
      const e = 'script';
      const v = 'https://connect.facebook.net/en_US/fbevents.js';

      if (f.fbq) return;

      const n: any = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };

      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];

      const t = b.createElement(e);
      t.async = true;
      t.defer = true;
      t.src = v;
      const s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);

      // Initialize pixel after loading
      setTimeout(() => {
        if ((window as any).fbq) {
          (window as any).fbq('init', META_PIXEL_ID);
          (window as any).fbq('track', 'PageView');
        }
      }, 100);
    };

    // Load on user interaction
    const events = ['mousedown', 'touchstart', 'scroll', 'keydown'];
    const handleInteraction = () => {
      loadFBPixel();
      events.forEach(event => window.removeEventListener(event, handleInteraction));
    };

    events.forEach(event => window.addEventListener(event, handleInteraction, { passive: true, once: true }));

    return () => {
      events.forEach(event => window.removeEventListener(event, handleInteraction));
    };
  }, []);

  // Track page views on route change
  useEffect(() => {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  }, [pathname]);

  // A noscript tracking image cannot read an informed consent choice, so it is
  // intentionally omitted. The pixel only mounts after marketing consent.
  return null;
}

// Export helper function for tracking custom events
export const trackFBEvent = (eventName: string, params?: any) => {
  if (typeof window !== 'undefined' && hasConsent('marketing') && (window as any).fbq) {
    (window as any).fbq('track', eventName, params);
  }
};
