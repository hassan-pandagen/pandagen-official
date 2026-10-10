import { WORDPRESS_HOST_MIGRATION } from "@/data/company-facts";
import type { ServiceFaq } from "@/data/service-faqs";
import { serviceSearchFoundations } from "./service-search-foundations";

// Buyer questions describe the work we actually scope. They are not keyword-
// volume claims. Visible service FAQs, JSON-LD and assistant knowledge share them.
const questions: Record<string, ServiceFaq[]> = {
  wordpress: [
    { q: "Can you move my WordPress website to another hosting provider?", a: WORDPRESS_HOST_MIGRATION },
    { q: "Can you fix a slow WordPress website without rebuilding it?", a: "Yes, when the cause can be addressed on the existing site. We review representative pages, the theme, plugins, images and hosting before quoting a focused improvement. A new website or migration is a separate option when the current setup cannot meet the agreed requirements. We measure before promising a performance change." },
  ],
  "wordpress-migration": [
    { q: "Is moving WordPress to Next.js the same as changing hosts?", a: "No. A host-to-host move keeps the WordPress software, theme and plugins. PandaCodeGen's WordPress-to-Next.js service rebuilds the website on a different framework and agrees how content, editing, URLs and features will work. We explain the rebuild price and ongoing costs before you choose; changing platforms is not necessary just because a host needs replacing." },
  ],
  ecommerce: [
    { q: "Can you improve an online store that is difficult to buy from?", a: "Yes. We review product pages, mobile navigation, cart, checkout and the order handoff, then quote the changes needed for the agreed purchase journey. Shopify or WooCommerce can remain the store backend where it fits. A focused improvement and a new storefront are separate scopes; neither comes with a sales guarantee." },
  ],
  woocommerce: [
    { q: "Can you fix a slow WooCommerce checkout without replacing the store?", a: "We assess that first. WooCommerce checkout depends on live customer sessions, payment connections, extensions and hosting, so a cached homepage score is not enough. We test the agreed product-to-order path and quote repairs on the existing store when they meet the need. A custom storefront or platform move is proposed separately, with checkout and extension compatibility checked before committing." },
  ],
  wix: [
    { q: "Can you redesign my Wix website without moving platforms?", a: "Yes. We can scope a Wix redesign around the pages, mobile layout, content and forms you need while keeping the platform. We check the editor and connected Wix apps before pricing the work. If a required workflow cannot be supported in that setup, we explain the alternative and its costs before you decide." },
  ],
  squarespace: [
    { q: "Can you redesign my Squarespace website without starting over?", a: "Often, yes. We review the current version, page layouts, style settings, content and connected services, then agree what can be improved on the existing site. A redesign does not automatically require leaving Squarespace. A platform move receives a separate content, URL and feature plan if the requirements justify it." },
  ],
  webflow: [
    { q: "Can you improve a Webflow site our team struggles to update?", a: "Yes. We review the CMS fields, page templates, publishing tasks and account access that are causing difficulty, then scope changes to the current site where they fit. Your team gets a demonstration of the agreed editing tasks. New templates, integrations or a move to another CMS are separately defined in the proposal." },
  ],
  gohighlevel: [
    { q: "Can you fix a slow GoHighLevel website and keep the CRM?", a: "Yes, that is an option we assess. We review the public pages, images, scripts and form or calendar connections to identify the problem. We can scope improvements to the existing pages or a custom website connected to the agreed GoHighLevel account. The CRM, pipelines and automations are reviewed and tested within the written scope; a rebuild alone does not guarantee a faster site." },
  ],
  "cms-development": [
    { q: "Can you improve a website that is difficult to update?", a: "Yes. We begin with the changes your team needs to make: words, images, services, team members or articles. We can improve a suitable existing editor or build the agreed website and Sanity editing workflow together. You review the fields and publishing tasks before launch, with training and written instructions. New layouts or functionality are scoped separately." },
  ],
  "backend-development": [
    { q: "Can you add customer logins and private file uploads to our website?", a: "Yes, as a separately scoped backend or portal project. We agree the user roles, records, files and actions each person may access, then implement and test the permissions and connections to your website. Supabase is our usual platform, but we assess your existing database and APIs first. A content editor or Starter website does not automatically include this application work." },
  ],
  "custom-engineering": [
    { q: "Can you replace spreadsheets with a customer portal or staff dashboard?", a: "Yes, when a defined application solves the workflow. We map the records, repeated data entry, approvals and users, then scope one complete process for the first release. The quote lists the screens, permissions, integrations, data migration and ongoing costs. Your team reviews a working workflow before launch rather than buying an undefined software package." },
  ],
  "ai-seo": [
    { q: "Can you help if my business is missing from ChatGPT or Google AI answers?", a: "We can investigate the agreed questions and pages, check access to the content and identify missing or unsupported business information. The monthly starting scope includes focused research, monitoring, one implemented improvement, a report and a review. We report observed visibility separately from visits and enquiries; no service can guarantee that an AI system will include or cite your business." },
    { q: "What are AEO and GEO services?", a: "Answer engine optimization (AEO) and generative engine optimization (GEO) describe work aimed at making useful business information accessible to answer and AI search systems. PandaCodeGen includes this work within its AI SEO service: research buyer questions, improve the agreed pages and report available visibility signals. It is a scoped service for your website, rather than a subscription to automated SEO software." },
  ],
};

export function serviceBuyerQuestions(slug: string): readonly ServiceFaq[] {
  const search = serviceSearchFoundations[slug];
  return [...(questions[slug] ?? []), ...(search ? [search.faq] : [])];
}
