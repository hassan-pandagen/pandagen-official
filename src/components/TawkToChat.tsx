"use client";

import { useEffect } from 'react';

// ─── Page Greeting Map ──────────────────────────────────────────────────────
// Maps URL path patterns to suggested founder openers.
// When chat opens, agent sees the right message to lead with based on what page
// the visitor is reading.

const pageGreetings: Array<{ match: string | RegExp; greeting: string; intent: string }> = [
  // ── Webflow blogs ────────────────────────────────────────────────
  {
    match: '/blog/webflow-migration-cost',
    intent: 'Webflow migration pricing',
    greeting: 'Webflow migration? Drop your site URL and I will send a real cost breakdown in 24h. No sales call.',
  },
  {
    match: '/blog/webflow-true-cost',
    intent: 'Webflow pricing comparison',
    greeting: 'Adding up your Webflow bill? Send me your site, I will show you what a custom rebuild costs same scope.',
  },
  {
    match: '/blog/webflow-user-accounts-sunset-date-2026',
    intent: 'Webflow User Accounts sunset',
    greeting: 'Migrating off Webflow User Accounts before Jan 29? I can map your auth in 30 min. Drop your URL.',
  },
  {
    match: '/blog/webflow-migration-50-to-100-pages',
    intent: 'Mid-size Webflow migration',
    greeting: '50 to 100 page Webflow migration? That is our sweet spot. Drop your URL for a same-week estimate.',
  },
  {
    match: '/blog/leaving-webflow-2026',
    intent: 'Leaving Webflow',
    greeting: 'Leaving Webflow? I have done 12 of these. Drop your URL, I will send a migration plan in 24h.',
  },
  {
    match: /\/blog\/webflow-/,
    intent: 'Webflow research',
    greeting: 'Researching Webflow? Drop your current site URL, I will send a free 60-second audit.',
  },

  // ── WordPress blogs ──────────────────────────────────────────────
  {
    match: '/blog/wordpress-migration-cost',
    intent: 'WordPress migration pricing',
    greeting: 'WordPress to Next.js? I will send a fixed-price quote in 24h, no discovery call. Drop your URL.',
  },
  {
    match: '/blog/how-to-fix-slow-wordpress',
    intent: 'WordPress speed fix',
    greeting: 'Slow WordPress? Drop your URL and I will pinpoint exactly what is killing your speed in 60 seconds.',
  },
  {
    match: '/blog/wordpress-ai-security-risk-2026',
    intent: 'WordPress security',
    greeting: 'Worried about WordPress security? Tell me what plugins you run, I will flag the risk plugins free.',
  },
  {
    match: '/blog/wordpress-plugins-destroy-speed',
    intent: 'WordPress plugin audit',
    greeting: 'Plugin bloat killing speed? Send your URL, I will list which plugins to ditch in your stack.',
  },
  {
    match: /\/blog\/wordpress-/,
    intent: 'WordPress research',
    greeting: 'Looking at WordPress alternatives? Drop your URL for a free PageSpeed + plugin audit.',
  },

  // ── Shopify blogs ────────────────────────────────────────────────
  {
    match: '/blog/shopify-dawn-theme-slow',
    intent: 'Shopify Dawn theme speed',
    greeting: 'Dawn theme slow? Drop your store URL, I will show you what is blocking the render in plain English.',
  },
  {
    match: '/blog/shopify-plus-still-slow',
    intent: 'Shopify Plus speed',
    greeting: 'Shopify Plus still slow? Send your store URL, I will benchmark vs your competitor for free.',
  },
  {
    match: '/blog/shopify-app-costs-real-monthly-bill',
    intent: 'Shopify app cost audit',
    greeting: 'Adding up Shopify apps? Drop your URL, I will run a real monthly bill breakdown.',
  },
  {
    match: /\/blog\/shopify-/,
    intent: 'Shopify research',
    greeting: 'Pricing out a Shopify rebuild? Drop your store URL for a free speed and apps audit.',
  },

  // ── GHL / Squarespace / Wix / WooCommerce ─────────────────────────
  {
    match: '/blog/gohighlevel-website-speed',
    intent: 'GHL speed audit',
    greeting: 'GHL site too slow? I rebuilt mine from 28 to 96 PageSpeed in a week. Drop your URL for a free audit.',
  },
  {
    match: '/blog/gohighlevel-migration',
    intent: 'GHL migration',
    greeting: 'Leaving GHL? I have migrated 8 GHL sites in 2026. Drop your URL for a fixed-price quote.',
  },
  {
    match: /\/blog\/squarespace-/,
    intent: 'Squarespace research',
    greeting: 'Squarespace too slow? Drop your URL for a free PageSpeed audit and a fixed-price migration quote.',
  },
  {
    match: /\/blog\/wix-/,
    intent: 'Wix research',
    greeting: 'Looking at Wix alternatives? Drop your URL, I will send a free 60-second audit.',
  },
  {
    match: '/blog/woocommerce-too-slow',
    intent: 'WooCommerce speed',
    greeting: 'WooCommerce slow checkout? Drop your store URL for a free 60-second audit.',
  },

  // ── Cost & comparison blogs ───────────────────────────────────────
  {
    match: '/blog/website-migration-cost-2026',
    intent: 'Migration cost research',
    greeting: 'Pricing out a migration? Send me your current site URL, I will send a real fixed-price quote.',
  },
  {
    match: '/blog/website-rebuild-cost-2026',
    intent: 'Rebuild cost research',
    greeting: 'Budgeting a rebuild? I can give you a fixed-price ballpark in 24 hours. No sales call.',
  },
  {
    match: '/blog/website-redesign-cost',
    intent: 'Redesign cost research',
    greeting: 'Quoting a redesign? Drop your URL, I will send a real fixed-price quote (no discovery call).',
  },
  {
    match: '/blog/cheap-web-developer',
    intent: 'Budget developer search',
    greeting: 'Looking for an affordable developer? Drop your URL, I will give you a fixed price (no agency markup).',
  },
  {
    match: '/blog/top-custom-web-development-agencies-usa-2026',
    intent: 'Agency comparison',
    greeting: 'Comparing agencies? I can show you what we deliver same scope at fixed price. Drop your URL.',
  },
  {
    match: '/blog/pagepro-alternatives',
    intent: 'Pagepro alternative search',
    greeting: 'Comparing Pagepro alternatives? Drop your URL, I will send a same-scope quote in 24h.',
  },

  // ── Performance / technical ───────────────────────────────────────
  {
    match: '/blog/how-to-achieve-100-pagespeed',
    intent: 'PageSpeed optimization',
    greeting: 'Trying to hit 100 PageSpeed? Share your URL, I will show you what is slowing it down in plain English.',
  },
  {
    match: '/blog/core-web-vitals-explained',
    intent: 'Core Web Vitals',
    greeting: 'Fixing Core Web Vitals? Drop your URL, I will benchmark all 3 metrics free.',
  },
  {
    match: '/blog/how-website-speed-affects-seo',
    intent: 'Speed and SEO',
    greeting: 'Worried site speed is hurting SEO? Drop your URL, I will show you the SEO impact in 60 seconds.',
  },

  // ── Service & pricing pages ───────────────────────────────────────
  {
    match: '/pricing',
    intent: 'Pricing page (high intent)',
    greeting: 'Picking a tier? Drop your current site URL and I will tell you exactly which tier fits in 5 min.',
  },
  {
    match: '/services/ecommerce',
    intent: 'E-commerce service',
    greeting: 'E-commerce rebuild? Drop your store URL, I will benchmark speed vs your top competitor free.',
  },
  {
    match: '/services/wix',
    intent: 'Wix migration service',
    greeting: 'Leaving Wix? Drop your URL, I will send a fixed-price quote (no Wix lock-in BS).',
  },
  {
    match: '/services/squarespace',
    intent: 'Squarespace migration service',
    greeting: 'Leaving Squarespace? Drop your URL, I will send a fixed-price migration quote in 24h.',
  },
  {
    match: '/services/woocommerce',
    intent: 'WooCommerce service',
    greeting: 'WooCommerce headless rebuild? Drop your URL for a free speed + checkout audit.',
  },
  {
    match: '/services/custom-engineering',
    intent: 'Custom engineering service',
    greeting: 'Custom build? Tell me what you are trying to do, I will tell you if it is a fit and the price.',
  },
  {
    match: /^\/services/,
    intent: 'Services page',
    greeting: 'Researching services? Drop your URL and what you want fixed, I will quote in 24h.',
  },

  // ── About / contact / work pages ──────────────────────────────────
  {
    match: '/about/hassan',
    intent: 'Founder page (high trust intent)',
    greeting: 'Hi, Hassan here. You found me. Drop your URL and what you want built, I will reply personally.',
  },
  {
    match: '/about/imran',
    intent: 'Co-founder page',
    greeting: 'Hi, Hassan here. Imran is our architecture lead. Drop your URL, I will loop him in if it is technical.',
  },
  {
    match: '/work',
    intent: 'Case studies page',
    greeting: 'Want a case study match? Tell me your platform and scale, I will send the closest receipt.',
  },
  {
    match: '/contact',
    intent: 'Contact page (highest intent)',
    greeting: 'Easier than the form. Drop your URL here and I will reply in under 4 hours.',
  },
  {
    match: '/partners',
    intent: 'Partners page',
    greeting: 'Agency partner inquiry? Tell me your client load, I will send our white-label deck.',
  },

  // ── Fallback for any blog ─────────────────────────────────────────
  {
    match: /\/blog\//,
    intent: 'General blog reader',
    greeting: 'Reading our blog. Drop your site URL, I will send a free PageSpeed audit (no email required).',
  },
];

