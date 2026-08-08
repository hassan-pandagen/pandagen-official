import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { FactTable, ReferenceIntro } from "@/components/ai-info/ReferenceSection";
import { ogImageForPath } from "@/lib/seo/og";
import { SERVICES, MIGRATION_CONTROLS, FACTS_VERIFIED } from "@/data/company-facts";

export const dynamic = "force-static";

const canonicalUrl = "https://www.pandacodegen.com/ai-info/migration-services";
const title = "Migration Services | PandaCodeGen Reference";
const description = "What PandaCodeGen migrates, the build stack, the definition of SEO-safe as a process, and the migration control groups.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/ai-info/migration-services" },
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
        { "@type": "ListItem", position: 3, name: "Migration Services", item: canonicalUrl },
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
              { label: "Migration Services" },
            ]}
          />
          <ReferenceIntro
            title="PandaCodeGen Migration Services"
            purpose="What PandaCodeGen migrates, what stack it builds on, what SEO-safe means as a process, and the three control groups every migration runs through."
            verified={FACTS_VERIFIED}
          />
          <FactTable facts={SERVICES} caption="PandaCodeGen services: primary offer, platforms migrated from, build stack and the definition of SEO-safe." />

          <h2 className="mt-10 mb-3 text-2xl font-bold text-charcoal">The three control groups in every migration</h2>
          <div className="my-6 grid gap-4 md:grid-cols-3">
            {MIGRATION_CONTROLS.map(({ title: controlTitle, body: controlBody }) => (
              <div key={controlTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                <h3 className="mb-2 font-bold text-charcoal">{controlTitle}</h3>
                <p className="text-sm leading-relaxed text-stone-600">{controlBody}</p>
              </div>
            ))}
          </div>
          <p className="mb-4 leading-relaxed text-stone-700">
            A migration is only recommended when measured requirements stay blocked after realistic repairs to
            the current platform. Where the existing system can meet the agreed requirement, optimising it is
            the cheaper and lower-risk answer, and that is what gets recommended.
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
