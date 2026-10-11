import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/components/pages/services/ServiceDetailPreview";
import { servicePreview } from "@/components/pages/services/service-data";
import { previewServiceFaqs } from "@/components/pages/services/preview-faqs";
import { startingPrice } from "@/data/company-facts";

// 12 Oct 2026: added for "small business website design" after the Search Console check
// found no page aimed at it. Content lives in audience-services.ts.

const path = "/services/small-business-website-design";
const name = "Small Business Website Design";
const description = `Small business website design from ${startingPrice("Starter")}, built with the founders. WordPress or a custom site with an editor you can use, price agreed in writing first.`;

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath(path)] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function SmallBusinessWebsiteDesignPage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="Small business website design" faqs={previewServiceFaqs("small-business-website-design")} /><ServiceDetailPreview service={servicePreview("small-business-website-design")} /></>;
}
