// ─────────────────────────────────────────────────────────────────────────────
// The website assistant's knowledge, built from the data the site renders.
// ─────────────────────────────────────────────────────────────────────────────
// Added 23 Sep 2026. The assistant answers ONLY from these passages, and every
// passage comes from a source that already goes through the site's evidence
// checks: the generated llms.txt (company facts and commercial terms), the
// pricing and service FAQs, and the FAQs on each guide. Nothing here is written
// for the assistant. If a fact is corrected on the site it is corrected here on
// the next build, and a claim that was withdrawn from the site cannot survive in
// the assistant's answers.
//
// Retrieval is plain BM25 over a few hundred short passages held in memory. No
// embeddings, no vector database, no second paid service: at this size keyword
// ranking is fast, free and easy to inspect when an answer looks wrong.
//
// 29 Sep 2026: a 30-question test showed keyword luck deciding the answer on
// the questions that matter most. "Do you do deposits?" missed "When do I pay?",
// "Can I see your work?" found nothing and the model said we had no work to
// show, and "websites" never matched "website". Three changes:
//   - tokens() now reduces singular and plural to the same word
//   - our published projects (company-facts.ts PROJECTS and the verified
//     case-study figures) are passages, so questions about our work have facts
//   - TOPICS below is a small fact map: when a question is about payment,
//     timelines, our work, store pricing or editing, the passages that answer
//     it are always sent, whatever the keyword ranking says
// ─────────────────────────────────────────────────────────────────────────────

import "server-only";
import { createHash } from "node:crypto";
import { buildLlmsTxt } from "@/data/llms-txt";
import { serviceOwnershipAnswers } from "@/data/service-ownership-answers";
import { pricingFaqs } from "@/data/pricing-faqs";
import { previewFaqs, previewServiceFaqs } from "@/components/pages/services/preview-faqs";
import { migrationFaqs } from "@/data/wordpress-migration-faqs";
import { blogPosts } from "@/data/blog";
import { PROJECTS } from "@/data/company-facts";
import { allCaseStudySlugs, caseStudy, verifiedMetrics } from "@/data/case-study-facts";

export interface Passage {
  id: string;
  title: string;
  text: string;
  url: string;
}

const BASE = "https://www.pandacodegen.com";

// Sections of llms.txt that are link indexes rather than statements. The guides
// themselves are indexed below from blog.ts, with their answers.
const SKIP_SECTIONS = /guides by topic|verification note/i;

// Where a visitor should be sent to read more about each llms.txt section. The
// file itself is a fact sheet for machines, not a page to link a person to.
function pageFor(title: string): string {
  if (/commercial|pricing|price/i.test(title)) return `${BASE}/pricing`;
  if (/service/i.test(title)) return `${BASE}/services`;
  if (/polic/i.test(title)) return `${BASE}/editorial-policy`;
  if (/work|project|case/i.test(title)) return `${BASE}/work`;
  return `${BASE}/about`;
}

function llmsPassages(): Passage[] {
  const out: Passage[] = [];
  const lines = buildLlmsTxt().split("\n");
  let title = "";
  let buf: string[] = [];
  const flush = () => {
    const body = buf.join("\n").trim();
    if (title && body && !SKIP_SECTIONS.test(title)) {
      // Long sections become several passages so a question about hosting does
      // not have to carry the whole commercial-terms block to be answered.
      const bullets = body.split(/\n(?=- )/);
      let chunk = "";
      let n = 0;
      for (const b of bullets) {
        if ((chunk + "\n" + b).length > 900 && chunk) {
          out.push({ id: `site-${slug(title)}-${n++}`, title, text: chunk.trim(), url: pageFor(title) });
          chunk = "";
        }
        chunk += "\n" + b;
      }
      if (chunk.trim()) out.push({ id: `site-${slug(title)}-${n}`, title, text: chunk.trim(), url: pageFor(title) });
    }
    buf = [];
  };
  for (const line of lines) {
    const h = line.match(/^#{2,3}\s+(.*)$/);
    if (h) {
      flush();
      title = h[1].replace(/\[|\]\([^)]*\)/g, "").trim();
    } else {
      buf.push(line);
    }
  }
  flush();
  return out;
}

