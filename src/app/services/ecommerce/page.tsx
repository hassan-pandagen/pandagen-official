import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/components/pages/services/ServiceDetailPreview";
import { servicePreview } from "@/components/pages/services/service-data";
import { previewServiceFaqs } from "@/components/pages/services/preview-faqs";

// 30 Sep 2026: renders the redesign (built under /preview/services). Metadata
// stay here; the FAQ structured data now comes from the FAQs the redesign shows.


const canonical = "https://www.pandacodegen.com/services/ecommerce";
const name = "Shopify & WooCommerce Ecommerce Development";
const description = "Build or improve a Shopify or WooCommerce store. Plan products, checkout and orders together, with a custom storefront where the requirements justify it.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: "/services/ecommerce" },
  openGraph: {
    title: `${name} | PandaCodeGen`,
    description,
    url: canonical,
    siteName: "PandaCodeGen",
    type: "website",
    images: [ogImageForPath("/services/ecommerce")],
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} | PandaCodeGen`,
    description,
  },
};

export default function EcommercePage() {
  // 4 Oct 2026: switched from an inline graph to ServicePageSchema, which emits the
  // same WebPage, BreadcrumbList and FAQPage nodes (FAQs from the list the redesign
  // renders) plus the Service node for the "What you keep" section on this page.
  return (
    <>
      <ServicePageSchema
        path="/services/ecommerce"
        name={name}
        description={description}
        breadcrumb="E-commerce"
        faqs={previewServiceFaqs("ecommerce")}
      />
      <ServiceDetailPreview service={servicePreview("ecommerce")} />
    </>
  );
}
