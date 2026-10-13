/**
 * What you can take with you when you leave a website platform, and what you
 * keep from a PandaCodeGen build.
 *
 * ADDED 4 Oct 2026 at the owner's direction: "no vendor lock-in" is the main
 * selling point, and the service pages did not say it in a checkable way. This
 * file is the single source for the comparison on the service pages
 * (src/components/redesign/OwnershipCompare.tsx), the Service structured data
 * (src/components/services/ServicePageSchema.tsx), the manifesto link, and the
 * full comparison post that will be written from it.
 *
 * RULES
 * 1. Every vendor row quotes the vendor's own documentation, fetched on the
 *    date in `checkedAt`. The quote is copied exactly (curly apostrophes and
 *    all), so anyone can re-find it with Ctrl+F on the linked page. Re-read the
 *    page before changing a row, and move `checkedAt` only when you have.
 * 2. No adverse claim without a quote, and no claim about any platform's
 *    quality. Where a platform IS portable (self-hosted WordPress and
 *    WooCommerce are GPL open source; Shopify exports products, customers and
 *    orders to CSV), the row says so.
 * 3. The PandaCodeGen column is derived from src/data/company-facts.ts. Every
 *    "we" sentence names the company-facts label it rests on in `basis`, and
 *    `canon` is a phrase that must still appear in that fact: if the fact is
 *    reworded, the build throws here instead of this file quietly drifting.
 * 4. Status means:
 *      exports  a built-in, documented export covers it;
 *      partial  an export covers only part of it, or it leaves only by copy and
 *               paste, a developer API, a separate extension or a plan upgrade;
 *      stays    the vendor documents no supported way to take it somewhere
 *               else in a form another platform can run or edit.
 * 5. No em or en dashes in any quote this file stores (scripts/unicode_guard.py
 *    runs on rendered pages, and the full post may render quotes). Where a
 *    vendor sentence contains one, quote a different sentence from the page.
 */

import { COMMERCIAL, SERVICES } from "./company-facts";

export type PortabilityStatus = "exports" | "partial" | "stays";

export type PlatformId =
  | "wix"
  | "squarespace"
  | "webflow"
  | "shopify"
  | "gohighlevel"
  | "wordpress-com"
  | "wordpress"
  | "woocommerce";

export type PortabilityItem =
  | "design"
  | "pages"
  | "posts"
  | "collections"
  | "products"
  | "customers"
  | "orders"
  | "media"
  | "extras"
  | "domain";

export interface PortabilityFact {
  platform: PlatformId;
  item: PortabilityItem;
  status: PortabilityStatus;
  /** Plain English, one or two sentences, for the table cell. */
  detail: string;
  /** The vendor page the quote comes from. */
  sourceUrl: string;
  /** Exact text from that page, as read on `checkedAt`. */
  quote: string;
  /** ISO date the page was read. */
  checkedAt: string;
  /** Plans or conditions the row depends on, where the vendor states them. */
  plans?: string;
  /** A second source, when the detail makes a second claim. Same rules. */
  also?: { sourceUrl: string; quote: string };
}

export interface LicenceNote {
  detail: string;
  sourceUrl: string;
  quote: string;
}

/** The date every vendor row below was read. */
export const PORTABILITY_CHECKED = "2026-10-08";
export const PORTABILITY_CHECKED_LABEL = "8 October 2026";

/**
 * Where "the full comparison" links point. Switched 4 Oct 2026 to the post
 * /blog/website-portability, which renders every row of this file for all eight
 * platforms. The contract-side checklist (/blog/do-you-own-your-website) is
 * linked from that post.
 */
export const PORTABILITY_GUIDE = {
  href: "/blog/website-portability",
  label: "Compare what eight website platforms let you export",
} as const;

export const STATUS_LABELS: Record<PortabilityStatus, string> = {
  exports: "Exports",
  partial: "Partly",
  stays: "Stays",
};

export const ITEM_LABELS: Record<PortabilityItem, string> = {
  design: "Website design and files",
  pages: "Website pages",
  posts: "Blog posts",
  collections: "Editable lists and business details",
  products: "Products",
  customers: "Customers and contacts",
  orders: "Past orders",
  media: "Images and files",
  extras: "Gift cards, discounts and other store data",
  domain: "Website address (domain)",
};

const ITEM_ORDER: PortabilityItem[] = ["design", "pages", "posts", "collections", "products", "customers", "orders", "media", "extras", "domain"];

