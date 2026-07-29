import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ogImageForPath } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: "The PandaCodeGen Manifesto | Why We Build The Way We Build",
  description: "The first principles behind PandaCodeGen. Why we refuse hourly billing, why we publish our prices, and why we tell clients when a rebuild is the wrong answer. Written by Hassan Jamal.",
  alternates: { canonical: "/manifesto" },
  openGraph: {
    title: "The PandaCodeGen Manifesto | Why We Build The Way We Build",
    description: "Why we refuse hourly billing, why we publish our prices, and why we tell clients when a rebuild is the wrong answer.",
    url: "https://www.pandacodegen.com/manifesto",
    type: "article",
    images: [ogImageForPath("/manifesto")],
  },
  twitter: {
    card: "summary_large_image",
    title: "The PandaCodeGen Manifesto | Why We Build The Way We Build",
    description: "Why we refuse hourly billing, why we publish our prices, and why we tell clients when a rebuild is the wrong answer.",
    images: [ogImageForPath("/manifesto")],
  },
};

const principles = [
  {
    title: "Diagnose before recommending a rebuild",
    body: "A migration is justified only when the business goal, current platform, operating cost, content, integrations, and measured constraints support it. Sometimes repair is the better answer.",
  },
  {
    title: "Define the scope before the price",
    body: "A proposal should list deliverables, exclusions, dependencies, client responsibilities, third-party costs, acceptance criteria, payment milestones, and change terms.",
  },
  {
    title: "Treat URLs and content as business assets",
    body: "Migration planning includes a URL inventory, redirect map, content model, metadata, analytics, forms, integrations, cutover sequence, monitoring, and rollback conditions.",
  },
  {
    title: "Measure performance honestly",
    body: "A performance target is meaningful only when it names the pages, device and network profile, tools, number of runs, measurement date, third-party state, exclusions, and remedy.",
  },
  {
    title: "Put control and handover in writing",
    body: "Repository, hosting, domains, credentials, data, pre-existing materials, open-source licenses, ownership-transfer timing, backups, and retention should not be implied.",
  },
  {
    title: "Make changes explicit",
    body: "When a request falls outside the accepted scope, the effect on cost, timeline, testing, and responsibility is documented and approved before the work changes.",
  },
  {
    title: "Ship accessibility, privacy, and security work",
    body: "Keyboard access, readable contrast, consent, data minimization, endpoint controls, dependency checks, monitoring, and rollback are release responsibilities, not decorative badges.",
  },
  {
    title: "Do not promise systems we do not control",
    body: "A technical implementation can reduce risk and improve foundations, but it cannot guarantee rankings, revenue, conversions, field performance, uptime, or AI citations.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.pandacodegen.com/manifesto#webpage",
  url: "https://www.pandacodegen.com/manifesto",
  name: "PandaCodeGen Delivery Principles",
  description: "Principles for scoping and delivering website migrations.",
  isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
  inLanguage: "en-US",
};

export default function ManifestoPage() {
  return (
    <main className="min-h-screen bg-paper text-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="border-b border-stone-300 px-6 pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-5xl border-l-2 border-cognac pl-5 md:pl-8">
          <p className="text-sm font-bold uppercase tracking-widest text-cognac">The PandaCodeGen Manifesto</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Make the <span className="font-serif font-normal italic text-cognac">risky parts explicit.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-700 md:text-xl">
            Why we refuse hourly billing. Why we publish our prices. Why we tell you when a rebuild is the wrong answer. A modern framework is not the offer by itself — the work is understanding the current system, deciding whether migration is justified at all, and agreeing up front how continuity, quality, control and acceptance will be proven.
          </p>
          <p className="mt-6 text-sm text-stone-500">
            Written by Hassan Jamal, Co-founder and Lead Engineer, with co-founder Imran Raza Ladhani.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="principles-heading">
        <div className="mx-auto max-w-5xl">
          <h2 id="principles-heading" className="sr-only">PandaCodeGen delivery principles</h2>
          <ol className="grid gap-6 md:grid-cols-2">
            {principles.map((principle, index) => (
              <li key={principle.title} className="rounded-3xl border border-stone-300 bg-white p-7 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-charcoal font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{principle.title}</h3>
                    <p className="mt-3 leading-7 text-stone-700">{principle.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-midnight px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold md:text-5xl">What a useful proposal should let you verify</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {["What is included and excluded", "Who supplies content and access", "How acceptance is measured", "What happens when scope changes", "Who controls accounts and source", "How launch and rollback are handled"].map((item) => (
              <li key={item} className="flex gap-3 text-stone-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-bold text-charcoal hover:bg-orange-100">
              Review example scopes <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/contact#contact-quote-form" className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-500 px-6 font-bold text-white hover:border-white">
              Describe your migration
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
