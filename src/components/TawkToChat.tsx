"use client";

import { useEffect } from 'react';

export default function TawkToChat() {
  useEffect(() => {
    // Function to get traffic source
    const getTrafficSource = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const referrer = document.referrer;

      // Priority 1: UTM parameters
      if (urlParams.get('utm_source')) {
        return {
          source: urlParams.get('utm_source') || 'unknown',
          medium: urlParams.get('utm_medium') || 'unknown',
          campaign: urlParams.get('utm_campaign') || 'none',
          term: urlParams.get('utm_term') || 'none',
          content: urlParams.get('utm_content') || 'none',
        };
      }

      // Priority 2: Referrer detection
      if (referrer) {
        if (referrer.includes('google.com')) return { source: 'Google', medium: 'organic', campaign: 'none' };
        if (referrer.includes('facebook.com')) return { source: 'Facebook', medium: 'social', campaign: 'none' };
        if (referrer.includes('linkedin.com')) return { source: 'LinkedIn', medium: 'social', campaign: 'none' };
        if (referrer.includes('twitter.com') || referrer.includes('x.com')) return { source: 'Twitter/X', medium: 'social', campaign: 'none' };
        if (referrer.includes('instagram.com')) return { source: 'Instagram', medium: 'social', campaign: 'none' };
        if (referrer.includes('reddit.com')) return { source: 'Reddit', medium: 'social', campaign: 'none' };
        if (referrer.includes('youtube.com')) return { source: 'YouTube', medium: 'video', campaign: 'none' };
        if (referrer.includes('bing.com')) return { source: 'Bing', medium: 'organic', campaign: 'none' };
        if (referrer.includes('yahoo.com')) return { source: 'Yahoo', medium: 'organic', campaign: 'none' };

        // Other referrer
        try {
          const refDomain = new URL(referrer).hostname;
          return { source: refDomain, medium: 'referral', campaign: 'none' };
        } catch (e) {
          return { source: 'unknown-referrer', medium: 'referral', campaign: 'none' };
        }
      }

      // Priority 3: Direct traffic
      return { source: 'Direct', medium: 'none', campaign: 'none' };
    };

    // Store source in localStorage on first visit
    const storeSource = () => {
      if (!localStorage.getItem('trafficSource')) {
        const source = getTrafficSource();
        localStorage.setItem('trafficSource', JSON.stringify({
          ...source,
          landingPage: window.location.pathname,
          timestamp: new Date().toISOString(),
          fullUrl: window.location.href,
        }));
      }
    };

    // Load Tawk.to script
    const loadTawkTo = () => {
      var Tawk_API: any = (window as any).Tawk_API || {};
      var Tawk_LoadStart = new Date();

      (function() {
        var s1 = document.createElement("script");
        var s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/69861ee219d9521c3a42fa82/1jgpuh9j5';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');

        // When Tawk.to loads, send source info
        s1.onload = function() {
          if ((window as any).Tawk_API) {
            const sourceData = JSON.parse(localStorage.getItem('trafficSource') || '{}');

            // Set visitor attributes with traffic source
            (window as any).Tawk_API.onLoad = function() {
              (window as any).Tawk_API.setAttributes({
                'Traffic Source': sourceData.source || 'Unknown',
                'Medium': sourceData.medium || 'Unknown',
                'Campaign': sourceData.campaign || 'None',
                'Landing Page': sourceData.landingPage || '/',
                'First Visit': sourceData.timestamp || 'Unknown',
                'Current Page': window.location.pathname,
                'Full URL': window.location.href,
              }, function(error: any) {
                if (error) console.log('Tawk.to attribute error:', error);
              });
            };
          }
        };

        s0.parentNode?.insertBefore(s1, s0);
      })();
    };

    // Execute traffic source tracking immediately
    storeSource();

    // Defer TawkTo loading until after page is interactive
    if (document.readyState === 'complete') {
      setTimeout(loadTawkTo, 2000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(loadTawkTo, 2000);
      });
    }

    // Update current page on route change
    const updateCurrentPage = () => {
      if ((window as any).Tawk_API && (window as any).Tawk_API.setAttributes) {
        (window as any).Tawk_API.setAttributes({
          'Current Page': window.location.pathname,
        });
      }
    };

    // Listen for route changes (for Next.js navigation)
    window.addEventListener('popstate', updateCurrentPage);

    return () => {
      window.removeEventListener('popstate', updateCurrentPage);
    };
  }, []);

  return null;
}
