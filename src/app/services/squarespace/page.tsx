import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/components/pages/services/ServiceDetailPreview";
import { servicePreview } from "@/components/pages/services/service-data";
import { previewServiceFaqs } from "@/components/pages/services/preview-faqs";

// 30 Sep 2026: renders the redesign (built under /preview/services). Metadata
// stay here; the FAQ structured data now comes from the FAQs the redesign shows.


const path = "/services/squarespace";
const name = "Squarespace Website Design & Migration";
const description = "Build or redesign your Squarespace website, or move to a custom site with a Sanity editor. Scope content, mobile layouts, forms, scheduling and redirects.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/squarespace")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function SquarespaceServicePage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="Squarespace migration" faqs={previewServiceFaqs("squarespace")} /><ServiceDetailPreview service={servicePreview("squarespace")} /></>;
}
