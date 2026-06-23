"use client";

import { useEffect } from 'react';
import { trackGAEvent } from '@/components/GoogleAnalytics';

// ─── Intent-Tiered Opener System ─────────────────────────────────────────────
// Refactored June 2026 from a 40-entry per-page map to a 3-tier decision-stage
// model. At ~70 clicks/mo the lever is founder-voice consistency matched to where
// the buyer is in their decision, NOT per-page coverage breadth.
//
//   TIER 1 DECISION      → comparing us NOW. Scope-help + price anchor. (hottest)
//   TIER 2 PROBLEM-AWARE → knows the pain, shopping the fix. Audit offer is native.
//   TIER 3 LEARNING      → researching, not buying. Question-first, NO pitch.
//
// A referral overlay (see getReferralPrefix) prepends a warm line for AI-referred
// visitors (ChatGPT/Claude/Perplexity) on ANY tier — they convert 6-10x.
//
// The "greeting" is a Suggested Opener the agent (Hassan) sees in the Tawk
// dashboard when a chat opens. It is NOT a proactive popup.

type Tier = 'DECISION' | 'PROBLEM_AWARE' | 'LEARNING';

// ── TIER 1: DECISION ─────────────────────────────────────────────────────────
// Buyer is comparing us against a shortlist right now. Lead with scope-help and
// the real price anchor (Growth $3,500). Never dodge price, never just quote —
// help them place themselves. These pages convert; the opener earns the reply.
const DECISION_PATTERNS: Array<string | RegExp> = [
  '/pricing',
  '/contact',
  /\/blog\/.*-vs-custom-website$/,        // shopify/squarespace/webflow/wix-vs-custom
  '/blog/build-vs-buy-software-2026-cost-comparison',
  '/blog/shopify-vs-custom-website',
  '/blog/wordpress-vs-custom-code-real-cost-3-years',
  '/blog/wordpress-vs-nextjs',
  /\/blog\/.*-migration-cost/,            // wordpress/webflow/squarespace-migration-cost
  '/blog/website-migration-cost-2026',
  '/blog/website-rebuild-cost-2026',
  '/blog/website-redesign-cost',
  '/blog/how-much-does-a-website-cost',
  '/blog/cheap-web-developer',
  '/blog/top-custom-web-development-agencies-usa-2026',
  '/blog/top-nextjs-agencies-2026',
  '/blog/pagepro-alternatives',
  '/work',                                // evaluating proof → bridge to their project
];

// Per-path opener overrides for DECISION pages that deserve a sharper line than
// the tier default. Anything in DECISION_PATTERNS without an entry here uses
// DECISION_DEFAULT.
const DECISION_OPENERS: Record<string, { intent: string; greeting: string }> = {
  '/pricing': {
    intent: 'Pricing page (hottest buyer) — nurture first, NO number until they describe scope',
    greeting: 'Comparing quotes? Ask their platform + rough page count first, give a REAL fixed number once they describe it. Do not lead with $3,500 (sticker shock). Value first, price in conversation.',
  },
  '/contact': {
    intent: 'Contact page (ready now)',
    greeting: 'Faster to just chat here. Ask what they want built + their platform, reply personally. Do not lead with price.',
  },
  '/work': {
    intent: 'Case studies (evaluating proof)',
    greeting: 'That rebuild hit 98 PageSpeed. Want me to estimate what is realistic for your site? Tell me your platform and scale. — Hassan',
  },
  '/blog/build-vs-buy-software-2026-cost-comparison': {
    intent: 'Build vs buy decision',
    greeting: 'Working the build-vs-buy math? Ask the tool + monthly cost, give the honest all-in number for their case. Value first, no cold price.',
  },
  '/blog/cheap-web-developer': {
    intent: 'Budget developer search',
    greeting: 'Comparing on price? Tell me your platform and page count and I will give you a real fixed number, no agency markup. — Hassan',
  },
  '/blog/pagepro-alternatives': {
    intent: 'Pagepro alternative search',
    greeting: 'Comparing us against Pagepro? Happy to walk you through where we differ, same scope. What are you weighing? — Hassan',
  },
};

