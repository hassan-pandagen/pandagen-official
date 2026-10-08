import type { Metadata } from "next";
import { ogImageForPath } from "@/lib/seo/og";
import { caseStudy, disclosure } from "@/data/case-study-facts";
import { SleekJacketsCaseStudyPreview as RedesignSleekJacketsCaseStudy } from "@/components/pages/work/sleek-jackets/Design";

const canonicalUrl = "https://www.pandacodegen.com/work/sleek-jackets";
// 4 Oct 2026: shortened (title was 67 characters with the brand). The old
// description also named a "checkout flow", but the page says checkout waits on
// a launch decision, so it now names only the homepage and collection pages.
const title = "Sleek Jackets: an Outerwear Store Concept";
const description =
    "A leather outerwear storefront in private preview, shown as a concept: a product-led homepage and filtered collection pages. Purchases aren't live yet.";

export const metadata: Metadata = {
    title: { absolute: `${title} | PandaCodeGen` },
    description,
    robots: { index: true, follow: true },
    openGraph: {
        title,
        description,
        type: "article",
        url: canonicalUrl,
        images: [ogImageForPath("/work/sleek-jackets")],
    },
    alternates: { canonical: "/work/sleek-jackets" },
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
            name: "Sleek Jackets",
            url: "https://sleek-jackets.vercel.app/",
            genre: "Portfolio demo",
            creativeWorkStatus: caseStudy("sleek-jackets").relationship,
            description: disclosure("sleek-jackets"),
            creator: { "@id": "https://www.pandacodegen.com/#organization" },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Work", item: "https://www.pandacodegen.com/work" },
                { "@type": "ListItem", position: 3, name: "Sleek Jackets", item: canonicalUrl },
            ],
        },
    ],
};

// 30 Sep 2026: this page now renders the redesign (built as /preview/work/sleek-jackets).
// Metadata stays in this file.
export default function SleekJacketsCaseStudy() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <RedesignSleekJacketsCaseStudy />
        </>
    );
}
