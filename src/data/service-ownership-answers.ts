/**
 * Buyer questions found in external search results and public support discussions.
 * Qualitative intent, not keyword-volume data. Reviewed 9 October 2026.
 * Visible service answers, FAQ schema and assistant knowledge share this source.
 */
import { SERVICE_PORTABILITY } from "./platform-portability";

export interface OwnershipAnswer {
  q: string;
  a: string;
  sources: readonly { label: string; href: string }[];
}
interface ServiceOwnership {
  heading: string;
  intro: string;
  answers: readonly OwnershipAnswer[];
}
const company = { label: "Our handover terms", href: "/ai-info/pricing-and-guarantees" };
const wpMove = { label: "WordPress migration guide", href: "https://developer.wordpress.org/advanced-administration/upgrade/migrating/" };
const wpExport = { label: "WordPress content export", href: "https://wordpress.org/documentation/article/tools-export-screen/" };
const shopify = { label: "Shopify backup and copying guide", href: "https://help.shopify.com/en/manual/shopify-admin/duplicate-store" };
const wooExport = { label: "WooCommerce customer and order export", href: "https://woocommerce.com/document/ordercustomer-csv-export/" };
const sanity = { label: "Sanity content export", href: "https://www.sanity.io/docs/content-lake/exporting-data" };
const webflow = { label: "Webflow code export", href: "https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code" };
const wix = { label: "Wix website export limits", href: "https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere" };

