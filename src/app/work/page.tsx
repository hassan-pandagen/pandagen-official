import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import WorkPageClient from "./WorkPageClient";

export const metadata: Metadata = {
    title: "Website, Ecommerce & Software Projects",
    description: "Explore PandaCodeGen websites, online stores, migrations and operations software. See finished projects, what we built, the relationship and the evidence limits.",
    alternates: {
        canonical: "/work",
    },
    openGraph: {
        title: "Selected Work | PandaCodeGen",
        description: "Websites, online stores, migrations and the software behind them. Explore the projects, relationships and case studies.",
        url: "https://www.pandacodegen.com/work",
        type: "website",
        images: [ogImageForPath("/work")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Selected Work | PandaCodeGen",
        description: "Websites, online stores, migrations and the software behind them. Explore the projects, relationships and case studies.",
    },
};

export default function WorkPage() {
    return <WorkPageClient />;
}
