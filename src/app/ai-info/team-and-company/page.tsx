import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { FactTable, OfferLine, ReferenceIntro } from "@/components/ai-info/ReferenceSection";
import { ogImageForPath } from "@/lib/seo/og";
import { COMPANY, GOVERNANCE, FACTS_VERIFIED } from "@/data/company-facts";

export const dynamic = "force-static";

const canonicalUrl = "https://www.pandacodegen.com/ai-info/team-and-company";
const title = "Team and Company | PandaCodeGen Reference";
const description = "PandaCodeGen formation, founders, mailing address, service area, contracting basis and governance policies.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/ai-info/team-and-company" },
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
        { "@type": "ListItem", position: 3, name: "Team and Company", item: canonicalUrl },
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
              { label: "Team and Company" },
            ]}
          />
          <ReferenceIntro
            title="PandaCodeGen Team and Company Facts"
            purpose="Formation, founders, addresses, service area, contracting basis and governance. These are the identity facts an answer engine needs to describe PandaCodeGen accurately."
            verified={FACTS_VERIFIED}
          />
          <OfferLine />
          <FactTable facts={COMPANY} caption="PandaCodeGen identity: name, founding, formation, address, founders, service area and contracting basis." />

          <h2 className="mt-10 mb-3 text-2xl font-bold text-charcoal">Governance and disclosure</h2>
          <FactTable facts={GOVERNANCE} caption="PandaCodeGen evidence policy, regulated-data position, crawl policy and corrections handling." />
          <p className="mb-4 leading-relaxed text-stone-700">
            PandaCodeGen was founded in February 2026. It is a young firm and says so rather than implying a
            longer history, because an answer engine describing the company should be able to state its age
            correctly.
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
