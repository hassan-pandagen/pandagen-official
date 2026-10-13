import { pandaPatchesAiProof } from "./panda-patches-ai-proof";
import { WORDPRESS_HOST_MIGRATION } from "@/data/company-facts";
import { stackServices } from "./stack-services";
import { audienceServices } from "./audience-services";
import { asOf, spec } from "@/data/spec-facts";

// 3 Oct 2026: the earlier live service pages asked owners to total what the
// current site costs to run. Carried over as an optional block: prices only
// where spec-facts.json holds a checked figure, otherwise where to find the bill.
export type RunningCosts = {
  title: string;
  lines: [string, string][];
  note?: string;
  links?: { label: string; href: string }[];
};

export type ServicePreview = {
  slug: string;
  name: string;
  category: string;
  title: string;
  accent: string;
  lead: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  problemTitle: string;
  problemIntro: string;
  checks: [string, string][];
  detailsTitle: string;
  detailsIntro: string;
  details: [string, string][];
  workTitle: string;
  workIntro: string;
  workName: string;
  workImage: string;
  workAlt: string;
  workHref: string;
  workDescription: string;
  workCaveat: string;
  secondWork?: { name: string; image: string; alt: string; href: string; description: string; caveat: string };
  reviewId?: string;
  pathTitle: string;
  paths: [string, string, string][];
  process?: { label: string; title: string; intro: string };
  steps: [string, string][];
  priceTitle: string;
  price: string;
  priceCopy: string;
  scopeNotes: [string, string][];
  relatedService: { name: string; href: string };
  costs?: RunningCosts;
};

