import type { Metadata } from "next";
import WorkPageClient from "./WorkPageClient";

export const metadata: Metadata = {
    title: "Our Work — Client Case Studies & Results | PandaCodeGen",
    description: "Real results from real migrations. See how we took MyCustomPatches from 40 to 100/100 PageSpeed, cut hosting costs to $0, and delivered in under 2 weeks.",
    alternates: {
        canonical: "/work",
    },
    openGraph: {
        title: "Our Work — Client Case Studies & Results | PandaCodeGen",
        description: "Real results from real migrations. PageSpeed 40 to 100. Hosting $150/mo to $0. Load time 3.2s to 0.7s.",
        url: "https://www.pandacodegen.com/work",
        type: "website",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Work — Client Case Studies & Results | PandaCodeGen",
        description: "Real results from real migrations. PageSpeed 40 to 100. Hosting $0.",
    },
};

export default function WorkPage() {
    return <WorkPageClient />;
}
