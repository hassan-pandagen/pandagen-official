import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";
import { alternatesFor } from "@/lib/i18n/config";

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

export default function PricingPage() {
    return <PricingPageClient />;
}