export const servicePreviews: ServicePreview[] = [
  ...stackServices,
  ...audienceServices,
  {
    slug: "wordpress", name: "WordPress websites", category: "WordPress website design & development",
    title: "WordPress website development.", accent: "New sites and redesigns.",
    lead: "WordPress website design and development for small businesses. Build a new site, refresh an outdated design or investigate slow pages and broken forms. Work directly with the founders, agree the scope and price, and learn how to update the site yourself.",
    image: "/work/panda-patches-calculator-configure.png", imageAlt: "Panda Patches custom quote calculator after its WordPress migration", imageCaption: "WordPress migration / custom quoting / founder-affiliated business",
    problemTitle: "Need a new WordPress site or help with the one you have?", problemIntro: "We review your pages, mobile layout, editing tasks and enquiry forms. A focused repair, redesign or new build gets its own scope; a platform move is considered when it serves the requirements.",
    checks: [
      ["Pages and design", "Agree the home, service, about and contact pages you need, plus a blog or other content where it has a purpose. We review layouts on phone and desktop."],
      ["Content editing", "Choose a WordPress editing setup for the text, images and pages your team will maintain. We demonstrate those tasks before handover."],
      ["Forms and connections", "Decide where enquiries should arrive and which bookings, email or other tools need connecting. Test the agreed path from submission to receipt."],
      ["Costs and upkeep", "List hosting, theme or plugin licences, backups, updates and who handles each. You can see the running costs alongside the build quote."],
    ],
    detailsTitle: "What the WordPress quote covers.", detailsIntro: "A small business site and a busy publishing site need different amounts of work. We show you the difference before either is priced.",
    details: [["Pages and content", "List the page types, who provides the words and images, and whether blog posts or existing content need moving. New copy and photography are quoted if required."], ["Editing in practice", "Agree which text, images and repeating items your team can change. A new layout or feature is separate development work; the live demonstration uses your real editing tasks."], ["Running the site", "Name the hosting account, domain, paid licences, backups, security updates and support responsibilities. Your proposal states what is included and what is billed by other providers."], ["Move to a different host", WORDPRESS_HOST_MIGRATION]],
    workTitle: "From WordPress. Built around the business.", workIntro: "Panda Patches and Ladies 4 Jesus both started on WordPress. These projects show our migration work; your proposal establishes whether to stay on WordPress or move to a custom build.",
    workName: "Panda Patches", workImage: "/work/panda-patches.png", workAlt: "Panda Patches storefront migrated from WordPress", workHref: "/work/panda-patches",
    workDescription: "A WordPress storefront moved to a custom build, with the product and enquiry journey designed around the business.", workCaveat: "Founder-affiliated business. This is a migration from WordPress, not a website currently running on WordPress.",
    secondWork: { name: "Ladies 4 Jesus", image: "/work/ladies-4-jesus.png", alt: "Ladies 4 Jesus publishing website migrated from WordPress", href: "/work/ladies-4-jesus", description: "A WordPress publishing site moved to a custom build, with a content editor and moderation workflow for the owner.", caveat: "Independent client. This is a migration from WordPress, not a website currently running on WordPress." },
    pathTitle: "Choose the build that fits.",
    paths: [["WordPress", "A familiar way to publish", "Choose WordPress when its editing, themes and plugins fit the site you need and the upkeep your team can manage."], ["Custom build", "More control where you need it", "If your design, store or business workflow needs a different approach, we explain the custom option and its costs. You choose before work starts."]],
    steps: [["Talk to the founders", "Tell Hassan or Imran about the business, the pages you need, your budget and what you would like to edit. You do not need a technical brief."], ["Agree the site and price", "Confirm design, content responsibilities, editing tools, forms, licences and running costs in a written quote."], ["Review the working site", "See the pages on a private preview, try the editing tasks and give feedback before launch."], ["Launch with a walkthrough", "Check the agreed pages and forms, then hand over access, written instructions and a live demo. Ask the founders to explain anything you need to use."]],
    priceTitle: "WordPress website development cost.", price: "Quoted to scope", priceCopy: "Your WordPress quote depends on the pages, design, content and connections involved. It lists the build price, any theme or plugin licences, hosting and who handles updates. Ongoing support is agreed separately.",
    scopeNotes: [["Included work", "Pages, design, content responsibilities and forms listed in the quote."], ["Your access", "Admin access, hosting arrangements and licences explained at handover."], ["Your confidence", "Written instructions and a live demo of the editing tasks agreed for your site."]],
    relatedService: { name: "WordPress migration", href: "/services/wordpress-migration" },
    costs: {
      title: "What a WordPress site costs to run.",
      lines: [["Hosting", "Your host's invoice"], ["Plugin and theme licences", "Renewal emails"], ["Security and backup tools", "Card statement"], ["Maintenance", "Your agency or developer"]],
      note: "The proposal lists which of these the new site keeps, so you know the running cost before you sign.",
    },
  },
  {
    slug: "custom-engineering", name: "Custom software", category: "Custom software development & internal tools",
    relatedService: { name: "Backend development for CRMs and portals", href: "/services/backend-development" },
    title: "Custom software development.", accent: "CRMs, portals and team tools.",
    lead: "Need a custom CRM, customer portal or a way to stop copying records between spreadsheets? We map the workflow, users and data, then scope a useful first release with the screens, automation, integrations and handover your team needs.",
    image: "/work/a-step-above-medical-portal-classes.png", imageAlt: "A Step Above Medical operations portal class schedule", imageCaption: "Built portal / A Step Above Medical / Pre-launch testing",
    problemTitle: "Replace spreadsheets and disconnected tools.", problemIntro: "Start with the records people retype, the approvals they wait for and the information customers need. We agree one complete workflow before expanding the application.",
    checks: [["Scattered information", "Which records are copied between spreadsheets, inboxes and tools, and who needs to see them?"], ["Permissions and decisions", "Who can view, change or approve each step? The answer shapes the data model before a screen is designed."], ["Running costs", "We list hosting, integrations, licences and support alongside the build price."], ["A smaller first release", "We separate what must work on day one from features that need actual usage to justify them."]],
    detailsTitle: "Custom CRM, portals and workflow automation.", detailsIntro: "Custom software development can mean a focused internal tool or a much larger product. The first proposal describes the job, users and boundaries.",
    details: [["Custom CRM development", "Bring customer records, quotes and the team's next steps into a CRM shaped around your process. We agree the screens, roles, imports and connections first, and compare a new build with improving the system you already have."], ["Workflow automation", "Connect agreed steps such as a quote becoming an order, an invoice being sent or a delivery triggering follow-up. We define approvals, retries and what the team sees when an automated step fails."], ["Staff tools and portals", "For an operations dashboard or client portal, map the records, approvals and notifications people use today. Importing old data, connecting an existing system and changing staff permissions are separate decisions."], ["SaaS and customer accounts", "A subscription product adds login, account separation, billing and support workflows. We review who can access each customer's data and what happens when a payment or connection fails."], ["AI-assisted answers", "If an assistant would help, identify the approved guides and policies it may use, the sources it can show, and when a person takes over. Private information needs its own access rules."], ["Rights and handover", "The written terms identify repository access, third-party licences, intellectual-property transfer, documentation and who supports the release after launch."]],
    workTitle: "A custom CRM our team uses.", workIntro: "See how the Panda Patches team manages customers, orders and production in one workspace, with screenshots of the actual system.",
    workName: "Panda Patches CRM", workImage: "/work/enterprise-ops.png", workAlt: "Panda Patches custom CRM dashboard with sensitive business details obscured", workHref: "/work/enterprise-ops",
    workDescription: "Custom CRM development and workflow automation bring orders, production, payments and reporting into one system connected to the storefront.", workCaveat: "Founder-affiliated work: Panda Patches shares an owner with PandaCodeGen. This is delivery evidence, not an independent client endorsement.",
    pathTitle: "Build what the job needs.", paths: [["Improve", "Keep a tool that works", "Fix a broken handoff or integration before replacing an entire system."], ["Build", "Build a custom CRM or customer portal", "Scope a dashboard, portal or app around the people, records and decisions involved."]],
    steps: [["Map the workflow", "Walk through a real task, the people involved and the information each one needs."], ["Agree a first release", "Write the screens, data, integrations, permissions and acceptance checks into the proposal."], ["Build in reviewable parts", "Show working parts against real examples throughout the build."], ["Test and hand over", "Check roles, edge cases and connected systems, then transfer code, accounts and documentation as agreed."]],
    priceTitle: "Custom software and CRM development cost.", price: "From $1,500", priceCopy: "Focused work can start at the published Starter price. A portal, SaaS product or complex integration is priced after requirements and dependencies are reviewed; the accepted proposal sets the final amount and dates.",
    scopeNotes: [["Requirements", "Named users, workflows, data and integrations."], ["Acceptance", "The working behaviours and test cases agreed before build."], ["Control", "Code, accounts and documentation transferred on handover."]],
    costs: {
      title: "What software costs to run.",
      lines: [["Subscriptions it would replace", "Your SaaS invoices and card statement"], ["Hosting and database", `For example Vercel Pro from ${spec("vercel-pro-price").value}, plus your database provider`], ["Maintenance", "Dependency updates and monitoring, agreed in the proposal"], ["Manual work", "The hours your team spends on spreadsheets and handoffs"]],
      note: "Compare the build and its running cost against the subscriptions and hours it replaces.",
    },
  },
  {
    slug: "ecommerce", name: "E-commerce", category: "Ecommerce website development",
    relatedService: { name: "WooCommerce development services", href: "/services/woocommerce" },
    title: "Ecommerce website development.", accent: "Shopify, WooCommerce or custom.",
    lead: "Build or redesign an online store with Shopify, WooCommerce or a custom storefront where it fits. We scope product pages, mobile shopping, checkout and order handling together, or improve the store you already run.",
    // 8 Oct 2026, owner: the hero shows Saforne. The Sleek Jackets image it replaces was captioned
    // "Independent client", but case-study-facts.json records Sleek Jackets as "Demo, not client work".
    // Saforne is an independent client whose store is a preview build, not yet selling (WorkIndex.tsx).
    image: "/work/saforne.png", imageAlt: "Saforne storefront home page, showing the hooded jacket hero.", imageCaption: "Independent client / Saforne storefront, preview build",
    problemTitle: "Where are shoppers getting stuck?", problemIntro: "We review how customers find products, choose options and complete checkout, then inspect the handoff to your team. The quote separates a focused improvement from a new storefront.",
    checks: [["Find a product", "Can a buyer find the right category, variant and answer before contacting your team?"], ["Place an order", "Review the real cart and checkout path, payment provider and failure states."], ["Fulfil it", "Check what staff need after payment: specifications, status, shipping and customer messages."], ["Keep it current", "Decide which product details your team changes and how those changes reach the live store."]],
    detailsTitle: "Ecommerce website development services.", detailsIntro: "Ecommerce website development includes what buyers see and the system your team uses after they click buy.",
    details: [["Shopify or WooCommerce backend", "The current platform can still hold products, stock, orders and payments when it fits. A separate custom storefront changes the buyer-facing pages; it does not automatically replace the commerce backend."], ["Cart and checkout", "Agree product options, discounts, shipping, taxes, payment methods and order confirmation. If Shopify remains the backend, its hosted checkout remains the payment step; custom cart work belongs before it."], ["An existing catalogue", "If a store is moving, inventory products, variants, images, customer accounts and order history. The proposal specifies which records transfer, which stay and how a sample is reconciled before launch."], ["A measured improvement", "For an existing store, compare the current theme, apps and purchase path with a focused repair. Performance is tested on agreed pages and devices against your own baseline."]],
    workTitle: "A storefront with real buyers.", workIntro: "MyCustomPatches is an independent client project. Its documented migration and client review are available to inspect.",
    workName: "MyCustomPatches", workImage: "/work/mycustompatches-product-template.png", workAlt: "MyCustomPatches product page template", workHref: "/work/mycustompatches",
    workDescription: "A custom storefront and product templates built during a migration from WordPress. The project record covers the move and launch checks.", workCaveat: "This project illustrates the storefront and migration work. Another store needs its own catalogue, backend and checkout assessment.", reviewId: "mycustompatches",
    pathTitle: "Online store redesign or a custom storefront.", paths: [["Improve", "Fix product pages and checkout", "Measure pages and checkout steps before changing the platform."], ["Build", "Create a custom storefront", "Keep the commerce backend where it fits, and build the customer experience around your catalogue."]],
    steps: [["Map products and buyers", "Review catalogue structure, variants, questions and purchasing routes."], ["Choose the system of record", "Confirm where products, orders, payments and customer data will live."], ["Build and connect", "Develop the agreed pages and integrations using representative real products."], ["Test the whole order", "Check variant selection, payment, confirmation, operations and handover before launch."]],
    priceTitle: "Ecommerce website development cost.", price: "From $1,500", priceCopy: "A focused store can start at Starter. Large catalogues, subscriptions and custom commerce logic change the scope. Your written quote names the backend, third-party charges and actual price.",
    scopeNotes: [["Products", "Catalogue, variants and content responsibilities."], ["Checkout", "Payment and order paths to test."], ["Operations", "Handover, integrations and ongoing provider costs."]],
    costs: {
      title: "What a store costs to run.",
      lines: [
        ["Shopify plan", `Basic ${spec("shopify-plan-basic").value}, Grow ${spec("shopify-plan-grow").value}, Advanced ${spec("shopify-plan-advanced").value}, Plus from ${spec("shopify-plan-plus").value} (US prices, ${asOf("shopify-plan-basic")})`],
        ["Apps", "Each app bills on its own, through Shopify or separately. Total them from the bill and your card statement."],
        ["Hosting, if you go headless", `Oxygen at no extra charge on paid Shopify plans, or Vercel Pro from ${spec("vercel-pro-price").value} for a Next.js storefront`],
        ["Upkeep", "On a headless store, at least one Shopify API upgrade a year, plus monitoring and fixes"],
      ],
      links: [{ label: "Headless Shopify cost, line by line", href: "/blog/shopify-headless" }, { label: "Audit your Shopify app bill", href: "/blog/shopify-app-costs-real-monthly-bill" }],
    },
  },
  {
    slug: "woocommerce", name: "WooCommerce", category: "WooCommerce development, speed & migration",
    relatedService: { name: "Ecommerce website development", href: "/services/ecommerce" },
    title: "WooCommerce development services.", accent: "Build, improve or migrate.",
    lead: "WooCommerce development services for new stores and existing shops. Need help with slow product pages, checkout or connected extensions? We review the purchase journey and order handling, then quote improvements or a rebuild that fits.",
    image: "/work/mycustompatches-categories.png", imageAlt: "MyCustomPatches product categories after its WordPress migration", imageCaption: "Independent client / WordPress and WooCommerce migration",
    problemTitle: "Slow checkout or a store that is hard to run?", problemIntro: "Cart and checkout need a live session, so a cached homepage cannot settle the question. We review your own purchase path and the systems attached to it.",
    checks: [["Checkout steps", "Test cart, payment, confirmation and error handling with your actual configuration."], ["Extension footprint", "Find what each extension does, what it costs and whether its role can be simplified."], ["Product data", "Inventory products, variants, images, stock, tax and shipping rules. List customer accounts, order history and subscriptions separately so the quote names exactly which records and behaviours will move."], ["Old addresses", "Inventory product and category URLs, then plan relevant redirects where paths change."]],
    detailsTitle: "Build, improve or migrate your WooCommerce store.", detailsIntro: "Your quote identifies the product pages, checkout changes, extensions and order workflows involved. A platform move adds a separate plan for data, payments and the features that must be kept.",
    details: [["Keep or change the backend", "WooCommerce can continue to manage products and orders behind a different storefront. If a replacement backend is needed, the quote names the data and integrations to move and the new admin tasks."], ["Subscriptions and saved cards", "Recurring billing, customer payment methods and booking or wholesale rules depend on the existing providers and account permissions. We verify what can be transferred, what must be recreated and whether a customer must act before committing to a cutover."], ["Reconcile the records", "Define the product, variant, category, review, customer and order-history records included in scope. Test an import on a safe copy and compare agreed samples with the source."], ["Launch the purchase path", "Check relevant redirects, mobile cart and checkout, payment outcomes, confirmation messages, tax and shipping cases. Record who watches the first live orders and how to respond to a failed step."]],
    workTitle: "A completed client migration.", workIntro: "This client moved from WordPress and WooCommerce to a custom build. The case record distinguishes verified delivery facts from outcomes still under review.",
    workName: "MyCustomPatches", workImage: "/work/mycustompatches-product-template.png", workAlt: "Completed MyCustomPatches product template", workHref: "/work/mycustompatches",
    workDescription: "Product templates, content and important URLs moved while the previous site stayed live until cutover.", workCaveat: "The recorded launch describes this project. It does not promise the same timeline, uptime or search result for another store.", reviewId: "mycustompatches",
    pathTitle: "Repair or rebuild the store.", paths: [["Repair", "Keep WooCommerce", "A checkout configuration, theme or extension fix may solve the measured issue."], ["Rebuild", "Change the storefront", "Scope a replacement when the workflow and extension stack are the constraint."]],
    steps: [["Audit the store", "Inventory products, extensions, checkout rules, integrations and URLs."], ["Agree the architecture", "Decide what backend remains and how orders and content will move."], ["Reconcile real data", "Test representative products, variants, accounts, payment and order flows."], ["Cut over carefully", "Check redirects and transactions, assign monitoring and a rollback path."]],
    priceTitle: "WooCommerce development and migration cost.", price: "From $1,500", priceCopy: "A small catalogue can start at Starter. Larger product data, subscriptions and custom checkout logic may call for Growth or Scale. The accepted proposal controls the price and schedule.",
    scopeNotes: [["Data", "Products, customers and orders included in the move."], ["Payments", "Provider access, checkout tests and responsibility."], ["Search", "URL map and validation, with no ranking promise."]],
    costs: {
      title: "What a WooCommerce store costs to run.",
      lines: [["Hosting", "Your host's invoice"], ["Extension and theme licences", "Renewal emails"], ["Payment fees", "Your payment provider's statement"], ["Security, backups and updates", "Card statement or your developer"], ["Fixes and downtime", "Your own records"]],
      note: "That total is what a rebuild or a move has to beat, so it's the figure we quote against.",
    },
  },
  {
    slug: "wix", name: "Wix design, redesign & migration", category: "Wix website design, redesign & migration",
    relatedService: { name: "CMS website development", href: "/services/cms-development" },
    title: "Wix website design.", accent: "Redesign or move.",
    lead: "Need a Wix website redesign, a clearer mobile layout or forms that work with your business? We can build or improve the current site, or plan a custom website with a Sanity editor if you have outgrown the setup.",
    image: "/work/panda-publisher.png", imageAlt: "Panda Publisher custom publishing website", imageCaption: "Related publishing work / not a Wix migration",
    problemTitle: "Outdated design, slow pages or awkward mobile layouts?", problemIntro: "We review the pages, mobile experience, enquiries and editing tasks before recommending a Wix redesign or platform move. The quote names the changes and connected apps involved.",
    checks: [["Pages and content", "Which pages, articles, images and forms must carry across?"], ["Editing", "What should your team be able to change without a developer?"], ["Connected tools", "List Wix Bookings, Stores, Members Area, payments, CRM and email tools you use. For each, agree whether to keep the connection, replace it or rebuild the required behaviour."], ["Search addresses", "Record existing URLs and metadata, then plan relevant destinations if they change."]],
    detailsTitle: "What your Wix redesign or migration covers.", detailsIntro: "A Wix migration starts with an inventory. The account's available exports and apps determine the manual work.",
    details: [["Content and design", "List pages, posts, media, CMS collections and the layouts that should stay. Review the export available from your account, then name any content or design that needs rebuilding by hand."], ["Bookings, stores and members", "A Wix app is a working service, not just a page. Record its data, payments, messages and access rules. Decide whether each workflow stays connected, moves to another provider or needs rebuilding."], ["Forms, domain and search", "Test where enquiries arrive, map changed URLs to appropriate destinations, and plan domain, analytics and Search Console checks. The old site remains available while the replacement is reviewed; the launch window and fallback are agreed in writing."], ["Your new editor", "Show your team how to update the business details, images, posts and repeating content included in scope. State which new layouts or functions would require development."]],
    workTitle: "What editor freedom can look like.", workIntro: "This is relevant content and workflow work. We have not presented it as a Wix migration.",
    workName: "Ladies 4 Jesus", workImage: "/work/ladies-4-jesus-editor-devotional.png", workAlt: "Content editor for the Ladies 4 Jesus site", workHref: "/work/ladies-4-jesus",
    workDescription: "A publishing and moderation workflow that lets the owner manage content without a developer.", workCaveat: "The client originally used WordPress. Wix export limits and connected apps need a separate assessment for your site.", reviewId: "ladies-4-jesus",
    pathTitle: "Choose the right amount of change.", paths: [["Improve", "Stay on Wix", "Fix a limited issue in the current site when it still supports the business."], ["Move", "Move Wix content to a custom website", "Replace the site when the content model, design or integrations justify it."]],
    steps: [["Inventory the site", "List pages, content, URLs, forms and integrations."], ["Design the new editor", "Agree the fields your team will own and the templates they will publish."], ["Build and compare", "Review content and journeys on staging against the source site."], ["Launch and check", "Test redirects, forms, analytics and live pages after cutover."]],
    priceTitle: "Wix redesign and migration cost.", price: "From $1,500", priceCopy: "A focused site starts at Starter; fuller content migration and redirect mapping often call for Growth. Access and export constraints affect the final written quote.",
    scopeNotes: [["Content", "Pages and records included in the move."], ["Editor", "Fields and publishing tasks your team controls."], ["Cutover", "URL map, form checks and launch responsibilities."]],
    costs: {
      title: "What a Wix site costs to run.",
      lines: [["Wix plan", "Your Wix billing page"], ["Apps from the Wix App Market", "Each app's billing"], ["Domain and business email", "Renewal emails"], ["Help and changes", "Your own records or your designer's invoices"]],
      note: "That total is what any change has to beat, so it's the figure we quote against.",
    },
  },
  {
    slug: "squarespace", name: "Squarespace design, redesign & migration", category: "Squarespace website design, redesign & migration",
    relatedService: { name: "CMS website development", href: "/services/cms-development" },
    title: "Squarespace website design.", accent: "New sites and redesigns.",
    lead: "Build or redesign a Squarespace website around your services, content and enquiries. If layouts, editing or connected tools are getting in the way, we compare improvements with a custom site and Sanity editor before you choose.",
    image: "/work/emblematic-studio.png", imageAlt: "Emblematic Studio homepage showing an embroidered mountain patch and custom patch studio branding", imageCaption: "Independent client / Emblematic Studio homepage",
    problemTitle: "Does your Squarespace site still fit your business?", problemIntro: "We review the design, mobile pages, content, forms and scheduling. A redesign can stay on Squarespace; a move needs a separate plan for the features and content your team relies on.",
    checks: [["Design and content", "Identify the layouts and editorial changes your current setup cannot support cleanly."], ["Shop and forms", "Map Squarespace Commerce products, payments, enquiries, Member Areas and scheduling where used. Agree what carries over and test the customer journeys included in the move."], ["Costs to run", "Compare the current plan and add-ons with hosting, CMS and support for a proposed rebuild."], ["Migration risk", "Record URLs, metadata, media and any content that needs a manual move."]],
    detailsTitle: "What your Squarespace redesign or move covers.", detailsIntro: "The plan distinguishes reusable content from platform features that need another way to work.",
    details: [["Pages and blog", "Inventory the pages, posts, authors, dates, images and page metadata in scope. Check the export and list manual cleanup before promising a content transfer."], ["Commerce and appointments", "Products, checkout, Member Areas and Squarespace Scheduling may involve separate accounts or customer data. Agree what stays, what connects to the new site and what needs rebuilding or migrating."], ["Design and editing", "Review Fluid Engine layouts and responsive behaviour with real pages. Choose editable fields and collections for routine updates, then let your team try them on the preview."], ["Cost and cutover", "Compare the current plan and add-ons with future hosting, content editing, connected services and support. Map old addresses, test forms and agree the domain switch and fallback steps."]],
    workTitle: "A brand carried through the build.", workIntro: "Emblematic Studio shows our custom design and implementation work. Its review belongs to this project.",
    workName: "Emblematic Studio", workImage: "/work/emblematic-studio.png", workAlt: "Emblematic Studio completed website", workHref: "/work/emblematic-studio",
    workDescription: "A custom site shaped around the brand, its work and its enquiry journey.", workCaveat: "This is an independent client website, not a Squarespace migration case study. Your export and content requirements need their own review.", reviewId: "emblematic-studio",
    pathTitle: "Keep the fit, or create one.", paths: [["Improve", "Stay on Squarespace", "Use the current platform when a design or content adjustment meets the need."], ["Move", "Build a tailored site", "Agree the new editing model, content and connected tools before rebuilding."]],
    steps: [["Review the current site", "List pages, collections, forms, products and connected services."], ["Choose the destination", "Define content fields, layouts and which accounts your team will control."], ["Migrate and review", "Compare agreed pages and journeys on staging with representative content."], ["Switch and validate", "Check old addresses, enquiries and live behaviour after launch."]],
    priceTitle: "Squarespace website design and migration cost.", price: "From $1,500", priceCopy: "A smaller site can start at Starter. Content volume, commerce and integrations change the scope. We include operating costs and responsibilities in the proposal.",
    scopeNotes: [["Pages", "Content and assets to carry across."], ["Systems", "Forms, payments and third-party services."], ["Handover", "Editing, accounts and ongoing costs."]],
    costs: {
      title: "What a Squarespace site costs to run.",
      lines: [["Squarespace plan", "Your billing page"], ["Extensions", "Each extension's billing"], ["Domain and email", "Renewal emails"], ["Help and changes", "Your own records"]],
      note: "That total is what any change has to beat, so it's the figure we quote against.",
    },
  },
  {
    slug: "webflow", name: "Webflow development & redesign", category: "Webflow development, redesign & migration",
    relatedService: { name: "CMS website development", href: "/services/cms-development" },
    title: "Webflow development services.", accent: "New sites, redesigns and migration.",
    lead: "Webflow development and redesign for a new website or an existing site that needs attention. We review mobile layouts, CMS editing, forms and integrations, then scope improvements or a move to a custom build when it fits.",
    image: "/work/panda-patches-editor-blog.png", imageAlt: "Panda Patches custom blog editor", imageCaption: "Related CMS work / not a Webflow migration",
    problemTitle: "Difficult editing, broken forms or a redesign backlog?", problemIntro: "We inspect the pages and publishing tasks causing the problem. Your current Webflow setup may only need focused changes; a migration receives its own content, interaction and integration plan.",
    checks: [["Mobile pages", "Measure priority Webflow pages, including images, fonts, scripts and interactions. Record the device and connection so the same checks can be repeated after changes."], ["CMS work", "Ask an editor to publish a real item. Review collection fields, references, slugs and media, then list the content and relationships a replacement editor must support."], ["Forms and CRM", "Follow an enquiry from submission into the system that should receive it."], ["Operating bill", "Read the current plan, seats, add-ons and asset usage before comparing alternatives."]],
    detailsTitle: "Webflow development, CMS changes and migration.", detailsIntro: "A Webflow to Next.js migration needs separate plans for publishing, interactions and connected services.",
    details: [["CMS data and relationships", "Map collections, fields, references, rich text, media and slugs into the chosen editor. Count distinct templates as well as URLs; validate scoped records and publish a representative item before launch."], ["Interactions and access", "Decide which animations remain and which interactions perform a business action, such as a form step or calculator. Forms, search, languages and restricted pages need their own replacement and tests where included."], ["People and approvals", "Your team supplies account and domain access, new copy or imagery if required, and a decision maker for the scope and preview. The written proposal identifies who handles content transfer, redirects, cutover and support."], ["Webflow hosting and maintenance costs", "A new site still needs hosting and may need a CMS, seats, forms, search, localisation and maintenance. Compare those charges with the Webflow plan and add-ons you actually pay for."]],
    workTitle: "Relevant CMS and integration work.", workIntro: "These projects show how we build editors and connected systems; they did not begin on Webflow.",
    workName: "Panda Patches", workImage: "/work/panda-patches-editor.png", workAlt: "Panda Patches custom content editor", workHref: "/work/panda-patches",
    workDescription: "The team edits storefront content and manages a connected operations workflow in a custom build.", workCaveat: "Founder-affiliated work. Panda Patches originally used WordPress and WooCommerce, not Webflow.",
    pathTitle: "Improve or migrate.", paths: [["Improve", "Keep Webflow", "Fix identified issues in pages, scripts or publishing settings."], ["Migrate", "Move beyond Webflow", "Build a different content and frontend system when the current one limits the work."]],
    steps: [["Review access and structure", "Inventory pages, components, interactions, CMS collections, forms and integrations."], ["Price both options", "Compare a scoped Webflow improvement with the complete cost of a move."], ["Build and reconcile", "Validate content, fields and connected services against agreed samples."], ["Launch with checks", "Crawl the preview, test redirects and forms, then monitor cutover."]],
    priceTitle: "Webflow development and migration cost.", price: "From $1,500", priceCopy: "Custom rebuilds start at the published Starter price. Improvements within Webflow are quoted to their own scope. The written proposal states the chosen route, price and dates.",
    scopeNotes: [["Access", "CMS, billing and integration permissions agreed first."], ["Comparison", "The repair route and the rebuild route costed clearly."], ["Search", "URL and metadata checks without ranking guarantees."]],
    costs: {
      title: "What a Webflow site costs to run.",
      lines: [
        ["Site plan", `Basic ${spec("webflow-basic-price").value} or Premium with CMS ${spec("webflow-premium-price").value}, per site, billed yearly (${spec("webflow-basic-monthly-price").value} and ${spec("webflow-premium-monthly-price").value} billed monthly)`],
        ["Workspace seats", `Core ${spec("webflow-core-price").value} or Growth ${spec("webflow-growth-price").value} for in-house teams, billed yearly; extra seats are separate`],
        ["Add-ons", `Localization from ${spec("webflow-localize-essential").value}, Analyze from ${spec("webflow-analyze-addon").value}, Optimize ${spec("webflow-optimize-addon").value}`],
        ["Help and changes", "Your own records or your developer's invoices"],
      ],
      note: `Webflow prices are in USD, plus tax, as of ${asOf("webflow-premium-price")}.`,
    },
  },
  {
    slug: "gohighlevel", name: "GoHighLevel", category: "GoHighLevel website & CRM integration",
    relatedService: { name: "Custom CRM development and workflow automation", href: "/services/custom-engineering" },
    title: "GoHighLevel website design.", accent: "Keep your CRM. Improve the site.",
    lead: "Is your GoHighLevel website slow, or have you outgrown the builder? We scope page improvements or a custom site connected to your GHL forms, calendars and pipelines. Forms and bookings are tested against the agreed account and workflows.",
    image: "/work/northdeck-group-enquiry.png", imageAlt: "Northdeck Group custom enquiry journey", imageCaption: "Related enquiry frontend / integration assessed per project",
    problemTitle: "Slow pages or missing GoHighLevel enquiries?", problemIntro: "We follow a visitor from the website to the correct CRM account, booking and follow-up workflow. The assessment separates public-page problems from integration work before a fix or new site is quoted.",
    checks: [["Page experience", "Measure priority pages on a defined device and connection, and review content and forms."], ["CRM handoff", "Map contact fields, tags, consent and attribution to the correct GoHighLevel account and pipeline. Agree how duplicates and failed submissions will be handled."], ["Automations", "List workflows that rely on forms, calendars, webhooks or domains. Test the agreed triggers and messages with sample enquiries before switching the public site."], ["Account economics", "Review your active plan, add-ons, messaging and usage alongside proposed hosting."]],
    detailsTitle: "Keep the CRM work that matters.", detailsIntro: "GoHighLevel can remain the system for contacts and follow-up while the public pages change, if the account and integration support it.",
    details: [["Locations and funnels", "Inventory the locations, sub-accounts, pipelines, funnels, forms and calendars the new site must reach. Confirm available API or webhook access and credentials before choosing an integration."], ["A complete enquiry", "Map fields, tags, consent and source information. Submit agreed test enquiries and bookings, then check the right record, pipeline, notification and automation rather than stopping at a form success message."], ["Connection tests and handover", "Agree how duplicate submissions, failed connections and account changes are handled. Document the connector, access and who monitors it after launch; moving all CRM workflows later is a separate scope."], ["Stay with GHL when it fits", "If a page or form repair inside the current setup solves the measured problem, scope that route. Compare its cost with a separate frontend and the ongoing charges of both systems."]],
    workTitle: "Custom frontend, visible work.", workIntro: "Northdeck Group shows the kind of tailored public site we build. We do not present it as a GoHighLevel migration.",
    workName: "Northdeck Group", workImage: "/work/northdeck-group.png", workAlt: "Northdeck Group custom website", workHref: "/work/northdeck-group",
    workDescription: "A code-driven marketing site with a clear service journey and contact path.", workCaveat: "This project does not establish a GoHighLevel integration outcome. Your CRM data flow needs its own access, test fixtures and written acceptance criteria.",
    pathTitle: "Keep the parts that earn their place.", paths: [["Improve", "Fix slow pages and broken forms", "Repair measured page or form issues within the existing setup."], ["Separate", "Connect a custom website to GoHighLevel", "Keep agreed GoHighLevel CRM functions while the public site moves to code you control."]],
    steps: [["Inventory the account", "List pages, forms, calendars, pipelines, automations and connected tools."], ["Agree the data contract", "Define fields, consent, source information and expected CRM events."], ["Build and test", "Run test submissions through the approved frontend and GHL configuration."], ["Switch and monitor", "Validate live forms, domains and automation triggers after launch."]],
    priceTitle: "GoHighLevel website design and integration cost.", price: "From $1,500", priceCopy: "A focused site can start at Starter. More pages, funnels and CRM workflows increase the work. Your written quote states what remains in GHL, what we build and what both systems cost to run.",
    scopeNotes: [["Frontend", "Pages and editing responsibilities."], ["CRM", "Fields, forms and automations to verify."], ["Costs", "GHL charges and new hosting stated separately."]],
    costs: {
      title: "What GoHighLevel costs to run.",
      lines: [["HighLevel subscription", "Your HighLevel billing"], ["Sub-account add-ons", "Per sub-account charges on the same bill"], ["Usage", "Calls, texts and email billed on usage"], ["Website help", "Your own records"]],
      note: "Keeping the CRM and replacing only the website changes the last line, not the subscription.",
    },
  },
  {
    process: { label: "04 / Your monthly cycle", title: "Research, improve and review.", intro: "Each month has an agreed scope, one implemented improvement and a report you can review. A new website or editor is separate work." },
    slug: "ai-seo", name: "AI SEO & GEO", category: "AI SEO, AEO & GEO services",
    relatedService: { name: "CMS website development", href: "/services/cms-development" },
    title: "AI SEO services.", accent: "AEO & GEO.",
    lead: "AI SEO services for businesses that want their website found and understood in AI search. Our answer engine optimization (AEO) and generative engine optimization (GEO) work covers buyer questions, agreed page improvements and visibility reporting. Monthly work starts at $500.",
    image: pandaPatchesAiProof.src, imageAlt: pandaPatchesAiProof.alt, imageCaption: "Panda Patches / Founder-affiliated / Search Console screenshot",
    problemTitle: "Is your business missing from AI answers?", problemIntro: "We review the questions buyers ask, whether search systems can access the answers and which useful business facts are missing. One agreed improvement is implemented and verified within the monthly starting scope.",
    checks: [["Buyer questions", "Choose ten questions across one product or service area and up to five priority pages."], ["Page access", "Check whether the answer is in readable HTML, with descriptive headings and appropriate structured data."], ["An improvement shipped", "Agree one page improvement or small technical task, implement it and verify it each month."], ["Measurement limits", "Report changes, visibility signals and enquiries separately; an impression is not a visit or a sale."]],
    detailsTitle: "What our AI SEO services include.", detailsIntro: "The $500 monthly starting scope covers focused research, one agreed improvement and reporting. AEO and GEO work can support the website you already run.",
    details: [["Research and baseline", "Choose ten buyer questions across one product or service area, up to five priority pages and two agreed AI-search surfaces. Review what the pages actually say and what search systems can access."], ["One finished change", "Implement one agreed page improvement or small technical task and verify it, with a revision round. The scope states who can publish the change and what requires additional access."], ["Reporting with limits", "Report the change, observed visibility and the next priority. Search impressions are not visits; captured referrals and customer-declared discovery are different kinds of evidence and should be recorded separately."], ["Work beyond the starting scope", "New articles, broad content production, a source-tracking dashboard, extra markets, large integrations or a bigger implementation backlog need their own quote. The monthly service is optional and does not control whether your site keeps working."]],
    workTitle: "AI discovery and order-source evidence.", workIntro: "Panda Patches records captured referral information and customer-declared discovery alongside orders. The records show our tracking method, with the source and limits stated.",
    workName: "Panda Patches", workImage: "/work/panda-patches.png", workAlt: "Panda Patches online store", workHref: "/work/panda-patches",
    workDescription: "A connected store where customer discovery and referral fields can be reviewed alongside orders.", workCaveat: "Panda Patches shares an owner with PandaCodeGen. This is not an independent client result, and it does not prove an AI citation caused a sale.",
    pathTitle: "AEO & GEO services.", paths: [["AEO", "Answer engine optimization services.", "Research the questions buyers ask, then make the answers useful, factual and easy to find on the agreed pages. We review headings, internal links, supporting evidence and appropriate structured data."], ["GEO", "Generative engine optimization services.", "Review how your business is represented on two agreed AI-search surfaces, identify missing facts or page-access problems, and implement one scoped improvement. Google AI Overviews, AI Mode, ChatGPT or Perplexity can be considered when we agree those surfaces; the starting plan does not monitor every platform."]],
    steps: [["Agree the questions", "Select the buyer questions, pages and two AI-search surfaces to review."], ["Set the baseline", "Record visibility and content gaps before changes are made."], ["Ship one improvement", "Implement an agreed page or small technical change with a revision round."], ["Report and decide", "Show what changed, what measurement can support and the next priority."]],
    priceTitle: "AI SEO & GEO pricing.", price: "From $500 / month", priceCopy: "The starting engagement covers focused research, monitoring, one implemented improvement, a report and a review. A larger backlog, content production or source-tracking dashboard is quoted separately. The retainer is optional.",
    scopeNotes: [["Included", "Ten questions, up to five pages and two agreed surfaces."], ["Delivered", "One implemented improvement plus report and review."], ["Limits", "No citation, ranking, traffic or sales guarantee."]],
  },
];

/** One service's preview data; throws rather than render an empty page. */
export function servicePreview(slug: string): ServicePreview {
  const service = servicePreviews.find((item) => item.slug === slug);
  if (!service) throw new Error(`No service preview for "${slug}". Add it to service-data.ts.`);
  return service;
}
