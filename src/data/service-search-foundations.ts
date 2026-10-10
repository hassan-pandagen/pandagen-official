import type { ServiceFaq } from "./service-faqs";

export type ServiceSearchFoundation = {
  heading: string;
  summary: string;
  checks: readonly [string, string][];
  faq: ServiceFaq;
};

// Public website scope, not a promise that a search/AI system will cite it.
// Each service's visible section and buyer FAQ read this same record.
export const serviceSearchFoundations: Record<string, ServiceSearchFoundation> = {
  wordpress: {
    heading: "WordPress SEO and AI search setup.",
    summary: "A WordPress website should explain what you sell and give search systems a clear route to its public pages. We review the content, page settings and theme output together.",
    checks: [["Pages people can find", "Review service and location pages, descriptive titles, headings and links. Check that important answers are available as readable page text."], ["A launch check", "Review sitemap and indexing settings, relevant structured data and mobile layouts. A migration also needs checks on existing addresses and redirects."]],
    faq: { q: "Is SEO and AI search setup included in a new WordPress website?", a: "New website builds include the agreed search foundations: readable public content, page titles and headings, internal links, appropriate structured data and sitemap/indexing checks. For an existing WordPress site, we quote the specific theme, content or settings changes needed. Ongoing AI SEO, AEO and GEO research and reporting are separately scoped monthly work." },
  },
  "wordpress-migration": {
    heading: "SEO and AI search after a WordPress migration.",
    summary: "A WordPress-to-Next.js rebuild needs to keep useful content and links understandable. We plan what stays, what changes and how the replacement pages will be checked.",
    checks: [["Keep useful addresses and answers", "Inventory existing URLs, important content, titles and internal links. Map redirects for addresses that change and compare the agreed pages before launch."], ["Check the replacement pages", "Review readable HTML, canonical addresses, sitemap and indexing settings, and structured data that matches the page. Monitor the agreed launch checks after cutover."]],
    faq: { q: "Can Google and AI search read my website after a WordPress migration?", a: "We review the replacement public pages for readable content, links, metadata, sitemap/indexing settings and relevant structured data. The migration plan retains useful URLs or redirects changed ones and checks content parity. These controls reduce avoidable access problems; they do not promise unchanged rankings or citations. Monthly AI SEO, AEO and GEO work is optional and quoted separately." },
  },
  ecommerce: {
    heading: "Ecommerce SEO and AI-readable product pages.",
    summary: "Product and category pages need useful information outside a checkout or customer login. We structure the agreed storefront around what buyers need to compare and choose.",
    checks: [["Explain the product", "Make descriptions, options and buying questions readable on the product page. Use clear category links and accurate product information supplied by your team."], ["Check the storefront", "Review page titles, canonical URLs, sitemap/indexing settings and relevant product structured data. Check the public product page as well as the cart and checkout."]],
    faq: { q: "Can Google and AI search read my product pages?", a: "We build the agreed public product and category pages with readable descriptions, descriptive titles, useful links and relevant structured data. We also check canonical URLs and sitemap/indexing settings within the storefront scope. Checkout, customer accounts and private order records serve a different purpose. Product content and ongoing AI SEO, AEO or GEO campaigns beyond the build scope are separately quoted." },
  },
  woocommerce: {
    heading: "WooCommerce SEO and AI search checks.",
    summary: "A fast homepage is only one part of a useful shop. Product content, category navigation and the way your theme or extensions output each page also need review.",
    checks: [["Product and category content", "Review readable descriptions, options and buying answers, plus page titles and internal links. Identify duplicated or missing content on the agreed pages."], ["Theme and extension output", "Check canonical URLs, sitemap/indexing settings and relevant product structured data. If the storefront is rebuilt, agree which product addresses stay and which redirect."]],
    faq: { q: "What SEO and AI search checks do you make on WooCommerce?", a: "We review the agreed product/category pages, readable descriptions, titles, internal links, canonical URLs, sitemap/indexing settings and appropriate product structured data. Theme and extension behavior is checked before quoting fixes. A rebuild includes a URL and content plan. Ongoing AI SEO, AEO and GEO research or reporting remains separately scoped." },
  },
  wix: {
    heading: "Wix SEO and AI search access.",
    summary: "You do not need to leave Wix simply to address missing page titles, unclear content or indexing settings. We check what can be improved on the current website first.",
    checks: [["Use the page settings", "Review the titles, headings, descriptions and indexing controls available for your pages. Check that service information and answers appear as readable text."], ["Keep the redesign connected", "Review navigation, internal links and changed addresses. If you choose a platform move, the scope maps content and redirects before cutover."]],
    faq: { q: "Can you improve Wix SEO and AI search access without moving platforms?", a: "Yes, where the required changes fit Wix's current tools. We review page content, titles, headings, internal links and indexing settings, then quote the fixes. A new build or migration includes the agreed search foundations and an address plan. Monthly AI SEO, AEO and GEO research and reporting is a separate optional service." },
  },
  squarespace: {
    heading: "Squarespace SEO and AI-readable content.",
    summary: "Clear service pages, readable answers and consistent links matter whether you stay on Squarespace or rebuild elsewhere. We review the existing site before recommending the next step.",
    checks: [["Pages with a clear purpose", "Review service/location content, page titles and headings, image descriptions and internal links. Use the platform settings available for the agreed page types."], ["Redesign and migration checks", "Review indexing and sitemap settings. A platform move needs a plan for page/blog content, existing URLs and redirects, alongside bookings and other connections."]],
    faq: { q: "Can you improve Squarespace SEO and AI search access?", a: "We can review the agreed page content, titles, headings, internal links and available sitemap/indexing controls, then scope improvements on Squarespace or a separate rebuild. Search foundations are part of the agreed new website scope. Monthly AI SEO, AEO and GEO research or content work is optional and priced separately." },
  },
  webflow: {
    heading: "Webflow SEO, CMS pages and AI search.",
    summary: "A CMS collection can publish many pages, so its page template and fields need useful content and consistent search settings. We review the template as well as individual pages.",
    checks: [["CMS titles and content", "Review how collection fields populate titles, descriptions, headings and public page text. Check that important information and links survive the published template."], ["Publishing and indexing", "Check sitemap/indexing settings and relevant structured data on the agreed pages. A migration adds URL mapping, redirects and a check of the imported content."]],
    faq: { q: "Do you handle Webflow SEO and AI search setup?", a: "Yes, within the agreed website scope. We review public page content, CMS templates, titles, headings, links and available sitemap/indexing controls. Existing-site fixes are quoted after reviewing the current setup. A platform move also gets a content and redirect plan. Ongoing AI SEO, AEO and GEO monitoring or content production is separately scoped." },
  },
  gohighlevel: {
    heading: "GoHighLevel website SEO and AI search.",
    summary: "Keep the CRM workflow you use while improving the public pages buyers land on. We review the website's information and search settings alongside its form and calendar connections.",
    checks: [["Useful public pages", "Review titles, headings, readable service information and links on the agreed pages. Check the SEO settings supported by the current site or replacement frontend."], ["A working route to an enquiry", "Keep agreed public addresses or map redirects when they change. Test forms and calendars while CRM records and private customer information remain access-controlled."]],
    faq: { q: "Can you improve GoHighLevel website SEO while keeping the CRM?", a: "Yes. We review public page content, headings, metadata, links and the search settings the setup supports, alongside the agreed forms and calendar connections. A custom frontend can keep the existing CRM where it fits. The build includes its agreed search foundations; monthly AI SEO, AEO and GEO research and reporting is optional and separately scoped." },
  },
  "cms-development": {
    heading: "CMS websites built for search and AI.",
    summary: "The editor and the published website have different jobs. Your team updates the agreed fields; the public site needs to turn them into useful pages that people and search systems can read.",
    checks: [["Content with useful fields", "Give service, location and article content appropriate titles, headings and links. Check what the website publishes, not only what appears in the editor."], ["A check after publishing", "Review readable page text, canonical addresses, sitemap/indexing settings and relevant structured data. A content migration also needs a URL and redirect plan."]],
    faq: { q: "Will our CMS website be readable by Google and AI search?", a: "We check the agreed public pages for readable content, clear titles/headings, internal links, canonical URLs, sitemap/indexing settings and appropriate structured data. The editor supplies the content; the published website supplies the pages search systems can access. Monthly AI SEO, AEO and GEO research and improvements are separately scoped." },
  },
  "custom-engineering": {
    heading: "Searchable public pages. Private business records.",
    summary: "A custom CRM or portal should not expose customer records for search engines to read. If the project also has public service, product or help pages, we scope their search foundations separately from application access.",
    checks: [["Public website content", "Review titles, headings, readable information, links and relevant structured data for the public pages included in the project. A staff-only app does not need a public SEO campaign."], ["Keep account boundaries", "Test who can access customer and staff records. SEO or AI-search visibility work concerns the public website, while private records stay behind the agreed permissions."]],
    faq: { q: "Can our public website be found in AI search while the CRM stays private?", a: "Yes, those are separate parts of the project. We scope readable public service, product or help pages with appropriate search settings, while CRM/customer records retain their access controls. A private application is not made public for SEO. Monthly AI SEO, AEO and GEO research on the public website is optional and separately quoted." },
  },
  "backend-development": {
    heading: "Public website SEO. Private portal access.",
    summary: "A database or login system alone does not make a website easier to find in search. Public pages need their own content and website checks; customer accounts and uploads need their own access rules.",
    checks: [["Connect the public website", "If public service, help or product pages are in scope, review the content, metadata, internal links and published output. These checks belong to the website as well as its backend."], ["Keep private data private", "Test sign-in and permissions for records and files. Search and AI systems should receive the intended public content, rather than access to customer accounts or staff records."]],
    faq: { q: "Does backend development include SEO and AI search setup?", a: "A backend project covers the agreed data, logins, permissions and workflows. If a public website is included, its content and search foundations are scoped as part of that website. Private accounts and records retain their access rules. Optional monthly AI SEO, AEO and GEO work concerns the public pages and is quoted separately." },
  },
};
