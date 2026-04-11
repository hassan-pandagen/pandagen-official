import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
    title: "About PandaCodeGen: The Anti-Agency",
    description: "Meet the engineers behind PandaCodeGen. We build web assets, not templates. Direct access to architects, fixed pricing, full code ownership.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About PandaCodeGen: The Anti-Agency",
        description: "Meet the engineers behind PandaCodeGen. We build web assets, not templates. Direct access to architects, fixed pricing, full code ownership.",
        url: "https://www.pandacodegen.com/about",
        type: "website",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "About PandaCodeGen: The Anti-Agency",
        description: "Meet the engineers behind PandaCodeGen. We build web assets, not templates. Direct access to architects, fixed pricing, full code ownership.",
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
