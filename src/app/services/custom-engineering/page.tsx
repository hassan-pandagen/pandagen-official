import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import PageContent from "./PageContent";

const path = "/services/custom-engineering";
const name = "Custom Web Application Engineering";
const description = "Scope and build web applications, portals, dashboards, and integrations around users, data, workflows, acceptance criteria, security, operations, and handover.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/custom-engineering")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function EngineeringPage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="Custom engineering" /><PageContent /></>;
}
