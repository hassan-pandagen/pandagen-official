import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/app/preview/services/ServiceDetailPreview";
import { servicePreview } from "@/app/preview/services/service-data";
import { previewServiceFaqs } from "@/app/preview/services/preview-faqs";

// 30 Sep 2026: renders the redesign (built under /preview/services). Metadata
// stay here; the FAQ structured data now comes from the FAQs the redesign shows.


const path = "/services/woocommerce";
const name = "WooCommerce Storefront Migration";
const description = "Evaluate and scope WooCommerce theme repair, a headless storefront, or replatforming around customer journeys, data, integrations, performance, operations, and launch risk.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/woocommerce")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function WooCommerceServicePage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="WooCommerce migration" faqs={previewServiceFaqs("woocommerce")} /><ServiceDetailPreview service={servicePreview("woocommerce")} /></>;
}