const DECISION_DEFAULT: { intent: string; greeting: string } = {
  intent: 'Decision-stage (comparing costs) — value first, fixed number once they describe scope',
  greeting: 'Comparing quotes? Ask their platform + rough page count, then give a REAL fixed number, not a range. Value first, do not throw a price cold.',
};

// ── TIER 2: PROBLEM-AWARE ────────────────────────────────────────────────────
// Visitor knows the pain (slow site, platform lock-in) and is shopping the fix.
// This is the ONE tier where the audit/URL offer is native — they came in with
// a problem. Diagnostic empathy: name the platform issue, offer to check theirs.
// Mirrors the 45s silo dashboard popups they already saw.
const PROBLEM_AWARE_PATTERNS: Array<string | RegExp> = [
  /^\/services/,                          // all service pages
  // Platform-pain blogs (slow / too-slow / plugins / theme / speed)
  /\/blog\/.*-too-slow/,
  /\/blog\/.*-slow/,
  /\/blog\/slow-/,
  '/blog/how-to-fix-slow-wordpress',
  '/blog/wordpress-plugins-destroy-speed',
  '/blog/wordpress-traffic-drop-speed',
  '/blog/wordpress-ai-security-risk-2026',
  '/blog/elementor-kills-seo',
  '/blog/divi-theme-slow',
  '/blog/shopify-dawn-theme-slow',
  '/blog/shopify-plus-still-slow',
  '/blog/shopify-conversion-rate-speed-fix',
  '/blog/shopify-app-costs-real-monthly-bill',
  '/blog/gohighlevel-website-speed',
  '/blog/gohighlevel-migration',
  '/blog/gohighlevel-keep-crm-replace-website',
  '/blog/why-competitor-outranks-you',
  '/blog/why-is-my-website-loading-so-slow',
  '/blog/how-to-speed-up-your-website',
];

// Per-path overrides for PROBLEM-AWARE pages. The audit offer is native here, so
// the note tells Hassan to lead diagnostic. Unmatched → PROBLEM_AWARE_DEFAULT.
const PROBLEM_AWARE_OPENERS: Record<string, { intent: string; greeting: string }> = {
  '/services/gohighlevel': {
    intent: 'GHL service (platform pain)',
    greeting: 'GHL speed pain. Lead diagnostic: offer to pull their mobile PageSpeed and show the ad-cost impact. Audit offer is native here.',
  },
  '/services/ecommerce': {
    intent: 'E-commerce service (platform pain)',
    greeting: 'Store rebuild. Offer to benchmark their speed vs top competitor. Audit/URL offer is native here.',
  },
  '/blog/gohighlevel-website-speed': {
    intent: 'GHL speed (top converter blog)',
    greeting: 'This is the winning converter page. Lead with the receipt (28→96 PageSpeed) then offer to check theirs. Audit offer native.',
  },
};

const PROBLEM_AWARE_DEFAULT: { intent: string; greeting: string } = {
  intent: 'Problem-aware (knows the pain, shopping a fix)',
  greeting: 'They came in with a platform pain. Lead diagnostic: name the issue, offer to check THEIR site (audit/URL offer is native here, not pushy). Then bridge to the fix.',
};

