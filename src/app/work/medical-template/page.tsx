import type { Metadata } from "next";
import { ogImageForPath } from "@/lib/seo/og";
import { caseStudy, disclosure } from "@/data/case-study-facts";
import { MedicalTemplateCaseStudyPreview as RedesignMedicalTemplateCaseStudy } from "@/components/pages/work/medical-template/Design";

const canonicalUrl = "https://www.pandacodegen.com/work/medical-template";
// 4 Oct 2026: shortened (title was 65 characters with the brand, description
// 180). The old description promised "provider bios", which this page never
// shows; it now lists only what the walkthrough screenshots show.
const title = "Medical Template: a Practice Website Demo";
const description =
    "A fictional medical practice website we built as a demo: a booking-focused homepage, treatment areas, care steps and procedure pages. Not a real practice.";

export const metadata: Metadata = {
    title: { absolute: `${title} | PandaCodeGen` },
    description,
    robots: { index: true, follow: true },
    openGraph: {
        title,
        description,
        type: "article",
        url: canonicalUrl,
        images: [ogImageForPath("/work/medical-template")],
    },
    alternates: { canonical: "/work/medical-template" },
};

// Page-level structured data, added 4 Oct 2026 after the SEO audit found these
// concept pages carried none. It describes only what the page shows: a page
// about a demo site we built, marked as a demo through the same relationship
// and disclosure text the page renders from case-study-facts.json. It claims
// no results, reviews or client.
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
            about: { "@id": `${canonicalUrl}#demo` },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
        },
        {
            "@type": "CreativeWork",
            "@id": `${canonicalUrl}#demo`,
            name: "Medical Template",
            url: "https://pandacodegen-medical-template.vercel.app/",
            genre: "Portfolio demo",
            creativeWorkStatus: caseStudy("medical-template").relationship,
            description: disclosure("medical-template"),
            creator: { "@id": "https://www.pandacodegen.com/#organization" },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Work", item: "https://www.pandacodegen.com/work" },
                { "@type": "ListItem", position: 3, name: "Medical Template", item: canonicalUrl },
            ],
        },
    ],
};

// 30 Sep 2026: this page now renders the redesign (built as /preview/work/medical-template).
// Metadata stays in this file.
export default function MedicalTemplateCaseStudy() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <RedesignMedicalTemplateCaseStudy />
        </>
    );
}
