import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import ServiceDetailPreview from "@/components/pages/services/ServiceDetailPreview";
import { servicePreview } from "@/components/pages/services/service-data";
import { previewServiceFaqs } from "@/components/pages/services/preview-faqs";
import { ogImageForPath } from "@/lib/seo/og";

const path = "/services/wordpress";
const name = "WordPress Website Design & Development Services";
const description = "WordPress design, development and redesign for small businesses. Improve existing pages or build a new site, with a written quote and editing walkthrough.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, type: "website", images: [ogImageForPath(path)] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description, images: [ogImageForPath(path)] },
};

export default function WordPressServicePage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="WordPress websites" faqs={previewServiceFaqs("wordpress")} /><ServiceDetailPreview service={servicePreview("wordpress")} /></>;
}