export const PLATFORMS: Record<PlatformId, { name: string; note?: string; licence: LicenceNote }> = {
  wix: { name: "Wix", licence: {
    detail: "Wix doesn't claim ownership of your content.",
    sourceUrl: "https://www.wix.com/about/terms-of-use",
    quote: "Wix does not claim ownership rights on your User Content or the content you connected to the Wix Services." } },
  squarespace: { name: "Squarespace", licence: {
    detail: "Squarespace owns the templates.",
    sourceUrl: "https://www.squarespace.com/terms-of-service",
    quote: "Squarespace owns the Templates." } },
  webflow: { name: "Webflow", licence: {
    detail: "You keep ownership of your website content, with exceptions the terms name, such as content made with Webflow's AI products.",
    sourceUrl: "https://webflow.com/legal/terms",
    quote: "You retain ownership of your Website Content unless otherwise specified in the Agreement including but not limited to Product Specific Terms (e.g. content generated using generative artificial intelligence products)." } },
  shopify: { name: "Shopify", licence: {
    detail: "A theme from the Shopify Theme Store is licensed to one store.",
    sourceUrl: "https://www.shopify.com/legal/terms",
    quote: "If you download a Theme, you are licensed to use it for a single Store only." } },
  gohighlevel: { name: "GoHighLevel", licence: {
    detail: "HighLevel tells you to export any data you want to keep before you cancel.",
    sourceUrl: "https://help.gohighlevel.com/support/solutions/articles/155000004281-what-happen-s-to-your-data-when-you-cancel-your-highlevel-subscription-",
    quote: "Before canceling your HighLevel subscription, export or download any important data you want to keep." } },
  "wordpress-com": { name: "WordPress.com", note: "The hosted service run by Automattic.", licence: {
    detail: "WordPress.com says you own your site content and can move it.",
    sourceUrl: "https://wordpress.com/support/com-vs-org/",
    quote: "You own your site content and are always free to move it as you please." } },
  wordpress: { name: "Self-hosted WordPress", note: "The open-source software from WordPress.org, on a host you choose.", licence: {
    detail: "WordPress is open source under the GPL, version 2 or later.",
    sourceUrl: "https://wordpress.org/about/license/",
    quote: "The license under which the WordPress software is released is the GPLv2 (or later) from the Free Software Foundation." } },
  woocommerce: { name: "WooCommerce", note: "The open-source store plugin for self-hosted WordPress.", licence: {
    detail: "WooCommerce is open source under the GPL, version 3.",
    sourceUrl: "https://plugins.svn.wordpress.org/woocommerce/trunk/readme.txt",
    quote: "License: GPLv3" } },
};

const C = PORTABILITY_CHECKED;
const WP_EXPORT_QUOTE = "This format, which is called and WordPress eXtended RSS or WXR file, will contain your posts, pages, custom post types, comments, custom fields, categories, tags, custom taxonomies, and users.";
const WOO_COE_QUOTE = "The WooCommerce Customer / Order / Coupon Export extension lets you export your site’s customers, orders, or coupons to a CSV or XML file.";
const WOO_REPORT_CSV = { sourceUrl: "https://woocommerce.com/document/woocommerce-analytics/", quote: "an option to download a CSV copy of the data used in the report for further analysis." };

