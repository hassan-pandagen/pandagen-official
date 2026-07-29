import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import PageContent from "./PageContent";

const path = "/services/gohighlevel";
const name = "GoHighLevel Website & CRM Integration";
const description = "Evaluate and scope a custom website or frontend that connects to GoHighLevel CRM, forms, calendars, and automations without making unsupported speed or ranking promises.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/gohighlevel")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function GoHighLevelServicePage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="GoHighLevel" /><PageContent /></>;
}
