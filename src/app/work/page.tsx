import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import WorkPageClient from "./WorkPageClient";

export const metadata: Metadata = {
    title: "Our Work: Website Migrations & Custom Software",
    description: "Explore PandaCodeGen website migrations, custom storefronts and operations software. See the finished projects, what we built and the stories behind them.",
    alternates: {
        canonical: "/work",
    },
    openGraph: {
        title: "Selected Work | PandaCodeGen",
        description: "Website migrations, custom storefronts and the software behind them. Explore the projects and case studies.",
        url: "https://www.pandacodegen.com/work",
        type: "website",
        images: [ogImageForPath("/work")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Selected Work | PandaCodeGen",
        description: "Website migrations, custom storefronts and the software behind them. Explore the projects and case studies.",
    },
};

export default function WorkPage() {
    return <WorkPageClient />;
}
