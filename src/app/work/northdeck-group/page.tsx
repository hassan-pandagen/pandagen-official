import type { Metadata } from "next";
import { ogImageForPath } from "@/lib/seo/og";
import RedesignNorthDeckGroupCaseStudy from "@/app/preview/work/northdeck-group/page";

// 30 Sep 2026: new live route, from the redesign built as
// /preview/work/northdeck-group. An independent client (the owners' own
// statement); facts come from the project's README, see the preview file.
// No case-study-facts.json entry yet, so the page carries its own
// disclosure; add an entry once the owners want it in /ai-info and llms.txt.

const title = "NorthDeck Group: a Website for Security Systems and Back-Office Services";
const description =
  "A motion-led website for a company that designs connected commercial security systems and runs a 12-service back-office practice. Independent client; no performance figures published.";

export const metadata: Metadata = {
  title: { absolute: `${title} | PandaCodeGen` },
  description,
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://www.pandacodegen.com/work/northdeck-group",
    images: [ogImageForPath("/work/northdeck-group")],
  },
  alternates: { canonical: "/work/northdeck-group" },
};

export default function NorthDeckGroupCaseStudy() {
  return <RedesignNorthDeckGroupCaseStudy />;
}
