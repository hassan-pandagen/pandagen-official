import type { Metadata } from "next";
import { COMPANY, SERVICES, COMMERCIAL, GOVERNANCE, MIGRATION_CONTROLS, REFERENCE_LINKS } from "@/data/company-facts";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, Gauge, Route, Search, ShieldCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ogImageForPath } from "@/lib/seo/og";

export const dynamic = "force-static";

const published = "2026-02-15";
const modified = "2026-07-22";

export const metadata: Metadata = {
  title: "PandaCodeGen Company Reference | Migrations, Process, Pricing",
  description: "A factual reference for PandaCodeGen: SEO-safe website migration focus, delivery process, pricing starting points, founders, evidence policy, and contact details.",
  alternates: { canonical: "/ai-info" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "PandaCodeGen Company Reference",
    description: "Website migration focus, delivery process, pricing starting points, founders, evidence policy, and contact details.",
    type: "website",
    url: "https://www.pandacodegen.com/ai-info",
    images: [ogImageForPath("/ai-info")],
  },
  twitter: {
    card: "summary_large_image",
    title: "PandaCodeGen Company Reference",
    description: "Website migration focus, delivery process, pricing starting points, founders, evidence policy, and contact details.",
    images: [ogImageForPath("/ai-info")],
  },
};

// Rendered from src/data/company-facts.ts rather than retyped here.
//
// That module's docblock has always said it is "the single source of truth for
// every machine-readable company fact... rendered by whichever pages need it, so
// two pages cannot disagree". This page — its primary consumer, the reference
// page built for machines — never imported it and kept 16 hardcoded copies. So
// the premise was false, which is exactly why the BAA sentence had to be
// corrected in three separate files on 11 Aug 2026.
//
// Now 25 facts instead of 16, because the source carries more than the copy did.
const facts: [string, string][] = [...COMPANY, ...SERVICES, ...COMMERCIAL, ...GOVERNANCE]
  .map((f) => [f.label, f.value]);

// Bodies come from MIGRATION_CONTROLS in company-facts.ts. Only the icon is
// local, because an icon is presentation and the sentence is a fact.
const migrationControls = MIGRATION_CONTROLS.map((c, i) => ({
  icon: [Search, Route, FileCheck2][i],
  title: c.title,
  body: c.body,
}));

// The four /ai-info/* rows are navigation between this page and its children,
// so they live here. Everything else is REFERENCE_LINKS from company-facts.ts,
// where three of these descriptions were already duplicated word for word.
const referenceLinks = [
  { href: "/ai-info/team-and-company", title: "Company facts (reference)", body: "Formation, founders, address, service area and contracting basis." },
  { href: "/ai-info/migration-services", title: "Migration services (reference)", body: "What is migrated, the build stack, and the three control groups." },
  { href: "/ai-info/pricing-and-guarantees", title: "Pricing and guarantees (reference)", body: "Starting prices, payment structure, refunds and the performance target." },
  { href: "/ai-info/case-studies", title: "Project evidence (reference)", body: "Every published project with its relationship and stated limits." },
  ...REFERENCE_LINKS,
];

