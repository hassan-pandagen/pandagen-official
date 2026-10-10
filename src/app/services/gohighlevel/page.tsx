import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/components/pages/services/ServiceDetailPreview";
import { servicePreview } from "@/components/pages/services/service-data";
import { previewServiceFaqs } from "@/components/pages/services/preview-faqs";

// 30 Sep 2026: renders the redesign (built under /preview/services). Metadata
// stay here; the FAQ structured data now comes from the FAQs the redesign shows.


const path = "/services/gohighlevel";
const name = "GoHighLevel Websites & CRM Integration Services";
const description = "Slow GHL pages or outgrown the builder? Improve your site, or connect a custom website to GoHighLevel forms, calendars and pipelines.";

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
