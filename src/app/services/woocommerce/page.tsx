import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/components/pages/services/ServiceDetailPreview";
import { servicePreview } from "@/components/pages/services/service-data";
import { previewServiceFaqs } from "@/components/pages/services/preview-faqs";

// 30 Sep 2026: renders the redesign (built under /preview/services). Metadata
// stay here; the FAQ structured data now comes from the FAQs the redesign shows.


const path = "/services/woocommerce";
const name = "WooCommerce Development, Speed & Migration";
const description = "Build or improve a WooCommerce storefront, or plan a migration. Compare the options for checkout, products, orders and launch before committing to a scope.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/woocommerce")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function WooCommerceServicePage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="WooCommerce development" faqs={previewServiceFaqs("woocommerce")} /><ServiceDetailPreview service={servicePreview("woocommerce")} /></>;
}