export const PLATFORM_PORTABILITY: readonly PortabilityFact[] = [
  // ── Wix ──────────────────────────────────────────────────────────────────
  { platform: "wix", item: "design", status: "stays", checkedAt: C,
    detail: "The site can't be exported to run on another host. Wix says it has to be hosted and run on Wix's servers.",
    sourceUrl: "https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere",
    quote: "In order for your site to work properly, it needs to be hosted and operated on Wix's servers." },
  { platform: "wix", item: "pages", status: "partial", checkedAt: C,
    detail: "There's no page export. Wix's translation tool can export site text to a spreadsheet once the Multilingual app is set up; the layout doesn't come with it.",
    sourceUrl: "https://support.wix.com/en/article/wix-multilingual-exporting-and-importing-site-content-for-manual-translation",
    quote: "Begin by exporting your website's content into a CSV file. You can then send the file to a professional translator to have them translate the text." },
  { platform: "wix", item: "posts", status: "stays", checkedAt: C,
    detail: "Wix says blog posts can't be exported to other platforms. It's listed as a feature request.",
    sourceUrl: "https://support.wix.com/en/article/wix-blog-request-exporting-blog-posts-to-other-platforms",
    quote: "Currently, it is not possible to export blog posts to other platforms." },
  { platform: "wix", item: "collections", status: "exports", checkedAt: C,
    detail: "Each editable content list exports to a spreadsheet file.",
    sourceUrl: "https://support.wix.com/en/article/exporting-your-content-from-a-collection",
    quote: "You can export a CMS (Content Management System) collection's content as a CSV file to use it in another application such as Google Sheets or Excel." },
  { platform: "wix", item: "products", status: "exports", checkedAt: C,
    detail: "Physical products export to a spreadsheet file, up to 5,000 rows per file. Digital products can't be exported yet.",
    sourceUrl: "https://support.wix.com/en/article/wix-stores-exporting-your-product-list",
    quote: "Exporting digital products is not currently supported." },
  { platform: "wix", item: "customers", status: "exports", checkedAt: C,
    detail: "Contacts export to a spreadsheet file, up to 50,000 at a time.",
    sourceUrl: "https://support.wix.com/en/article/exporting-your-contacts",
    quote: "You can export up to 50,000 site contacts at once to a CSV file." },
  { platform: "wix", item: "orders", status: "exports", checkedAt: C,
    detail: "Orders export to a spreadsheet file for Wix Stores, Bookings, Restaurants and Donations.",
    sourceUrl: "https://support.wix.com/en/article/exporting-orders-3126323",
    quote: "Important: This article is relevant for Wix Stores, Wix Bookings, Wix Restaurants Orders, Wix Donations, and is in the process of becoming available for Pricing Plans." },
  { platform: "wix", item: "media", status: "partial", checkedAt: C,
    detail: "Files you uploaded download from the Media Manager, folder by folder. Free Wix and Shutterstock media can't be downloaded.",
    sourceUrl: "https://support.wix.com/en/article/wix-media-downloading-files-from-the-media-manager",
    quote: "Only images and videos that you have uploaded can be downloaded. Free Wix and Shutterstock media cannot be downloaded." },
  { platform: "wix", item: "domain", status: "exports", checkedAt: C,
    detail: "A domain bought from Wix can move to another registrar, but not within 60 days of purchase.",
    sourceUrl: "https://support.wix.com/en/article/transferring-your-wix-domain-away-from-wix-2477749",
    quote: "You cannot transfer a domain within 60 days of purchase." },

  // ── Squarespace ──────────────────────────────────────────────────────────
  { platform: "squarespace", item: "design", status: "stays", checkedAt: C,
    detail: "The export is a content file formatted for WordPress of some of the content. Design and styling don't come with it, because many features rely on Squarespace's own code.",
    sourceUrl: "https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site",
    quote: "Not everything will export, as many features rely on our platform’s JavaScript and CSS." },
  { platform: "squarespace", item: "pages", status: "partial", checkedAt: C,
    detail: "Layout pages with text and image blocks export. Album, cover, index, calendar, portfolio and store pages don't. Trial sites can't export at all.",
    sourceUrl: "https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site",
    quote: "Other page types (including album pages, cover pages, index pages, info pages, calendar pages, portfolio pages, and store pages)" },
  { platform: "squarespace", item: "posts", status: "partial", checkedAt: C,
    detail: "One blog page exports with its posts and up to 1,000 comments per post. Any other blog pages stay behind.",
    sourceUrl: "https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site",
    quote: "One blog page, including all of its posts and up to 1000 comments per post" },
  { platform: "squarespace", item: "products", status: "exports", checkedAt: C,
    detail: "Commerce products export to an editable spreadsheet, up to 10,000 products.",
    sourceUrl: "https://support.squarespace.com/hc/en-us/articles/360000694948-Export-products-to-a-csv",
    quote: "You can export up to 10,000 products." },
  { platform: "squarespace", item: "customers", status: "exports", checkedAt: C,
    detail: "Contacts export to a spreadsheet file. Notes and saved addresses aren't included, apart from the last address used on a physical order.",
    sourceUrl: "https://support.squarespace.com/hc/en-us/articles/360046485652-The-Contacts-panel",
    quote: "Notes and saved addresses aren't in the .csv export, except for a customer's last used address on a physical product order." },
  { platform: "squarespace", item: "orders", status: "exports", checkedAt: C,
    detail: "Orders export to a spreadsheet file on every plan.",
    sourceUrl: "https://support.squarespace.com/hc/en-us/articles/206540677-Export-Commerce-orders",
    quote: "Exporting via .csv is available on all plans." },
  { platform: "squarespace", item: "media", status: "partial", checkedAt: C,
    detail: "Images and uploaded videos don't export in bulk. Images download one at a time from the Asset library.",
    sourceUrl: "https://support.squarespace.com/hc/en-us/articles/205814028-Import-to-and-export-from-your-site",
    quote: "It's not possible to export images or uploaded videos from your site in bulk, but you can download individual images, one at a time, from the Asset library." },
  { platform: "squarespace", item: "domain", status: "exports", checkedAt: C,
    detail: "A Squarespace domain can move to another provider once it has no active lock. New registrations carry a 60-day lock.",
    sourceUrl: "https://support.squarespace.com/hc/en-us/articles/205812338-Transferring-a-domain-away-from-Squarespace",
    quote: "If your Squarespace domain doesn't have an active domain lock, you can transfer it to another provider from your domains dashboard.",
    also: { sourceUrl: "https://support.squarespace.com/hc/en-us/articles/360034059332-Domain-locks", quote: "When you first register a domain, we, the registrar, are required to place a 60-day lock on it, unless it’s a ccTLD that doesn’t require the lock." } },

  // ── Webflow ──────────────────────────────────────────────────────────────
  { platform: "webflow", item: "design", status: "partial", checkedAt: C,
    detail: "A paid Workspace plan lets you download website files for another host. This ordinary code export does not carry the working editor, store, forms or search. A Site plan alone does not include code export.",
    plans: "Code export: paid Workspace plans; a Site plan alone is not enough",
    sourceUrl: "https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code",
    quote: "CMS, User Accounts, Ecommerce content (databases), code components and functionality, and localized pages, elements, and content aren’t included in exported code.",
    also: { sourceUrl: "https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code", quote: "Additionally, site search and forms (including file upload and reCAPTCHA) will not work on exported sites in order to comply with GDPR." } },
  { platform: "webflow", item: "pages", status: "partial", checkedAt: C,
    detail: "The ordinary code download includes page files in the main language only. Pages filled from the content editor come out empty, so their content needs a separate download.",
    sourceUrl: "https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code",
    quote: "Exported code only includes the primary locale." },
  { platform: "webflow", item: "collections", status: "exports", checkedAt: C,
    detail: "Editable content lists download as spreadsheet files. Formatted text includes website formatting; photos and files appear as links, so copy the actual files before deleting the old site.",
    sourceUrl: "https://help.webflow.com/hc/en-us/articles/33961290794771-How-do-I-import-content-into-the-Webflow-CMS",
    quote: "Rich text fields export as HTML. Images and files export as Webflow-hosted URLs." },
  { platform: "webflow", item: "products", status: "exports", checkedAt: C,
    detail: "Products, variants and categories export to a spreadsheet file from the Designer.",
    sourceUrl: "https://help.webflow.com/hc/en-us/articles/33961361857811-Import-export-Ecommerce-products-and-variants",
    quote: "You can only import/export products and variants from within the Designer." },
  { platform: "webflow", item: "orders", status: "exports", checkedAt: C,
    detail: "Orders export to a spreadsheet backup from the Orders list.",
    sourceUrl: "https://help.webflow.com/hc/en-us/articles/33961377975059-Orders-tab",
    quote: "The export option allows you to backup your orders as a CSV file." },
  { platform: "webflow", item: "media", status: "partial", checkedAt: C,
    // Source corrected 4 Oct 2026 (website-portability post check): the quote
    // below was on the CMS import page, not the Assets panel page.
    detail: "The code export includes the images uploaded to the Assets panel, on Workspace plans. Images and files in editable content lists export only as links, so Webflow says to keep the old site or download them by hand.",
    sourceUrl: "https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code",
    quote: "with all the images uploaded in your site’s Assets panel",
    also: { sourceUrl: "https://help.webflow.com/hc/en-us/articles/33961290794771-How-do-I-import-content-into-the-Webflow-CMS", quote: "Unless you're migrating to a new Webflow site, keep the original site as a backup or download your images and files manually." } },
  { platform: "webflow", item: "domain", status: "exports", checkedAt: C,
    detail: "Domains bought through Webflow are bought from IONOS and sit in your own IONOS account.",
    sourceUrl: "https://help.webflow.com/hc/en-us/articles/33961367813139-Buy-a-custom-domain-through-Webflow",
    quote: "You’ll need to sign into your IONOS account or sign up for a new account during the checkout process." },

  // ── Shopify ──────────────────────────────────────────────────────────────
  { platform: "shopify", item: "design", status: "partial", checkedAt: C,
    detail: "You can download the theme files, but they are built for Shopify. The download is not a ready-to-run website for a different store system.",
    sourceUrl: "https://shopify.dev/docs/api/liquid",
    quote: "The variation of Liquid in this reference extends the open-source version of Liquid for use with Shopify themes. It includes tags, filters, and objects that can be used to render objects specific to Shopify stores",
    also: { sourceUrl: "https://help.shopify.com/en/manual/online-store/themes/managing-themes/downloading-themes", quote: "The theme is sent in a .zip file to the email that's associated with your staff login." } },
  { platform: "shopify", item: "pages", status: "partial", checkedAt: C,
    detail: "Shopify's own steps for copying a store say to copy and paste online store pages by hand.",
    sourceUrl: "https://help.shopify.com/en/manual/shopify-admin/duplicate-store",
    quote: "Optional: Copy and paste your blog posts and online store pages." },
  { platform: "shopify", item: "posts", status: "partial", checkedAt: C,
    detail: "Blog posts are in the same step: Shopify says to copy and paste them.",
    sourceUrl: "https://help.shopify.com/en/manual/shopify-admin/duplicate-store",
    quote: "Optional: Copy and paste your blog posts and online store pages." },
  { platform: "shopify", item: "products", status: "exports", checkedAt: C,
    detail: "Products export to a spreadsheet file, which Shopify suggests for backups and for moving products.",
    sourceUrl: "https://help.shopify.com/en/manual/products/import-export/export-products",
    quote: "You can export your products to a CSV file to help with several tasks:" },
  { platform: "shopify", item: "customers", status: "exports", checkedAt: C,
    detail: "Customers and their details export to a spreadsheet file.",
    sourceUrl: "https://help.shopify.com/en/manual/customers/import-export-customers",
    quote: "You can export a CSV file of your store's customers and their details." },
  { platform: "shopify", item: "orders", status: "exports", checkedAt: C,
    detail: "Orders export to a spreadsheet file from the Orders page, with transaction history if you want it.",
    sourceUrl: "https://help.shopify.com/en/manual/fulfillment/managing-orders/exporting-orders",
    quote: "You can export a comma-separated values (CSV) spreadsheet of your orders from the Orders page of your Shopify admin to view a broad overview of your complete order information." },
  { platform: "shopify", item: "media", status: "partial", checkedAt: C,
    detail: "Uploaded files download one by one, as the original file, from each file's preview window.",
    sourceUrl: "https://help.shopify.com/en/manual/shopify-admin/productivity-tools/file-uploads",
    quote: "You can download the original, unoptimized file to your device using the download button in the Preview and edit window." },
  { platform: "shopify", item: "extras", status: "stays", checkedAt: C,
    detail: "Shopify says discount codes, issued gift cards, saved reports and visitor traffic data can't be transferred.",
    sourceUrl: "https://help.shopify.com/en/manual/shopify-admin/duplicate-store",
    quote: "Discount codes can't be transferred. Issued gift cards can't be transferred (gift card products are transferred by using the product CSV file). Your saved custom reports can't be transferred. Visitor traffic data can't be transferred." },
  { platform: "shopify", item: "domain", status: "exports", checkedAt: C,
    detail: "A domain bought through Shopify can move to another registrar. Generic extensions such as .com wait 60 days after a purchase, a transfer or a change of contact details.",
    sourceUrl: "https://help.shopify.com/en/manual/domains/managing-domain-ownership/transferring-shopify-domains",
    quote: "If your domain has a generic extension, such as .com, .net, or .org, then your domain isn't eligible for transfer until 60 days after you complete any of the following actions:" },

  // ── WooCommerce ──────────────────────────────────────────────────────────
  { platform: "woocommerce", item: "design", status: "exports", checkedAt: C,
    detail: "WooCommerce is a plugin you install on your own WordPress host, so the store's code and theme move with the site.",
    sourceUrl: "https://plugins.svn.wordpress.org/woocommerce/trunk/readme.txt",
    quote: "Manual installation method requires downloading the WooCommerce plugin and uploading it to your web server via your favorite FTP application." },
  { platform: "woocommerce", item: "pages", status: "exports", checkedAt: C,
    detail: "Pages export with WordPress's built-in content download tool.",
    sourceUrl: "https://wordpress.org/documentation/article/tools-export-screen/",
    quote: WP_EXPORT_QUOTE },
  { platform: "woocommerce", item: "posts", status: "exports", checkedAt: C,
    detail: "Blog posts are in the same WordPress content download.",
    sourceUrl: "https://wordpress.org/documentation/article/tools-export-screen/",
    quote: WP_EXPORT_QUOTE },
  { platform: "woocommerce", item: "products", status: "exports", checkedAt: C,
    detail: "WooCommerce has a built-in product spreadsheet exporter.",
    sourceUrl: "https://woocommerce.com/document/product-csv-importer-exporter/",
    quote: "WooCommerce includes a built-in CSV tool for importing, exporting, and bulk-updating products." },
  { platform: "woocommerce", item: "customers", status: "partial", checkedAt: C,
    detail: "The Customers report downloads as a spreadsheet. A full customer export uses WooCommerce's separate Customer / Order / Coupon Export extension.",
    sourceUrl: "https://woocommerce.com/document/ordercustomer-csv-export/",
    quote: WOO_COE_QUOTE, also: WOO_REPORT_CSV },
  { platform: "woocommerce", item: "orders", status: "partial", checkedAt: C,
    detail: "The Orders report downloads as a spreadsheet. Full order records export through the same separate extension.",
    sourceUrl: "https://woocommerce.com/document/ordercustomer-csv-export/",
    quote: WOO_COE_QUOTE, also: WOO_REPORT_CSV },
  { platform: "woocommerce", item: "media", status: "exports", checkedAt: C,
    detail: "Uploaded files sit in the website uploads folder on your own host.",
    sourceUrl: "https://developer.wordpress.org/advanced-administration/security/backup/files/",
    quote: "By default, the files in the directory called wp-content are your own user-generated content, such as edited themes, new plugins, and uploaded files." },
  { platform: "woocommerce", item: "extras", status: "partial", checkedAt: C,
    detail: "Coupons export through the same Customer / Order / Coupon Export extension.",
    sourceUrl: "https://woocommerce.com/document/ordercustomer-csv-export/",
    quote: WOO_COE_QUOTE },

  // ── GoHighLevel ──────────────────────────────────────────────────────────
  { platform: "gohighlevel", item: "design", status: "stays", checkedAt: C,
    detail: "HighLevel doesn't support exporting a website to manage or edit it elsewhere. Funnels can be shared into other HighLevel accounts.",
    sourceUrl: "https://help.gohighlevel.com/support/solutions/articles/155000007342-can-highlevel-websites-be-exported-",
    quote: "HighLevel does not support exporting websites in a way that allows them to be managed or edited outside the HighLevel platform.",
    also: { sourceUrl: "https://help.gohighlevel.com/support/solutions/articles/155000006179-whitelabel-funnel-sharing-step-by-step-guide", quote: "You can create funnel share links that let sub-account users import a funnel directly into their own account." } },
  { platform: "gohighlevel", item: "pages", status: "stays", checkedAt: C,
    detail: "You can copy the page shown in a browser as a reference for rebuilding. That is not a supported website download you can edit on another platform.",
    sourceUrl: "https://help.gohighlevel.com/support/solutions/articles/155000007342-can-highlevel-websites-be-exported-",
    quote: "This method copies the rendered output of the page only." },
  { platform: "gohighlevel", item: "posts", status: "partial", checkedAt: C,
    detail: "We found no in-app blog export. A developer can list blog posts using developer tools.",
    sourceUrl: "https://marketplace.gohighlevel.com/docs/2021-07-28/ghl/blogs/get-blog-post/",
    quote: "The \"Get Blog posts by Blog ID\" API returns the blog posts for a given blog site." },
  { platform: "gohighlevel", item: "products", status: "partial", checkedAt: C,
    detail: "We found no in-app product export. A developer can list products using developer tools.",
    sourceUrl: "https://marketplace.gohighlevel.com/docs/2021-04-15/ghl/products/list-invoices/",
    quote: "The \"List Products\" API allows to retrieve a paginated list of products." },
  { platform: "gohighlevel", item: "customers", status: "exports", checkedAt: C,
    detail: "Contacts export to a spreadsheet file. Only the latest note comes with each contact, cut to 255 characters.",
    sourceUrl: "https://help.gohighlevel.com/support/solutions/articles/48001238482-contacts-export-as-csv-upgrade",
    quote: "Only the latest note of up to 255 characters is included when exporting contacts." },
  { platform: "gohighlevel", item: "orders", status: "exports", checkedAt: C,
    detail: "Orders export to a spreadsheet file from the Payments area, through an emailed link that expires after 7 days.",
    sourceUrl: "https://help.gohighlevel.com/support/solutions/articles/155000007158-export-or-download-orders-as-csv",
    quote: "Security Reminder: The export link expires after 7 days." },
  { platform: "gohighlevel", item: "media", status: "exports", checkedAt: C,
    detail: "Media folders download as ZIP files, subfolders included.",
    sourceUrl: "https://help.gohighlevel.com/support/solutions/articles/155000002707-complete-guide-to-media-storage",
    quote: "You can download an entire folder as a single ZIP file. Folder downloads preserve the original folder structure, including nested subfolders." },
  { platform: "gohighlevel", item: "domain", status: "partial", checkedAt: C,
    detail: "For a domain bought through HighLevel, HighLevel is the listed registrant. You can transfer it out, but not within 60 days of registering or transferring it.",
    sourceUrl: "https://www.gohighlevel.com/terms-of-service",
    quote: "HighLevel will facilitate the purchase on your behalf, and HighLevel will be the listed registrant and administrative contact.",
    also: { sourceUrl: "https://help.gohighlevel.com/support/solutions/articles/155000008384-transfer-a-domain-out-of-highlevel", quote: "It has been registered or transferred within past 60 days" } },

  // ── WordPress.com ────────────────────────────────────────────────────────
  { platform: "wordpress-com", item: "design", status: "partial", checkedAt: C,
    detail: "The standard export leaves out the theme, design changes and plugins. A full backup download with themes, plugins and the database is on Business and Commerce plans.",
    plans: "Full backup download: Business and Commerce",
    sourceUrl: "https://wordpress.com/support/export/",
    quote: "Your export file will include your posts, pages, and comments but will not include your theme design, customizations, or plugins.",
    also: { sourceUrl: "https://wordpress.com/support/restore/download-backup/", quote: "This feature is available on sites with the WordPress.com Business and Commerce plans." } },
  { platform: "wordpress-com", item: "pages", status: "exports", checkedAt: C,
    detail: "Tools, Export downloads an content file with your pages, posts, comments, categories and tags.",
    sourceUrl: "https://wordpress.com/support/export/",
    quote: "This file contains your posts, pages, comments, categories, and tags, plus links to your media files (not the actual files)." },
  { platform: "wordpress-com", item: "posts", status: "exports", checkedAt: C,
    detail: "Posts, with their categories and tags, are in the same content file.",
    sourceUrl: "https://wordpress.com/support/export/",
    quote: "This file contains your posts, pages, comments, categories, and tags, plus links to your media files (not the actual files)." },
  { platform: "wordpress-com", item: "media", status: "exports", checkedAt: C,
    detail: "The content download holds links, not the image files themselves. The media library downloads separately, and how depends on your plan and whether the site has plugins.",
    sourceUrl: "https://wordpress.com/support/export-your-media-library/",
    quote: "How you export your media library depends on whether your site has plugins installed, and on your plan." },
  { platform: "wordpress-com", item: "domain", status: "exports", checkedAt: C,
    detail: "You can unlock the domain and get a transfer code, but not within 60 days of registering or transferring it.",
    sourceUrl: "https://wordpress.com/support/domains/transfer-domain-registration/",
    quote: "You must wait 60 days after registering or transferring a domain before you can transfer it again." },

  // ── Self-hosted WordPress ────────────────────────────────────────────────
  { platform: "wordpress", item: "design", status: "exports", checkedAt: C,
    detail: "The whole site, with its theme, plugins, files and database, can be copied to another host without reinstalling.",
    sourceUrl: "https://developer.wordpress.org/advanced-administration/upgrade/migrating/",
    quote: "If database and URL remain the same, you can move by just copying your files and database." },
  { platform: "wordpress", item: "pages", status: "exports", checkedAt: C,
    detail: "The built-in content download includes pages, posts, other content types, comments, extra fields and user records. This is a content file, not a full site backup.",
    sourceUrl: "https://wordpress.org/documentation/article/tools-export-screen/",
    quote: WP_EXPORT_QUOTE },
  { platform: "wordpress", item: "posts", status: "exports", checkedAt: C,
    detail: "Posts, categories and tags are in the same content download.",
    sourceUrl: "https://wordpress.org/documentation/article/tools-export-screen/",
    quote: WP_EXPORT_QUOTE },
  { platform: "wordpress", item: "collections", status: "exports", checkedAt: C,
    detail: "Other content types and extra business fields are included in the same content download.",
    sourceUrl: "https://wordpress.org/documentation/article/tools-export-screen/",
    quote: WP_EXPORT_QUOTE },
  { platform: "wordpress", item: "media", status: "exports", checkedAt: C,
    detail: "Images and uploads are files on your own host, backed up and moved with the rest of the site.",
    sourceUrl: "https://developer.wordpress.org/advanced-administration/upgrade/migrating/",
    quote: "If you are moving WordPress from one server to another, begin by backing up your WordPress directory, images, plugins, and other files on your site as well as the database." },
];

