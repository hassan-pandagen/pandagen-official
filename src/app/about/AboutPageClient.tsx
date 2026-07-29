"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, FileCheck2, Route, ShieldCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const QuoteModal = dynamic(() => import("@/components/ui/QuoteModal"), { ssr: false });

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.pandacodegen.com/about#webpage",
      url: "https://www.pandacodegen.com/about",
      name: "About PandaCodeGen",
      description: "How PandaCodeGen scopes and delivers website migrations and custom web engineering.",
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      about: { "@id": "https://www.pandacodegen.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://www.pandacodegen.com/about" },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://www.pandacodegen.com/#organization",
      name: "PandaCodeGen",
      url: "https://www.pandacodegen.com",
      foundingDate: "2026-02",
      address: {
        "@type": "PostalAddress",
        streetAddress: "701 Tillery St Ste 12",
        addressLocality: "Austin",
        addressRegion: "TX",
        postalCode: "78702",
        addressCountry: "US",
      },
      founder: [
        { "@type": "Person", name: "Hassan Jamal", jobTitle: "Co-founder and Lead Engineer", url: "https://www.pandacodegen.com/about/hassan" },
        { "@type": "Person", name: "Imran Raza Ladhani", jobTitle: "Co-founder and Lead Architect", url: "https://www.pandacodegen.com/about/imran" },
      ],
    },
  ],
};

const standards = [
  {
    icon: Route,
    title: "Migration continuity",
    body: "The scope identifies current URLs, content, integrations, redirects, analytics, cutover responsibilities, and rollback conditions.",
  },
  {
    icon: FileCheck2,
    title: "Written acceptance",
    body: "Deliverables, exclusions, test pages, browser support, performance methodology, ownership, warranty, and remedies belong in the accepted written project terms.",
  },
  {
    icon: ShieldCheck,
    title: "Documented access and handover",
    body: "Repository, hosting, domains, accounts, licenses, and handover timing are documented so control is not implied or left until launch.",
  },
];

const process = [
  "Review the current platform, URL set, content model, integrations, traffic profile, business goal, timeline, and budget range.",
  "Document assumptions, open questions, dependencies, exclusions, acceptance criteria, and third-party costs before implementation.",
  "Build and test representative templates, then validate redirects, forms, analytics, accessibility, and launch responsibilities.",
  "Cut over against a written checklist, retain a rollback path, and complete the evidence and handover defined in the accepted project terms.",
];

