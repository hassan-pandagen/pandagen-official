import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { FactTable, OfferLine, ReferenceIntro } from "@/components/ai-info/ReferenceSection";
import { ogImageForPath } from "@/lib/seo/og";
import Link from "next/link";
import { PROJECTS, GOVERNANCE, FACTS_VERIFIED } from "@/data/company-facts";

export const dynamic = "force-static";

const canonicalUrl = "https://www.pandacodegen.com/ai-info/case-studies";
const title = "Project Evidence | PandaCodeGen Reference";
const description = "PandaCodeGen published projects with relationship disclosure, what each demonstrates, and the limits stated on each.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/ai-info/case-studies" },
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
        { "@type": "ListItem", position: 3, name: "Project Evidence", item: canonicalUrl },
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
              { label: "Project Evidence" },
            ]}
          />
          <ReferenceIntro
            title="PandaCodeGen Project Evidence"
            purpose="Every published project, its relationship to PandaCodeGen, and what is and is not claimed about each. Founder-owned properties are labelled as such and are not presented as independent client proof."
            verified={FACTS_VERIFIED}
          />
          <OfferLine />
          <div className="my-8 space-y-4">
            {PROJECTS.map(({ name, relationship, href, fact }) => (
              <div key={name} className="rounded-xl border border-stone-200 p-5">
                <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <Link href={href} className="font-bold text-charcoal underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                    {name}
                  </Link>
                  <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-semibold text-stone-600">
                    {relationship}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-stone-700">{fact}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 mb-3 text-2xl font-bold text-charcoal">How evidence is published</h2>
          <FactTable facts={GOVERNANCE} caption="PandaCodeGen evidence policy, regulated-data position, crawl policy and corrections handling." />
          <p className="mb-4 leading-relaxed text-stone-700">
            Two entries above carry no performance figures at all. That is deliberate: one site is too new for
            that evidence to exist, and on the other the previous platform baseline was never captured before
            switchover. Reconstructing a before-and-after after the fact would be a guess presented as a
            measurement.
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
