import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { alternatesFor } from "@/lib/i18n/config";

export const metadata: Metadata = {
    title: "Request a Website Migration Plan",
    description: "Tell PandaCodeGen about your current platform, migration risks, integrations, and target timeline.",
    alternates: alternatesFor("contact", "en"),
    openGraph: {
        title: "Request a Website Migration Plan | PandaCodeGen",
        description: "Tell us about your current platform, migration risks, integrations, and target timeline.",
        url: "https://www.pandacodegen.com/contact",
        type: "website",
        images: [ogImageForPath("/contact")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Request a Website Migration Plan | PandaCodeGen",
        description: "Tell us about your current platform, migration risks, integrations, and target timeline.",
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
