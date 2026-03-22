import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
    title: "Web Development & Performance Blog | PandaCodeGen",
    description: "Guides on WordPress migration, Shopify speed, Next.js performance, and Core Web Vitals. Written by engineers who build 100/100 PageSpeed sites.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "Web Development & Performance Blog | PandaCodeGen",
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
    return <BlogPageClient />;
}