export default function AboutPageClient() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-paper text-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />

      <section className="border-b border-stone-300 px-6 pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-5xl border-l-2 border-cognac pl-5 md:pl-8">
          <p className="mb-6 inline-flex min-h-8 items-center rounded-full border border-stone-300 bg-white px-4 text-sm font-semibold text-stone-700">
            The anti-agency &middot; Founded February 2026 &middot; Co-founder led
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Reduce migration risk <span className="font-serif font-normal italic text-cognac">before writing production code.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-700 md:text-xl">
            PandaCodeGen helps businesses plan and implement website migrations when URLs, content, integrations, measurement, and operational control matter. The work begins with evidence and a written scope, not an automatic promise that every site needs a rebuild.
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            You will not be handed to an account manager. The two founders who scope your project are the two engineers who build it, and if the evidence says repairing your current site is the better answer, we will tell you that instead of selling you a rebuild.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-6 font-bold text-white hover:bg-cognac"
            >
              Get your migration plan <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <Link
              href="/work"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-400 bg-white px-6 font-bold text-charcoal hover:border-charcoal"
            >
              Review project evidence
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="company-facts">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cognac">Company facts</p>
          <h2 id="company-facts" className="mt-3 text-3xl font-bold md:text-5xl">The people accountable for the work</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-stone-300 bg-white p-7">
              <p className="text-sm font-bold uppercase tracking-widest text-cognac">Engineering</p>
              <h3 className="mt-3 text-2xl font-bold">Hassan Jamal</h3>
              <p className="mt-2 text-stone-700">Co-founder and Lead Engineer</p>
              <Link href="/about/hassan" className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold hover:text-cognac">
                View Hassan&apos;s profile <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
            <article className="rounded-3xl border border-stone-300 bg-white p-7">
              <p className="text-sm font-bold uppercase tracking-widest text-cognac">Architecture</p>
              <h3 className="mt-3 text-2xl font-bold">Imran Raza Ladhani</h3>
              <p className="mt-2 text-stone-700">Co-founder and Lead Architect</p>
              <Link href="/about/imran" className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold hover:text-cognac">
                View Imran&apos;s profile <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          </div>
          <dl className="mt-6 grid gap-4 rounded-3xl border border-stone-300 bg-stone-50 p-7 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-bold uppercase tracking-widest text-stone-600">Founded</dt>
              <dd className="mt-2 font-semibold text-charcoal">February 2026</dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-widest text-stone-600">Mailing address</dt>
              <dd className="mt-2 font-semibold text-charcoal">701 Tillery St Ste 12, Austin, TX 78702, United States</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="delivery-standards">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-cognac">Delivery standard</p>
            <h2 id="delivery-standards" className="mt-3 text-3xl font-bold md:text-5xl">
              What should be clear before approval
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {standards.map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-3xl border border-stone-300 bg-white p-7">
                <Icon className="h-7 w-7 text-cognac" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-stone-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="what-you-get">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-cognac">Why clients choose us</p>
            <h2 id="what-you-get" className="mt-3 text-3xl font-bold md:text-5xl">
              What we will put <span className="font-serif font-normal italic text-cognac">in writing.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              Not slogans. Each of these appears as a term in the accepted project terms, which is where you should hold
              us to them.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-stone-300 bg-white p-7">
              <h3 className="text-xl font-bold">You own everything</h3>
              <p className="mt-3 leading-7 text-stone-700">
                Source code, design files, CMS models, documentation and production accounts are transferred to, or
                created under, your control. There is no proprietary layer you have to keep paying us for, and no
                scenario where leaving means starting over.
              </p>
            </article>
            <article className="rounded-3xl border border-stone-300 bg-white p-7">
              <h3 className="text-xl font-bold">A measured speed target</h3>
              <p className="mt-3 leading-7 text-stone-700">
                A 90+ Lighthouse target on mobile and desktop, for representative pages named in your scope, verified
                across three recorded runs before handover. It is a lab acceptance test with stated conditions, not a
                promise about rankings, traffic or revenue, which nobody controls.
              </p>
            </article>
            <article className="rounded-3xl border border-stone-300 bg-white p-7">
              <h3 className="text-xl font-bold">No platform rent</h3>
              <p className="mt-3 leading-7 text-stone-700">
                We do not charge a monthly licence to keep your own site running. You will still pay third parties for
                hosting, a CMS or email if your build uses them, and we document those costs and who owns each account
                before you approve anything.
              </p>
            </article>
            <article className="rounded-3xl border border-stone-300 bg-white p-7">
              <h3 className="text-xl font-bold">Your exposure is capped at the deposit</h3>
              <p className="mt-3 leading-7 text-stone-700">
                Payment is normally 30% at onboarding and 70% at the delivery milestone, after you have reviewed the
                work. So you never pay the balance for something you have not accepted. Where scope protection is
                included in your accepted terms, we refund the fees paid under that scope if we fail to deliver what was
                promised, which at that point is the deposit. The terms define the trigger, verification and cure
                process. It is not a change-of-mind refund, and we would rather say that plainly than bury it.
              </p>
            </article>
            <article className="rounded-3xl border border-stone-300 bg-white p-7">
              <h3 className="text-xl font-bold">Fixed price, no hourly billing</h3>
              <p className="mt-3 leading-7 text-stone-700">
                You approve a number before work starts, and that number holds for the agreed scope. Anything outside it
                is quoted and approved separately before it is built. A common structure is 30% at onboarding and 70% at
                the delivery milestone.
              </p>
            </article>
            <article className="rounded-3xl border border-stone-300 bg-white p-7">
              <h3 className="text-xl font-bold">Support after launch</h3>
              <p className="mt-3 leading-7 text-stone-700">
                Discussions typically start at 15 business days for Starter and 30 for Growth and Scale. What it covers,
                when it starts, and what counts as a defect versus a new request are written down, so nobody argues about
                it later.
              </p>
            </article>
            <article className="rounded-3xl border border-stone-300 bg-white p-7">
              <h3 className="text-xl font-bold">A launch you can reverse</h3>
              <p className="mt-3 leading-7 text-stone-700">
                Your current site stays live until you approve the new one. Redirects, analytics, forms, DNS, monitoring
                and a documented rollback path are agreed before cutover, so going live is a decision rather than a leap.
              </p>
            </article>
            <article className="rounded-3xl border border-stone-300 bg-white p-7">
              <h3 className="text-xl font-bold">You talk to the engineers</h3>
              <p className="mt-3 leading-7 text-stone-700">
                Two co-founders scope your project and two co-founders build it. There is no account manager relaying
                messages, and no junior team you were not told about. If we think repairing your current site beats
                rebuilding it, you will hear that from the person who would have done the rebuild.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-midnight px-6 py-16 text-white md:py-24" aria-labelledby="working-process">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Code2 className="h-8 w-8 text-orange-300" aria-hidden="true" />
            <h2 id="working-process" className="mt-5 text-3xl font-bold md:text-5xl">How the work is governed</h2>
            <p className="mt-5 leading-7 text-stone-300">
              Architecture and implementation stay connected to the commercial scope. If discovery shows that the current platform is the better option, the recommendation should say so.
            </p>
          </div>
          <ol className="space-y-5">
            {process.map((item, index) => (
              <li key={item} className="flex gap-4 rounded-2xl border border-stone-700 bg-stone-900 p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-300 font-bold text-midnight">
                  {index + 1}
                </span>
                <span className="leading-7 text-stone-200">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="evidence-policy">
        <div className="mx-auto max-w-4xl rounded-3xl border border-stone-300 bg-white p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-widest text-cognac">Evidence policy</p>
          <h2 id="evidence-policy" className="mt-3 text-3xl font-bold">Claims need a date, method, and limitation.</h2>
          <p className="mt-5 leading-7 text-stone-700">
            Performance, cost, ranking, conversion, revenue, testimonial, and delivery figures should be published only with the source, measurement conditions, permission, and review date needed to interpret them. Search rankings, field performance, revenue, and AI citations remain controlled by external systems and are not guaranteed by a technical implementation.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {["Visible copy and structured data must agree", "Lab results must name the tested profile", "Third-party costs must include assumptions", "Commercial remedies belong in accepted written project terms"].map((item) => (
              <li key={item} className="flex gap-3 text-stone-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cognac" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
}
