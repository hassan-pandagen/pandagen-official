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
  workTitle: string;
  workIntro: string;
  workName: string;
  workImage: string;
  workAlt: string;
  workHref: string;
  workDescription: string;
  workCaveat: string;
  reviewId?: string;
  pathTitle: string;
  paths: [string, string, string][];
  steps: [string, string][];
  priceTitle: string;
  price: string;
  priceCopy: string;
  scopeNotes: [string, string][];
};

export const servicePreviews: ServicePreview[] = [
  {
    slug: "custom-engineering", name: "Custom software", category: "Software & internal tools",
    title: "Make the work", accent: "flow your way.",
    lead: "A dashboard, portal or internal tool should fit the people using it. We map the job first, then build the smallest useful system with a clear handover.",
    image: "/work/enterprise-ops.png", imageAlt: "Panda Patches operations dashboard with private details blurred", imageCaption: "Real operations work / sensitive details obscured",
    problemTitle: "Where does the work get stuck?", problemIntro: "Start with the handoffs, not a feature wish list. The useful system is the one your team can trust on an ordinary Tuesday.",
    checks: [["Scattered information", "Which records are copied between spreadsheets, inboxes and tools, and who needs to see them?"], ["Permissions and decisions", "Who can view, change or approve each step? The answer shapes the data model before a screen is designed."], ["Running costs", "We list hosting, integrations, licences and support alongside the build price."], ["A smaller first release", "We separate what must work on day one from features that need actual usage to justify them."]],
    workTitle: "One connected operations system.", workIntro: "This is an example of product and operations engineering, with its business relationship stated plainly.",
    workName: "Panda Patches operations", workImage: "/work/enterprise-ops.png", workAlt: "Panda Patches internal operations dashboard", workHref: "/work/enterprise-ops",
    workDescription: "A separate operations system brings orders, production, payments and reporting into one workflow connected to the storefront.", workCaveat: "Founder-affiliated work: Panda Patches shares an owner with PandaCodeGen. This is delivery evidence, not an independent client endorsement.",
    pathTitle: "Build what the job needs.", paths: [["Improve", "Keep a tool that works", "Fix a broken handoff or integration before replacing an entire system."], ["Build", "Create the missing workflow", "Scope a dashboard, portal or app around the people, records and decisions involved."]],
    steps: [["Map the workflow", "Walk through a real task, the people involved and the information each one needs."], ["Agree a first release", "Write the screens, data, integrations, permissions and acceptance checks into the proposal."], ["Build in reviewable parts", "Show working parts against real examples throughout the build."], ["Test and hand over", "Check roles, edge cases and connected systems, then transfer code, accounts and documentation as agreed."]],
    priceTitle: "Scope before software price.", price: "From $1,500", priceCopy: "Focused work can start at the published Starter price. A portal, SaaS product or complex integration is priced after requirements and dependencies are reviewed; the accepted proposal sets the final amount and dates.",
    scopeNotes: [["Requirements", "Named users, workflows, data and integrations."], ["Acceptance", "The working behaviours and test cases agreed before build."], ["Control", "Code, accounts and documentation transferred on handover."]],
  },
  {
    slug: "ecommerce", name: "E-commerce", category: "Online stores",
    title: "A store built", accent: "around the order.",
    lead: "Start a store or improve one you already run. Product discovery, checkout and the work after purchase should form one clear journey.",
    image: "/work/mycustompatches.png", imageAlt: "MyCustomPatches completed online storefront", imageCaption: "Independent client / completed storefront",
    problemTitle: "Follow the customer and the order.", problemIntro: "The right work may be a product page, a checkout fix or a new storefront. We look at the full path before proposing a rebuild.",
    checks: [["Find a product", "Can a buyer find the right category, variant and answer before contacting your team?"], ["Place an order", "Review the real cart and checkout path, payment provider and failure states."], ["Fulfil it", "Check what staff need after payment: specifications, status, shipping and customer messages."], ["Keep it current", "Decide which product details your team changes and how those changes reach the live store."]],
    workTitle: "A storefront with real buyers.", workIntro: "MyCustomPatches is an independent client project. Its documented migration and client review are available to inspect.",
    workName: "MyCustomPatches", workImage: "/work/mycustompatches-product-template.png", workAlt: "MyCustomPatches product page template", workHref: "/work/mycustompatches",
    workDescription: "A custom storefront and product templates built during a migration from WordPress. The project record covers the move and launch checks.", workCaveat: "This project illustrates the storefront and migration work. Another store needs its own catalogue, backend and checkout assessment.", reviewId: "mycustompatches",
    pathTitle: "Choose the useful change.", paths: [["Improve", "Fix the purchase path", "Measure pages and checkout steps before changing the platform."], ["Build", "Create a custom storefront", "Keep the commerce backend where it fits, and build the customer experience around your catalogue."]],
    steps: [["Map products and buyers", "Review catalogue structure, variants, questions and purchasing routes."], ["Choose the system of record", "Confirm where products, orders, payments and customer data will live."], ["Build and connect", "Develop the agreed pages and integrations using representative real products."], ["Test the whole order", "Check variant selection, payment, confirmation, operations and handover before launch."]],
    priceTitle: "Small stores have a starting point.", price: "From $1,500", priceCopy: "A focused store can start at Starter. Large catalogues, subscriptions and custom commerce logic change the scope. Your written quote names the backend, third-party charges and actual price.",
    scopeNotes: [["Products", "Catalogue, variants and content responsibilities."], ["Checkout", "Payment and order paths to test."], ["Operations", "Handover, integrations and ongoing provider costs."]],
  },
  {
    slug: "woocommerce", name: "WooCommerce", category: "Commerce migration",
    title: "Keep the orders.", accent: "Rethink the stack.",
    lead: "If your WooCommerce store has grown hard to run, we inspect checkout, extensions and operating costs before deciding what should change.",
    image: "/work/mycustompatches.png", imageAlt: "MyCustomPatches store following its WordPress migration", imageCaption: "Independent client / WordPress and WooCommerce migration",
    problemTitle: "What is actually slowing the sale?", problemIntro: "Cart and checkout need a live session, so a cached homepage cannot settle the question. We review your own purchase path and the systems attached to it.",
    checks: [["Checkout steps", "Test cart, payment, confirmation and error handling with your actual configuration."], ["Extension footprint", "Find what each extension does, what it costs and whether its role can be simplified."], ["Product data", "Review variants, images, stock, tax and shipping rules before choosing a replacement."], ["Old addresses", "Inventory product and category URLs, then plan relevant redirects where paths change."]],
    workTitle: "A completed client migration.", workIntro: "This client moved from WordPress and WooCommerce to a custom build. The case record distinguishes verified delivery facts from outcomes still under review.",
    workName: "MyCustomPatches", workImage: "/work/mycustompatches-product-template.png", workAlt: "Completed MyCustomPatches product template", workHref: "/work/mycustompatches",
    workDescription: "Product templates, content and important URLs moved while the previous site stayed live until cutover.", workCaveat: "The recorded launch describes this project. It does not promise the same timeline, uptime or search result for another store.", reviewId: "mycustompatches",
    pathTitle: "Repair or rebuild the store.", paths: [["Repair", "Keep WooCommerce", "A checkout configuration, theme or extension fix may solve the measured issue."], ["Rebuild", "Change the storefront", "Scope a replacement when the workflow and extension stack are the constraint."]],
    steps: [["Audit the store", "Inventory products, extensions, checkout rules, integrations and URLs."], ["Agree the architecture", "Decide what backend remains and how orders and content will move."], ["Reconcile real data", "Test representative products, variants, accounts, payment and order flows."], ["Cut over carefully", "Check redirects and transactions, assign monitoring and a rollback path."]],
    priceTitle: "A written store scope.", price: "From $1,500", priceCopy: "A small catalogue can start at Starter. Larger product data, subscriptions and custom checkout logic may call for Growth or Scale. The accepted proposal controls the price and schedule.",
    scopeNotes: [["Data", "Products, customers and orders included in the move."], ["Payments", "Provider access, checkout tests and responsibility."], ["Search", "URL map and validation, with no ranking promise."]],
  },
  {
    slug: "wix", name: "Wix migration", category: "Website migration",
    title: "Outgrown Wix?", accent: "Know your options.",
    lead: "Wix may still suit your team. When editing, design or integrations have become a constraint, we compare a focused fix with a scoped custom rebuild.",
    image: "/work/ladies-4-jesus.png", imageAlt: "Ladies 4 Jesus publishing website built by PandaCodeGen", imageCaption: "Relevant publishing work / originally a WordPress site",
    problemTitle: "What needs more control?", problemIntro: "A platform change should solve a documented need. We review the current site, the plan you pay for and the tasks your team cannot do comfortably.",
    checks: [["Pages and content", "Which pages, articles, images and forms must carry across?"], ["Editing", "What should your team be able to change without a developer?"], ["Connected tools", "List bookings, payments, CRM, email and any Wix apps in use."], ["Search addresses", "Record existing URLs and metadata, then plan relevant destinations if they change."]],
    workTitle: "What editor freedom can look like.", workIntro: "This is relevant content and workflow work. We have not presented it as a Wix migration.",
    workName: "Ladies 4 Jesus", workImage: "/work/ladies-4-jesus-editor-devotional.png", workAlt: "Content editor for the Ladies 4 Jesus site", workHref: "/work/ladies-4-jesus",
    workDescription: "A publishing and moderation workflow that lets the owner manage content without a developer.", workCaveat: "The client originally used WordPress. Wix export limits and connected apps need a separate assessment for your site.", reviewId: "ladies-4-jesus",
    pathTitle: "Choose the right amount of change.", paths: [["Improve", "Stay on Wix", "Fix a limited issue in the current site when it still supports the business."], ["Move", "Build for your workflow", "Replace the site when the content model, design or integrations justify it."]],
    steps: [["Inventory the site", "List pages, content, URLs, forms and integrations."], ["Design the new editor", "Agree the fields your team will own and the templates they will publish."], ["Build and compare", "Review content and journeys on staging against the source site."], ["Launch and check", "Test redirects, forms, analytics and live pages after cutover."]],
    priceTitle: "Start with the content count.", price: "From $1,500", priceCopy: "A focused site starts at Starter; fuller content migration and redirect mapping often call for Growth. Access and export constraints affect the final written quote.",
    scopeNotes: [["Content", "Pages and records included in the move."], ["Editor", "Fields and publishing tasks your team controls."], ["Cutover", "URL map, form checks and launch responsibilities."]],
  },
  {
    slug: "squarespace", name: "Squarespace migration", category: "Website migration",
    title: "Ready for more", accent: "than a template?",
    lead: "If your Squarespace site no longer fits the way you sell or publish, we map what should stay, what needs rebuilding and what it will cost to run.",
    image: "/work/emblematic-studio.png", imageAlt: "Emblematic Studio custom marketing website", imageCaption: "Independent client / custom brand website",
    problemTitle: "Name the limit before moving.", problemIntro: "A custom site makes sense when it removes a real constraint. We review your content, commerce, editing and connected services first.",
    checks: [["Design and content", "Identify the layouts and editorial changes your current setup cannot support cleanly."], ["Shop and forms", "Map product, payment, enquiry and booking paths that must continue working."], ["Costs to run", "Compare the current plan and add-ons with hosting, CMS and support for a proposed rebuild."], ["Migration risk", "Record URLs, metadata, media and any content that needs a manual move."]],
    workTitle: "A brand carried through the build.", workIntro: "Emblematic Studio shows our custom design and implementation work. Its review belongs to this project.",
    workName: "Emblematic Studio", workImage: "/work/emblematic-studio.png", workAlt: "Emblematic Studio completed website", workHref: "/work/emblematic-studio",
    workDescription: "A custom site shaped around the brand, its work and its enquiry journey.", workCaveat: "This is an independent client website, not a Squarespace migration case study. Your export and content requirements need their own review.", reviewId: "emblematic-studio",
    pathTitle: "Keep the fit, or create one.", paths: [["Improve", "Stay on Squarespace", "Use the current platform when a design or content adjustment meets the need."], ["Move", "Build a tailored site", "Agree the new editing model, content and connected tools before rebuilding."]],
    steps: [["Review the current site", "List pages, collections, forms, products and connected services."], ["Choose the destination", "Define content fields, layouts and which accounts your team will control."], ["Migrate and review", "Compare agreed pages and journeys on staging with representative content."], ["Switch and validate", "Check old addresses, enquiries and live behaviour after launch."]],
    priceTitle: "Know the full cost of moving.", price: "From $1,500", priceCopy: "A smaller site can start at Starter. Content volume, commerce and integrations change the scope. We include operating costs and responsibilities in the proposal.",
    scopeNotes: [["Pages", "Content and assets to carry across."], ["Systems", "Forms, payments and third-party services."], ["Handover", "Editing, accounts and ongoing costs."]],
  },
  {
    slug: "webflow", name: "Webflow services", category: "Optimization & migration",
    title: "Make Webflow", accent: "work for you.",
    lead: "Slow mobile pages, an awkward CMS or missed CRM handoffs? We inspect the cause, improve what can stay and rebuild only where the work calls for it.",
    image: "/work/panda-patches-editor.png", imageAlt: "Content editor used in the Panda Patches build", imageCaption: "Relevant editor work / not a Webflow migration",
    problemTitle: "Review the site you actually run.", problemIntro: "A speed score or a new plan alone is not a reason to migrate. We look at publishing work, connected services and your actual bill.",
    checks: [["Mobile pages", "Inspect images, fonts, scripts and page-level Webflow settings on priority routes."], ["CMS work", "Ask an editor to complete a real publishing task and note where it breaks down."], ["Forms and CRM", "Follow an enquiry from submission into the system that should receive it."], ["Operating bill", "Read the current plan, seats, add-ons and asset usage before comparing alternatives."]],
    workTitle: "Relevant CMS and integration work.", workIntro: "These projects show how we build editors and connected systems; they did not begin on Webflow.",
    workName: "Panda Patches", workImage: "/work/panda-patches-editor.png", workAlt: "Panda Patches custom content editor", workHref: "/work/panda-patches",
    workDescription: "The team edits storefront content and manages a connected operations workflow in a custom build.", workCaveat: "Founder-affiliated work. Panda Patches originally used WordPress and WooCommerce, not Webflow.",
    pathTitle: "Improve or migrate.", paths: [["Improve", "Keep Webflow", "Fix identified issues in pages, scripts or publishing settings."], ["Migrate", "Move beyond Webflow", "Build a different content and frontend system when the current one limits the work."]],
    steps: [["Review access and structure", "Inventory pages, components, interactions, CMS collections, forms and integrations."], ["Price both options", "Compare a scoped Webflow improvement with the complete cost of a move."], ["Build and reconcile", "Validate content, fields and connected services against agreed samples."], ["Launch with checks", "Crawl the preview, test redirects and forms, then monitor cutover."]],
    priceTitle: "Two routes, two scopes.", price: "From $1,500", priceCopy: "Custom rebuilds start at the published Starter price. Improvements within Webflow are quoted to their own scope. The written proposal states the chosen route, price and dates.",
    scopeNotes: [["Access", "CMS, billing and integration permissions agreed first."], ["Comparison", "The repair route and the rebuild route costed clearly."], ["Search", "URL and metadata checks without ranking guarantees."]],
  },
  {
    slug: "gohighlevel", name: "GoHighLevel", category: "Website & CRM integration",
    title: "Keep your CRM.", accent: "Improve the site.",
    lead: "Your automations may belong in GoHighLevel even when your public site needs a different frontend. We review the data flow before drawing that line.",
    image: "/work/northdeck-group.png", imageAlt: "Northdeck Group website built by PandaCodeGen", imageCaption: "Related custom frontend / integration needs assessed per project",
    problemTitle: "Follow the enquiry end to end.", problemIntro: "The public page and the CRM are two parts of one customer journey. We check the connection before proposing a new frontend.",
    checks: [["Page experience", "Measure priority pages on a defined device and connection, and review content and forms."], ["CRM handoff", "Record where contacts, fields, tags and attribution data must arrive."], ["Automations", "List the sequences that rely on current forms, calendars, webhooks or domains."], ["Account economics", "Review your active plan, add-ons, messaging and usage alongside proposed hosting."]],
    workTitle: "Custom frontend, visible work.", workIntro: "Northdeck Group shows the kind of tailored public site we build. We do not present it as a GoHighLevel migration.",
    workName: "Northdeck Group", workImage: "/work/northdeck-group.png", workAlt: "Northdeck Group custom website", workHref: "/work/northdeck-group",
    workDescription: "A code-driven marketing site with a clear service journey and contact path.", workCaveat: "This project does not establish a GoHighLevel integration outcome. Your CRM data flow needs its own access, test fixtures and written acceptance criteria.",
    pathTitle: "Keep the parts that earn their place.", paths: [["Improve", "Tune the current frontend", "Repair measured page or form issues within the existing setup."], ["Separate", "Build a custom frontend", "Keep agreed GoHighLevel CRM functions while the public site moves to code you control."]],
    steps: [["Inventory the account", "List pages, forms, calendars, pipelines, automations and connected tools."], ["Agree the data contract", "Define fields, consent, source information and expected CRM events."], ["Build and test", "Run test submissions through the approved frontend and GHL configuration."], ["Switch and monitor", "Validate live forms, domains and automation triggers after launch."]],
    priceTitle: "Price the site and connection.", price: "From $1,500", priceCopy: "A focused site can start at Starter. More pages, funnels and CRM workflows increase the work. Your written quote states what remains in GHL, what we build and what both systems cost to run.",
    scopeNotes: [["Frontend", "Pages and editing responsibilities."], ["CRM", "Fields, forms and automations to verify."], ["Costs", "GHL charges and new hosting stated separately."]],
  },
  {
    slug: "ai-seo", name: "AI SEO", category: "Monthly search improvements",
    title: "Make your answers", accent: "easy to find.",
    lead: "We research what buyers ask, improve the pages that answer them and check what search and AI systems can access. Monthly work starts at $500.",
    image: "/work/panda-patches.png", imageAlt: "Panda Patches storefront used for first-party source tracking", imageCaption: "First-party tracking example / founder-affiliated business",
    problemTitle: "Useful answers come first.", problemIntro: "A page can render perfectly and still omit the price basis, delivery constraint or detail a buyer needs. We work from real questions and evidence.",
    checks: [["Buyer questions", "Choose ten questions across one product or service area and up to five priority pages."], ["Page access", "Check whether the answer is in readable HTML, with descriptive headings and appropriate structured data."], ["An improvement shipped", "Agree one page improvement or small technical task, implement it and verify it each month."], ["Measurement limits", "Report changes, visibility signals and enquiries separately; an impression is not a visit or a sale."]],
    workTitle: "What we can show, with its limits.", workIntro: "Panda Patches has order-source tracking that combines captured referral information with customer-declared discovery. It is first-party evidence.",
    workName: "Panda Patches", workImage: "/work/panda-patches.png", workAlt: "Panda Patches online store", workHref: "/work/panda-patches",
    workDescription: "A connected store where customer discovery and referral fields can be reviewed alongside orders.", workCaveat: "Panda Patches shares an owner with PandaCodeGen. This is not an independent client result, and it does not prove an AI citation caused a sale.",
    pathTitle: "One focused month at a time.", paths: [["Foundation", "Fix what is missing", "Make key facts and answers visible on your priority pages."], ["Continuing", "Research, ship, measure", "Use a monthly cycle when there are more questions and improvements worth pursuing."]],
    steps: [["Agree the questions", "Select the buyer questions, pages and two AI-search surfaces to review."], ["Set the baseline", "Record visibility and content gaps before changes are made."], ["Ship one improvement", "Implement an agreed page or small technical change with a revision round."], ["Report and decide", "Show what changed, what measurement can support and the next priority."]],
    priceTitle: "A defined monthly starting scope.", price: "From $500 / month", priceCopy: "The starting engagement covers focused research, monitoring, one implemented improvement, a report and a review. A larger backlog, content production or source-tracking dashboard is quoted separately. The retainer is optional.",
    scopeNotes: [["Included", "Ten questions, up to five pages and two agreed surfaces."], ["Delivered", "One implemented improvement plus report and review."], ["Limits", "No citation, ranking, traffic or sales guarantee."]],
  },
];

/** One service's preview data; throws rather than render an empty page. */
export function servicePreview(slug: string): ServicePreview {
  const service = servicePreviews.find((item) => item.slug === slug);
  if (!service) throw new Error(`No service preview for "${slug}". Add it to service-data.ts.`);
  return service;
}