// ─────────────────────────────────────────────────────────────────────────────
// The PandaCodeGen column. Every sentence rests on a company-facts.ts label.
// ─────────────────────────────────────────────────────────────────────────────

/** "In your account": the data stays in a system you hold the keys to, so that system's export applies. */
export type OurStatus = "exports" | "account";

export const OUR_STATUS_LABELS: Record<OurStatus, string> = {
  exports: "Yours",
  account: "In your account",
};

type Basis = { list: "COMMERCIAL" | "SERVICES"; label: string; canon: string };

const FACT_LISTS = { COMMERCIAL, SERVICES } as const;

function factValue(list: Basis["list"], label: string): string {
  const value = FACT_LISTS[list].find((item) => item.label === label)?.value;
  if (!value) throw new Error(`platform-portability: missing ${list} fact "${label}"`);
  return value;
}

/** Throws at build time if the company fact no longer says what this file relies on. */
function checked<T extends { basis: Basis[] }>(entry: T): T {
  for (const basis of entry.basis) {
    if (!factValue(basis.list, basis.label).includes(basis.canon)) {
      throw new Error(`platform-portability: ${basis.list} "${basis.label}" no longer contains "${basis.canon}". Update the PandaCodeGen column to match company-facts.ts.`);
    }
  }
  return entry;
}