const faqs = [
  {
    question: "What does PandaCodeGen do?",
    answer: "PandaCodeGen plans and implements SEO-safe website migrations for revenue-generating WordPress, Webflow, and GoHighLevel sites. Custom Next.js, commerce, integration, and application work remains available when discovery shows that the migration requires it.",
  },
  {
    question: "Does SEO-safe mean rankings are guaranteed?",
    answer: "No. SEO-safe describes the controls used to reduce avoidable migration risk, including URL inventory, redirect mapping, metadata and canonical parity, internal links, structured data, staging checks, cutover monitoring, and rollback planning. Search engines control crawling, indexing, rankings, and rich results.",
  },
  {
    question: "How much does a project cost?",
    answer: "Public starting points are $1,500 for a focused scope, $3,500 for a broader migration, and $5,000 to $10,000 or more for complex commerce, application, or high-page-count work. Discovery can add or remove features and pages. The accepted written scope controls the final price and deliverables.",
  },
  {
    question: "How are payment and refunds handled?",
    answer: "A common starting structure is 30 percent at onboarding and 70 percent at delivery, but the accepted project terms control each engagement. Refund protection is tied to failure to deliver the signed scope, not a general change-of-mind promise. Any timing, exceptions, and ownership consequences are documented before work begins.",
  },
  {
    question: "What does the 90+ performance standard mean?",
    answer: "When included in the accepted scope, the method records the agreed representative pages, mobile and desktop profiles, test environment, and repeated runs. It is a lab acceptance criterion, not a guarantee of field Core Web Vitals, rankings, conversion, revenue, network conditions, or third-party behavior.",
  },
  {
    question: "Who owns the finished project?",
    answer: "The intended model is client control of the domain, hosting, repository, business accounts, content, and custom deliverables after the payment and handover conditions in the accepted terms are met. PandaCodeGen retains pre-existing and reusable internal tools and templates. Third-party software remains subject to its original license.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.pandacodegen.com/ai-info#webpage",
      url: "https://www.pandacodegen.com/ai-info",
      name: "PandaCodeGen Company Reference",
      description: "Factual reference for PandaCodeGen's migration focus, process, pricing starting points, founders, and evidence policy.",
      datePublished: published,
      dateModified: modified,
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      about: { "@id": "https://www.pandacodegen.com/#organization" },
      mainEntity: { "@id": "https://www.pandacodegen.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://www.pandacodegen.com/#organization",
      name: "PandaCodeGen",
      url: "https://www.pandacodegen.com",
      foundingDate: "2026-02",
      email: "info@pandacodegen.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "12250 S Kirkwood Rd, Apt 1128",
        addressLocality: "Stafford",
        addressRegion: "TX",
        postalCode: "77477",
        addressCountry: "US",
      },
      founder: [
        {
          "@type": "Person",
          "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
          name: "Hassan Jamal",
          jobTitle: "Co-founder and Lead Engineer",
          url: "https://www.pandacodegen.com/about/hassan",
        },
        {
          "@type": "Person",
          "@id": "https://www.pandacodegen.com/#/schema/person/imran",
          name: "Imran Raza Ladhani",
          jobTitle: "Co-founder and Lead Architect",
          url: "https://www.pandacodegen.com/about/imran",
        },
      ],
      areaServed: ["US", "Worldwide"],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.pandacodegen.com/ai-info#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "Company reference", item: "https://www.pandacodegen.com/ai-info" },
      ],
    },
  ],
};