export const SERVICE_OWNERSHIP: Record<string, ServiceOwnership> = {
  wordpress: {
    heading: "What do you own with a WordPress website?",
    intro: "A self-hosted WordPress website can move to another host, including its files and database. WordPress.com has different export and plan limits. A content download is not a complete working website: check the design, photos, plugins and accounts as well. The comparison below separates those parts.",
    answers: [
      { q: "Can I move my WordPress website to another host?", a: "Yes. A self-hosted WordPress site can move to another host by copying its files and database and updating the settings. Downloading only pages and posts leaves the theme, plugins and other site files behind. WordPress.com is a separate hosted service, so the available backup and moving tools depend on its plan.", sources: [wpMove, { label: "WordPress.com export options", href: "https://wordpress.com/support/export-an-entire-website-with-a-plugin/" }] },
      { q: "What do I receive when my WordPress website is finished?", a: "PandaCodeGen hands over the code and design files created for your project, written instructions and control of the production accounts. We also demonstrate the editing tasks agreed in your scope. A support plan is optional. Paid themes, plugins and hosting keep their own terms and costs, which your proposal identifies.", sources: [company] },
    ],
  },
  "wordpress-migration": {
    heading: "What can you keep when you move from WordPress?",
    intro: "Moving from WordPress means deciding what to keep, rebuild or replace. A content export can carry pages and posts, while a full backup includes more of the existing site. Your new website also needs a plan for photos, forms, important page addresses and the tools your business uses.",
    answers: [
      { q: "Can I keep my pages and blog posts when I leave WordPress?", a: "Yes. WordPress can download pages, posts and related content in a file for importing elsewhere. That file is not the whole website: design, plugins and uploaded files need separate attention. PandaCodeGen reviews those parts before agreeing the migration scope, including which features to rebuild and how to check the moved content.", sources: [wpExport, wpMove] },
      { q: "Will I lose my Google rankings if I move my website?", a: "Google rankings can fluctuate during a significant website move. Keeping important content and page addresses, mapping any changed addresses and testing redirects helps reduce avoidable problems. Google still controls crawling and ranking. PandaCodeGen agrees the migration checks and monitoring in the scope; a redesign or platform change does not guarantee unchanged traffic.", sources: [{ label: "Google website move guidance", href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" }] },
    ],
  },
  ecommerce: {
    heading: "What can you keep when you rebuild your online store?",
    intro: "An online store has more to move than its design. Products, customer details, previous orders and discounts have different export options. You can also rebuild the shopping website while keeping the store system behind it. The comparison shows what Shopify and WooCommerce let you download, separately from our handover.",
    answers: [
      { q: "Can I keep Shopify or WooCommerce and change my website?", a: "PandaCodeGen can scope a new shopping website that keeps Shopify or WooCommerce behind it. Products, payments and orders can remain in that system where the requirements allow. We check the connections, checkout, apps and editing needs before recommending this approach. Keeping the store system also keeps its plan, licence and usage costs.", sources: [{ label: "Our online store service", href: "/services/ecommerce" }] },
      { q: "Can I move my customers and past orders to a new store?", a: "Shopify can download customer and order records, but its admin cannot import past orders into another store. WooCommerce has a separate extension for detailed customer and order exports. Downloading records does not mean a new store can use them unchanged: the receiving system, record fields and any extra tools need checking first.", sources: [shopify, wooExport] },
    ],
  },
  woocommerce: {
    heading: "What can you keep when you move a WooCommerce store?",
    intro: "WooCommerce runs on a WordPress website hosted with a provider you choose. Moving the full site and rebuilding it on a different system are separate jobs. A full move needs the files and database; a rebuild may use product downloads and separate customer and order records. Compare each part below.",
    answers: [
      { q: "Can I move my WooCommerce store to another hosting company?", a: "Yes. A self-hosted WooCommerce store can move with its WordPress files and database. A product spreadsheet alone is not a complete store backup. The move also needs checks for checkout, payment settings, plugins and the website address before the new version serves customers. Paid plugin licences and hosting arrangements still need review.", sources: [wpMove] },
      { q: "Can I take my products, customers and orders out of WooCommerce?", a: "WooCommerce includes a built-in tool to download products as a spreadsheet file. Customer and order reports can also be downloaded, while detailed records use a separate export extension. If you are changing store systems, check which fields the new store accepts and test sample records before moving the whole catalog.", sources: [{ label: "WooCommerce product export", href: "https://woocommerce.com/document/product-csv-importer-exporter/" }, wooExport] },
    ],
  },
  wix: {
    heading: "What can you take when you leave Wix?",
    intro: "Leaving Wix usually means rebuilding the website, because Wix does not offer a complete site download that runs on another host. Some business records and uploaded files can be downloaded separately. Your website address is another account to check. The table separates the design, content and records you may want to keep.",
    answers: [
      { q: "Can I move my Wix website to another platform?", a: "A Wix website cannot be downloaded as a complete working site for another host. Moving away means rebuilding the design and checking how to recover each type of content. Some Wix records have download tools, but those downloads do not recreate the website. Keep the Wix account active until the agreed content and files are safely copied.", sources: [wix] },
      { q: "Can I keep my website address if I leave Wix?", a: "Yes, if you control the domain and keep it registered. Wix says a domain registered with Wix can point to another website, or move to another registrar when transfer rules allow. Moving the registration is different from rebuilding the site. Check business email settings as part of the change, before cancelling services.", sources: [{ label: "Using a Wix domain elsewhere", href: "https://www.wix.com/blog/wix-domain-with-another-website" }, { label: "Wix domain transfer rules", href: "https://support.wix.com/en/article/transferring-your-wix-domain-away-from-wix-2477749" }] },
    ],
  },
  squarespace: {
    heading: "What can you take when you leave Squarespace?",
    intro: "Squarespace lets you download some website content, but the download does not include the design or every page type. Photos, products and order records need their own checks. Moving to a new platform is therefore a content move and a rebuild, rather than a complete copy of the existing website.",
    answers: [
      { q: "Can I move my Squarespace website to another platform?", a: "Squarespace can export some content in a file intended for WordPress, but it does not export the website design, styling or every page type. Store information uses separate downloads. A move to another platform therefore needs a rebuild and a content check, rather than treating the export as a finished website.", sources: [{ label: "Squarespace website export", href: "https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site" }] },
      { q: "Can I keep my blog posts and pictures when I leave Squarespace?", a: "Squarespace's website export includes one blog and supported text and image blocks, with limits on what it carries. Images still need checking and some files may need downloading separately. Before cancelling Squarespace, compare the copied pages and files with the live site so missing content can be recovered while access is available.", sources: [{ label: "Squarespace content export limits", href: "https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site" }] },
    ],
  },
  webflow: {
    heading: "What can you take when you leave Webflow?",
    intro: "Webflow's ordinary code export downloads website files on a paid Workspace plan, but it does not carry every working feature. Blog content, store records and forms need separate checks. Webflow also offers an Enterprise custom hosting option; that is a different route from downloading code and leaving the platform.",
    answers: [
      { q: "Can I host my Webflow website somewhere else?", a: "Yes, but the method matters. A paid Webflow Workspace plan allows a code download for another host, with limits on content and working features. Webflow's Enterprise custom hosting option is different and retains a connection to Webflow. Choose between those routes and a rebuild based on what the business needs to keep.", sources: [webflow, { label: "Webflow Enterprise custom hosting", href: "https://help.webflow.com/hc/en-us/articles/46223183211155-Webflow-custom-hosting-overview" }] },
      { q: "Will my Webflow blog, forms and store still work after a code export?", a: "Webflow's ordinary code export does not include its content editor or ecommerce functionality, and forms need a separate way to send submissions. Content downloads are separate from the code. Before switching hosting, plan how the blog, forms, search and checkout will work and test those replacements. Enterprise custom hosting has different capabilities.", sources: [webflow] },
    ],
  },
  gohighlevel: {
    heading: "What can you keep when you change your GoHighLevel website?",
    intro: "Changing a GoHighLevel website does not have to mean replacing the CRM. The website, forms, calendars and business records are separate parts to scope. HighLevel does not support exporting a complete editable website to another platform. A custom rebuild needs a plan for the connections you want to keep.",
    answers: [
      { q: "Can I keep GoHighLevel as my CRM and rebuild my website?", a: "PandaCodeGen can scope a custom website that connects to the GoHighLevel tools your business wants to keep. The proposal names the forms, calendars, pipelines and other connections to build and test. Rebuilding the website does not automatically move or recreate CRM automations, and keeping GoHighLevel means keeping its subscription and account responsibilities.", sources: [{ label: "Our GoHighLevel integration scope", href: "/services/gohighlevel" }] },
      { q: "Can I export my GoHighLevel website and edit it elsewhere?", a: "HighLevel does not support exporting a website for editing on another platform. Copying the page displayed in a browser can help document content or guide a manual rebuild, but it is not a supported editable site export. Business records have separate download options, so review what you need before closing the account.", sources: [{ label: "HighLevel website export limits", href: "https://help.gohighlevel.com/support/solutions/articles/155000007342-can-highlevel-websites-be-exported-" }] },
    ],
  },
  "cms-development": {
    heading: "What do you keep with a website you can edit?",
    intro: "An editable website should come with more than a login. PandaCodeGen hands over the project files we create, instructions, account control and an editing walkthrough. The scope identifies what your team can change. If your site uses Sanity, its content can be downloaded; moving it to another editor may require conversion.",
    answers: [
      { q: "Can I update my website without calling a developer?", a: "Yes, for the content agreed in your scope. PandaCodeGen sets up an editor for your words, images and business details, documents it and demonstrates how to use it. Changes to the design, new features or business rules may still need development. The handover makes that boundary clear so your team knows what it can manage.", sources: [{ label: "Our editing and training commitments", href: "/ai-info" }, company] },
      { q: "Can I take my content with me if I change website editors?", a: "A custom website using Sanity can download its content and available uploaded images and files. A different editor may need that content converted before importing it. Missing or inaccessible files need separate recovery. PandaCodeGen also hands over the project code and documentation, so the next developer can review how the site was built.", sources: [sanity, company] },
    ],
  },
  "backend-development": {
    heading: "What do you keep after a backend build?",
    intro: "A backend build should identify who controls the business records, accounts and application files. PandaCodeGen includes account control and documentation in its handover. Moving a database is only one part of changing providers: uploaded files, logins, connected services and the application need a separate migration plan.",
    answers: [
      { q: "Can I take my business data with me if I change providers?", a: "For a Supabase project, database records can be exported, but a database backup does not include uploaded files stored through Supabase Storage. Those files need a separate copy, and the application and connected services need their own checks. PandaCodeGen identifies the accounts and responsibilities in the scope and hands over the project code and documentation.", sources: [{ label: "Supabase backup scope", href: "https://supabase.com/docs/guides/platform/backups" }, company] },
      { q: "Can another developer manage the backend after you build it?", a: "PandaCodeGen hands over the code created for your backend, documentation and control of the production accounts. Another developer can use those materials to assess the application and plan future work. Hosting can move to an account in your name on request or when the engagement ends. Provider plans, permissions and third-party licences still apply.", sources: [company] },
    ],
  },
  "custom-engineering": {
    heading: "What do you own after a custom software project?",
    intro: "PandaCodeGen hands over the code and design files created for your project, documentation and control of the production accounts. That applies to a portal, dashboard or web application as well as a website. Your written scope defines the delivery; third-party software and services keep their own licence terms.",
    answers: [
      { q: "Do I get the source code for my custom software?", a: "Yes. PandaCodeGen's published handover terms include the project code and design files we create for you, documentation and control of the production accounts. You keep your own copy if you choose ongoing care. Third-party software retains its own licence, so receiving project files does not transfer ownership of every tool used in the application.", sources: [company] },
      { q: "Will my application stop working if I end your support plan?", a: "Ending PandaCodeGen's optional support plan does not disable the application we build. Your team still needs to arrange hosting, renew any required third-party services and handle maintenance. Hosting moves to an account in your name on request or when the engagement ends. The handover and written proposal identify what needs ongoing attention.", sources: [company] },
    ],
  },
  "ai-seo": {
    heading: "What do you keep when AI SEO work ends?",
    intro: "PandaCodeGen's monthly AI SEO work has an agreed scope and is optional. Ending the service does not remove the project files we created or turn off your website. Handover includes documentation and account control. Your proposal names which pages and changes are included in the monthly scope.",
    answers: [
      { q: "Do I keep the website changes if I stop monthly SEO work?", a: "Yes. PandaCodeGen's handover terms give you the project files we create, documentation and control of the production accounts, including while you use a care plan. Ending optional monthly work does not disable your website. Hosting and other provider costs need their own arrangements, and your written proposal defines which work the monthly service delivers.", sources: [company] },
      { q: "Does adding FAQs or AI markup guarantee that AI will cite my website?", a: "No. Google's AI search guidance says special AI files or special structured data are not required. Useful, accessible pages with clear answers and accurate sources remain the foundation. Google and other AI systems decide which pages to use. PandaCodeGen can improve the pages and measure available visibility, but cannot promise citations or rankings.", sources: [{ label: "Google guidance for AI search features", href: "https://developers.google.com/search/docs/appearance/ai-features" }] },
    ],
  },
};

// 10 Oct 2026, code review: these answers are shown by OwnershipCompare, which a
// service page renders only when SERVICE_PORTABILITY has an entry for it. The FAQ
// schema, the assistant and the migration page all read them through
// serviceOwnershipAnswers(), so it returns them only where the section is on the
// page, and the build fails if an entry here has no section to appear in. That
// keeps the structured data from ever listing a question the page does not show.
for (const slug of Object.keys(SERVICE_OWNERSHIP)) {
  if (!(slug in SERVICE_PORTABILITY)) {
    throw new Error(`SERVICE_OWNERSHIP["${slug}"] has no SERVICE_PORTABILITY entry, so its answers would appear in FAQ schema but not on the page.`);
  }
}

export function serviceOwnershipAnswers(slug: string): readonly OwnershipAnswer[] {
  if (!(slug in SERVICE_PORTABILITY)) return [];
  return SERVICE_OWNERSHIP[slug]?.answers ?? [];
}