// ── TIER 3: LEARNING ─────────────────────────────────────────────────────────
// Researching, not buying. Educational blogs, thought pieces, the SaaS pillar,
// /ai-info, /about, /manifesto, /partners. The reader is learning — an audit
// pitch is premature and pushy. Be the expert in the room: question-first, tie
// to the article, NO "drop your URL". This is the DEFAULT for anything Tier 1/2
// did not catch, so it must be safe and soft.
const LEARNING_OPENERS: Record<string, { intent: string; greeting: string }> = {
  '/partners': {
    intent: 'Agency partner (peer, NOT a B2C audit pitch)',
    greeting: 'Agency-to-agency. They want white-label CAPACITY, not an audit. Ask their overflow pipeline. NEVER pitch "drop your URL" — it reads as "you don\'t get who I am".',
  },
  '/about/hassan': {
    intent: 'Founder page (trust-checking)',
    greeting: 'They are checking the founder. Be personal, zero pressure. "This is my actual inbox, ask me anything before reaching out." Authenticity is the lever.',
  },
  '/about/imran': {
    intent: 'Co-founder page (trust-checking)',
    greeting: 'Imran is architecture lead. Personal, no pitch. Offer to loop him in if their question is technical.',
  },
  '/manifesto': {
    intent: 'Manifesto (values-aligned reader)',
    greeting: 'They read the values. Invite the conversation those values started: "what are you building?" No offer, no pitch.',
  },
  '/blog/saas-software-pricing-audit-2026': {
    intent: 'SaaS pricing pillar (researcher)',
    greeting: 'Researching software spend, NOT ready to buy a rebuild. Be the expert: offer honest math on whether to build or keep paying. NO audit pitch.',
  },
};

const LEARNING_DEFAULT: { intent: string; greeting: string } = {
  intent: 'Learning / researching (not buying yet)',
  greeting: 'They are researching, not shopping. Be the expert in the room: ask a question tied to the article, offer to clarify. Do NOT pitch an audit or "drop your URL" — premature here. Helpfulness earns the next step.',
};

function matchesAny(pathname: string, patterns: Array<string | RegExp>): boolean {
  return patterns.some((p) =>
    typeof p === 'string'
      ? pathname === p || pathname.startsWith(p + '/')
      : p.test(pathname)
  );
}

function classifyTier(pathname: string): Tier {
  // Order matters: DECISION wins over PROBLEM_AWARE when a page matches both
  // (e.g. a "-migration-cost" page is decision-stage, not just problem-aware).
  if (matchesAny(pathname, DECISION_PATTERNS)) return 'DECISION';
  if (matchesAny(pathname, PROBLEM_AWARE_PATTERNS)) return 'PROBLEM_AWARE';
  // Tier 3 LEARNING is wired next. Until then, everything else falls to LEARNING.
  return 'LEARNING';
}

function getPageGreeting(pathname: string): { intent: string; greeting: string } {
  const tier = classifyTier(pathname);

  if (tier === 'DECISION') {
    return DECISION_OPENERS[pathname] ?? DECISION_DEFAULT;
  }

  if (tier === 'PROBLEM_AWARE') {
    return PROBLEM_AWARE_OPENERS[pathname] ?? PROBLEM_AWARE_DEFAULT;
  }

  // Tier 3 LEARNING — the default for anything Tier 1/2 did not catch.
  // Specific overrides (partners, about, manifesto, SaaS pillar) win; else the
  // soft question-first default. Homepage uses its own warm line below.
  if (pathname === '/' || pathname === '') {
    return {
      intent: 'Homepage (mixed intent)',
      greeting: 'Mixed intent. Light router: ask what brought them in — slow site, full rebuild, or partnering. Let their answer segment them. No pitch up front.',
    };
  }
  return LEARNING_OPENERS[pathname] ?? LEARNING_DEFAULT;
}

// ─── AI-Referral Overlay ──────────────────────────────────────────────────────
// Visitors arriving from ChatGPT / Claude / Perplexity / Gemini / Copilot convert
// 6-10x and arrive pre-vouched (they've already done their homework). When detected,
// we PREPEND a warm acknowledgment to whatever tier opener applies and bump the
// intent label so Hassan treats them as top priority. Uses document.referrer —
// the same signal getTrafficSource() already reads.
const AI_REFERRERS: Array<{ host: string; name: string }> = [
  { host: 'chatgpt.com',     name: 'ChatGPT' },
  { host: 'chat.openai.com', name: 'ChatGPT' },
  { host: 'openai.com',      name: 'ChatGPT' },
  { host: 'perplexity.ai',   name: 'Perplexity' },
  { host: 'claude.ai',       name: 'Claude' },
  { host: 'gemini.google.com', name: 'Gemini' },
  { host: 'copilot.microsoft.com', name: 'Copilot' },
];

