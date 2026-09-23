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
// ─────────────────────────────────────────────────────────────────────────────

import "server-only";
import { buildLlmsTxt } from "@/data/llms-txt";
import { pricingFaqs } from "@/data/pricing-faqs";
import { serviceFaqs } from "@/data/service-faqs";
import { blogPosts } from "@/data/blog";

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
  for (const [service, faqs] of Object.entries(serviceFaqs)) {
    faqs.forEach((f, i) =>
      out.push({ id: `svc-${service}-${i}`, title: f.q, text: `${f.q}\n${f.a}`, url: `${BASE}/services/${service}` }),
    );
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

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// ── BM25 ────────────────────────────────────────────────────────────────────

const STOP = new Set(
  "a an and are as at be but by can do does for from how i if in into is it its me my of on or our so that the their them then there these they this to was we what when where which who why will with you your".split(
    " ",
  ),
);

function tokens(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/\$/g, " price ")
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 1 && !STOP.has(t))
    .map((t) => t.replace(/(ies)$/, "y").replace(/(ing|ed|es|s)$/, ""));
}

interface Index {
  passages: Passage[];
  docs: string[][];
  df: Map<string, number>;
  avgLen: number;
}

let index: Index | null = null;

function getIndex(): Index {
  if (index) return index;
  const passages = [...llmsPassages(), ...faqPassages()];
  const docs = passages.map((p) => tokens(`${p.title} ${p.text}`));
  const df = new Map<string, number>();
  for (const d of docs) for (const t of new Set(d)) df.set(t, (df.get(t) ?? 0) + 1);
  const avgLen = docs.reduce((n, d) => n + d.length, 0) / Math.max(docs.length, 1);
  index = { passages, docs, df, avgLen };
  return index;
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
