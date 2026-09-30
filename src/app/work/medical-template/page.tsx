import type { Metadata } from "next";
import { ogImageForPath } from "@/lib/seo/og";
import { MedicalTemplateCaseStudyPreview as RedesignMedicalTemplateCaseStudy } from "@/app/preview/work/medical-template/page";

const canonicalUrl = "https://www.pandacodegen.com/work/medical-template";
const title = "Medical Template: a Practice Website Concept Build";
const description =
    "A fictional medical-practice website built by PandaCodeGen to demonstrate the template: a booking-focused homepage, provider bios and service pages. Demo only, not a real practice.";

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

// 30 Sep 2026: this page now renders the redesign (built as /preview/work/medical-template).
// Metadata stays in this file.
export default function MedicalTemplateCaseStudy() {
    return (
        <RedesignMedicalTemplateCaseStudy />
    );
}
