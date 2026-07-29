import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, FileSearch, Route, ShoppingCart } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const evidenceAreas = [
  {
    icon: Route,
    title: "Website migration",
    scope: "URL and content inventory, redirect map, content model, integrations, analytics, cutover, monitoring, rollback, and handover.",
    evidence: "Dated pre/post exports, representative URLs, test profile, Search Console comparison window, launch record, and known limitations.",
  },
  {
    icon: ShoppingCart,
    title: "Commerce replatforming",
    scope: "Catalog, pricing, checkout, payments, customer accounts, analytics, consent, operations, platform trade-offs, and ongoing vendor costs.",
    evidence: "Comparable cost periods, order and revenue definitions, attribution method, performance conditions, refund state, and owner permission.",
  },
  {
    icon: BarChart3,
    title: "Operations software",
    scope: "Roles, workflows, data model, integrations, audit history, reporting, access control, backup, recovery, and support boundaries.",
    evidence: "Approved requirements, acceptance record, role matrix, test evidence, incident history, measurement period, and authorized screenshots.",
  },
];

const publicationChecks = [
  "A dated source record",
  "A defined baseline and method",
  "Permission to publish",
  "The limitation beside the result",
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.pandacodegen.com/work#webpage",
      url: "https://www.pandacodegen.com/work",
      name: "Project evidence and case-study methodology",
      description: "The evidence standard used before PandaCodeGen publishes project outcomes.",
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "Work", item: "https://www.pandacodegen.com/work" },
      ],
    },
  ],
};

