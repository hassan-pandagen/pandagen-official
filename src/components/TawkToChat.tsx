"use client";

import { useEffect } from 'react';

// ─── Helpers ────────────────────────────────────────────────────────────────

function getTrafficSource() {
  const params = new URLSearchParams(window.location.search);
  const ref = document.referrer;

  // Priority 1: UTM parameters (paid/email campaigns)
  if (params.get('utm_source')) {
    return {
      source:   params.get('utm_source')   || 'unknown',
      medium:   params.get('utm_medium')   || 'unknown',
      campaign: params.get('utm_campaign') || 'none',
      term:     params.get('utm_term')     || 'none',
      content:  params.get('utm_content')  || 'none',
    };
  }

  // Priority 2: Referrer detection
  if (ref) {
    const map: Record<string, { source: string; medium: string }> = {
      'google.com':    { source: 'Google',      medium: 'organic' },
      'bing.com':      { source: 'Bing',        medium: 'organic' },
      'yahoo.com':     { source: 'Yahoo',       medium: 'organic' },
      'duckduckgo.com':{ source: 'DuckDuckGo',  medium: 'organic' },
      'facebook.com':  { source: 'Facebook',    medium: 'social' },
      'instagram.com': { source: 'Instagram',   medium: 'social' },
      'linkedin.com':  { source: 'LinkedIn',    medium: 'social' },
      'twitter.com':   { source: 'Twitter/X',   medium: 'social' },
      'x.com':         { source: 'Twitter/X',   medium: 'social' },
      'reddit.com':    { source: 'Reddit',      medium: 'social' },
      'youtube.com':   { source: 'YouTube',     medium: 'video' },
      'tiktok.com':    { source: 'TikTok',      medium: 'social' },
      'pinterest.com': { source: 'Pinterest',   medium: 'social' },
      'quora.com':     { source: 'Quora',       medium: 'social' },
    };
    for (const [domain, info] of Object.entries(map)) {
      if (ref.includes(domain)) return { ...info, campaign: 'none' };
    }
    try {
      const host = new URL(ref).hostname;
      return { source: host, medium: 'referral', campaign: 'none' };
    } catch {
      return { source: 'unknown-referrer', medium: 'referral', campaign: 'none' };
    }
  }

  return { source: 'Direct', medium: 'none', campaign: 'none' };
}

function getDeviceInfo() {
  const ua = navigator.userAgent;
  const isMobile = /Mobi|Android|iPhone/i.test(ua);
  const isTablet = /iPad|Tablet/i.test(ua) || (isMobile && window.innerWidth >= 768);

  let browser = 'Other';
  if (/Edg\//i.test(ua))        browser = 'Edge';
  else if (/OPR|Opera/i.test(ua)) browser = 'Opera';
  else if (/Chrome/i.test(ua))   browser = 'Chrome';
  else if (/Firefox/i.test(ua))  browser = 'Firefox';
  else if (/Safari/i.test(ua))   browser = 'Safari';

  let os = 'Other';
  if (/Windows/i.test(ua))       os = 'Windows';
  else if (/Mac OS X/i.test(ua)) os = 'macOS';
  else if (/Android/i.test(ua))  os = 'Android';
  else if (/iPhone|iPad/i.test(ua)) os = 'iOS';
  else if (/Linux/i.test(ua))    os = 'Linux';

  return {
    device:  isTablet ? 'Tablet' : isMobile ? 'Mobile' : 'Desktop',
    browser,
    os,
    screen: `${window.screen.width}×${window.screen.height}`,
  };
}

async function getGeoLocation(): Promise<{ country: string; city: string; region: string }> {
  // Use sessionStorage to avoid hammering the API on every page navigation
  const cached = sessionStorage.getItem('visitorGeo');
  if (cached) return JSON.parse(cached);

  try {
    const res = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
    if (!res.ok) throw new Error('geo fetch failed');
    const data = await res.json();
    const geo = {
      country: data.country_name || 'Unknown',
      city:    data.city         || 'Unknown',
      region:  data.region       || 'Unknown',
    };
    sessionStorage.setItem('visitorGeo', JSON.stringify(geo));
    return geo;
  } catch {
    return { country: 'Unknown', city: 'Unknown', region: 'Unknown' };
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function TawkToChat() {
  useEffect(() => {
    // Capture traffic source on first visit (persists across sessions)
    if (!localStorage.getItem('trafficSource')) {
      localStorage.setItem('trafficSource', JSON.stringify({
        ...getTrafficSource(),
        landingPage: window.location.pathname,
        timestamp:   new Date().toISOString(),
        fullUrl:     window.location.href,
      }));
    }

    const loadTawkTo = async () => {
      const sourceData = JSON.parse(localStorage.getItem('trafficSource') || '{}');
      const deviceInfo = getDeviceInfo();
      const geoData    = await getGeoLocation();

      // ⚠️ CRITICAL: Set Tawk_API.onLoad BEFORE injecting the script,
      // otherwise the callback fires before we can attach it.
      const tawkApi = (window as any).Tawk_API || {};
      (window as any).Tawk_API = tawkApi;

      tawkApi.onLoad = function () {
        tawkApi.setAttributes(
          {
            // ── Traffic source ──────────────────────────────
            'Source':       sourceData.source    || 'Direct',
            'Medium':       sourceData.medium    || 'none',
            'Campaign':     sourceData.campaign  || 'none',
            'Landing Page': sourceData.landingPage || '/',
            'First Visit':  sourceData.timestamp  || 'Unknown',

            // ── Geographic location (via IP) ─────────────────
            'Country': geoData.country,
            'City':    geoData.city,
            'Region':  geoData.region,

            // ── Device & browser ─────────────────────────────
            'Device':  deviceInfo.device,
            'Browser': deviceInfo.browser,
            'OS':      deviceInfo.os,
            'Screen':  deviceInfo.screen,

            // ── Current session ──────────────────────────────
            'Current Page': window.location.pathname,
            'Full URL':     window.location.href,
          },
          (error: any) => { if (error) console.log('Tawk.to attr error:', error); }
        );
      };

      // Inject Tawk.to script
      const s1 = document.createElement('script');
      const s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/69861ee219d9521c3a42fa82/1jgpuh9j5';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode?.insertBefore(s1, s0);
    };

    // Lazy-load: on first scroll OR after 5 s — keeps PageSpeed unaffected
    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      loadTawkTo();
    };

    window.addEventListener('scroll', load, { passive: true, once: true });
    const timer = setTimeout(load, 5000);

    // Keep "Current Page" fresh on Next.js client-side navigation
    const updatePage = () => {
      const api = (window as any).Tawk_API;
      if (api?.setAttributes) {
        api.setAttributes({ 'Current Page': window.location.pathname }, () => {});
      }
    };
    window.addEventListener('popstate', updatePage);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', load);
      window.removeEventListener('popstate', updatePage);
    };
  }, []);

  return null;
}