function faqPassages(): Passage[] {
  const out: Passage[] = [];
  pricingFaqs.forEach((f, i) =>
    out.push({ id: `pricing-${i}`, title: f.q, text: `${f.q}\n${f.a}`, url: `${BASE}/pricing` }),
  );
  const currentServiceFaqs = {
    ...Object.fromEntries(Object.keys(previewFaqs).map(slug => [slug, previewServiceFaqs(slug)])),
    "wordpress-migration": [...migrationFaqs(), ...serviceOwnershipAnswers("wordpress-migration")],
  };
  for (const [service, faqs] of Object.entries(currentServiceFaqs)) {
    faqs.forEach((f, i) => {
      const answerIndex = serviceOwnershipAnswers(service).findIndex(answer => answer.q === f.q);
      const anchor = answerIndex < 0 ? "" : `#ownership-${service}-${answerIndex + 1}`;
      out.push({ id: `svc-${service}-${i}`, title: f.q, text: `${f.q}\n${f.a}`, url: `${BASE}/services/${service}${anchor}` });
    });
  }
  for (const p of blogPosts) {
    const url = `${BASE}/blog/${p.id}`;
    out.push({ id: `blog-${p.id}`, title: p.title, text: `${p.title}\n${p.excerpt}`, url });
    (p.faqs ?? []).forEach((f, i) =>
      out.push({ id: `blog-${p.id}-${i}`, title: p.title, text: `${f.question}\n${f.answer}`, url }),
    );
  }
  return out;
}

// Our published projects, from the same records /ai-info and /work render. The
// relationship is part of every passage, so the model cannot describe a
// founder-affiliated project or a demo as client work. Only verified figures
// are included; a withdrawn one is not in the data this reads, so it cannot
// come back through the assistant.
function projectPassages(): Passage[] {
  const out: Passage[] = PROJECTS.map((p) => ({
    id: `work-${slug(p.name)}`,
    title: `Our work: ${p.name}`,
    text: `${p.name} (${p.relationship}). ${p.fact}`,
    // Portfolio answers link to the project record, with live-site links on that page.
    url: p.href.startsWith("http") ? p.href : `${BASE}${p.href}`,
  }));
  for (const s of allCaseStudySlugs()) {
    const metrics = verifiedMetrics(s);
    if (!metrics.length) continue;
    const study = caseStudy(s);
    const figures = metrics
      .map((m) => `${m.label}: ${m.value ?? `${m.before} to ${m.after}`} (${m.method?.note ?? "project record"})`)
      .join("; ");
    out.push({
      id: `work-${s}-figures`,
      title: `Our work: ${study.name}`,
      text: `${study.name}. ${study.disclosure} Verified figures: ${figures}`,
      url: `${BASE}${study.href}`,
    });
  }
  return out;
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// ── BM25 ────────────────────────────────────────────────────────────────────

const STOP = new Set(
  "a an and are as at be but by can do does for from how i if in into is it its me my of on or our so that the their them then there these they this to was we what when where which who why will with you your".split(
    " ",
  ),
);

// Reduces a word and its plural or -ing/-ed form to the same stem: price and
// prices both become "pric", website and websites "websit", ranking and
// rankings "rank". The old one-step suffix strip turned "prices" into "pric"
// but left "price" alone, so the two never matched. Short words are left
// whole so "fee", "use" and "seo" survive.
function stem(word: string): string {
  let t = word;
  if (t.length <= 3) return t;
  if (t.endsWith("ies") && t.length > 4) t = `${t.slice(0, -3)}y`;
  else if (t.endsWith("s") && !/(ss|us|is)$/.test(t)) t = t.slice(0, -1);
  for (const suffix of ["ing", "ed"]) {
    if (t.endsWith(suffix) && t.length - suffix.length >= 3) {
      t = t.slice(0, -suffix.length);
      break;
    }
  }
  const trimmed = t.replace(/e+$/, "");
  return trimmed.length >= 3 ? trimmed : t;
}

// Accents off before splitting, so "información" is one word, not
// "informaci" and "n", and "cuánto" matches "cuanto".
function plain(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function tokens(s: string): string[] {
  return plain(s)
    .replace(/\$/g, " price ")
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 1 && !STOP.has(t))
    .map(stem);
}

interface Index {
  passages: Passage[];
  docs: string[][];
  df: Map<string, number>;
  avgLen: number;
  version: string;
}

let index: Index | null = null;

function getIndex(): Index {
  if (index) return index;
  const passages = [...llmsPassages(), ...faqPassages(), ...projectPassages()];
  const docs = passages.map((p) => tokens(`${p.title} ${p.text}`));
  const df = new Map<string, number>();
  for (const d of docs) for (const t of new Set(d)) df.set(t, (df.get(t) ?? 0) + 1);
  const avgLen = docs.reduce((n, d) => n + d.length, 0) / Math.max(docs.length, 1);
  const version = createHash("sha256").update(JSON.stringify(passages)).digest("hex").slice(0, 16);
  index = { passages, docs, df, avgLen, version };
  const broken = unresolvedPins();
  if (broken.length) console.warn(`[assistant] fact map topics with no passage: ${broken.join(", ")}`);
  return index;
}

/**
 * Changes whenever any passage changes. Cached answers are keyed on it, so a
 * corrected fact on the site can never be answered from a cache made before it.
 */
export function knowledgeVersion(): string {
  return getIndex().version;
}

/** Always sent, whatever the question: who we are and the commercial terms. */
export function corePassages(): Passage[] {
  return getIndex().passages.filter((p) => /company facts|commercial terms/i.test(p.title));
}

export function search(query: string, k = 6): Passage[] {
  const { passages, docs, df, avgLen } = getIndex();
  const q = [...new Set(tokens(query))];
  if (!q.length) return [];
  const N = docs.length;
  const k1 = 1.2;
  const b = 0.75;
  const scored = docs.map((d, i) => {
    let score = 0;
    for (const t of q) {
      const n = df.get(t);
      if (!n) continue;
      const f = d.filter((x) => x === t).length;
      if (!f) continue;
      const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
      score += idf * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * d.length) / avgLen)));
    }
    return { i, score };
  });
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b2) => b2.score - a.score)
    .slice(0, k)
    .map((s) => passages[s.i]);
}

