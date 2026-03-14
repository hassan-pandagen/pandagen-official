import type { PageSpeedResult } from './pagespeed';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface DeepCheckResult {
  id: string;
  name: string;
  score: number;
  status: 'pass' | 'warn' | 'fail';
  findings: string[];
  fix: string;
}

export interface DeepChecksResult {
  checks: DeepCheckResult[];
  overallScore: number;
  htmlFetched: boolean;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const UA = 'PandaCodeGen-Audit/1.0';
const FETCH_TIMEOUT = 10_000;

function status(score: number): 'pass' | 'warn' | 'fail' {
  if (score >= 90) return 'pass';
  if (score >= 50) return 'warn';
  return 'fail';
}

function clamp(n: number): number {
  return Math.max(0, Math.min(100, Math.round(n)));
}

async function safeFetch(url: string): Promise<{ ok: boolean; text: string; headers: Headers }> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
    const res = await fetch(url, {
      headers: { 'User-Agent': UA },
      signal: controller.signal,
      redirect: 'follow',
    });
    const text = await res.text();
    clearTimeout(timer);
    return { ok: res.ok, text, headers: res.headers };
  } catch {
    return { ok: false, text: '', headers: new Headers() };
  }
}

/* extract all heading tags from HTML */
function extractHeadings(html: string): { level: number; text: string }[] {
  const re = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
  const results: { level: number; text: string }[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    results.push({ level: parseInt(m[1], 10), text: m[2].replace(/<[^>]*>/g, '').trim() });
  }
  return results;
}

/* ------------------------------------------------------------------ */
/*  Individual checks                                                  */
/* ------------------------------------------------------------------ */

function checkVisualHierarchy(html: string): DeepCheckResult {
  const id = 'visual-hierarchy';
  const name = 'Visual Hierarchy';
  const findings: string[] = [];
  let score = 100;

  const headings = extractHeadings(html);
  const h1s = headings.filter(h => h.level === 1);

  if (h1s.length === 0) {
    findings.push('No H1 tag found');
    score -= 40;
  } else if (h1s.length === 1) {
    findings.push(`H1: "${h1s[0].text.substring(0, 80)}"`);
  } else {
    findings.push(`Multiple H1 tags found (${h1s.length}). Should have exactly 1.`);
    score -= 25;
  }

  // Check heading order (no skipped levels)
  let prevLevel = 0;
  let skippedLevels = false;
  for (const h of headings) {
    if (h.level > prevLevel + 1 && prevLevel > 0) {
      skippedLevels = true;
      findings.push(`Skipped heading level: H${prevLevel} to H${h.level}`);
      score -= 10;
    }
    prevLevel = h.level;
  }
  if (!skippedLevels && headings.length > 0) {
    findings.push('Heading levels follow correct order');
  }

  // Check for font size classes indicating hierarchy
  const hasTailwindText = /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/.test(html);
  const hasFontClasses = /font-(thin|light|normal|medium|semibold|bold|extrabold|black)/.test(html);
  if (hasTailwindText || hasFontClasses) {
    findings.push('Font hierarchy classes detected');
  }

  const totalHeadings = headings.length;
  if (totalHeadings === 0) {
    findings.push('No headings found at all');
    score -= 20;
  } else {
    findings.push(`${totalHeadings} heading tags found`);
  }

  score = clamp(score);
  return { id, name, score, status: status(score), findings, fix: h1s.length !== 1 ? 'Ensure exactly one H1 tag per page and maintain proper heading hierarchy.' : 'Heading structure looks good. Consider reviewing visual weight of text elements.' };
}

