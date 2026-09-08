import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";
import { blogPosts } from "@/data/blog";
import { hubs, hubPostIds, parentForPost } from "@/data/hubs";

const HUB_TITLE = "Website Migration, SEO & Performance Blog | PandaCodeGen";
const HUB_DESCRIPTION = "Guides on WordPress, Webflow and GoHighLevel migrations, Shopify performance, Next.js, Core Web Vitals, analytics and SEO-safe rebuilds.";

const MONTH_NUMBER: Record<string, string> = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
};

function catalogDateToIso(value: string): string | undefined {
    const isoDate = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (isoDate) return value;

    const displayDate = value.match(/^([A-Z][a-z]{2})\s+(\d{1,2})(?:,\s*(\d{4}))?$/);
    if (!displayDate) return undefined;

    const month = MONTH_NUMBER[displayDate[1]];
    if (!month) return undefined;

    const day = displayDate[2].padStart(2, "0");
    const year = displayDate[3] ?? "2026";
    return `${year}-${month}-${day}`;
}

function catalogAuthorName(value: string): string {
    return value === "Hassan" ? "Hassan Jamal" : value;
}

export const metadata: Metadata = {
    title: { absolute: HUB_TITLE },
    description: HUB_DESCRIPTION,
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: HUB_TITLE,
        description: HUB_DESCRIPTION,
        url: "https://www.pandacodegen.com/blog",
        type: "website",
        images: [ogImageForPath("/blog")],
    },
    twitter: {
        card: "summary_large_image",
        title: HUB_TITLE,
        description: HUB_DESCRIPTION,
    },
};

export default function BlogPage() {
    // Strip faqs from each post. The listing UI never renders them, and faqs alone
    // are ~50KB serialized per post when shipped to the client RSC payload.
    // Faqs stay server-only on individual blog post pages where they're actually rendered.
    const articles = blogPosts
        .map(({ faqs, ...rest }) => rest)
        .sort((a, b) => {
            const dateA = new Date(a.lastModified || a.date);
            const dateB = new Date(b.lastModified || b.date);
            return dateB.getTime() - dateA.getTime();
        });

    // Topic hubs, flattened for the client. The hub module carries ~2,500 words of
    // intro prose that only the hub pages render; sending it here would put all of
    // it in the blog index RSC payload for no visible benefit. Same reasoning as
    // stripping faqs above.
    const topics = hubs.map((hub) => ({
        slug: hub.slug,
        shortLabel: hub.shortLabel,
        h1: hub.h1,
        count: hubPostIds(hub).length,
    }));

    // Every post's topical parent: its hub, or for the three service-owned
    // clusters, the /services page that owns the intent. Resolved on the server so
    // a card label can never disagree with the breadcrumb on the post itself.
    const parents: Record<string, { label: string; href: string }> = {};
    for (const post of blogPosts) {
        const parent = parentForPost(post.id);
        if (parent.href) parents[post.id] = { label: parent.label, href: parent.href };
    }

    // Schema is built on the server and passed as a prop so the client doesn't recompute.
    const blogSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://www.pandacodegen.com/blog#webpage",
                "url": "https://www.pandacodegen.com/blog",
                "name": HUB_TITLE,
                "description": HUB_DESCRIPTION,
                "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
                "breadcrumb": { "@id": "https://www.pandacodegen.com/blog#breadcrumb" },
                "inLanguage": "en-US"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.pandacodegen.com/blog#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" }
                ]
            },
            {
                "@type": "Blog",
                "@id": "https://www.pandacodegen.com/blog#blog",
                "name": HUB_TITLE,
                "description": HUB_DESCRIPTION,
                "publisher": {
                    "@type": "Organization",
                    "@id": "https://www.pandacodegen.com/#organization",
                    "name": "PandaCodeGen",
                    "url": "https://www.pandacodegen.com"
                },
                "blogPost": articles.map((article) => {
                    const datePublished = catalogDateToIso(article.date);
                    const dateModified = article.lastModified || datePublished;

                    return {
                        "@type": "BlogPosting",
                        "headline": article.title,
                        "description": article.excerpt,
                        "url": `https://www.pandacodegen.com/blog/${article.id}`,
                        ...(datePublished ? { "datePublished": datePublished } : {}),
                        ...(dateModified ? { "dateModified": dateModified } : {}),
                        "author": {
                            "@type": "Person",
                            "name": catalogAuthorName(article.author)
                        },
                        "publisher": {
                            "@type": "Organization",
                            "@id": "https://www.pandacodegen.com/#organization",
                            "name": "PandaCodeGen",
                            "url": "https://www.pandacodegen.com"
                        }
                    };
                })
            }
        ]
    };

    return <BlogPageClient articles={articles} blogSchema={blogSchema} topics={topics} parents={parents} />;
}
