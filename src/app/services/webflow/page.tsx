import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import PageContent from "./PageContent";
import { serviceFaqs } from "@/data/service-faqs";

const path = "/services/webflow";
const name = "Webflow Optimization & Migration Services";
const description = "Get help with slow Webflow pages, CMS limits, forms and integrations. Scope improvements or a Next.js rebuild. Custom rebuilds from $1,500.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/webflow")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function WebflowServicePage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="Webflow services" faqs={serviceFaqs["webflow"]} /><PageContent /></>;
}
