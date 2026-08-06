/**
 * Where a visitor came from, resolved once and shared by every capture point.
 *
 * This exists because the site's whole thesis is being findable in AI answers,
 * and the original classifier (inline in TawkToChat) had no AI sources in it at
 * all -- a lead arriving from ChatGPT was recorded as the bare hostname with
 * medium "referral", indistinguishable from any other site linking to us. The
 * one category this business most needs to measure was the one it could not see.
 *
 * Resolution order, highest confidence first:
 *   1. UTM parameters   -- an explicit campaign tag beats inference
 *   2. Known referrer   -- AI engines first, then search, social, video
 *   3. Unknown referrer -- keep the hostname rather than discarding it
 *   4. Nothing          -- Direct
 *
 * NOTE: AI assistants frequently strip or omit the referrer, and some open links
 * in an in-app browser. A lead that genuinely came from ChatGPT can still arrive
 * as "Direct". This measurement therefore UNDERCOUNTS AI referrals and must never
 * be quoted as a complete figure -- treat a labelled AI source as a floor.
 */

export interface TrafficSource {
  source: string;
  medium: string;
  campaign: string;
}

export interface Attribution extends TrafficSource {
  /** The page the visitor first landed on, not the one they converted from. */
  landingPage: string;
  /** ISO timestamp of that first page view. */
  firstVisit: string;
}

/** Ordered: first match wins, so put specific hosts before generic ones. */
const REFERRER_MAP: ReadonlyArray<readonly [string, string, string]> = [
  // AI assistants and answer engines. The reason this module exists.
  ['chatgpt.com', 'ChatGPT', 'ai'],
  ['chat.openai.com', 'ChatGPT', 'ai'],
  ['openai.com', 'OpenAI', 'ai'],
  ['perplexity.ai', 'Perplexity', 'ai'],
  ['claude.ai', 'Claude', 'ai'],
  ['anthropic.com', 'Claude', 'ai'],
  ['gemini.google.com', 'Gemini', 'ai'],
  ['bard.google.com', 'Gemini', 'ai'],
  ['copilot.microsoft.com', 'Microsoft Copilot', 'ai'],
  ['you.com', 'You.com', 'ai'],
  ['phind.com', 'Phind', 'ai'],
  ['grok.com', 'Grok', 'ai'],
  ['deepseek.com', 'DeepSeek', 'ai'],
  ['mistral.ai', 'Mistral', 'ai'],

  // Search
  ['google.', 'Google', 'organic'],
  ['bing.com', 'Bing', 'organic'],
  ['duckduckgo.com', 'DuckDuckGo', 'organic'],
  ['yahoo.com', 'Yahoo', 'organic'],
  ['ecosia.org', 'Ecosia', 'organic'],
  ['brave.com', 'Brave Search', 'organic'],

  // Social and community
  ['linkedin.com', 'LinkedIn', 'social'],
  ['facebook.com', 'Facebook', 'social'],
  ['instagram.com', 'Instagram', 'social'],
  ['twitter.com', 'Twitter/X', 'social'],
  ['x.com', 'Twitter/X', 'social'],
  ['reddit.com', 'Reddit', 'social'],
  ['news.ycombinator.com', 'Hacker News', 'social'],
  ['quora.com', 'Quora', 'social'],
  ['tiktok.com', 'TikTok', 'social'],
  ['pinterest.com', 'Pinterest', 'social'],
  ['github.com', 'GitHub', 'referral'],

  // Video
  ['youtube.com', 'YouTube', 'video'],
  ['vimeo.com', 'Vimeo', 'video'],

  // Review platforms -- worth separating from generic referral, they convert well
  ['trustpilot.com', 'Trustpilot', 'review'],
  ['clutch.co', 'Clutch', 'review'],
  ['g2.com', 'G2', 'review'],
];

const DIRECT: TrafficSource = { source: 'Direct', medium: 'none', campaign: 'none' };

export function resolveTrafficSource(): TrafficSource {
  if (typeof window === 'undefined') return DIRECT;

  try {
    const params = new URLSearchParams(window.location.search);

    // 1. An explicit campaign tag is a stated fact; prefer it over inference.
    const utmSource = params.get('utm_source');
    if (utmSource) {
      return {
        source: utmSource,
        medium: params.get('utm_medium') || 'unknown',
        campaign: params.get('utm_campaign') || 'none',
      };
    }

    const ref = document.referrer;
    if (!ref) return DIRECT;

    let host: string;
    try {
      host = new URL(ref).hostname.toLowerCase();
    } catch {
      return { source: 'unknown-referrer', medium: 'referral', campaign: 'none' };
    }

    // Same-site navigation is not a traffic source.
    if (host === window.location.hostname) return DIRECT;

    for (const [needle, source, medium] of REFERRER_MAP) {
      if (host.includes(needle)) return { source, medium, campaign: 'none' };
    }

    // 3. Unrecognised: keep the hostname. A real referring domain is a lead worth
    //    knowing about, and discarding it to "other" destroys the only signal.
    return { source: host, medium: 'referral', campaign: 'none' };
  } catch {
    return DIRECT;
  }
}

/**
 * The source from the visitor's FIRST page of the session, not the page they
 * happened to submit from. Someone who arrives from ChatGPT, reads three posts
 * and then converts is a ChatGPT lead; without this the referrer is long gone by
 * submit time and every such lead reads as Direct.
 */
const STORAGE_KEY = 'pcg_first_touch_source';

export function captureFirstTouch(): void {
  if (typeof window === 'undefined') return;
  try {
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;
    const record: Attribution = {
      ...resolveTrafficSource(),
      landingPage: window.location.pathname + window.location.search,
      firstVisit: new Date().toISOString(),
    };
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* storage unavailable (private mode, blocked cookies) -- fall back to live resolution */
  }
}

export function getAttribution(): Attribution {
  const live = (): Attribution => ({
    ...resolveTrafficSource(),
    landingPage: typeof window === 'undefined' ? '' : window.location.pathname,
    firstVisit: new Date().toISOString(),
  });

  if (typeof window === 'undefined') return { ...DIRECT, landingPage: '', firstVisit: '' };
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as Attribution;
  } catch {
    /* ignore and resolve live */
  }
  return live();
}
