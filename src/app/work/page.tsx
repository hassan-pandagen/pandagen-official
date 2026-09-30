import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import WorkPreview, { workIndexItems } from "@/app/preview/work/page";

export const metadata: Metadata = {
    title: "Website, Ecommerce & Software Projects",
    description: "Explore PandaCodeGen websites, online stores, migrations and operations software. See finished projects, what we built, the relationship and the evidence limits.",
    alternates: {
        canonical: "/work",
    },
    openGraph: {
        title: "Selected Work | PandaCodeGen",
        description: "Websites, online stores, migrations and the software behind them. Explore the projects, relationships and case studies.",
        url: "https://www.pandacodegen.com/work",
        type: "website",
        images: [ogImageForPath("/work")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Selected Work | PandaCodeGen",
        description: "Websites, online stores, migrations and the software behind them. Explore the projects, relationships and case studies.",
    },
};

// 30 Sep 2026: /work renders the redesign (built as /preview/work). The
// structured data moved here from WorkPageClient.tsx, and its project list
// now comes from the same rows the page shows, so the two cannot disagree.
const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "CollectionPage",
            "@id": "https://www.pandacodegen.com/work#webpage",
            url: "https://www.pandacodegen.com/work",
            name: "Selected work: websites, commerce and custom software",
            description: "Explore PandaCodeGen website migrations, custom storefronts and operations software, with project scope and client relationships stated.",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            mainEntity: { "@id": "https://www.pandacodegen.com/work#projects" },
            inLanguage: "en-US",
        },
        {
            "@type": "ItemList",
            "@id": "https://www.pandacodegen.com/work#projects",
            itemListElement: workIndexItems().map(({ name, href }, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name,
                url: new URL(href, "https://www.pandacodegen.com").href,
            })),
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Work", item: "https://www.pandacodegen.com/work" },
            ],
        },
    ],
};

export default function WorkPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <WorkPreview />
        </>
    );
}
