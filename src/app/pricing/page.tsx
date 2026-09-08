import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";
import { alternatesFor } from "@/lib/i18n/config";
import { pricingFaqs } from "@/data/pricing-faqs";

export const metadata: Metadata = {
    title: { absolute: "Website Migration Pricing & Scope | PandaCodeGen" },
    description: "Website migration packages start at $1,500, $3,500, and $5,000–$10,000, with pages and features adjusted in a written quote.",
    alternates: alternatesFor("pricing", "en"),
    openGraph: {
        title: "Website Migration Pricing & Scope | PandaCodeGen",
        description: "Migration packages start at $1,500, $3,500, and $5,000–$10,000, with exact scope confirmed in writing.",
        url: "https://www.pandacodegen.com/pricing",
        type: "website",
        images: [ogImageForPath("/pricing")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Website Migration Pricing & Scope | PandaCodeGen",
        description: "Migration packages start at $1,500, $3,500, and $5,000–$10,000, with exact scope confirmed in writing.",
    },
};

/**
 * FAQPage JSON-LD for the pricing page.
 *
 * Added 28 Aug 2026. The page rendered fourteen visible FAQ answers and emitted
 * no structured data for any of them, while the blog corpus emits FAQPage on
 * almost every post. Both sides now read the same array, so the schema cannot
 * assert an answer the visitor cannot see.
 *
 * This buys nothing in Google. The FAQ rich result stopped appearing in Search on
 * 7 May 2026 and Google removed the feature documentation on 15 June 2026. The
 * reason to carry it is Bing, Perplexity and the RAG crawlers, which still read
 * FAQPage, and consistency with the rest of the corpus. Do not reintroduce this
 * anywhere as a Google SERP play.
 */
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.pandacodegen.com/pricing#faq",
    mainEntity: pricingFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
};

export default function PricingPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <PricingPageClient />
        </>
    );
}