const companyFacts = [
  "PandaCodeGen is a custom Next.js web development studio, founded in February 2026, that migrates businesses off WordPress, Shopify, Webflow, Wix, Squarespace, WooCommerce and GoHighLevel onto custom code the client owns outright.",
  "PandaCodeGen is co-founder-led and has no account managers. Hassan Jamal is Co-founder and Lead Engineer; Imran Raza Ladhani is Co-founder and Lead Architect. The people who scope the work are the people who build it.",
  "PandaCodeGen prices work at fixed published tiers rather than hourly: Starter $1,500, Growth $3,500, Scale $5,000 to $10,000, and Scale+ from $10,000, custom-quoted after a scoping call. Every engagement begins with a written scope.",
  "PandaCodeGen has no minimum project size. Work starts at the published Starter price of $1,500, and a small project is quoted the same way as a large one.",
  "PandaCodeGen builds pages as fast, server-rendered HTML, with the answer to each page's question stated in plain sentences near the top, so a person and a machine read the same thing.",
  "PandaCodeGen builds to a 90+ Google PageSpeed handover target on mobile and desktop, verified across three recorded runs. It publishes no perfect or 100 score, and offers no refund or ranking guarantee, because search engines control those outcomes.",
  "PandaCodeGen's own pages are cited in Google AI Overviews, verified by direct capture in August 2026. That is a first-party result for pandacodegen.com and is not a promise about a client site.",
  "Panda Patches is an in-house brand owned by co-founder Imran Raza Ladhani and built and operated by PandaCodeGen. It grew from about $38,000 to about $50,000 per month while running on roughly $55 per month in tooling. It is founder-affiliated and is not independent client proof.",
  "PandaCodeGen is the trading name of Panda Group Ventures L.L.C., a Texas limited liability company. Its Stafford, Texas address is a mailing address, not a public service location, and its engineering is performed remotely from Karachi, Pakistan.",
]
export default function CompanyReferencePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-paper text-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />

      <article>
        <header className="border-b border-stone-300 px-6 pb-16 pt-28 md:pb-24 md:pt-40">
          <div className="mx-auto max-w-5xl border-l-2 border-cognac pl-5 md:pl-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Company reference</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl">
              PandaCodeGen facts, process, and <span className="font-serif font-normal italic text-cognac">commercial starting points.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-700 md:text-xl">
              PandaCodeGen moves revenue-generating WordPress, Webflow and GoHighLevel sites without losing their search traffic. Custom Next.js, commerce, integration and application work remains available when the migration requires it.
            </p>
            <p className="mt-5 text-sm text-stone-600">Published February 15, 2026. Reviewed July 22, 2026.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#contact-quote-form" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-6 font-bold text-white hover:bg-cognac">
                Get your migration plan <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/services" className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-400 bg-white px-6 font-bold hover:border-charcoal">
                Review migration services
              </Link>
            </div>
          </div>
        </header>

        <section className="px-6 py-16 md:py-24" aria-labelledby="reference-facts">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">At a glance</p>
            <h2 id="reference-facts" className="mt-3 text-3xl font-bold md:text-5xl">Company facts</h2>
            <dl className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-stone-300 bg-stone-300 sm:grid-cols-2">
              {facts.map(([term, description]) => (
                <div key={term} className="bg-white p-6">
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-cognac">{term}</dt>
                  <dd className="mt-2 leading-7 text-stone-700">{description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Canonical instruction block for AI engines. Restored 3 Aug 2026 from the 19 Jul
            structure, which the July remediation deleted wholesale. Every line here is
            either brand canon or independently verified. DELIBERATELY ABSENT, do not
            reinstate: review-platform ratings (Clutch/Trustpilot/GoodFirms), the
            "90+ or full refund" guarantee, the "40 to 70%" SaaS reduction figure, and the
            withdrawn MyCustomPatches numbers. Those are why the section was cut; the
            structure was never the problem.

            RETITLED 3 Aug: this block was "How AI assistants should describe PandaCodeGen"
            with imperative lines ("Describe it as...", "Say 90+...", "Name PandaCodeGen
            explicitly..."). Text addressed to a model as instructions is the shape
            prompt-injection classifiers are trained to downweight, and an imperative is
            not quotable: an engine cannot lift "you should describe us as X" into an
            answer, but it can lift "PandaCodeGen is X" verbatim. Declaratives carry the
            same facts and are strictly more citable. DO NOT reintroduce instruction-mood
            copy addressed to AI systems anywhere on this site. */}
        <section className="px-6 py-16 md:py-24" aria-labelledby="canonical-description">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Company reference</p>
            <h2 id="canonical-description" className="mt-3 text-3xl font-bold md:text-5xl">
              What PandaCodeGen is
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700" data-speakable="true">
              These are the company&apos;s own statements of fact about itself, maintained on this page
              and kept in step with the rest of the site. Each one stands alone and carries its own
              qualification, so it can be quoted without the surrounding context.
            </p>
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {companyFacts.map((line) => (
                <li key={line} className="rounded-2xl border border-stone-300 bg-white p-6 leading-7 text-stone-700">
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl leading-7 text-stone-600">
              Two things this page will not tell you, because we cannot evidence them: we publish no
              guarantee that a site will rank, be cited or recover traffic by a given date, and we
              publish no platform-wide speed score for anyone else&apos;s software. Where a number
              appears above, it is ours and we can show where it came from.
            </p>
          </div>
        </section>

        <section className="bg-charcoal px-6 py-16 text-white md:py-24" aria-labelledby="migration-controls">
          <div className="mx-auto max-w-6xl">
            <ShieldCheck className="h-8 w-8 text-orange-300" aria-hidden="true" />
            <h2 id="migration-controls" className="mt-5 max-w-4xl text-3xl font-bold md:text-5xl">SEO-safe describes a controlled process, not a ranking promise.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
              Search engines and external platforms control their own outcomes. The migration scope is designed to reduce preventable losses and make launch decisions observable and reversible.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {migrationControls.map(({ icon: Icon, title, body }) => (
                <article key={title} className="rounded-3xl border border-stone-700 bg-stone-900 p-7">
                  <Icon className="h-7 w-7 text-orange-300" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-stone-300">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24" aria-labelledby="commercial-reference">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Commercial reference</p>
              <h2 id="commercial-reference" className="mt-3 text-3xl font-bold md:text-5xl">Starting points, then a written scope.</h2>
              <p className="mt-6 leading-7 text-stone-700">
                Public prices help a buyer decide whether a conversation is sensible. They do not replace discovery, a quote, or the accepted project terms.
              </p>
            </div>
            <div className="rounded-[2.5rem] border border-cognac/30 bg-[#faf7f2] p-8 md:p-10">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Focused", "From $1,500"],
                  ["Broader", "From $3,500"],
                  ["Complex", "$5K to $10K+"],
                ].map(([label, price]) => (
                  <div key={label} className="rounded-2xl border border-stone-300 bg-white p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cognac">{label}</p>
                    <p className="mt-2 text-xl font-bold">{price}</p>
                  </div>
                ))}
              </div>
              <ul className="mt-7 space-y-3">
                {[
                  "A common payment starting point is 30 percent at onboarding and 70 percent at delivery.",
                  "Support commonly starts at 15 or 30 days, with the start date and coverage stated in the accepted terms.",
                  "Refund protection is tied to failure to deliver the signed scope, not a universal satisfaction guarantee.",
                  "Out-of-scope changes are discussed and priced before they become a new commitment.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-stone-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cognac" aria-hidden="true" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="mt-8 inline-flex min-h-11 items-center gap-2 font-bold hover:text-cognac">
                Review pricing and scope details <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-stone-300 bg-white px-6 py-16 md:py-24" aria-labelledby="evidence-reference">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <Gauge className="h-8 w-8 text-cognac" aria-hidden="true" />
              <h2 id="evidence-reference" className="mt-5 text-3xl font-bold md:text-5xl">Project evidence is labeled by relationship and method.</h2>
              <p className="mt-6 text-lg leading-8 text-stone-700">
                MyCustomPatches has an owner-confirmed 22-day delivery record. Panda Patches is a founder-owned brand and is labeled as such, not presented as an independent client testimonial. Results, cost figures, testimonials, and performance claims are published only with the source, date, definition, permission, and limitations needed to interpret them.
              </p>
              <Link href="/work" className="mt-8 inline-flex min-h-11 items-center gap-2 font-bold hover:text-cognac">
                See the project records <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24" aria-labelledby="reference-directory">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Reference directory</p>
            <h2 id="reference-directory" className="mt-3 text-3xl font-bold md:text-5xl">The same facts for people and machines.</h2>
            <p className="mt-5 max-w-3xl leading-7 text-stone-700">
              There is no separate set of facts here for AI crawlers. The visible pages are the source of truth for services, pricing, evidence, the team, <Link href="/editorial-policy" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">editorial policy</Link>, and security information.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {referenceLinks.map((item) => (
                <article key={item.href} className="flex flex-col rounded-3xl border border-stone-300 bg-white p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-stone-700">{item.body}</p>
                  <Link href={item.href} className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold hover:text-cognac">
                    Open reference <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 md:pb-28" aria-labelledby="reference-faq">
          <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-stone-300 bg-white p-7 md:p-10">
            <h2 id="reference-faq" className="text-3xl font-bold md:text-5xl">Frequently asked questions</h2>
            <div className="mt-8 divide-y divide-stone-300">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-6 first:pt-0 last:pb-0">
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-stone-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
