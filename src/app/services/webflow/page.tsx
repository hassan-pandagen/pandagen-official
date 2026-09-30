import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/app/preview/services/ServiceDetailPreview";
import { servicePreview } from "@/app/preview/services/service-data";
import { previewServiceFaqs } from "@/app/preview/services/preview-faqs";

// 30 Sep 2026: renders the redesign (built under /preview/services). Metadata
// stay here; the FAQ structured data now comes from the FAQs the redesign shows.


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
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="Webflow services" faqs={previewServiceFaqs("webflow")} /><ServiceDetailPreview service={servicePreview("webflow")} /></>;
}