const OWNERSHIP: Basis = { list: "COMMERCIAL", label: "Ownership on handover", canon: "You receive the project code and design files we create for you, plus documentation and control of the production accounts." };
const THIRD_PARTY: Basis = { list: "COMMERCIAL", label: "Ownership on handover", canon: "Third-party themes, plugins, services and assets remain under their own licence terms." };
const STACK_SANITY: Basis = { list: "SERVICES", label: "Build stack", canon: "Custom builds use Next.js, with Sanity as the CMS where a project needs editorial workflows." };
const STACK_WP: Basis = { list: "SERVICES", label: "Build stack", canon: "WordPress for suitable website projects." };
const STACK_DATA: Basis = { list: "SERVICES", label: "Build stack", canon: "We also build the databases, logins and file storage a project needs" };
const HOSTING: Basis = { list: "COMMERCIAL", label: "Hosting", canon: "Hosting moves to an account in your name on request or when an engagement ends." };
const WALKTHROUGH: Basis = { list: "SERVICES", label: "Primary offer", canon: "with a written scope, documentation and an editing walkthrough" };
const STARTER_TRAINING: Basis = { list: "COMMERCIAL", label: "Starter", canon: "Set up, documented, and we train you on it." };
// Owner confirmed 4 Oct 2026: Sanity training and its documentation come with every Sanity build.
const SANITY_TRAINING: Basis = { list: "SERVICES", label: "Build stack", canon: "Every build that uses Sanity includes training on Sanity Studio for your team and written documentation for it." };
const CARE_PLAN: Basis = { list: "COMMERCIAL", label: "Ownership on handover", canon: "If you then take a monthly support or care plan, that doesn't change" };
const NO_SUBSCRIPTION: Basis = { list: "COMMERCIAL", label: "Ongoing services", canon: "No build requires a subscription, and the site keeps working without one." };

