import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import PageContent from "./PageContent";
import { serviceFaqs } from "@/data/service-faqs";

const path = "/services/ai-seo";
const name = "AI SEO and Answer Engine Optimisation";
const description =
  "We build websites that AI assistants can read, as part of the build rather than as a monthly retainer. What that involves, what it does not promise, and the first-party evidence behind it.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  keywords: [
    "ai seo",
    "ai seo services",
    "ai seo agency",
    "answer engine optimization",
    "aeo services",
    "ai search optimization",
    "chatgpt seo",
  ],
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath(path)] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function AiSeoServicePage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="AI SEO" faqs={serviceFaqs["ai-seo"]} /><PageContent /></>;
}
