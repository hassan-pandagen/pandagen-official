import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import PageContent from "./PageContent";

const path = "/services/custom-engineering";
const name = "Custom Web Development Agency";
// Targets the terms with measured demand: "web development agency" 4,400/mo and
// "custom web development" 1,000/mo, both LOW paid competition (Keyword Planner,
// 18 Aug 2026). The reporting clause is the differentiator, not a keyword bet:
// its own terms return ZERO_SEARCH_VOLUME. See docs/research/keyword-gap-2026-08-18.md.
const description = "Custom web development agency building Next.js applications, dashboards and internal tools, with reporting that shows which channel your leads actually came from.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/custom-engineering")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function EngineeringPage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="Custom engineering" /><PageContent /></>;
}
