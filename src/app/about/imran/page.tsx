import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FounderRoleStack from "@/components/about/FounderRoleStack";
import { ogImageForPath } from "@/lib/seo/og";

export const metadata: Metadata = {
  // absolute: this title already ends in "PandaCodeGen", so the root "%s | PandaCodeGen"
  // template would print the brand twice (SEO audit, 4 Oct 2026).
  title: { absolute: "Imran Raza Ladhani | Co-founder and Head of Marketing at PandaCodeGen" },
  description: "Meet Imran Raza Ladhani, PandaCodeGen co-founder and Head of Marketing. He focuses on positioning, the customer journey, and how the agency explains and presents its work.",
  alternates: { canonical: "/about/imran" },
  openGraph: {
    title: "Imran Raza Ladhani | Co-founder and Head of Marketing at PandaCodeGen",
    description: "Marketing direction, positioning, and the customer journey at PandaCodeGen.",
    type: "profile",
    url: "https://www.pandacodegen.com/about/imran",
    images: [ogImageForPath("/about/imran")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imran Raza Ladhani | Co-founder and Head of Marketing at PandaCodeGen",
    description: "Marketing direction, positioning, and the customer journey at PandaCodeGen.",
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
      image: "https://www.pandacodegen.com/team/imran-editorial.png",
      jobTitle: "Co-founder and Head of Marketing",
      url: "https://www.pandacodegen.com/about/imran",
      worksFor: { "@id": "https://www.pandacodegen.com/#organization" },
      sameAs: ["https://www.linkedin.com/in/imran-raza-ladhani/"],
      knowsAbout: [
        "Marketing strategy",
        "Website positioning",
        "Customer journey",
        "Ecommerce operations",
        "Conversion paths",
        "Client communication",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.pandacodegen.com/about/imran#webpage",
      url: "https://www.pandacodegen.com/about/imran",
      name: "Imran Raza Ladhani | Co-founder and Head of Marketing at PandaCodeGen",
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
    title: "Positioning and audience",
    body: "Define who a website needs to reach, what those visitors need to understand, and which claims the business can support with real evidence.",
  },
  {
    title: "Clearer website messaging",
    body: "Turn the offer, service pages, project examples, and calls to action into a coherent path from first visit to enquiry.",
  },
  {
    title: "Marketing and measurement",
    body: "Decide what to learn from enquiries and site behaviour, then use that feedback to improve the message and customer journey without inventing outcomes.",
  },
];

export default function ImranProfilePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-paper text-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />

      <section className="border-b border-stone-300 px-6 pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <Link href="/about" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-stone-700 hover:text-cognac">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to PandaCodeGen
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="relative aspect-square w-full max-w-sm overflow-hidden border border-stone-300 bg-charcoal">
              <Image
                src="/team/imran-editorial.png"
                alt="Imran Raza Ladhani, co-founder of PandaCodeGen"
                fill
                sizes="(max-width: 431px) calc(100vw - 48px), 384px"
                loading="eager"
                className="object-cover object-[50%_25%]"
              />
            </div>
            <div className="border-l-2 border-cognac pl-5 md:pl-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Co-founder and Head of Marketing</p>
              <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">Imran Raza Ladhani</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-700 md:text-xl">
                Imran brings marketing experience across different fields to PandaCodeGen. He leads how we position the offer, explain real project work, and shape the customer journey from a first question to a useful conversation.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact#contact-quote-form" className="inline-flex min-h-12 items-center justify-center gap-2 bg-charcoal px-6 font-bold text-white hover:bg-cognac">
                  Talk to the founders <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a href="https://www.linkedin.com/in/imran-raza-ladhani/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-stone-400 px-6 font-bold hover:border-charcoal">
                  View LinkedIn profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FounderRoleStack id="imran-responsibilities" eyebrow="Imran’s role" heading="Make the business easier to understand." roles={responsibilities} />

      <section className="bg-paper px-6 py-16 text-charcoal md:py-24" aria-labelledby="marketing-review">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Before launch</p>
            <h2 id="marketing-review" className="mt-5 text-3xl font-bold md:text-5xl">Questions answered before a page goes live</h2>
          </div>
          <ul className="border-t border-stone-400">
            {[
              "Who needs this page, and what decision are they trying to make?",
              "What can we show from real work to make the offer credible?",
              "Does the route from the first answer to the next action make sense?",
              "Which enquiries and behaviours will tell us what to improve after launch?",
            ].map((item, index) => (
              <li key={item} className="flex gap-5 border-b border-stone-400 py-5 text-stone-700">
                <span className="font-mono text-xs font-bold text-cognac">0{index + 1}</span>
                <span className="leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="owner-operator-evidence">
        <div className="mx-auto max-w-5xl border-t border-stone-400 pt-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cognac">Owner-operated reference</p>
          <h2 id="owner-operator-evidence" className="mt-3 text-3xl font-bold md:text-5xl">Imran owns Panda Patches. It is not a client testimonial.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            <Link href="/work/panda-patches" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Panda Patches</Link> is owned and operated by Imran Raza Ladhani. PandaCodeGen built and maintains its technical platform, and Imran holds a stake in both companies, so this is not an arm’s-length client relationship. It provides an owner-operated example of catalogue, checkout, customer journey, and technical decisions. Any public performance, cost, or revenue figure still needs its date, source, definition, and measurement conditions; a founder-affiliated project is not independent client proof.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/work" className="inline-flex min-h-12 items-center justify-center bg-charcoal px-6 font-bold text-white hover:bg-cognac">See the project records</Link>
            <a href="https://www.pandapatches.com" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-stone-400 px-6 font-bold hover:border-charcoal">Visit Panda Patches</a>
          </div>
        </div>
      </section>

    </main>
  );
}
