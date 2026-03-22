import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
    title: "Contact PandaCodeGen — Free Discovery Call",
    description: "Get in touch with PandaCodeGen for custom web development, WordPress migration, or Shopify optimization. Free discovery call. Response within 2 hours.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact PandaCodeGen — Free Discovery Call",
        description: "Start with a free discovery call. We audit your current site and give you a fixed-price quote within 24 hours.",
        url: "https://www.pandacodegen.com/contact",
        type: "website",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact PandaCodeGen — Free Discovery Call",
        description: "Free discovery call. We audit your site and give you a fixed-price quote within 24 hours.",
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
