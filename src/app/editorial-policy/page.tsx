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
  ["Mutable facts", "Prices, product limits, policies, market data, incidents, and other changing facts should cite a primary source and state the date checked and relevant region, plan, currency, or version."],
  ["First-party results", "A case-study metric should identify the subject, period, measurement source, baseline, method, material limitations, and permission to publish. Results are not presented as typical or guaranteed."],
  ["Estimates and illustrations", "Forecasts, example budgets, and calculators are labeled as estimates, disclose important assumptions, and are not represented as quotes or promised outcomes."],
  ["Search and performance", "Lab tests are distinguished from field data. Search rankings, indexing, traffic, AI citations, PageSpeed scores under all conditions, conversions, and revenue are not guaranteed."],
  ["Comparisons", "Named-company comparisons should disclose selection criteria, sources, checked-on dates, material differences in scope, and PandaCodeGen's commercial interest."],
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
            We aim to make it clear what is an externally sourced fact, a first-party observation, an estimate, an opinion, or a commercial term. A page is not evidence for its own claims, and a hyperlink alone is not a completed fact-check.
          </p>
          <p className="mt-5 text-sm text-stone-600">Effective: 20 July 2026 · Last reviewed: 23 July 2026</p>
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
