import type { Metadata } from "next";
import { ogImageForPath } from "@/lib/seo/og";
import { MIGRATION_PROJECT_DETAILS } from "@/data/migration-projects";
import { AStepAboveMedicalStatusPreview as RedesignAStepAboveMedical } from "@/components/pages/work/a-step-above-medical/Design";

// 30 Sep 2026: new live route, from the redesign built as
// /preview/work/a-step-above-medical. The project is still in progress:
// migration-projects.ts says the client's public domain still serves their
// previous WordPress site and must not be presented as our delivered build,
// and the page says so in its status. Revisit the wording after launch.
//
// 4 Oct 2026: briefly noindex after the SEO audit, then indexed again the same day on
// the owner's decision: an ongoing project, clearly labelled in progress, is worth showing.
// The page says nothing on it "should be read as a finished case study", so it
// shouldn't be in search results next to the finished ones yet. Visitors still
// reach it from /work, and its links are still followed. When the project
// launches and gets its case-study-facts.json entry, set index back to true and
// re-add the sitemap line in the same change.
const canonicalUrl = "https://www.pandacodegen.com/work/a-step-above-medical";
const details = MIGRATION_PROJECT_DETAILS.aStepAboveMedical;
const title = "A Step Above Medical: a Rebuild in Progress";
const description =
  "A WordPress site being rebuilt with Next.js and Sanity, plus a separate operations portal. In progress: launch is pending, so this isn't a case study yet.";

export const metadata: Metadata = {
  title: { absolute: `${title} | PandaCodeGen` },
  description,
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "article",
    url: canonicalUrl,
    images: [ogImageForPath("/work/a-step-above-medical")],
  },
  alternates: { canonical: "/work/a-step-above-medical" },
};

// Page-level structured data (4 Oct 2026). The project is marked "In progress"
// and carries no URL: the client's public domain still serves their previous
// WordPress site, which is not our build. No result is claimed.
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description,
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      about: { "@id": `${canonicalUrl}#project` },
      publisher: { "@id": "https://www.pandacodegen.com/#organization" },
    },
    {
      "@type": "CreativeWork",
      "@id": `${canonicalUrl}#project`,
      name: "A Step Above Medical website rebuild",
      creativeWorkStatus: details.status,
      description: details.summary,
      creator: { "@id": "https://www.pandacodegen.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "Work", item: "https://www.pandacodegen.com/work" },
        { "@type": "ListItem", position: 3, name: "A Step Above Medical", item: canonicalUrl },
      ],
    },
  ],
};

export default function AStepAboveMedicalCaseStudy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <RedesignAStepAboveMedical />
    </>
  );
}