export function passageCount(): number {
  return getIndex().passages.length;
}

// ── Fact map ────────────────────────────────────────────────────────────────
// For the questions where a wrong or missing fact costs a sale, the answer is
// not left to keyword ranking. Each topic says how to recognise the question
// and which passages always go with it. Pins match on the FAQ question text,
// not its position, so reordering an FAQ list does not break them; renaming a
// pinned question does, and unresolvedPins() reports that on the first build.

interface Topic {
  name: string;
  ask: (query: string) => boolean;
  /** Words added to the search, so related passages rank whatever the phrasing. */
  expand?: string;
  pin: (p: Passage, query: string) => boolean;
  /** A question that must always pin something. Used by unresolvedPins(). */
  probe: string;
}

const PLATFORMS: [RegExp, string][] = [
  [/woo/i, "woocommerce"],
  [/shopify|headless/i, "ecommerce"],
  [/webflow/i, "webflow"],
  [/\bwix\b/i, "wix"],
  [/squarespace/i, "squarespace"],
  [/gohighlevel|high ?level|\bghl\b/i, "gohighlevel"],
  [/\b(apps?|software|portal|crm|dashboard|internal tools?)\b/i, "custom-engineering"],
];

function platformsIn(query: string): string[] {
  const services = PLATFORMS.filter(([re]) => re.test(query)).map(([, service]) => service);
  if (/wordpress|\bwp\b|elementor|divi/i.test(query)) {
    services.push(/migrat|move (away|from)|leav|next\.?js|headless/i.test(query) ? "wordpress-migration" : "wordpress");
  }
  return services;
}

// "packages" and "retainer" added 3 Oct 2026: "Do you have monthly packages?"
// counted as not asking about cost, so the answer couldn't name the AI SEO price.
const COST = /\b(costs?|prices?|pricing|how much|budget|afford|expensive|cheap|quotes?|rates?|fees?|packages?|retainers?)\b|\$/i;
const STORE = /\b(stores?|shops?|e-?commerce|products?|catalog(ue)?s?|skus?|woocommerce|shopify)\b/i;
const PRODUCT_COUNT = /\b\d{2,}\s*(products?|items?|skus?)\b/i;

