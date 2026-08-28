import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import PageContent from "./PageContent";
import { serviceFaqs } from "@/data/service-faqs";

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
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="WooCommerce migration" faqs={serviceFaqs["woocommerce"]} /><PageContent /></>;
}
