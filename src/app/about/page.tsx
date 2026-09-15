import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import { alternatesFor } from "@/lib/i18n/config";

export const metadata: Metadata = {
    title: { absolute: "About PandaCodeGen | How We Scope and Deliver" },
    description: "Meet PandaCodeGen's co-founders and review how the company, trading since February 2026, scopes new website builds, redesigns and migrations, with acceptance criteria, cutover risk and handover agreed in writing.",
    alternates: alternatesFor("about", "en"),
    openGraph: {
        title: "About PandaCodeGen | How We Scope and Deliver",
        description: "Meet PandaCodeGen's co-founders and review its delivery, acceptance, cutover and handover standards.",
        url: "https://www.pandacodegen.com/about",
        type: "website",
        images: [ogImageForPath("/about")],
    },
    twitter: {
        card: "summary_large_image",
        title: "About PandaCodeGen | How We Scope and Deliver",
        description: "Meet PandaCodeGen's co-founders and review its delivery, acceptance, cutover and handover standards.",
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
