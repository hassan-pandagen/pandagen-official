import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/app/preview/services/ServiceDetailPreview";
import { servicePreview } from "@/app/preview/services/service-data";
import { previewServiceFaqs } from "@/app/preview/services/preview-faqs";

// 30 Sep 2026: renders the redesign (built under /preview/services). Metadata
// stay here; the FAQ structured data now comes from the FAQs the redesign shows.


const path = "/services/gohighlevel";
const name = "GoHighLevel Website & CRM Integration";
const description = "Evaluate and scope a custom website or frontend that connects to GoHighLevel CRM, forms, calendars, and automations without making unsupported speed or ranking promises.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/gohighlevel")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function GoHighLevelServicePage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="GoHighLevel" faqs={previewServiceFaqs("gohighlevel")} /><ServiceDetailPreview service={servicePreview("gohighlevel")} /></>;
}