const TOPICS: Topic[] = [
  {
    name: "WordPress choice",
    ask: (q) => /wordpress|\bwp\b|elementor|divi/i.test(q),
    pin: (p) => p.id.startsWith("svc-wordpress-") && /^will you build on wordpress/i.test(p.title),
    probe: "Can you build me a simple WordPress site?",
  },
  {
    name: "payment",
    ask: (q) => /\b(pay|paying|paid|payments?|deposits?|instal+ments?|up ?front|split|financ\w*|invoices?)\b/i.test(q),
    expand: "when do I pay payment",
    pin: (p) => p.id.startsWith("pricing-") && /^when do i pay/i.test(p.title),
    probe: "Do you take a deposit?",
  },
  {
    name: "timeline",
    ask: (q) =>
      /\b(how long|how quickly|how soon|how fast can|timelines?|turnaround|weeks?|months?|deadline|go live|launch (by|date))\b/i.test(q),
    expand: "how long take weeks",
    pin: (p, q) => {
      const named = platformsIn(q);
      // General planning ranges live in the commercial facts. A named
      // platform's visible timeline answer takes priority where one exists.
      if (!named.length) return /commercial terms/i.test(p.title);
      return p.id.startsWith("svc-") && /^how long/i.test(p.title) &&
        named.some((s) => p.url === `${BASE}/services/${s}`);
    },
    probe: "How long does a website take?",
  },
  {
    name: "work",
    ask: (q) =>
      /\b(portfolio|examples?|case stud(y|ies)|past (work|projects?|clients?)|previous (work|projects?|clients?)|your (work|projects?|clients?)|work (you'?ve|you have)? ?done|(sites?|websites?|stores?) you('ve| have)? built|who have you (built|worked)|show me|samples?|references?|testimonials?|reviews?)\b/i.test(
        q,
      ) ||
      // "Do you have an ecommerce client I can talk to?" (3 Oct 2026 persona test)
      /\b((\w+ )?clients? (i|we) (can|could) (talk|speak)|(talk|speak) (to|with) (a |an |one of )?(your )?(\w+ )?(clients?|customers?)|(do you have|have you had) (any |an? )?(\w+ )?clients?)\b/i.test(q),
    pin: (p, q) =>
      /^project records$/i.test(p.title) ||
      p.id.startsWith("work-") ||
      (/review|testimonial/i.test(q) && /^evidence policy$/i.test(p.title)),
    probe: "Can I see your portfolio?",
  },
  {
    name: "platform pricing",
    ask: (q) => (COST.test(q) || PRODUCT_COUNT.test(q)) && platformsIn(q).length > 0,
    pin: (p, q) =>
      p.id.startsWith("svc-") && /cost|pricing/i.test(p.title) && platformsIn(q).some((s) => p.url === `${BASE}/services/${s}`),
    probe: "How much does a WooCommerce migration cost?",
  },
  // 3 Oct 2026: "Can you cut my Shopify app bill?" and "How long would a
  // headless Shopify build take?" both got "we don't have that detail" while
  // the app-costs and headless articles sat unused, so they are pinned.
  {
    name: "Shopify apps",
    ask: (q) => (/shopify/i.test(q) && /\b(apps?|subscriptions?|bill|fees)\b/i.test(q)) || /\bapps? (bill|costs?|creep|fees)\b/i.test(q),
    pin: (p) =>
      p.id === "blog-shopify-app-costs-real-monthly-bill" ||
      (p.id.startsWith("blog-shopify-app-costs-real-monthly-bill-") &&
        /^(What Shopify apps can I replace|What is Shopify app creep|When does a custom Shopify storefront)/i.test(p.text)),
    probe: "Can you cut my Shopify app bill?",
  },
  {
    name: "headless Shopify",
    ask: (q) => /\b(headless|hydrogen|storefront api)\b/i.test(q) && !/wordpress|\bwp\b/i.test(q),
    pin: (p) =>
      /^Does a headless Shopify store replace Shopify checkout/i.test(p.title) ||
      p.id === "blog-shopify-headless" ||
      (p.id.startsWith("blog-shopify-headless-") && /^(Is headless Shopify worth|Can I still use Shopify apps)/i.test(p.text)),
    probe: "Can you build a headless Shopify store?",
  },
  // 7 Oct 2026: "how can i have a new website" matched blog passages on the
  // words "new" and "website" and got a vague answer with no steps. Questions
  // about how to start, or how working with us goes, now always get the FAQs
  // that describe it: what happens before the quote, accepting it, paying.
  {
    name: "getting started",
    ask: (q) =>
      /\b(how (can|do|would|should) (i|we) (get|have|start|begin|order|buy|hire|work with)|get(ting)? started|where (do|should) (i|we) (start|begin)|how (does|do) (it|this|you|working with you) work|(what'?s|what is|whats) the (process|first step|next step)|next steps?|your process|how to (start|begin|get a|hire)|(i|we) (want|need|would like|'?d like) (a |an )?(new )?(website|site|web ?site|online store|store|shop))\b/i.test(q),
    expand: "what happens before you quote written quote",
    pin: (p) =>
      p.id.startsWith("pricing-") &&
      /^(what happens before you quote|do i need a long contract|when do i pay|what support is included)/i.test(p.title),
    probe: "How can I have a new website?",
  },
  {
    name: "editing",
    ask: (q) => /\b(edit|editing|update|change|changes|cms|content editor|myself|without (a )?developer)\b/i.test(q),
    pin: (p) => p.id.startsWith("pricing-") && /^what can i change myself/i.test(p.title),
    probe: "Can I edit the site myself?",
  },
  // 10 Oct 2026, code review: this topic used to sit first and pin all eight CMS
  // service passages for any question that said "cms" or "sanity". "Can I edit my
  // Webflow CMS myself?" then got the CMS service and nothing about Webflow, and a
  // question that also asked about timing or payment could lose those pins to the
  // cap. Now it only applies when no platform is named (the platform's own service
  // answers those), pins the one "which CMS" answer, and comes last so it never
  // crowds out a more specific pin. Search still finds the other CMS answers.
  {
    name: "CMS development",
    ask: (q) => /\b(cms|sanity|content editor|publishing workflow)\b/i.test(q) && platformsIn(q).length === 0,
    expand: "CMS website development editor Sanity WordPress",
    pin: (p) => p.id.startsWith("svc-cms-development-") && /^which cms should/i.test(p.title),
    probe: "Can you build a CMS website my team can edit?",
  },
];

