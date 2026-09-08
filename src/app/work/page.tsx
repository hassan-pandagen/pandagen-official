import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import WorkPageClient from "./WorkPageClient";

export const metadata: Metadata = {
    title: "Project Evidence & Case-Study Methodology",
    description: "The evidence, measurement, permission, and publication standard used before PandaCodeGen publishes migration and project outcomes.",
    alternates: {
        canonical: "/work",
    },
    openGraph: {
        title: "Project Evidence & Case-Study Methodology | PandaCodeGen",
        description: "How migration outcomes are measured, qualified, approved, and published.",
        url: "https://www.pandacodegen.com/work",
        type: "website",
        images: [ogImageForPath("/work")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Project Evidence & Case-Study Methodology | PandaCodeGen",
        description: "How migration outcomes are measured, qualified, approved, and published.",
    },
};

export default function WorkPage() {
    return <WorkPageClient />;
}
