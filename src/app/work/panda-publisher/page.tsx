import type { Metadata } from "next";
import { ogImageForPath } from "@/lib/seo/og";
import { PandaPublisherCaseStudyPreview as RedesignPandaPublisherCaseStudy } from "@/app/preview/work/panda-publisher/page";

const canonicalUrl = "https://www.pandacodegen.com/work/panda-publisher";
const title = "Panda Publisher: an Author Services Concept Build";
const description =
    "An author-services website concept built by PandaCodeGen: a cover gallery, service pages and an enquiry path from idea to launch. Concept build, not an operating publishing business.";

export const metadata: Metadata = {
    title: { absolute: `${title} | PandaCodeGen` },
    description,
    robots: { index: true, follow: true },
    openGraph: {
        title,
        description,
        type: "article",
        url: canonicalUrl,
        images: [ogImageForPath("/work/panda-publisher")],
    },
    alternates: { canonical: "/work/panda-publisher" },
};

// 30 Sep 2026: this page now renders the redesign (built as /preview/work/panda-publisher).
// Metadata stays in this file.
export default function PandaPublisherCaseStudy() {
    return (
        <RedesignPandaPublisherCaseStudy />
    );
}
