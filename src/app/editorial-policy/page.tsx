import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ogImageForPath } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Editorial & Evidence Policy",
  description: "How PandaCodeGen distinguishes sourced facts, first-party observations, estimates, opinions, commercial claims, corrections, and time-sensitive information.",
  alternates: { canonical: "/editorial-policy" },
  openGraph: {
    title: "Editorial & Evidence Policy | PandaCodeGen",
    description: "How PandaCodeGen handles sources, first-party observations, estimates, commercial claims, corrections, and time-sensitive information.",
    type: "website",
    url: "https://www.pandacodegen.com/editorial-policy",
    images: [ogImageForPath("/editorial-policy")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial & Evidence Policy | PandaCodeGen",
    description: "How PandaCodeGen handles sources, first-party observations, estimates, commercial claims, corrections, and time-sensitive information.",
    images: [ogImageForPath("/editorial-policy")],
  },
};

const controls = [
  ["Mutable facts", "Anything that changes, prices, product limits, policies, market data, incidents, should cite a primary source and say when we checked it and which region, plan currency, or version."],
  ["First-party results", "A case-study number should say who it is about, over what period, where it was measured, what it started from, how it was measured, where it stops being reliable, and that we have permission to publish it. Results are not presented as typical or guaranteed."],
  ["Estimates and illustrations", "Forecasts, example budgets and calculators are labelled as estimates, state what they assume, and are never presented as quotes or promises."],
  ["Search and performance", "Lab tests are distinguished from field data. Search rankings, indexing, traffic, AI citations, PageSpeed scores under all conditions, conversions, and revenue are not guaranteed."],
  ["Comparisons", "When we compare named companies we say how we picked them, where the information came from, when we checked, where the scope genuinely differs, and what PandaCodeGen's commercial interest in the comparison is."],
  ["Corrections", "Material errors are corrected in the page and its metadata. A correction note should be added when the change affects the conclusion or a reader's commercial decision."],
];

// The five legal pages were the only indexable routes without structured data.
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.pandacodegen.com/editorial-policy#webpage",
      url: "https://www.pandacodegen.com/editorial-policy",
      name: "Editorial Policy",
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      publisher: { "@id": "https://www.pandacodegen.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pandacodegen.com/editorial-policy#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "Editorial Policy", item: "https://www.pandacodegen.com/editorial-policy" },
      ],
    },
  ],
};

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-paper text-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <section className="px-6 pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cognac">Editorial governance</p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">Editorial & Evidence Policy</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-700">
            We try to make it obvious which is which: a fact from someone else, something we saw ourselves, an estimate, an opinion, or a commercial term. A page is not evidence for its own claims, and a hyperlink alone is not a completed fact-check.
          </p>
          <p className="mt-5 text-sm text-stone-600">Effective: July 20, 2026 · Last reviewed: July 23, 2026</p>
        </div>
      </section>

      <section className="border-y border-stone-300 bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-5xl">Publication controls</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {controls.map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-stone-300 bg-paper p-6">
                <CheckCircle2 className="h-6 w-6 text-cognac" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-stone-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-10">
          <div>
            <h2 className="text-3xl font-bold">Review and freshness</h2>
            <p className="mt-5 leading-7 text-stone-700">
              High-volatility pages, including price trackers, product changes, incidents, legal or privacy topics, and current-year comparisons, require a primary-source check before publication and a scheduled recheck. Evergreen technical guidance is reviewed when a relevant platform, standard, or source changes. A visible date does not prove that every fact on a page is current.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Content review status</h2>
            <p className="mt-5 leading-7 text-stone-700">
              The July 2026 release review covered every current blog route and its shared search-card and FAQ data. Universal ranking, revenue, performance, hosting, cutover, ownership, refund, and AI-citation promises were removed or bounded, and a repository release gate now checks those prohibited patterns. Mutable vendor, product, price, incident, market, security, and legal facts still require a dated primary-source check whenever an article is materially updated. Readers should never treat an example as a PandaCodeGen quote, guarantee, or prediction for their project.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">How this content is produced</h2>
            <p className="mt-5 leading-7 text-stone-700">
              Articles on this site are researched, drafted and edited by a named person with AI assistance, and every one carries a byline that resolves to that person&apos;s background page. AI tools are used the way a research assistant and a copy editor are used: to gather candidate sources, draft and restructure passages, and check prose for clarity. They are not used to publish unreviewed output, and no article is generated and posted without a human reading it in full.
            </p>
            <p className="mt-5 leading-7 text-stone-700">
              Every factual claim, price, date, limit and quotation is verified against the primary source by a person before publication, and the date of that check is written into the page rather than implied by the timestamp. Where a figure cannot be verified against a primary source, we say so and leave it out rather than repeat it from a secondary summary. Where we publish an observation of our own, it carries the method and the date so a reader can repeat it. We disclose this because we recommend readers ask vendors the same question, and it would be inconsistent to ask it without answering it here.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Report a correction</h2>
            <p className="mt-5 leading-7 text-stone-700">
              Send the page URL, disputed statement, and supporting primary source to <a className="font-bold text-cognac underline" href="mailto:info@pandacodegen.com?subject=Editorial%20correction">info@pandacodegen.com</a>. We review corrections on their evidence, regardless of whether the sender is a customer, competitor, vendor, or reader.
            </p>
          </div>
          <Link href="/blog" className="inline-flex min-h-12 items-center rounded-full bg-charcoal px-6 font-bold text-white hover:bg-cognac">Browse the blog</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
