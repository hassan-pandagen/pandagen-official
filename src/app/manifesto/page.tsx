import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The PandaCodeGen Manifesto | Why We Build The Way We Build",
  description: "The first principles behind PandaCodeGen. Why we refuse hourly billing. Why we publish our prices. Why we meet clients halfway on cost. Written by Hassan Jamal.",
  alternates: { canonical: "/manifesto" },
  openGraph: {
    title: "The PandaCodeGen Manifesto",
    description: "The first principles behind PandaCodeGen. Why we refuse hourly billing. Why we publish our prices. Why we meet clients halfway on cost.",
    url: "https://www.pandacodegen.com/manifesto",
    siteName: "PandaCodeGen",
    type: "article",
    images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ManifestoPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.pandacodegen.com/manifesto#article",
        "headline": "The PandaCodeGen Manifesto",
        "description": "The first principles behind PandaCodeGen. Why we refuse hourly billing. Why we publish our prices. Why we meet clients halfway on cost.",
        "image": "https://www.pandacodegen.com/og-image.jpg",
        "datePublished": "2026-04-19T00:00:00-05:00",
        "dateModified": "2026-04-19T00:00:00-05:00",
        "author": {
          "@type": "Person",
          "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
          "name": "Hassan Jamal",
          "url": "https://www.pandacodegen.com/about/hassan",
        },
        "publisher": { "@id": "https://www.pandacodegen.com/#organization" },
        "inLanguage": "en-US",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", "[data-speakable='true']"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Manifesto", "item": "https://www.pandacodegen.com/manifesto" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="bg-paper min-h-screen overflow-x-hidden relative">
        <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]" />
        <Header />

        <article className="relative pt-24 md:pt-40 pb-16 md:pb-24 px-6">
          <div className="container mx-auto max-w-2xl">
            {/* Top label */}
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-cognac mb-4">The PandaCodeGen Manifesto</p>

            <h1 className="text-[2.5rem] md:text-[4.5rem] font-bold text-charcoal leading-[1.05] tracking-[-0.025em] mb-6">
              We don&apos;t build websites. <br />
              <span className="font-serif italic text-cognac">We build receipts.</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-600 mb-12 leading-[1.7] font-medium" data-speakable="true">
              Here&apos;s what we believe. No pitch. No upsell. Just the first principles behind every line of code we write.
            </p>

            {/* Editorial article body */}
            <div className="prose prose-lg max-w-none space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 tracking-tight">
                  1. The web industry runs on patches.
                </h2>
                <p className="text-base md:text-lg text-stone-700 leading-[1.75] mb-4">
                  WordPress is a $1 billion industry where every line of code produces three more lines of &quot;maintenance.&quot; Shopify charges $399 a month for a platform that forces you into another $650 a month of apps. Webflow caps you at 10,000 CMS items and then raises prices. Wix locks you in and throws away the key.
                </p>
                <p className="text-base md:text-lg text-stone-700 leading-[1.75]">
                  None of this is accidental. Every platform extracts a monthly tax. Every agency bills for hours. Every plugin vendor lives on the recurring charge. The entire industry is designed to make your website fragile enough to keep feeding it.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 tracking-tight">
                  2. We refuse to bill by the hour.
                </h2>
                <p className="text-base md:text-lg text-stone-700 leading-[1.75] mb-4">
                  Hourly billing is a conflict of interest. The slower we work, the more we earn. The buggier our code, the more maintenance we bill. The vaguer our scope, the more change orders we send. An entire agency economy is built on that incentive and pretends it isn&apos;t.
                </p>
                <p className="text-base md:text-lg text-stone-700 leading-[1.75]">
                  We quote fixed scope. You know the price before the first line of code. If we finish in 10 hours instead of 40, good — we&apos;re fast, you still pay the quote. If we underestimate and it takes 80 hours, that&apos;s our problem to solve, not yours to absorb.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 tracking-tight">
                  3. We publish our prices.
                </h2>
                <p className="text-base md:text-lg text-stone-700 leading-[1.75] mb-4">
                  Every agency page that says &quot;contact for quote&quot; is protecting a pricing strategy that can&apos;t survive public scrutiny. They change the number based on what they think you can pay. We refuse to play that game.
                </p>
                <p className="text-base md:text-lg text-stone-700 leading-[1.75]">
                  Our pricing is on every service page. Starter. Growth. Scale. Foot-in-the-Door. You know what we charge before you ever book a call. If someone tells you &quot;it depends&quot; as a pricing answer, they&apos;re deciding how much they can extract from you specifically.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 tracking-tight">
                  4. You own everything on day one.
                </h2>
                <p className="text-base md:text-lg text-stone-700 leading-[1.75] mb-4">
                  The code ships to your GitHub. The site deploys to your Vercel. The domain stays yours. The CMS stays yours. We hand over documentation, admin access, and the power to fire us at any time without breaking anything.
                </p>
                <p className="text-base md:text-lg text-stone-700 leading-[1.75]">
                  If the only way we keep you as a client is by holding your code hostage, we deserve to lose you.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 tracking-tight">
                  5. AI didn&apos;t kill craft. It killed padding.
                </h2>
                <p className="text-base md:text-lg text-stone-700 leading-[1.75] mb-4">
                  Every agency charging 8-week timelines today is billing 2022 workflows at 2026 market rates. AI-paired development with Claude and Cursor collapses the scaffolding, boilerplate, and configuration work that used to take weeks. What&apos;s left is decision-making, architecture, and judgment. That&apos;s the real work. That&apos;s what we charge for.
                </p>
                <p className="text-base md:text-lg text-stone-700 leading-[1.75]">
                  We ship in three weeks because the tools allow it. Agencies still quoting three months are charging you for work AI already did.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 tracking-tight">
                  6. We meet you halfway on cost.
                </h2>
                <p className="text-base md:text-lg text-stone-700 leading-[1.75] mb-4">
                  Agencies quote $30K. Offshore shops quote $5K and ghost you mid-project. Neither of those is a real option for most business owners. So we built something in between: fixed-scope pricing from $500 to $25,000, transparent tiers, same-day quotes, NDAs before anything else.
                </p>
                <p className="text-base md:text-lg text-stone-700 leading-[1.75]">
                  If that&apos;s still too much, we offer a Foot-in-the-Door tier at $500 in exchange for a public case study. You get the proof you need. We get the credibility we need. Both sides win.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 tracking-tight">
                  7. The guarantee is the pitch.
                </h2>
                <p className="text-base md:text-lg text-stone-700 leading-[1.75] mb-4">
                  Every site we ship scores 90 or higher on Google PageSpeed. If it doesn&apos;t on launch day, we refund 100%. In writing. Every other agency promise dies on a disclaimer. This one doesn&apos;t.
                </p>
                <p className="text-base md:text-lg text-stone-700 leading-[1.75]">
                  We can write that guarantee because we only know how to build it one way: fast, by default, no exceptions. If your current dev partner can&apos;t make the same promise, you know why.
                </p>
              </section>

              {/* Closing */}
              <section className="pt-8 border-t border-stone-200">
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 tracking-tight">
                  What we refuse to do.
                </h2>
                <ul className="space-y-3 text-base md:text-lg text-stone-700 leading-[1.75]">
                  <li className="flex gap-3"><span className="text-cognac font-bold shrink-0">—</span> Bill hourly.</li>
                  <li className="flex gap-3"><span className="text-cognac font-bold shrink-0">—</span> Hide prices.</li>
                  <li className="flex gap-3"><span className="text-cognac font-bold shrink-0">—</span> Build on WordPress, Wix, Squarespace, or any platform that takes a monthly tax.</li>
                  <li className="flex gap-3"><span className="text-cognac font-bold shrink-0">—</span> Hold your code hostage.</li>
                  <li className="flex gap-3"><span className="text-cognac font-bold shrink-0">—</span> Send you an account manager.</li>
                  <li className="flex gap-3"><span className="text-cognac font-bold shrink-0">—</span> Subcontract your project to a stranger.</li>
                  <li className="flex gap-3"><span className="text-cognac font-bold shrink-0">—</span> Pad estimates with work AI already automated.</li>
                  <li className="flex gap-3"><span className="text-cognac font-bold shrink-0">—</span> Pitch you anything you didn&apos;t ask for.</li>
                </ul>
              </section>

              {/* Signoff */}
              <section className="pt-12">
                <p className="text-lg md:text-xl text-charcoal leading-[1.7] italic font-serif mb-6">
                  If any of this sounds obvious, it&apos;s because it should be. The fact that most agencies don&apos;t work this way is the real problem.
                </p>
                <p className="text-base md:text-lg text-stone-600 font-medium">
                  — Hassan Jamal
                  <br />
                  <span className="text-sm text-stone-500">Founder, PandaCodeGen</span>
                </p>
              </section>
            </div>

            {/* CTA strip at bottom */}
            <div className="mt-16 p-8 md:p-10 bg-white border border-stone-200 rounded-3xl shadow-card">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-3 tracking-tight">
                Want to see what this looks like in practice?
              </h3>
              <p className="text-stone-600 mb-6 text-base md:text-lg">
                Run the free optimization report on your current site. You&apos;ll get a custom PDF plus a personal video walkthrough within 24 business hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#audit-widget"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all"
                >
                  Run Free Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-stone-200 text-charcoal font-semibold rounded-full hover:border-cognac/30 transition-all"
                >
                  See the Work
                </Link>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
