"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const QuoteModal = dynamic(() => import("@/components/ui/QuoteModal"), { ssr: false });
import DeliveryRail, { type DeliveryStage } from "@/components/about/DeliveryRail";
import FounderSplit, { type Founder } from "@/components/about/FounderSplit";
import OriginStory from "@/components/about/OriginStory";

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
        streetAddress: "12250 S Kirkwood Rd, Apt 1128",
        addressLocality: "Stafford",
        addressRegion: "TX",
        postalCode: "77477",
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
    title: "Migration continuity",
    body: "The scope identifies current URLs, content, integrations, redirects, analytics, cutover responsibilities, and rollback conditions.",
  },
  {
    title: "Written acceptance",
    body: "Deliverables, exclusions, test pages, browser support, performance methodology, ownership, warranty, and remedies belong in the accepted written project terms.",
  },
  {
    title: "Documented access and handover",
    body: "Repository, hosting, domains, accounts, licenses, and handover timing are documented so control is not implied or left until launch.",
  },
];

// Stage bodies are unchanged from the original four sentences. Only titles were
// added, so the rail can be scanned without reading all four in full — the copy
// itself was never the problem.
const process: DeliveryStage[] = [
  {
    title: "Discovery",
    body: "Review the current platform, URL set, content model, integrations, traffic profile, business goal, timeline, and budget range.",
  },
  {
    title: "Written scope",
    body: "Document assumptions, open questions, dependencies, exclusions, acceptance criteria, and third-party costs before implementation.",
  },
  {
    title: "Build and test",
    body: "Build and test representative templates, then validate redirects, forms, analytics, accessibility, and launch responsibilities.",
  },
  {
    title: "Cutover and handover",
    body: "Cut over against a written checklist, retain a rollback path, and complete the evidence and handover defined in the accepted project terms.",
  },
];

// What each founder is accountable for. Concrete, and true of this company
// specifically — anything that would read the same on any agency's about page is
// not worth the space.
// Credentials render on this page rather than behind the profile link. Each one
// is countable or checkable and carries the link that proves it — "77 guides"
// links to the blog, the GitHub link goes to the account, the press line goes to
// the article. Anything that could not be checked in one click does not belong
// in this list.
//
// The counts are facts about the current site, not marketing figures: all 77
// posts in blog.ts carry author "Hassan".
const founders: Founder[] = [
  {
    discipline: "Engineering",
    name: "Hassan Jamal",
    role: "Co-founder and Lead Engineer",
    photo: "/team/hassan.png",
    accountableFor:
      "Writes the migration and application code, runs the performance work against the acceptance criteria in your scope, and is the person who answers when something breaks after launch.",
    credentials: [
      { label: "Author of all 77 engineering guides published here", href: "/blog" },
      { label: "Public code at github.com/hassan-pandagen", href: "https://github.com/hassan-pandagen", external: true },
      {
        label: "Quoted in Woman's World, May 2026",
        href: "https://www.womansworld.com/life/money/land-no-experience-remote-jobs-ai-training-that-pay",
        external: true,
      },
    ],
    href: "/about/hassan",
  },
  {
    discipline: "Architecture",
    name: "Imran Raza Ladhani",
    role: "Co-founder and Lead Architect",
    photo: "/team/imran.png",
    accountableFor:
      "Decides the platform and data model before a line is written, and owns the operations side: the internal systems that run a business day to day rather than the pages a visitor sees.",
    credentials: [
      // Stated as ownership, not as a client win. Panda Patches is
      // founder-affiliated and the disclosure travels with the fact everywhere
      // it appears, including here.
      { label: "Owns and operates Panda Patches, which we built and maintain", href: "/work/panda-patches" },
      { label: "Designed the internal operations platform that runs it", href: "/work/enterprise-ops" },
      { label: "Architecture and data-model decisions on every build" },
    ],
    href: "/about/imran",
  },
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

      <OriginStory />

      <section className="px-6 py-16 md:py-24" aria-labelledby="company-facts">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cognac">Company facts</p>
          <h2 id="company-facts" className="mt-3 text-3xl font-bold md:text-5xl">The people accountable for the work</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">
            Two co-founders scope the project and two co-founders build it. There is no account
            manager relaying messages, and no junior team you were not told about.
          </p>
          <div className="mt-10">
            <FounderSplit founders={founders} />
          </div>
          <dl className="mt-6 grid gap-4 rounded-3xl border border-stone-300 bg-stone-50 p-7 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-bold uppercase tracking-widest text-stone-600">Founded</dt>
              <dd className="mt-2 font-semibold text-charcoal">February 2026</dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-widest text-stone-600">Mailing address</dt>
              <dd className="mt-2 font-semibold text-charcoal">12250 S Kirkwood Rd, Apt 1128, Stafford, TX 77477, United States</dd>
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
            {/* The icons here were Route, FileCheck2 and ShieldCheck — a road, a
                document and a shield, standing in for continuity, acceptance and
                handover. None of them told the reader anything the heading did not,
                and three cards each opening with a different pictogram is what makes
                a page read as templated. A rule and the standard's own index do the
                same structural job without pretending to mean something. */}
            {standards.map(({ title, body }, i) => (
              <article key={title} className="group rounded-3xl border border-stone-300 bg-white p-7 transition-colors hover:border-cognac/40">
                <div className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="font-serif text-2xl italic text-cognac tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-stone-200 transition-colors group-hover:bg-cognac/30" />
                </div>
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
        {/* Stacked, not the old two-column split: the rail runs four across on
            wide screens and needs the full measure to breathe. */}
        <div className="mx-auto max-w-6xl">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">Four stages</p>
            <h2 id="working-process" className="mt-5 text-3xl font-bold md:text-5xl">How the work is governed</h2>
            <p className="mt-5 leading-7 text-stone-300">
              Architecture and implementation stay connected to the commercial scope. If discovery shows that the current platform is the better option, the recommendation should say so.
            </p>
          </div>
          <div className="mt-14 md:mt-20">
            <DeliveryRail stages={process} />
          </div>
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
              // Was a green-tick list. Ticks read as marketing reassurance, and
              // these four are constraints we hold ourselves to, not benefits.
              // A left rule states the same thing without the sales grammar.
              <li key={item} className="border-l-2 border-cognac/30 pl-4 leading-7 text-stone-700">
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
