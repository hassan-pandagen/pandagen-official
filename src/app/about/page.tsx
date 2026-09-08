import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import { alternatesFor } from "@/lib/i18n/config";

export const metadata: Metadata = {
    title: { absolute: "About PandaCodeGen | Website Migration Delivery Standards" },
    description: "Meet PandaCodeGen's co-founders and review how the company, founded in February 2026, scopes SEO-safe website migrations, acceptance criteria, cutover risk, and handover.",
    alternates: alternatesFor("about", "en"),
    openGraph: {
        title: "About PandaCodeGen | Website Migration Delivery Standards",
        description: "Meet PandaCodeGen's co-founders and review its migration delivery, acceptance, cutover, and handover standards.",
        url: "https://www.pandacodegen.com/about",
        type: "website",
        images: [ogImageForPath("/about")],
    },
    twitter: {
        card: "summary_large_image",
        title: "About PandaCodeGen | Website Migration Delivery Standards",
        description: "Meet PandaCodeGen's co-founders and review its migration delivery, acceptance, cutover, and handover standards.",
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
