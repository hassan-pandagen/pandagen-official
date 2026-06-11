import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
    title: "Web Development & Performance Blog",
    description: "Guides on WordPress migration, Shopify speed, Next.js performance, and Core Web Vitals. Written by engineers who build 100/100 PageSpeed sites.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: { absolute: "Web Development & Performance Blog | PandaCodeGen" },
        description: "Guides on WordPress migration, Shopify speed, Next.js performance, and Core Web Vitals. Written by engineers who build 100/100 PageSpeed sites.",
        url: "https://www.pandacodegen.com/blog",
        type: "website",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development & Performance Blog | PandaCodeGen",
        description: "Guides on WordPress migration, Shopify speed, Next.js, and Core Web Vitals.",
    },
};

export default function BlogPage() {
    // Strip faqs from each post — the listing UI never renders them and faqs alone
    // are ~50KB serialized per post when shipped to the client RSC payload.
    // Faqs stay server-only on individual blog post pages where they're actually rendered.
    const articles = blogPosts
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(({ faqs, ...rest }) => rest)
        .sort((a, b) => {
            const dateA = new Date(a.lastModified || a.date);
            const dateB = new Date(b.lastModified || b.date);
            return dateB.getTime() - dateA.getTime();
        });

    // Schema is built on the server and passed as a prop so the client doesn't recompute.
    const blogSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://www.pandacodegen.com/blog#webpage",
                "url": "https://www.pandacodegen.com/blog",
                "name": "PandaCodeGen Blog - Insights from the Engine Room",
                "description": "Expert insights on Next.js development, WordPress migration, Shopify optimization, and enterprise web performance.",
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
                "name": "PandaCodeGen Blog",
                "description": "Technical insights on modern web development, WordPress alternatives, and performance optimization.",
                "publisher": {
                    "@type": "Organization",
                    "@id": "https://www.pandacodegen.com/#organization",
                    "name": "PandaCodeGen",
                    "url": "https://www.pandacodegen.com"
                },
                "blogPost": articles.map((article) => {
                    const raw = article.lastModified || article.date;
                    const hasYear = /\d{4}/.test(raw);
                    const year = hasYear ? "" : raw.startsWith("Dec") ? ", 2025" : ", 2026";
                    const parsed = new Date(`${raw}${year}`);
                    const iso = isNaN(parsed.getTime()) ? "2026-01-01T00:00:00.000Z" : parsed.toISOString();
                    return {
                        "@type": "BlogPosting",
                        "headline": article.title,
                        "description": article.excerpt,
                        "url": `https://www.pandacodegen.com/blog/${article.id}`,
                        "datePublished": iso,
                        "author": {
                            "@type": "Person",
                            "name": article.author,
                            "url": "https://www.pandacodegen.com/about/hassan"
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

    return <BlogPageClient articles={articles} blogSchema={blogSchema} />;
}
