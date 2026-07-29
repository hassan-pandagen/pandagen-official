import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import PageContent from "./PageContent";

const path = "/services/wix";
const name = "Wix Website Migration";
const description = "Plan a Wix migration around content, URLs, metadata, forms, integrations, accessibility, analytics, launch validation, rollback, and ownership.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/wix")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function WixServicePage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="Wix migration" /><PageContent /></>;
}