function getAIReferral(): { name: string } | null {
  try {
    const ref = document.referrer || '';
    for (const { host, name } of AI_REFERRERS) {
      if (ref.includes(host)) return { name };
    }
  } catch {
    /* referrer unavailable — ignore */
  }
  return null;
}

// Wraps a tier opener with the AI-referral acknowledgment when applicable.
function applyReferralOverlay(
  base: { intent: string; greeting: string }
): { intent: string; greeting: string } {
  const ai = getAIReferral();
  if (!ai) return base;
  return {
    intent: `⭐ AI-referred via ${ai.name} (6-10x converter — TOP PRIORITY) · ${base.intent}`,
    greeting: `They found us through ${ai.name} — already did their homework, route to Hassan FAST. Acknowledge it warmly ("saw you came via ${ai.name}"), then: ${base.greeting}`,
  };
}

// Short "v-Source" label for the Tawk visitor LIST (e.g. v-Claude, v-Google, v-Referral),
// paired with the landing page — gives at-a-glance triage in the dashboard, like Panda Patches.
function getVisitorLabel(): string {
  const ai = getAIReferral();
  if (ai) return `v-${ai.name}`;
  const { source } = getTrafficSource();
  const clean = (source || 'Direct').replace(/[\s/]+/g, '');
  return `v-${clean}`;
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

      const pageContext = applyReferralOverlay(getPageGreeting(window.location.pathname));

      // At-a-glance label in the Tawk visitor list: source + landing page (e.g. "v-Claude | /ai-info")
      tawkApi.visitor = {
        ...(tawkApi.visitor || {}),
        name: `${getVisitorLabel()} | ${window.location.pathname}`,
      };

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

        // If an "Ask our experts" button requested the chat before it finished loading, open it now.
        if ((window as any).__tawkOpenPending) {
          (window as any).__tawkOpenPending = false;
          if (typeof tawkApi.maximize === 'function') tawkApi.maximize();
        }

        // No auto-popup. Passive chat only. Our sticky bar handles mobile engagement.
      };

      // ─── GA4 chat tracking ──────────────────────────────────────────────
      // Builds the shared attribution payload for every chat event. Answers the
      // core question: which SOURCE produced this conversation, and was it AI?
      // 2026 hybrid approach: GA4's native "AI Assistant" channel under-counts
      // (35-70% of AI sessions arrive referrer-less → land in Direct), so we
      // capture our own ai_referral flag at the event level as the reliable signal.
      const buildChatPayload = () => {
        const ai = getAIReferral();
        return {
          page_path:      window.location.pathname,
          intent_tier:    classifyTier(window.location.pathname),
          traffic_source: sourceData.source || 'Direct',
          traffic_medium: sourceData.medium || 'none',
          campaign:       sourceData.campaign || 'none',
          ai_referral:    ai ? ai.name : 'none',
          is_ai_referred: ai ? true : false,
        };
      };

      // onChatMaximized: visitor OPENED the panel (soft intent signal).
      tawkApi.onChatMaximized = function () {
        trackGAEvent('chat_open', buildChatPayload());
      };

      // onChatStarted: visitor actually SENT a message (real lead signal —
      // mark this as a Key Event in GA4 Admin). This is the conversion to watch.
      tawkApi.onChatStarted = function () {
        trackGAEvent('chat_start', buildChatPayload());
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

    // Public trigger for the "Ask our experts" CTA: open chat now, loading it first if needed.
    (window as any).__openChat = () => {
      const api = (window as any).Tawk_API;
      if (api && typeof api.maximize === 'function') {
        api.maximize();
      } else {
        (window as any).__tawkOpenPending = true;
        load();
      }
    };

    window.addEventListener('scroll', load, { passive: true, once: true });
    const timer = setTimeout(load, 15000);

    // Keep page-aware attributes fresh on Next.js client-side navigation
    const updatePage = () => {
      const api = (window as any).Tawk_API;
      if (api?.setAttributes) {
        const ctx = applyReferralOverlay(getPageGreeting(window.location.pathname));
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
