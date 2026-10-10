import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/components/pages/services/ServiceDetailPreview";
import { servicePreview } from "@/components/pages/services/service-data";
import { previewServiceFaqs } from "@/components/pages/services/preview-faqs";

// 30 Sep 2026: renders the redesign (built under /preview/services). Metadata
// stay here; the FAQ structured data now comes from the FAQs the redesign shows.


const path = "/services/custom-engineering";
const name = "Custom Software & CRM Development";
const description = "Custom CRM development, workflow automation and customer portals. Build around your team's work, with scoped screens, permissions, integrations and handover.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/custom-engineering")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function EngineeringPage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="Custom engineering" faqs={previewServiceFaqs("custom-engineering")} /><ServiceDetailPreview service={servicePreview("custom-engineering")} /></>;
}
