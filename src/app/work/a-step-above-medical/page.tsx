import type { Metadata } from "next";
import { ogImageForPath } from "@/lib/seo/og";
import { AStepAboveMedicalStatusPreview as RedesignAStepAboveMedical } from "@/app/preview/work/a-step-above-medical/page";

// 30 Sep 2026: new live route, from the redesign built as
// /preview/work/a-step-above-medical. The project is still in progress:
// migration-projects.ts says the client's public domain still serves their
// previous WordPress site and must not be presented as our delivered build,
// and the page says so in its status. Revisit the wording after launch.

const title = "A Step Above Medical: a WordPress Rebuild in Progress";
const description =
  "A WordPress website being rebuilt with Next.js and Sanity, plus a separate operations portal. In progress: launch is pending, and nothing here is presented as a finished build.";

export const metadata: Metadata = {
  title: { absolute: `${title} | PandaCodeGen` },
  description,
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://www.pandacodegen.com/work/a-step-above-medical",
    images: [ogImageForPath("/work/a-step-above-medical")],
  },
  alternates: { canonical: "/work/a-step-above-medical" },
};

export default function AStepAboveMedicalCaseStudy() {
  return <RedesignAStepAboveMedical />;
}
