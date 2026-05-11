import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
    title: "Fixed-Price Web Development: From $1,500 | PandaCodeGen",
    description: "Fixed-price custom web development. Starter sites from $1,500, Growth migrations $3,500, Scale e-commerce $5K to $10K. 90+ PageSpeed guarantee or full refund.",
    alternates: {
        canonical: "/pricing",
    },
    openGraph: {
        title: "Fixed-Price Web Development: From $1,500 | PandaCodeGen",
        description: "Starter $1,500, Growth $3,500, Scale $5K to $10K. Fixed pricing, no hourly rates. 90+ PageSpeed guaranteed or full refund.",
        url: "https://www.pandacodegen.com/pricing",
        type: "website",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Fixed-Price Web Development: From $1,500 | PandaCodeGen",
        description: "Starter $1,500, Growth $3,500, Scale $5K to $10K. 90+ PageSpeed guarantee or full refund.",
    },
};

export default function PricingPage() {
    return <PricingPageClient />;
}