function getPageGreeting(pathname: string): { intent: string; greeting: string } {
  for (const entry of pageGreetings) {
    if (typeof entry.match === 'string') {
      if (pathname === entry.match || pathname.startsWith(entry.match + '/')) {
        return { intent: entry.intent, greeting: entry.greeting };
      }
    } else if (entry.match.test(pathname)) {
      return { intent: entry.intent, greeting: entry.greeting };
    }
  }
  return {
    intent: 'Homepage / general visitor',
    greeting: 'Hassan here, founder of PandaCodeGen. Drop your site URL, I will send a free PageSpeed audit in under 4h.',
  };
}

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

      const pageContext = getPageGreeting(window.location.pathname);

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

            // ── Page-aware opener (suggested reply for the agent) ──
            'Visitor Intent':     pageContext.intent,
            'Suggested Opener':   pageContext.greeting,
          },
          (error: any) => { if (error) console.log('Tawk.to attr error:', error); }
        );

        // Tag the chat with the visitor's intent for routing/filtering
        if (typeof tawkApi.addTags === 'function') {
          tawkApi.addTags([pageContext.intent], (error: any) => {
            if (error) console.log('Tawk.to tag error:', error);
          });
        }

        // No auto-popup. Passive chat only. Our sticky bar handles mobile engagement.
      };

      // Inject Tawk.to script
      const s1 = document.createElement('script');
      const s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/69861ee219d9521c3a42fa82/1jgpuh9j5';
      s0.parentNode?.insertBefore(s1, s0);
    };

    // Lazy-load: on first scroll OR after 15s, keeps PageSpeed unaffected
    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      loadTawkTo();
    };

    window.addEventListener('scroll', load, { passive: true, once: true });
    const timer = setTimeout(load, 15000);

    // Keep page-aware attributes fresh on Next.js client-side navigation
    const updatePage = () => {
      const api = (window as any).Tawk_API;
      if (api?.setAttributes) {
        const ctx = getPageGreeting(window.location.pathname);
        api.setAttributes({
          'Current Page':     window.location.pathname,
          'Visitor Intent':   ctx.intent,
          'Suggested Opener': ctx.greeting,
        }, () => {});
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