export default function WorkPageClient() {
  return (
    <main className="min-h-screen bg-paper text-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="relative isolate overflow-hidden border-b border-stone-300 px-6 pb-16 pt-28 md:pb-24 md:pt-40">
        <div aria-hidden="true" className="absolute -right-40 top-12 h-[30rem] w-[30rem] rounded-full bg-cognac/[0.07] blur-3xl" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cognac to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-24">
            <div className="max-w-4xl border-l-2 border-cognac pl-5 md:pl-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Project evidence</p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.04] tracking-[-0.035em] sm:text-5xl md:text-7xl">
                A case study should show the work, {" "}
                <span className="font-serif font-normal italic text-cognac">the proof, and the limits.</span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-700 md:text-xl">
                We label the source behind every result. Owner-confirmed project facts and first-party platform snapshots are not independent studies, ranking promises, or forecasts. Public reviews stay linked to their original source.
              </p>
            </div>

            <aside className="overflow-hidden rounded-[1.75rem] border border-charcoal bg-charcoal text-white shadow-[0_24px_70px_-36px_rgba(28,25,23,0.75)]" aria-label="Publication threshold">
              <div className="border-b border-white/10 px-6 py-5 md:px-7">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffc2a6]">Publication threshold</div>
                <h2 className="mt-3 font-serif text-2xl font-normal italic leading-snug text-white md:text-3xl">
                  A result needs a record behind it.
                </h2>
              </div>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-1">
                {publicationChecks.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-white/10 px-6 py-4 text-sm text-stone-200 last:border-b-0 sm:odd:border-r lg:border-r-0 md:px-7">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#f2a17c]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]" aria-label="Owner-confirmed project facts">
            <article className="relative overflow-hidden rounded-[1.75rem] border border-charcoal bg-charcoal p-7 text-white md:p-9">
              <div aria-hidden="true" className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-cognac/30 blur-3xl" />
              <div className="relative grid gap-6 sm:grid-cols-[0.55fr_1.45fr] sm:items-end">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffc2a6]">Owner-confirmed project fact</div>
                  <div className="mt-5 font-serif text-6xl font-normal italic leading-none text-[#f2a17c] md:text-7xl">22 days</div>
                </div>
                <div className="border-t border-white/15 pt-5 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                  <h2 className="text-2xl font-bold">MyCustomPatches WordPress migration</h2>
                  <div className="mt-3 leading-7 text-stone-300">
                    Owner-confirmed July 21, 2026: approximately 3.2-second and 45 Mobile PageSpeed legacy baseline; 0.7-second lab result and 90+ Mobile PageSpeed after the rebuild; $150 legacy monthly hosting invoice versus a $0 hosting invoice in the recorded target period.
                  </div>
                  <div className="mt-3 text-sm leading-6 text-stone-400">
                    These are first-party project records, not an independent benchmark. Publish the original dated test profiles and invoice periods with any standalone comparison. Hosting eligibility and future cost are usage-dependent; no ranking or conversion result is implied.
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-[1.75rem] border border-cognac/35 bg-white p-7 md:p-9">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-cognac">Ownership disclosure</div>
              <div className="mt-5 font-serif text-4xl font-normal italic leading-none text-cognac md:text-5xl">Founder-affiliated</div>
              <h2 className="mt-5 text-2xl font-bold text-charcoal">Panda Patches</h2>
              <div className="mt-3 leading-7 text-stone-700">
                Panda Patches is owned and operated by Imran Raza Ladhani, a PandaCodeGen co-founder. PandaCodeGen built and maintains its technical platform. PandaCodeGen holds no ownership or partnership stake in the business. A June 2026 internal dashboard tagged more than $7,000 in orders as customer-reported AI-assisted referrals. A separate dated Meta Events Manager screenshot reported about 10.4% additional Lead events through Conversions API and displayed 9.0/10 Lead Event Match Quality.
              </div>
              <div className="mt-3 text-sm leading-6 text-stone-600">
                Because the owner is a co-founder, treat this as a founder-affiliated project rather than an independent client engagement. These are first-party attribution and platform-reporting snapshots—not independent endorsements, controlled lift studies, guarantees, or forecasts. The AI referral tags are customer-reported.
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="case-studies">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cognac">Project records</p>
          <h2 id="case-studies" className="mt-4 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
            The full write-ups, <span className="font-serif font-normal italic text-cognac">with their limits stated.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Each record states the relationship, the measurement conditions and what the figures do not prove. Two are
            founder-affiliated and labelled as such; they are operating experience, not independent client proof.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { href: "/work/mycustompatches", name: "MyCustomPatches", kind: "Independent client", desc: "WordPress to Next.js migration. Owner-confirmed: 22 days, 3.2s to 0.7s, $150/mo to $0/mo hosting." },
              { href: "/work/panda-patches", name: "Panda Patches", kind: "Founder-affiliated", desc: "Headless Next.js, Sanity, Supabase and Square build with a real-time pricing calculator and ops platform." },
              { href: "/work/enterprise-ops", name: "Enterprise Operations", kind: "Client project", desc: "Custom operations platform: order tracking, role-based dashboards and reporting replacing spreadsheets." },
              { href: "/work/panda-codelab", name: "Panda CodeLab", kind: "Founder-affiliated", desc: "Agency site build. Sub-second load times and an accessibility-first component system." },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group rounded-3xl border border-stone-300 bg-white p-7 transition-colors hover:border-cognac md:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-cognac">{c.kind}</span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-stone-600 transition-transform group-hover:translate-x-1 group-hover:text-cognac" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-charcoal">{c.name}</h3>
                <p className="mt-3 leading-7 text-stone-700">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="project-types">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cognac">Evidence architecture</p>
          <h2 id="project-types" className="mt-4 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
            What each project record <span className="font-serif font-normal italic text-cognac">must contain.</span>
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {evidenceAreas.map(({ icon: Icon, title, scope, evidence }) => (
              <article key={title} className="rounded-3xl border border-stone-300 bg-white p-7">
                <Icon className="h-7 w-7 text-cognac" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <h4 className="mt-5 text-sm font-bold uppercase tracking-wider text-stone-700">Scope record</h4>
                <p className="mt-2 leading-7 text-stone-700">{scope}</p>
                <h4 className="mt-5 text-sm font-bold uppercase tracking-wider text-stone-700">Outcome evidence</h4>
                <p className="mt-2 leading-7 text-stone-700">{evidence}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-midnight px-6 py-16 text-white md:py-24" aria-labelledby="publication-gate">
        <div className="mx-auto max-w-5xl">
          <FileSearch className="h-8 w-8 text-orange-300" aria-hidden="true" />
          <h2 id="publication-gate" className="mt-5 text-3xl font-bold md:text-5xl">
            The <span className="font-serif font-normal italic text-orange-300">publication gate.</span>
          </h2>
          <ul className="mt-9 grid gap-4 md:grid-cols-2">
            {["Client or data-owner permission is recorded", "Baseline and outcome use comparable conditions", "Dates, sample, tools, and definitions are stated", "Third-party costs include assumptions and exclusions", "Testimonials match the approved original text", "Rankings and revenue are not presented as guaranteed causation", "Structured data does not exceed visible evidence", "A review date and withdrawal trigger are assigned"].map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-stone-700 bg-stone-900 p-4 text-stone-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#contact-quote-form" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-bold text-charcoal hover:bg-orange-100">
              Get your migration plan <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/about" className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-500 px-6 font-bold text-white hover:border-white">
              Review delivery standards
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