/** The company fact itself, rendered verbatim on every page that shows the comparison. */
export const OWNERSHIP_ON_HANDOVER = factValue("COMMERCIAL", "Ownership on handover");

export interface OurBuildCell {
  status: OurStatus;
  detail: string;
  basis: Basis[];
  /** A third-party fact in the cell (a licence, an export tool) needs its own source. */
  sourceUrl?: string;
  sourceLabel?: string;
  quote?: string;
  checkedAt?: string;
}

const SANITY_EXPORT = {
  sourceUrl: "https://www.sanity.io/docs/content-lake/exporting-data",
  sourceLabel: "Sanity export docs",
  quote: "Exporting a dataset downloads its documents and asset binaries to a local gzipped tarball.",
  checkedAt: C,
};

const STORE_DATA: OurBuildCell = {
  status: "account",
  detail: "Kept in the store system or database your proposal names, under accounts you control, so you can export it from there. If a new storefront keeps Shopify or WooCommerce behind it, that platform's column still applies.",
  basis: [OWNERSHIP, STACK_DATA],
};

/** The rows after Products repeat less: same system, same accounts. */
const STORE_DATA_SAME: OurBuildCell = {
  status: "account",
  detail: "In the same store system or database as your products, under accounts you control.",
  basis: [OWNERSHIP, STACK_DATA],
};

