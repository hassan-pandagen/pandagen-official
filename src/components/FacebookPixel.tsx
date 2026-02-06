"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function FacebookPixel() {
  const pathname = usePathname();

  useEffect(() => {
    // Load Facebook Pixel
    const loadFBPixel = () => {
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
      t.src = v;
      const s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    };

    loadFBPixel();

    // Initialize pixel
    if ((window as any).fbq) {
      (window as any).fbq('init', '1612130730207311');
      (window as any).fbq('track', 'PageView');
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  }, [pathname]);

  return (
    <>
      {/* Noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1612130730207311&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}

// Export helper function for tracking custom events
export const trackFBEvent = (eventName: string, params?: any) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, params);
  }
};