// Fourteen pinned passages is about 9,000 characters, comfortably inside the
// model's prompt; the cap stops a question that touches every topic from
// crowding out the keyword results. A "show me your work" question pins the
// four project-record chunks plus every PROJECTS entry, so the cap has to
// grow with that list.
const MAX_PINNED = 14;

export interface Retrieval {
  passages: Passage[];
  topics: string[];
}

// Every passage is English, but visitors on /fr and /de, and Spanish speakers,
// ask in their own language. A handful of words carry the intent of most
// questions, so they are given English equivalents before the fact map and the
// search run. The model still answers in the visitor's language.
const IN_ENGLISH: [RegExp, string][] = [
  [/\b(cuanto cuesta|cuesta|precios?|costos?|coste|combien|coute|prix|tarifs?|kostet|kosten|preise?)\b/, "how much cost price"],
  [/\b(cuanto tiempo|tarda|semanas|combien de temps|delais?|semaines|wie lange|dauert|wochen)\b/, "how long weeks"],
  [/\b(tienda|boutique|laden|onlineshop)\b/, "online store"],
  [/\b(sitio|pagina web|site web|webseite)\b/, "website"],
  [/\b(modificar|editar|cambiar|modifier|changer|bearbeiten|andern|aendern)\b/, "edit change myself"],
  [/\b(pagos?|pagar|deposito|anticipo|paiements?|payer|acompte|zahlung|anzahlung|bezahlen)\b/, "pay payment deposit"],
  [/\b(migracion|migrar|migrer|umzug|migrieren|migration von)\b/, "migration move"],
  [/\b(portafolio|proyectos|trabajos|realisations|projets|referenzen|projekte)\b/, "portfolio examples your work"],
];

/** Does this message ask about price, in English, Spanish, French or German? */
export function asksAboutCost(message: string): boolean {
  return COST.test(withEnglish(message));
}

function withEnglish(query: string): string {
  const q = plain(query);
  const hints = IN_ENGLISH.filter(([re]) => re.test(q)).map(([, en]) => en);
  return hints.length ? `${query} ${hints.join(" ")}` : query;
}

/** Core passages, then the fact map's pins, then the best keyword matches. */
export function retrieve(question: string, k = 6): Retrieval {
  const { passages } = getIndex();
  const query = withEnglish(question);
  const topics = TOPICS.filter((t) => t.ask(query));
  const pinned = topics.flatMap((t) => passages.filter((p) => t.pin(p, query))).slice(0, MAX_PINNED);
  const expanded = [query, ...topics.map((t) => t.expand ?? "")].join(" ");
  const seen = new Set<string>();
  const out: Passage[] = [];
  for (const p of [...corePassages(), ...pinned, ...search(expanded, k)]) {
    if (seen.has(p.id)) continue;
    seen.add(p.id);
    out.push(p);
  }
  return { passages: out, topics: topics.map((t) => t.name) };
}

/** Topics whose probe question pins nothing: usually a renamed FAQ question. */
export function unresolvedPins(): string[] {
  if (!index) return [];
  const { passages } = index;
  return TOPICS.filter((t) => !t.ask(t.probe) || !passages.some((p) => t.pin(p, t.probe))).map((t) => t.name);
}
