import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { alternatesFor } from "@/lib/i18n/config";

export const metadata: Metadata = {
    title: "Talk to the founders",
    description: "Ask Hassan or Imran about a new website, online store, redesign, migration, custom software or AI SEO. A founder replies directly by email.",
    alternates: alternatesFor("contact", "en"),
    openGraph: {
        title: "Talk to the founders | PandaCodeGen",
        description: "Tell Hassan or Imran what you would like to build, change or figure out. A founder replies directly by email.",
        url: "https://www.pandacodegen.com/contact",
        type: "website",
        images: [ogImageForPath("/contact")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Talk to the founders | PandaCodeGen",
        description: "Tell Hassan or Imran what you would like to build, change or figure out. A founder replies directly by email.",
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
