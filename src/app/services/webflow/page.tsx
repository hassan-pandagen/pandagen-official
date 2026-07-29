import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import PageContent from "./PageContent";

const path = "/services/webflow";
const name = "Webflow Website Migration";
const description = "Plan a Webflow migration around content collections, URLs, metadata, interactions, forms, integrations, accessibility, analytics, cutover, and ownership.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/webflow")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function WebflowServicePage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="Webflow migration" /><PageContent /></>;
}
