import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/components/pages/services/ServiceDetailPreview";
import { servicePreview } from "@/components/pages/services/service-data";
import { previewServiceFaqs } from "@/components/pages/services/preview-faqs";

// 30 Sep 2026: renders the redesign (built under /preview/services). Metadata
// stay here; the FAQ structured data now comes from the FAQs the redesign shows.


const path = "/services/webflow";
const name = "Webflow Development, Redesign & Migration";
const description = "Build or redesign a Webflow website. Improve CMS editing, mobile layouts and forms, or plan a custom site with content, integrations and redirects in scope.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/webflow")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function WebflowServicePage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="Webflow services" faqs={previewServiceFaqs("webflow")} /><ServiceDetailPreview service={servicePreview("webflow")} /></>;
}