function checkMobileFirstUX(html: string, pageSpeed: PageSpeedResult): DeepCheckResult {
  const id = 'mobile-first-ux';
  const name = 'Mobile First UX';
  const findings: string[] = [];
  let score = 100;

  // Viewport meta
  const hasViewport = /<meta[^>]*name=["']viewport["'][^>]*>/i.test(html);
  if (hasViewport) {
    findings.push('Viewport meta tag present');
  } else {
    findings.push('Missing viewport meta tag');
    score -= 30;
  }

  // Fixed width inline styles that may cause horizontal scroll
  const fixedWidthMatches = html.match(/style=["'][^"']*width\s*:\s*\d{4,}px/gi) || [];
  if (fixedWidthMatches.length > 0) {
    findings.push(`${fixedWidthMatches.length} inline style(s) with large fixed widths detected`);
    score -= fixedWidthMatches.length * 10;
  } else {
    findings.push('No large fixed-width inline styles found');
  }

  // Check for responsive meta
  const hasResponsive = /content=["'][^"']*width=device-width/i.test(html);
  if (hasResponsive) {
    findings.push('Responsive width=device-width set');
  } else if (hasViewport) {
    findings.push('Viewport tag missing width=device-width');
    score -= 15;
  }

  // Leverage PageSpeed performance as a mobile proxy
  if (pageSpeed.performanceScore < 50) {
    findings.push(`Mobile performance score is low (${pageSpeed.performanceScore}/100)`);
    score -= 15;
  } else {
    findings.push(`Mobile performance score: ${pageSpeed.performanceScore}/100`);
  }

  score = clamp(score);
  return { id, name, score, status: status(score), findings, fix: !hasViewport ? 'Add <meta name="viewport" content="width=device-width, initial-scale=1"> to your page head.' : 'Review tap target sizes and eliminate horizontal scroll on mobile.' };
}

function checkCTAPlacement(html: string): DeepCheckResult {
  const id = 'cta-placement';
  const name = 'CTA Placement';
  const findings: string[] = [];
  let score = 60; // baseline

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html;
  const halfPoint = Math.floor(body.length / 2);
  const firstHalf = body.substring(0, halfPoint);

  const ctaKeywords = /\b(buy|get started|start|contact|book|schedule|free|try|sign\s*up|subscribe|download|order|request|call\s+now|get\s+a?\s*quote|learn\s+more|shop\s+now)\b/gi;

  // Scan buttons and links in first half
  const buttonLinkPattern = /<(button|a)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let ctaCount = 0;
  let totalButtons = 0;
  let match: RegExpExecArray | null;

  while ((match = buttonLinkPattern.exec(firstHalf)) !== null) {
    totalButtons++;
    const innerText = match[2].replace(/<[^>]*>/g, '').trim();
    if (ctaKeywords.test(innerText)) {
      ctaCount++;
      ctaKeywords.lastIndex = 0;
    }
  }

  // Also check full page for CTAs
  let fullPageCTAs = 0;
  buttonLinkPattern.lastIndex = 0;
  while ((match = buttonLinkPattern.exec(body)) !== null) {
    const innerText = match[2].replace(/<[^>]*>/g, '').trim();
    if (ctaKeywords.test(innerText)) {
      fullPageCTAs++;
      ctaKeywords.lastIndex = 0;
    }
  }

  if (ctaCount > 0) {
    findings.push(`${ctaCount} CTA element(s) found above the fold (first 50% of page)`);
    score += ctaCount * 10;
  } else {
    findings.push('No clear CTA keywords found in first half of page');
    score -= 20;
  }

  findings.push(`${fullPageCTAs} total CTA element(s) found on page`);

  if (fullPageCTAs === 0) {
    findings.push('No call-to-action elements detected');
    score -= 20;
  }

  if (totalButtons > 0) {
    findings.push(`${totalButtons} interactive elements (buttons/links) in first half`);
  }

  score = clamp(score);
  return { id, name, score, status: status(score), findings, fix: ctaCount === 0 ? 'Add a clear call-to-action button above the fold with action-oriented text.' : 'CTA placement looks reasonable. Test variations for conversion improvement.' };
}

function checkHeadingStructure(html: string): DeepCheckResult {
  const id = 'heading-structure';
  const name = 'Heading Structure';
  const findings: string[] = [];
  let score = 100;

  const headings = extractHeadings(html);
  const h1s = headings.filter(h => h.level === 1);

  if (h1s.length === 0) {
    findings.push('Missing H1 tag');
    score -= 30;
  } else if (h1s.length === 1) {
    findings.push(`H1 present: "${h1s[0].text.substring(0, 60)}"`);
  } else {
    findings.push(`${h1s.length} H1 tags found (should be 1)`);
    score -= 20;
  }

  // Nesting order
  let prevLevel = 0;
  let nestingErrors = 0;
  for (const h of headings) {
    if (h.level > prevLevel + 1 && prevLevel > 0) {
      nestingErrors++;
    }
    prevLevel = h.level;
  }

  if (nestingErrors > 0) {
    findings.push(`${nestingErrors} heading nesting error(s) found (skipped levels)`);
    score -= nestingErrors * 10;
  } else if (headings.length > 0) {
    findings.push('Heading nesting is correct (no skipped levels)');
  }

  // Heading distribution
  for (let level = 2; level <= 6; level++) {
    const count = headings.filter(h => h.level === level).length;
    if (count > 0) {
      findings.push(`H${level}: ${count} tag(s)`);
    }
  }

  // Reasonable heading count
  const total = headings.length;
  if (total === 0) {
    findings.push('Page has no headings at all');
    score -= 20;
  } else if (total > 30) {
    findings.push(`Excessive headings (${total}). Consider consolidating.`);
    score -= 10;
  } else {
    findings.push(`${total} total headings (reasonable count)`);
  }

  score = clamp(score);
  return { id, name, score, status: status(score), findings, fix: nestingErrors > 0 ? 'Fix heading hierarchy. Ensure headings go H1 > H2 > H3 without skipping levels.' : 'Heading structure is well organized.' };
}

function checkStructuredData(html: string): DeepCheckResult {
  const id = 'structured-data';
  const name = 'Structured Data';
  const findings: string[] = [];
  let score = 0;

  const ldJsonPattern = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const schemas: string[] = [];
  let m: RegExpExecArray | null;

  while ((m = ldJsonPattern.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(m[1].trim());

      const extractTypes = (obj: any): void => {
        if (Array.isArray(obj)) {
          obj.forEach(extractTypes);
          return;
        }
        if (obj && typeof obj === 'object') {
          if (obj['@type']) {
            const types = Array.isArray(obj['@type']) ? obj['@type'] : [obj['@type']];
            schemas.push(...types);
          }
          if (obj['@graph'] && Array.isArray(obj['@graph'])) {
            obj['@graph'].forEach(extractTypes);
          }
        }
      };

      extractTypes(parsed);
    } catch {
      findings.push('Invalid JSON-LD block detected');
    }
  }

  const uniqueSchemas = [...new Set(schemas)];

  if (uniqueSchemas.length === 0) {
    findings.push('No structured data (JSON-LD) found');
    score = 10;
  } else {
    findings.push(`Schema types found: ${uniqueSchemas.join(', ')}`);
    score = 40;

    const hasOrg = uniqueSchemas.some(s => /organization/i.test(s));
    const hasWebPage = uniqueSchemas.some(s => /webpage/i.test(s));
    const hasContent = uniqueSchemas.some(s => /article|product|faqpage|howto|localbusiness|service|event|recipe|breadcrumblist/i.test(s));

    if (hasOrg) { score += 20; findings.push('Organization schema present'); }
    else { findings.push('Missing Organization schema'); }

    if (hasWebPage) { score += 15; findings.push('WebPage schema present'); }
    else { findings.push('Missing WebPage schema'); }

    if (hasContent) { score += 25; findings.push('Content-type schema present'); }
    else { findings.push('No content-type schema (Article, Product, FAQ, etc.)'); }
  }

  score = clamp(score);
  return { id, name, score, status: status(score), findings, fix: uniqueSchemas.length === 0 ? 'Add JSON-LD structured data with Organization, WebPage, and a content-type schema.' : 'Expand structured data coverage. Aim for Organization + WebPage + content type.' };
}

function checkCrawlBudget(html: string, robotsTxt: string, robotsOk: boolean): DeepCheckResult {
  const id = 'crawl-budget';
  const name = 'Crawl Budget';
  const findings: string[] = [];
  let score = 60;

  // robots.txt
  if (robotsOk && robotsTxt.length > 0) {
    findings.push('robots.txt found');
    score += 10;

    const hasSitemap = /sitemap:/i.test(robotsTxt);
    if (hasSitemap) {
      findings.push('Sitemap reference in robots.txt');
      score += 10;
    } else {
      findings.push('No sitemap reference in robots.txt');
      score -= 5;
    }

    const disallowAll = /disallow:\s*\/\s*$/im.test(robotsTxt);
    if (disallowAll) {
      findings.push('WARNING: robots.txt blocks all crawling (Disallow: /)');
      score -= 40;
    }

    const disallowCount = (robotsTxt.match(/^disallow:/gim) || []).length;
    if (disallowCount > 20) {
      findings.push(`Excessive Disallow rules (${disallowCount}). May waste crawl budget.`);
      score -= 10;
    }
  } else {
    findings.push('robots.txt not found or inaccessible');
    score -= 10;
  }

  // Canonical tag
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  if (canonicalMatch) {
    findings.push(`Canonical URL set: ${canonicalMatch[1].substring(0, 80)}`);
    score += 10;
  } else {
    findings.push('No canonical tag found');
    score -= 10;
  }

  // Meta refresh redirects
  const metaRefresh = /<meta[^>]*http-equiv=["']refresh["']/i.test(html);
  if (metaRefresh) {
    findings.push('Meta refresh redirect detected (bad for crawl budget)');
    score -= 15;
  }

  score = clamp(score);
  return { id, name, score, status: status(score), findings, fix: score < 70 ? 'Ensure robots.txt exists with a sitemap reference, and add canonical tags to all pages.' : 'Crawl budget optimization looks reasonable.' };
}

function checkIndexingSpeed(html: string, robotsTxt: string, robotsOk: boolean, sitemapOk: boolean, sitemapText: string): DeepCheckResult {
  const id = 'indexing-speed';
  const name = 'Indexing Speed';
  const findings: string[] = [];
  let score = 60;

  // Meta robots
  const metaRobots = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i);
  if (metaRobots) {
    const content = metaRobots[1].toLowerCase();
    if (content.includes('noindex')) {
      findings.push('Page has noindex meta tag. It will NOT be indexed.');
      score -= 40;
    } else {
      findings.push(`Meta robots: ${content}`);
      score += 5;
    }
  } else {
    findings.push('No meta robots tag (defaults to index, follow)');
    score += 5;
  }

  // Canonical
  const hasCanonical = /<link[^>]*rel=["']canonical["']/i.test(html);
  if (hasCanonical) {
    findings.push('Canonical tag present');
    score += 10;
  } else {
    findings.push('Missing canonical tag');
    score -= 5;
  }

  // Sitemap
  if (sitemapOk && sitemapText.length > 0) {
    const isXml = /<\?xml|<urlset|<sitemapindex/i.test(sitemapText);
    if (isXml) {
      findings.push('sitemap.xml found and appears to be valid XML');
      score += 15;
      const urlCount = (sitemapText.match(/<loc>/gi) || []).length;
      if (urlCount > 0) {
        findings.push(`Sitemap contains ${urlCount} URL(s)`);
      }
    } else {
      findings.push('sitemap.xml found but does not appear to be valid XML');
      score += 5;
    }
  } else {
    findings.push('sitemap.xml not found or inaccessible');
    score -= 10;
  }

  // Sitemap reference in robots.txt
  if (robotsOk && /sitemap:/i.test(robotsTxt)) {
    findings.push('Sitemap referenced in robots.txt');
    score += 5;
  }

  score = clamp(score);
  return { id, name, score, status: status(score), findings, fix: score < 70 ? 'Ensure sitemap.xml exists with valid XML, add a canonical tag, and remove any noindex directives.' : 'Indexing signals look good.' };
}

function checkTrustSignals(html: string, url: string): DeepCheckResult {
  const id = 'trust-signals';
  const name = 'Trust Signals';
  const findings: string[] = [];
  let score = 30; // baseline

  // SSL
  if (url.startsWith('https://')) {
    findings.push('SSL (HTTPS) active');
    score += 15;
  } else {
    findings.push('Site not using HTTPS');
  }

  // Privacy policy
  const hasPrivacy = /privacy[\s-]*policy/i.test(html) || /href=["'][^"']*privacy/i.test(html);
  if (hasPrivacy) { findings.push('Privacy policy link found'); score += 10; }
  else { findings.push('No privacy policy link detected'); }

  // Terms
  const hasTerms = /terms[\s-]*(of|&amp;|and)?\s*(service|use|conditions)/i.test(html) || /href=["'][^"']*terms/i.test(html);
  if (hasTerms) { findings.push('Terms of service link found'); score += 8; }
  else { findings.push('No terms of service link detected'); }

  // Contact info
  const hasPhone = /(\+?1?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})/i.test(html) || /tel:/i.test(html);
  const hasEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i.test(html) || /mailto:/i.test(html);
  if (hasPhone) { findings.push('Phone number found'); score += 7; }
  if (hasEmail) { findings.push('Email address found'); score += 7; }
  if (!hasPhone && !hasEmail) { findings.push('No contact info (phone/email) detected'); }

  // Social media links
  const socialPatterns = /facebook\.com|twitter\.com|x\.com|linkedin\.com|instagram\.com|youtube\.com|tiktok\.com/gi;
  const socialMatches = html.match(socialPatterns) || [];
  const uniqueSocials = [...new Set(socialMatches.map(s => s.toLowerCase()))];
  if (uniqueSocials.length > 0) {
    findings.push(`${uniqueSocials.length} social media link(s) found`);
    score += Math.min(uniqueSocials.length * 3, 10);
  } else {
    findings.push('No social media links detected');
  }

  // Testimonials/reviews
  const hasTestimonials = /testimonial|review|rating|star[s]?[\s-]*rating|client[\s-]*say/i.test(html);
  if (hasTestimonials) { findings.push('Testimonials/reviews section detected'); score += 8; }
  else { findings.push('No testimonials/reviews section detected'); }

  // Trust badges
  const hasTrustBadges = /bbb|better\s*business|trust[\s-]*pilot|trustpilot|norton|mcafee|ssl[\s-]*badge|secure[\s-]*checkout|verified/i.test(html);
  if (hasTrustBadges) { findings.push('Trust badges detected'); score += 5; }

  score = clamp(score);
  return { id, name, score, status: status(score), findings, fix: score < 70 ? 'Add trust signals: privacy policy, contact info, social links, and testimonials.' : 'Good trust signals present.' };
}

function checkSecurityHeaders(headers: Headers): DeepCheckResult {
  const id = 'security-headers';
  const name = 'Security Headers';
  const findings: string[] = [];
  let score = 0;

  const requiredHeaders: { name: string; weight: number }[] = [
    { name: 'strict-transport-security', weight: 20 },
    { name: 'x-content-type-options', weight: 15 },
    { name: 'x-frame-options', weight: 15 },
    { name: 'content-security-policy', weight: 20 },
    { name: 'referrer-policy', weight: 15 },
    { name: 'permissions-policy', weight: 15 },
  ];

  let present = 0;
  for (const h of requiredHeaders) {
    const value = headers.get(h.name);
    if (value) {
      findings.push(`${h.name}: present`);
      score += h.weight;
      present++;
    } else {
      findings.push(`${h.name}: MISSING`);
    }
  }

  findings.unshift(`${present}/${requiredHeaders.length} security headers present`);

  score = clamp(score);
  return { id, name, score, status: status(score), findings, fix: present < 4 ? `Add missing security headers. Priority: ${requiredHeaders.filter(h => !headers.get(h.name)).map(h => h.name).slice(0, 3).join(', ')}.` : 'Security headers are well configured.' };
}

function checkMobileCheckout(html: string): DeepCheckResult {
  const id = 'mobile-checkout';
  const name = 'Mobile Checkout';
  const findings: string[] = [];
  let score = 80;

  const ecomIndicators = /cart|checkout|add[\s-]*to[\s-]*cart|product|price|shop|store|woocommerce|shopify/i;
  const isEcommerce = ecomIndicators.test(html);

  if (isEcommerce) {
    findings.push('E-commerce indicators detected');
    score = 50;

    // Payment badges
    const hasPaymentBadges = /visa|mastercard|paypal|stripe|apple\s*pay|google\s*pay|payment[\s-]*method/i.test(html);
    if (hasPaymentBadges) { findings.push('Payment method indicators found'); score += 15; }
    else { findings.push('No payment method badges detected'); }

    // Form optimization
    const hasAutocomplete = /autocomplete=/i.test(html);
    if (hasAutocomplete) { findings.push('Form autocomplete attributes found'); score += 10; }
    else { findings.push('No autocomplete attributes on forms'); }

    // Guest checkout
    const hasGuestCheckout = /guest[\s-]*checkout|no[\s-]*account[\s-]*needed|checkout[\s-]*as[\s-]*guest/i.test(html);
    if (hasGuestCheckout) { findings.push('Guest checkout option detected'); score += 10; }
    else { findings.push('No guest checkout indicators found'); }

    // Secure checkout
    const hasSecureCheckout = /secure[\s-]*checkout|ssl|encrypted/i.test(html);
    if (hasSecureCheckout) { findings.push('Secure checkout messaging found'); score += 10; }

  } else {
    findings.push('Not an e-commerce site (default score 80/100)');

    // Check for contact forms or booking widgets
    const hasContactForm = /<form/i.test(html);
    const hasBooking = /book|schedule|appointment|calendly|booking/i.test(html);

    if (hasContactForm) { findings.push('Contact form detected'); score += 5; }
    else { findings.push('No contact form found'); score -= 5; }

    if (hasBooking) { findings.push('Booking/scheduling functionality detected'); score += 5; }
  }

  score = clamp(score);
  return { id, name, score, status: status(score), findings, fix: isEcommerce ? 'Add payment badges, enable form autocomplete, and offer guest checkout for better mobile conversion.' : 'Consider adding a contact form or booking widget to improve conversions.' };
}

function checkAIReadiness(html: string, robotsTxt: string, robotsOk: boolean, llmsTxtOk: boolean): DeepCheckResult {
  const id = 'ai-readiness';
  const name = 'AI Readiness';
  const findings: string[] = [];
  let score = 20; // baseline

  // /llms.txt
  if (llmsTxtOk) {
    findings.push('llms.txt file found');
    score += 15;
  } else {
    findings.push('No llms.txt file found');
  }

  // Structured data depth
  const ldJsonPattern = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let schemaCount = 0;
  let m: RegExpExecArray | null;
  while ((m = ldJsonPattern.exec(html)) !== null) {
    schemaCount++;
  }
  if (schemaCount >= 2) {
    findings.push(`${schemaCount} structured data blocks found (good depth)`);
    score += 15;
  } else if (schemaCount === 1) {
    findings.push('1 structured data block found');
    score += 8;
  } else {
    findings.push('No structured data found');
  }

  // Speakable markup
  const hasSpeakable = /speakable/i.test(html);
  if (hasSpeakable) { findings.push('Speakable markup detected'); score += 10; }
  else { findings.push('No speakable markup'); }

  // Meta description quality
  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  if (metaDescMatch) {
    const descLen = metaDescMatch[1].length;
    if (descLen >= 150 && descLen <= 160) {
      findings.push(`Meta description: ${descLen} chars (optimal)`);
      score += 10;
    } else if (descLen >= 120 && descLen <= 170) {
      findings.push(`Meta description: ${descLen} chars (acceptable)`);
      score += 7;
    } else {
      findings.push(`Meta description: ${descLen} chars (aim for 150-160)`);
      score += 3;
    }
  } else {
    findings.push('Missing meta description');
  }

  // Open Graph tags
  const ogTags = html.match(/<meta[^>]*property=["']og:/gi) || [];
  if (ogTags.length >= 4) {
    findings.push(`${ogTags.length} Open Graph tags found (good)`);
    score += 10;
  } else if (ogTags.length > 0) {
    findings.push(`${ogTags.length} Open Graph tag(s) found (add more)`);
    score += 5;
  } else {
    findings.push('No Open Graph tags found');
  }

  // Bot access in robots.txt
  if (robotsOk) {
    const aiBlockedBots: string[] = [];
    const aiBots = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'CCBot', 'ChatGPT-User'];
    for (const bot of aiBots) {
      const botBlocked = new RegExp(`user-agent:\\s*${bot}[\\s\\S]*?disallow:\\s*/`, 'im').test(robotsTxt);
      if (botBlocked) {
        aiBlockedBots.push(bot);
      }
    }
    if (aiBlockedBots.length > 0) {
      findings.push(`AI bots blocked in robots.txt: ${aiBlockedBots.join(', ')}`);
      score -= aiBlockedBots.length * 5;
    } else {
      findings.push('AI bots not blocked in robots.txt');
      score += 10;
    }
  } else {
    findings.push('Cannot check bot access (robots.txt unavailable)');
  }

  score = clamp(score);
  return { id, name, score, status: status(score), findings, fix: score < 70 ? 'Improve AI readiness: add structured data, speakable markup, Open Graph tags, and an llms.txt file.' : 'Good AI readiness signals.' };
}

/* ------------------------------------------------------------------ */
/*  Main orchestrator                                                  */
/* ------------------------------------------------------------------ */

export async function runDeepChecks(url: string, pageSpeedData: PageSpeedResult): Promise<DeepChecksResult> {
  const urlObj = new URL(url);
  const origin = urlObj.origin;

  // Fetch all external resources in parallel
  const [htmlRes, robotsRes, sitemapRes, llmsRes] = await Promise.allSettled([
    safeFetch(url),
    safeFetch(`${origin}/robots.txt`),
    safeFetch(`${origin}/sitemap.xml`),
    safeFetch(`${origin}/llms.txt`),
  ]);

  const htmlData = htmlRes.status === 'fulfilled' ? htmlRes.value : { ok: false, text: '', headers: new Headers() };
  const robotsData = robotsRes.status === 'fulfilled' ? robotsRes.value : { ok: false, text: '', headers: new Headers() };
  const sitemapData = sitemapRes.status === 'fulfilled' ? sitemapRes.value : { ok: false, text: '', headers: new Headers() };
  const llmsData = llmsRes.status === 'fulfilled' ? llmsRes.value : { ok: false, text: '', headers: new Headers() };

  const html = htmlData.text;
  const htmlFetched = htmlData.ok && html.length > 0;
  const headers = htmlData.headers;

  // Run all 11 checks, each wrapped in try/catch
  const checks: DeepCheckResult[] = [];

  const runners: Array<() => DeepCheckResult> = [
    () => checkVisualHierarchy(html),
    () => checkMobileFirstUX(html, pageSpeedData),
    () => checkCTAPlacement(html),
    () => checkHeadingStructure(html),
    () => checkStructuredData(html),
    () => checkCrawlBudget(html, robotsData.text, robotsData.ok),
    () => checkIndexingSpeed(html, robotsData.text, robotsData.ok, sitemapData.ok, sitemapData.text),
    () => checkTrustSignals(html, url),
    () => checkSecurityHeaders(headers),
    () => checkMobileCheckout(html),
    () => checkAIReadiness(html, robotsData.text, robotsData.ok, llmsData.ok),
  ];

  for (const runner of runners) {
    try {
      checks.push(runner());
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      checks.push({
        id: 'error',
        name: 'Check Failed',
        score: 0,
        status: 'fail',
        findings: [`Error running check: ${errorMsg}`],
        fix: 'This check encountered an error. Try running the audit again.',
      });
    }
  }

  const overallScore = checks.length > 0
    ? Math.round(checks.reduce((sum, c) => sum + c.score, 0) / checks.length)
    : 0;

  return { checks, overallScore, htmlFetched };
}
