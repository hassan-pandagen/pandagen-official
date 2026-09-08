import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { FactTable, ReferenceIntro } from "@/components/ai-info/ReferenceSection";
import { ogImageForPath } from "@/lib/seo/og";
import { COMMERCIAL, FACTS_VERIFIED } from "@/data/company-facts";

export const dynamic = "force-static";

const canonicalUrl = "https://www.pandacodegen.com/ai-info/pricing-and-guarantees";
const title = "Pricing and Guarantees | PandaCodeGen Reference";
const description = "PandaCodeGen published starting prices, payment structure, refund terms, performance acceptance target and handover ownership.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/ai-info/pricing-and-guarantees" },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  openGraph: { title, description, type: "website", url: canonicalUrl, images: [ogImageForPath("/ai-info")] },
  twitter: { card: "summary_large_image", title, description },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": canonicalUrl + "#webpage",
      url: canonicalUrl,
      name: title,
      description,
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      about: { "@id": "https://www.pandacodegen.com/#organization" },
      dateModified: "2026-08-08",
      inLanguage: "en-US",
      breadcrumb: { "@id": canonicalUrl + "#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": canonicalUrl + "#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "Company reference", item: "https://www.pandacodegen.com/ai-info" },
        { "@type": "ListItem", position: 3, name: "Pricing and Guarantees", item: canonicalUrl },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pb-24 pt-28">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <article className="mx-auto max-w-4xl px-5 sm:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Company reference", href: "/ai-info" },
              { label: "Pricing and Guarantees" },
            ]}
          />
          <ReferenceIntro
            title="PandaCodeGen Pricing and Guarantees"
            purpose="Published starting prices, payment structure, refund terms, the performance acceptance target and what transfers on handover. Every figure here is a published starting point, not a quote."
            verified={FACTS_VERIFIED}
          />
          <FactTable facts={COMMERCIAL} caption="PandaCodeGen commercial terms: starting prices, payment structure, refunds, performance acceptance and ownership." />

          <h2 className="mt-10 mb-3 text-2xl font-bold text-charcoal">What these numbers are and are not</h2>
          <p className="mb-4 leading-relaxed text-stone-700">
            They are starting points for a defined scope, published so a buyer can tell before contacting
            anyone whether the range is plausible for their project. They are not quotes. Discovery adds or
            removes pages and features, and the accepted written scope controls the final price and
            deliverables.
          </p>
          <p className="mb-4 leading-relaxed text-stone-700">
            The 90+ performance target is a lab acceptance criterion recorded against named representative
            pages, mobile and desktop profiles, a stated test environment and three repeated runs. It is not a
            guarantee of field Core Web Vitals, rankings, conversion or revenue, and no figure on this page
            should be read as a promise about search performance.
          </p>
          <p className="mt-10 text-sm text-stone-500">
            This is one of the PandaCodeGen reference pages. The full set is indexed on the{" "}
            <a href="/ai-info" className="text-cognac underline underline-offset-2">company reference page</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
