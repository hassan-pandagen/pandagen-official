import type { Metadata } from "next";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import { ArrowRight, Gauge, ListChecks, ShieldCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ogImageForPath } from "@/lib/seo/og";

const AuditWidget = dynamicImport(() => import("@/components/audit/AuditWidget"));

export const dynamic = "force-static";

const title = "Free Technical Website Audit";
const description =
  "Run a free technical scan of your site: measured load time, Core Web Vitals, technical SEO and common security-header gaps. Point-in-time diagnostic, no signup.";
const canonicalUrl = "https://www.pandacodegen.com/free-audit";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/free-audit" },
  keywords: [
    "free website audit",
    "technical website audit",
    "website speed test",
    "core web vitals check",
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
    title: "Measured performance",
    body: "Load time and Core Web Vitals as they are recorded for the page you enter, not a generic platform average.",
  },
  {
    icon: ListChecks,
    title: "Technical SEO signals",
    body: "Crawlability, metadata, canonical handling, structured data and whether the content a search or answer engine reads is actually in the HTML.",
  },
  {
    icon: ShieldCheck,
    title: "Common security gaps",
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
              See what your site <span className="font-serif font-normal italic text-cognac">actually reports.</span>
            </h1>
            <p className="mt-8 text-lg leading-8 text-stone-700">
              Enter a URL and the scan returns what the tests found for that page: measured load time, Core Web Vitals,
              technical SEO signals and common security-header gaps. It takes well under a minute and needs no signup.
            </p>
            <p className="mt-5 text-base leading-7 text-stone-600">
              This is a point-in-time technical review. It is not a diagnosis of lost revenue, a ranking prediction, or
              a quote. If something in the result needs interpreting, we would rather look at it properly than guess
              from a score.
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

          <div id="audit-widget" className="scroll-mt-28">
            <AuditWidget />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24" aria-labelledby="after-the-scan">
        <div className="mx-auto max-w-5xl">
          <h2 id="after-the-scan" className="text-3xl font-bold md:text-5xl">
            What happens after the scan
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            The scan tells you what a set of automated tests observed. It does not tell you which of those findings
            matter for your business, which are cheap to fix, or whether any of them are worth a rebuild. That part
            takes a person reading your specific situation, so if you want that we will do it properly rather than
            auto-generating a verdict from a score.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact#contact-quote-form"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-6 font-bold text-white hover:bg-cognac"
            >
              Send us the details <ArrowRight className="h-4 w-4" aria-hidden="true" />
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

      <Footer />
    </main>
  );
}
