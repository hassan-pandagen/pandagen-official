import type { Metadata } from "next";
import { ogImageForPath } from "@/lib/seo/og";
import { MIGRATION_PROJECT_DETAILS } from "@/data/migration-projects";
import { AStepAboveMedicalStatusPreview as RedesignAStepAboveMedical, aStepAboveMedicalFaqs } from "@/components/pages/work/a-step-above-medical/Design";

// Owner-confirmed on 10 Oct 2026: build complete, pre-launch testing underway.
// This project page documents the build without claiming production results.
const canonicalUrl = "https://www.pandacodegen.com/work/a-step-above-medical";
const details = MIGRATION_PROJECT_DETAILS.aStepAboveMedical;
const title = "A Step Above Medical: Website & Training System";
const description =
  "Medical website design and a custom training management system for courses, classes, students, payments and certificates. Built; pre-launch testing underway.";

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
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "/work/a-step-above-medical" },
};

// Status and FAQs match the visible build record. No old public-site URL
// is represented as the replacement build.
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
      dateModified: "2026-10-11",
    },
    {
      "@type": "CreativeWork",
      "@id": `${canonicalUrl}#project`,
      name: "A Step Above Medical website and medical training management system",
      creativeWorkStatus: details.status,
      description: details.summary,
      dateModified: details.confirmedOn,
      image: ["preview-homepage", "editor-locations", "editor-courses", "portal-classes", "portal-exports"].map(name => `https://www.pandacodegen.com/work/a-step-above-medical-${name}.png`),
      creator: { "@id": "https://www.pandacodegen.com/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: aStepAboveMedicalFaqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <RedesignAStepAboveMedical faqs={aStepAboveMedicalFaqs} />
    </>
  );
}
