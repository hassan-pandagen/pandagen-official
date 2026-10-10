import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import { serviceOwnershipAnswers } from "@/data/service-ownership-answers";
import ServicePageSchema from "@/components/services/ServicePageSchema";
import { WordPressMigrationPreview, migrationFaqs } from "@/components/pages/services/wordpress-migration/MigrationDesign";
// 30 Sep 2026: renders the redesign (built under /preview/services). Metadata
// stay here; the FAQ structured data now comes from the FAQs the redesign shows.

const path = "/services/wordpress-migration";
const name = "WordPress to Next.js Migration Services";
const description = "Move a WordPress site to Next.js with a written plan for content, URLs, redirects and forms. Review it with Hassan, then get an editing demo and documentation.";

export const metadata: Metadata = {
  title: name,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${name} | PandaCodeGen`, description, url: `https://www.pandacodegen.com${path}`, siteName: "PandaCodeGen", type: "website", images: [ogImageForPath("/services/wordpress-migration")] },
  twitter: { card: "summary_large_image", title: `${name} | PandaCodeGen`, description },
};

export default function MigrationPage() {
  return <><ServicePageSchema path={path} name={name} description={description} breadcrumb="WordPress migration" faqs={[...migrationFaqs(), ...serviceOwnershipAnswers("wordpress-migration")]} /><WordPressMigrationPreview /></>;
}
