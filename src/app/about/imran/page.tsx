import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Boxes, CheckCircle2, Database, FileCheck2, Network, Route } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ogImageForPath } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "Imran Raza Ladhani | Co-founder and Lead Architect at PandaCodeGen",
  description: "Meet Imran Raza Ladhani, PandaCodeGen co-founder and Lead Architect for migration feasibility, system design, data models, integrations, and cutover planning.",
  alternates: { canonical: "/about/imran" },
  openGraph: {
    title: "Imran Raza Ladhani | Co-founder and Lead Architect at PandaCodeGen",
    description: "Architecture leadership for migration feasibility, system design, integrations, data, and cutover planning.",
    type: "profile",
    url: "https://www.pandacodegen.com/about/imran",
    images: [ogImageForPath("/about/imran")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imran Raza Ladhani | Co-founder and Lead Architect at PandaCodeGen",
    description: "Architecture leadership for migration feasibility, system design, integrations, data, and cutover planning.",
    images: [ogImageForPath("/about/imran")],
  },
  robots: { index: true, follow: true },
};

const profileSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.pandacodegen.com/#/schema/person/imran",
      name: "Imran Raza Ladhani",
      jobTitle: "Co-founder and Lead Architect",
      url: "https://www.pandacodegen.com/about/imran",
      worksFor: { "@id": "https://www.pandacodegen.com/#organization" },
      sameAs: ["https://www.linkedin.com/in/imran-raza-ladhani/"],
      knowsAbout: [
        "System architecture",
        "Website migration",
        "Content modeling",
        "Headless commerce",
        "Database design",
        "API integration",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.pandacodegen.com/about/imran#webpage",
      url: "https://www.pandacodegen.com/about/imran",
      name: "Imran Raza Ladhani | Co-founder and Lead Architect at PandaCodeGen",
      mainEntity: { "@id": "https://www.pandacodegen.com/#/schema/person/imran" },
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://www.pandacodegen.com/about" },
        { "@type": "ListItem", position: 3, name: "Imran Raza Ladhani", item: "https://www.pandacodegen.com/about/imran" },
      ],
    },
  ],
};

const responsibilities = [
  {
    icon: Route,
    title: "Migration feasibility",
    body: "Review platform constraints, content, URLs, integrations, access, business dependencies, and rollback needs before a replacement is recommended.",
  },
  {
    icon: Database,
    title: "Data and content architecture",
    body: "Define content models, data ownership, application boundaries, APIs, and the account structure required for a maintainable handover.",
  },
  {
    icon: Network,
    title: "Operational design",
    body: "Map authentication, payments, forms, analytics, automation, monitoring, support, and third-party responsibilities into the approved scope.",
  },
];

export default function ImranProfilePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-paper text-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />
      <Header />

      <section className="border-b border-stone-300 px-6 pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <Link href="/about" className="inline-flex min-h-11 items-center text-sm font-semibold text-stone-700 hover:text-cognac">
            Back to PandaCodeGen
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div className="flex aspect-square max-w-sm items-end overflow-hidden rounded-[2.5rem] border border-stone-300 bg-[#faf7f2] p-8 shadow-elevated">
              <div>
                <p className="font-serif text-8xl font-normal italic text-cognac" aria-hidden="true">I</p>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-stone-700">Architecture lead</p>
              </div>
            </div>
            <div className="border-l-2 border-cognac pl-5 md:pl-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Co-founder and Lead Architect</p>
              <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">Imran Raza Ladhani</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-700 md:text-xl">
                Imran leads architecture at PandaCodeGen. He reviews whether a migration is justified, defines the system and data boundaries, and makes sure the approved solution can be operated and handed over without hidden platform or agency lock-in.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact#contact-quote-form" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-6 font-bold text-white hover:bg-cognac">
                  Get your migration plan <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a href="https://www.linkedin.com/in/imran-raza-ladhani/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-400 bg-white px-6 font-bold hover:border-charcoal">
                  View LinkedIn profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="imran-responsibilities">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Architecture responsibility</p>
          <h2 id="imran-responsibilities" className="mt-3 max-w-3xl text-3xl font-bold md:text-5xl">The destination follows the operating requirements.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {responsibilities.map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-3xl border border-stone-300 bg-white p-7">
                <Icon className="h-7 w-7 text-cognac" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-stone-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-6 py-16 text-white md:py-24" aria-labelledby="architecture-review">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Boxes className="h-8 w-8 text-orange-300" aria-hidden="true" />
            <h2 id="architecture-review" className="mt-5 text-3xl font-bold md:text-5xl">Questions answered before implementation</h2>
          </div>
          <ul className="space-y-4">
            {[
              "Which parts of the current platform should stay, and which constraints justify replacement?",
              "What data, content, commerce, identity, and integration behavior must survive cutover?",
              "Which third-party accounts belong to the client, and what recurring services remain after launch?",
              "What acceptance, rollback, documentation, support, licensing, and ownership terms belong in writing?",
            ].map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-stone-700 bg-stone-900 p-5 text-stone-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" aria-hidden="true" />
                <span className="leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="owner-operator-evidence">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-cognac/30 bg-[#faf7f2] p-8 md:p-12">
          <FileCheck2 className="h-8 w-8 text-cognac" aria-hidden="true" />
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-cognac">Owner-operated reference</p>
          <h2 id="owner-operator-evidence" className="mt-3 text-3xl font-bold md:text-5xl">Imran owns Panda Patches. It is not a client testimonial.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Panda Patches is owned and operated by Imran Raza Ladhani. PandaCodeGen built and maintains its technical platform but holds no ownership or partnership stake in the business. It can be used as an implementation reference for architecture, tooling, and operating decisions. Any public performance, cost, or revenue figure still needs its date, source, definition, and measurement conditions so a founder-affiliated project is not presented as independent client proof.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/work" className="inline-flex min-h-12 items-center justify-center rounded-full bg-charcoal px-6 font-bold text-white hover:bg-cognac">See the project records</Link>
            <a href="https://www.pandapatches.com" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-400 bg-white px-6 font-bold hover:border-charcoal">Visit Panda Patches</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
