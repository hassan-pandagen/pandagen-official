import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
    title: "Pricing — Fixed-Price Custom Web Development | PandaCodeGen",
    description: "Fixed-price custom web development. Conversion sites from $2,900. Full WordPress or Shopify migrations from $5,900. No hourly billing. 30-day money-back guarantee.",
    alternates: {
        canonical: "/pricing",
    },
    openGraph: {
        title: "Pricing — Fixed-Price Custom Web Development | PandaCodeGen",
        description: "Conversion sites from $2,900. Full migrations from $5,900. No hourly rates, no surprise invoices. 100/100 PageSpeed guaranteed.",
        url: "https://www.pandacodegen.com/pricing",
        type: "website",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pricing — Fixed-Price Custom Web Development | PandaCodeGen",
        description: "Conversion sites from $2,900. Full migrations from $5,900. 30-day money-back guarantee.",
    },
};

export default function PricingPage() {
    return <PricingPageClient />;
}