export const OUR_BUILD: Record<PortabilityItem, OurBuildCell> = {
  design: checked({
    status: "exports",
    detail: "You receive the website code and design files we create for you. Custom builds use the open-source Next.js framework. Third-party themes, plugins and services keep their own licence terms.",
    basis: [OWNERSHIP, THIRD_PARTY, STACK_SANITY],
    sourceUrl: "https://github.com/vercel/next.js/blob/canary/license.md",
    sourceLabel: "Next.js licence",
    quote: "The MIT License (MIT)",
    checkedAt: C,
  }),
  pages: checked({
    status: "exports",
    detail: "With Sanity, your page content and available uploaded files can be downloaded together. Missing or inaccessible files need separate recovery. WordPress builds use WordPress's content download; text built into the website files comes with those files.",
    basis: [STACK_SANITY, STACK_WP, OWNERSHIP],
    ...SANITY_EXPORT,
  }),
  posts: checked({
    status: "exports",
    detail: "Blog posts are in the same content export as your pages.",
    basis: [STACK_SANITY, STACK_WP],
    ...SANITY_EXPORT,
  }),
  collections: checked({
    status: "exports",
    detail: "Lists such as services, team members and locations are included in the content download. Sanity's terms say the subscriber keeps ownership of that data.",
    basis: [STACK_SANITY],
    sourceUrl: "https://www.sanity.io/legal/tos",
    sourceLabel: "Sanity terms",
    quote: "Subscriber retains all right, title, and interest (including any and all intellectual property rights) in and to the Subscriber Data as provided to Sanity.",
    checkedAt: C,
  }),
  products: checked(STORE_DATA),
  customers: checked(STORE_DATA_SAME),
  orders: checked(STORE_DATA_SAME),
  extras: checked(STORE_DATA_SAME),
  media: checked({
    status: "exports",
    detail: "Available images and files uploaded to Sanity come with the content download. Check the download for missing files. Images built into the design are part of the website files you receive.",
    basis: [OWNERSHIP, STACK_SANITY],
    ...SANITY_EXPORT,
  }),
  domain: checked({
    status: "account",
    detail: "Control of the production accounts is part of handover. Hosting moves to your own account on request or when an engagement ends.",
    basis: [OWNERSHIP, HOSTING],
  }),
};

