import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail } from "lucide-react";
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
  ["First-party results", "Case-study results should identify the project, source record, dates, sample, tools, metric definitions, method and limitations. Before-and-after comparisons should use comparable conditions, and client or data-owner permission should be recorded before publication. Results are not presented as typical or guaranteed."],
  ["Estimates and illustrations", "Forecasts, example budgets and calculators are labelled as estimates, state what they assume, and are never presented as quotes or promises."],
  ["Search and performance", "Lab tests are distinguished from field data. Search rankings, indexing, traffic, AI citations, PageSpeed scores under all conditions, conversions, and revenue are not guaranteed."],
  ["Comparisons", "When we compare named companies we say how we picked them, where the information came from, when we checked, where the scope genuinely differs, and what PandaCodeGen's commercial interest in the comparison is."],
  ["Corrections", "Material errors are corrected in the page and its metadata. A correction note should be added when the change affects the conclusion or a reader's commercial decision."],
];

const contents = [
  { id: "publication-controls", label: "Publication controls" },
  { id: "review-and-freshness", label: "Review and freshness" },
  { id: "content-review-status", label: "Content review status" },
  { id: "how-content-is-produced", label: "How content is produced" },
  { id: "report-a-correction", label: "Report a correction" },
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
    <div className="min-h-screen bg-paper text-charcoal">
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
        <section className="px-5 pb-12 pt-32 sm:px-8 md:pb-16 md:pt-40" aria-labelledby="policy-title">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cognac">How we publish</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-end lg:gap-16">
              <div>
                <h1 id="policy-title" className="max-w-3xl text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.04em]">
                  Editorial &amp;<br />
                  <span className="font-serif italic text-cognac">evidence policy.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
                  We try to make it obvious which is which: a fact from someone else, something we saw ourselves, an estimate, an opinion, or a commercial term.
                </p>
              </div>
              <aside className="border-l-2 border-cognac pl-6 lg:mb-1" aria-label="Our approach to evidence">
                <p className="text-xl font-semibold leading-8 tracking-tight">A page is not evidence for its own claims.</p>
                <p className="mt-3 leading-7 text-stone-600">And a hyperlink alone is not a completed fact-check.</p>
              </aside>
            </div>
            <div className="mt-10 flex flex-col gap-4 border-t border-stone-300 pt-5 text-sm text-stone-600 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <p>Effective <time dateTime="2026-07-20" className="font-medium text-charcoal">July 20, 2026</time></p>
                <p>Last reviewed <time dateTime="2026-07-23" className="font-medium text-charcoal">July 23, 2026</time></p>
              </div>
              <a href="#report-a-correction" className="inline-flex min-h-11 w-fit items-center gap-2 font-semibold text-charcoal underline decoration-stone-300 underline-offset-4 transition-colors hover:text-cognac focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cognac">
                Something needs correcting? <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <div className="border-t border-stone-300 bg-white px-5 py-10 sm:px-8 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
            <aside>
              <nav aria-label="On this page" className="lg:sticky lg:top-28">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">On this page</p>
                <ol className="mt-4 grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
                  {contents.map(({ id, label }, index) => (
                    <li key={id}>
                      <a href={`#${id}`} className="group flex min-h-11 items-center gap-3 rounded-lg py-2 pr-3 text-sm leading-5 text-stone-600 transition-colors hover:text-cognac focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cognac">
                        <span className="font-mono text-xs text-stone-500 group-hover:text-cognac" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                        {label}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 hidden max-w-[14rem] border-t border-stone-200 pt-5 text-sm leading-6 text-stone-600 lg:block">
                  These standards apply to our articles, comparisons and published project results.
                </p>
              </nav>
            </aside>

            <div className="min-w-0">
              <section id="publication-controls" className="scroll-mt-28" aria-labelledby="controls-title">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cognac">01 / The standards</p>
                <h2 id="controls-title" className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Publication controls</h2>
                <div className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
                  {controls.map(([title, body], index) => (
                    <article key={title} className="grid gap-3 py-7 sm:grid-cols-[2rem_minmax(0,1fr)] sm:gap-4">
                      <span className="font-mono text-sm text-cognac sm:pt-1" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                        <p className="mt-3 leading-7 text-stone-600">{body}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section id="review-and-freshness" className="scroll-mt-28 border-b border-stone-200 py-10 md:py-12" aria-labelledby="freshness-title">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cognac">02 / Keeping information current</p>
                <h2 id="freshness-title" className="mt-3 text-3xl font-bold leading-tight tracking-tight">Review and freshness</h2>
                <p className="mt-5 leading-7 text-stone-600">
                  High-volatility pages, including price trackers, product changes, incidents, legal or privacy topics, and current-year comparisons, require a primary-source check before publication and a scheduled recheck. Evergreen technical guidance is reviewed when a relevant platform, standard, or source changes.
                </p>
                <p className="mt-5 border-l-2 border-cognac pl-5 font-medium leading-7 text-charcoal">A visible date does not prove that every fact on a page is current.</p>
              </section>

              <section id="content-review-status" className="scroll-mt-28 border-b border-stone-200 py-10 md:py-12" aria-labelledby="review-title">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cognac">03 / Release review</p>
                <h2 id="review-title" className="mt-3 text-3xl font-bold leading-tight tracking-tight">Content review status</h2>
                <p className="mt-5 leading-7 text-stone-600">
                  The July 2026 release review covered every current blog route and its shared search-card and FAQ data. Universal ranking, revenue, performance, hosting, cutover, ownership, refund, and AI-citation promises were removed or bounded, and a repository release gate now checks those prohibited patterns.
                </p>
                <p className="mt-4 leading-7 text-stone-600">
                  Mutable vendor, product, price, incident, market, security, and legal facts still require a dated primary-source check whenever an article is materially updated. Readers should never treat an example as a PandaCodeGen quote, guarantee, or prediction for their project.
                </p>
              </section>

              <section id="how-content-is-produced" className="scroll-mt-28 py-10 md:py-12" aria-labelledby="production-title">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cognac">04 / People and AI assistance</p>
                <h2 id="production-title" className="mt-3 text-3xl font-bold leading-tight tracking-tight">How this content is produced</h2>
                <p className="mt-5 leading-7 text-stone-600">
                  Articles on this site are researched, drafted and edited by a named person with AI assistance, and every one carries a byline that resolves to that person&apos;s background page. AI tools are used the way a research assistant and a copy editor are used: to gather candidate sources, draft and restructure passages, and check prose for clarity. They are not used to publish unreviewed output, and no article is generated and posted without a human reading it in full.
                </p>
                <p className="mt-5 leading-7 text-stone-600">
                  Every factual claim, price, date, limit and quotation is verified against the primary source by a person before publication, and the date of that check is written into the page rather than implied by the timestamp. Where a figure cannot be verified against a primary source, we say so and leave it out rather than repeat it from a secondary summary.
                </p>
                <p className="mt-5 leading-7 text-stone-600">
                  Where we publish an observation of our own, it carries the method and the date so a reader can repeat it. We disclose this because we recommend readers ask vendors the same question, and it would be inconsistent to ask it without answering it here.
                </p>
              </section>

              <section id="report-a-correction" className="scroll-mt-28 rounded-2xl border border-stone-200 bg-paper p-6 sm:p-8" aria-labelledby="correction-title">
                <div className="flex items-center gap-3 text-cognac">
                  <Mail size={20} aria-hidden="true" />
                  <p className="text-xs font-bold uppercase tracking-[0.16em]">05 / Open to correction</p>
                </div>
                <h2 id="correction-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight">Report a correction</h2>
                <p className="mt-4 leading-7 text-stone-600">Send the page URL, disputed statement, and supporting primary source to:</p>
                <a className="mt-4 inline-flex min-h-11 max-w-full items-center gap-2 break-all font-semibold text-cognac underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cognac" href="mailto:info@pandacodegen.com?subject=Editorial%20correction">
                  info@pandacodegen.com <ArrowUpRight size={18} className="shrink-0" aria-hidden="true" />
                </a>
                <p className="mt-4 leading-7 text-stone-600">We review corrections on their evidence, regardless of whether the sender is a customer, competitor, vendor, or reader.</p>
              </section>

              <div className="mt-10 flex flex-col gap-4 border-t border-stone-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <Link href="/blog" className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-charcoal px-6 text-sm font-semibold text-white transition-colors hover:bg-cognac focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cognac">
                  Browse the blog <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link href="/contact" className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-charcoal underline decoration-stone-300 underline-offset-4 transition-colors hover:text-cognac focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cognac">
                  Contact the founders <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer showCta={false} />
    </div>
  );
}
