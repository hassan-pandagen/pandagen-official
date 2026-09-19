import type { Metadata } from "next";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import { ArrowRight, Gauge, ListChecks, ShieldCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ogImageForPath } from "@/lib/seo/og";

const AuditWidget = dynamicImport(() => import("@/components/audit/AuditWidget"));

export const dynamic = "force-static";

const title = "Free Website Audit: SEO, Speed & Expert Review";
const description =
  "Check your website's technical SEO and mobile lab speed. Get plain-English findings, email your report, or request a free founder review.";
const canonicalUrl = "https://www.pandacodegen.com/free-audit";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/free-audit" },
  keywords: [
    "free website audit",
    "technical website audit",
    "website speed test",
    "website audit report",
    "technical SEO audit",
  ],
  openGraph: {
    title: `${title} | PandaCodeGen`,
    description,
    type: "website",
    url: canonicalUrl,
    images: [ogImageForPath("/free-audit")],
  },
  twitter: { card: "summary_large_image", title: `${title} | PandaCodeGen`, description },
};

const checks = [
  {
    icon: Gauge,
    title: "Mobile lab performance",
    body: "A point-in-time Lighthouse test of the page you enter, with first content appearance clearly labelled.",
  },
  {
    icon: ListChecks,
    title: "Technical SEO signals",
    body: "Crawlability, metadata, canonical handling, structured data and whether the content a search or answer engine reads is actually in the HTML.",
  },
  {
    icon: ShieldCheck,
    title: "Security-header signals",
    body: "Transport security and the response headers most often missing on a production site.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description,
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "Free technical audit", item: canonicalUrl },
      ],
    },
  ],
};

export default function FreeAuditPage() {
  return (
    <main className="min-h-screen bg-paper text-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />

      <section className="border-b border-stone-300 px-6 pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-widest text-cognac">Free technical audit</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Free website audit. <span className="font-serif font-normal italic text-cognac">Know what to fix next.</span>
            </h1>
            <p className="mt-8 text-lg leading-8 text-stone-700">
              Check a public page for speed and technical SEO issues. See what the tests found, what it means, and what to do next, with guidance for your website platform.
            </p>
            <p className="mt-5 text-base leading-7 text-stone-600">
              Results on screen. No signup required. Email yourself the findings or request a free founder review of up to three public pages, delivered within 24 hours.
            </p>

            <div className="mt-10 space-y-5">
              {checks.map(({ icon: Icon, title: checkTitle, body }) => (
                <div key={checkTitle} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cognac/10 text-cognac">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-bold text-charcoal">{checkTitle}</h2>
                    <p className="mt-1 text-sm leading-6 text-stone-600">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <AuditWidget />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="after-the-scan">
        <div className="mx-auto max-w-5xl">
          <h2 id="after-the-scan" className="text-3xl font-bold md:text-5xl">
            Understand the result. Choose your next step.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Your automated report includes observations and suggested next steps. A founder can then review your goal and up to three public pages, and email up to three prioritized recommendations. The review is free; implementation and account-level testing are separate work, agreed before we begin. A flagged check does not mean you need a rebuild.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact#contact-quote-form"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-6 font-bold text-white hover:bg-cognac"
            >
              Talk to a founder <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-400 bg-white px-6 font-bold text-charcoal hover:border-charcoal"
            >
              See pricing and terms
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-3xl font-bold">A useful starting point for your platform</h2>
        <p className="mt-5 leading-7">Select WordPress / WooCommerce, Wix, Squarespace, Shopify, Webflow or custom. We explain where to start in your editor and where a developer may need to help. Public scans cannot inspect private settings or prove that payments, bookings or emails arrive.</p>
        <h2 className="mt-10 text-2xl font-bold">What does the free review include?</h2>
        <p className="mt-4 leading-7">Up to three public pages, your main business concern and up to three recommendations from a founder. We email the review within 24 hours, including weekends. No obligation to hire us. Do not send passwords or private customer data.</p>
        <h2 className="mt-8 text-2xl font-bold">Does a good result mean everything works?</h2>
        <p className="mt-4 leading-7">No. These checks are a technical snapshot, not a complete crawl or a certification. A human still needs to test important journeys. Use our <Link href="/blog/ai-built-website-checklist" className="underline">website launch checklist</Link> and <Link href="/blog/how-to-speed-up-your-website" className="underline">guide to diagnosing a slow website</Link> for the next steps.</p>
      </section>
      <Footer />
    </main>
  );
}