/** What else is handed over, listed under the table and in the Service schema's serviceOutput. */
export const OUR_HANDOVER: readonly { label: string; detail: string; basis: Basis[] }[] = [
  checked({ label: "Code and design files", detail: "The project code and design files we create for you.", basis: [OWNERSHIP] }),
  checked({ label: "Written instructions", detail: "Instructions handed over with the project files. If you take a care plan later, we keep sharing the documentation with you.", basis: [OWNERSHIP, CARE_PLAN] }),
  checked({ label: "Training on your editor", detail: "An editing walkthrough at handover, so your team can update the site. Every build that uses Sanity includes training on Sanity Studio and written documentation for it. On Starter, the content editor is set up, documented, and we train you on it.", basis: [WALKTHROUGH, SANITY_TRAINING, STARTER_TRAINING] }),
  checked({ label: "Your accounts", detail: "Control of the production accounts. Hosting moves to your own account on request or when an engagement ends.", basis: [OWNERSHIP, HOSTING] }),
  checked({ label: "No required care plan", detail: "Your build keeps working without a PandaCodeGen care plan. Hosting and other provider services still need their own arrangements.", basis: [NO_SUBSCRIPTION, HOSTING, THIRD_PARTY] }),
];

/**
 * Which platforms each service page compares. An empty list shows only what
 * the client keeps from our build (custom software and AI SEO have no platform
 * to leave). All twelve service pages include a handover section.
 */
export const SERVICE_PORTABILITY: Record<string, PlatformId[]> = {
  wordpress: ["wordpress-com", "wordpress"],
  "wordpress-migration": ["wordpress-com", "wordpress"],
  ecommerce: ["shopify", "woocommerce"],
  woocommerce: ["woocommerce"],
  wix: ["wix"],
  squarespace: ["squarespace"],
  webflow: ["webflow"],
  gohighlevel: ["gohighlevel"],
  "custom-engineering": [],
  "ai-seo": [],
  "cms-development": [],
  "backend-development": [],
  "small-business-website-design": [],
  "medical-website-design": [],
};

export function portabilityFact(platform: PlatformId, item: PortabilityItem): PortabilityFact | undefined {
  return PLATFORM_PORTABILITY.find((fact) => fact.platform === platform && fact.item === item);
}

/** Rows for a comparison: every item at least one of the platforms has a sourced row for. */
export function comparisonRows(platforms: PlatformId[]) {
  return ITEM_ORDER
    .filter((item) => platforms.some((platform) => portabilityFact(platform, item)))
    .map((item) => ({ item, cells: platforms.map((platform) => portabilityFact(platform, item)) }));
}


/** Monthly SEO work is not a website build. Shared by visible copy and schema. */
export function serviceOutputs(slug: string): readonly { label: string; detail: string }[] {
  if (slug !== "ai-seo") return OUR_HANDOVER;
  return [
    { label: "Research and baseline", detail: "Ten buyer questions across one product or service area, up to five priority pages and two agreed AI-search surfaces." },
    { label: "One implemented improvement", detail: "One agreed page improvement or small technical task, verified with a revision round. New articles, larger integrations and a bigger backlog need a separate quote." },
    { label: "Report and review", detail: "A record of the change, observed visibility, measurement limits and the next priority, reviewed with you." },
    { label: "The work you keep", detail: "You keep the project files and documentation we create. Ending optional monthly SEO does not remove the website changes; hosting and other provider services still need their own arrangements." },
  ];
}
