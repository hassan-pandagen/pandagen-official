import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import { PricingPreview, pricingPageFaqs } from "@/components/pages/pricing/PricingDesign";
import { alternatesFor } from "@/lib/i18n/config";

export const metadata: Metadata = {
    title: { absolute: "Website & Online Store Pricing | PandaCodeGen" },
    description: "Custom websites and online stores start at $1,500. WordPress sites are quoted to scope. The final work and price are agreed in writing before we start.",
    alternates: alternatesFor("pricing", "en"),
    openGraph: {
        title: "Website & Online Store Pricing | PandaCodeGen",
        description: "Custom builds have published starting prices from $1,500. WordPress websites are quoted to scope; the final price is agreed in writing.",
        url: "https://www.pandacodegen.com/pricing",
        type: "website",
        images: [ogImageForPath("/pricing")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Website & Online Store Pricing | PandaCodeGen",
        description: "Custom builds have published starting prices from $1,500. WordPress websites are quoted to scope; the final price is agreed in writing.",
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
// 30 Sep 2026: /pricing renders the redesign (built as /preview/pricing).
// The FAQPage data lists only the questions the redesign shows, and the
// WebPage and breadcrumb data moved here from PricingPageClient.
const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/pricing#webpage",
            "url": "https://www.pandacodegen.com/pricing",
            "name": "Website & Online Store Pricing | PandaCodeGen",
            "description": "Custom website and online store builds with published starting prices from $1,500. WordPress websites are quoted to scope; the written proposal sets the final price.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "inLanguage": "en-US"
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://www.pandacodegen.com/pricing" }
            ]
        }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.pandacodegen.com/pricing#faq",
    mainEntity: pricingPageFaqs().map((faq) => ({
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
            />
            <PricingPreview />
        </>
    );
}
