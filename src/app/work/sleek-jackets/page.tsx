import type { Metadata } from "next";
import { ogImageForPath } from "@/lib/seo/og";
import RedesignSleekJacketsCaseStudy from "@/app/preview/work/sleek-jackets/page";

const canonicalUrl = "https://www.pandacodegen.com/work/sleek-jackets";
const title = "Sleek Jackets: an Outerwear Storefront Concept Build";
const description =
    "An outerwear storefront concept built by PandaCodeGen: a product-led collection page and checkout flow, currently a private preview with purchases not live.";

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

// 30 Sep 2026: this page now renders the redesign (built as /preview/work/sleek-jackets).
// Metadata stays in this file.
export default function SleekJacketsCaseStudy() {
    return (
        <RedesignSleekJacketsCaseStudy />
    );
}
