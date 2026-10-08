import { stackServices } from "./stack-services";
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
  steps: [string, string][];
  priceTitle: string;
  price: string;
  priceCopy: string;
  scopeNotes: [string, string][];
  relatedService?: { name: string; href: string };
  costs?: RunningCosts;
};

export const servicePreviews: ServicePreview[] = [
  ...stackServices,
  {
    slug: "wordpress", name: "WordPress websites", category: "WordPress website design & development",
    title: "A WordPress site.", accent: "Made for your business.",
    lead: "Need a straightforward business website, a blog or a refresh of what you have? We design and build on WordPress when it fits. Work directly with Hassan and Imran, agree the pages and price, and learn how to update the site yourself.",
    image: "/work/panda-patches-calculator-configure.png", imageAlt: "Panda Patches custom quote calculator after its WordPress migration", imageCaption: "WordPress migration / custom quoting / founder-affiliated business",
    problemTitle: "The pages you need. An editor you can use.", problemIntro: "Start with what you want people to understand, buy or ask about. We help you decide what belongs on the site and which parts your team needs to change.",
    checks: [
      ["Pages and design", "Agree the home, service, about and contact pages you need, plus a blog or other content where it has a purpose. We review layouts on phone and desktop."],
      ["Content editing", "Choose a WordPress editing setup for the text, images and pages your team will maintain. We demonstrate those tasks before handover."],
      ["Forms and connections", "Decide where enquiries should arrive and which bookings, email or other tools need connecting. Test the agreed path from submission to receipt."],
      ["Costs and upkeep", "List hosting, theme or plugin licences, backups, updates and who handles each. You can see the running costs alongside the build quote."],
    ],
    detailsTitle: "What the WordPress quote covers.", detailsIntro: "A small business site and a busy publishing site need different amounts of work. We show you the difference before either is priced.",
    details: [["Pages and content", "List the page types, who provides the words and images, and whether blog posts or existing content need moving. New copy and photography are quoted if required."], ["Editing in practice", "Agree which text, images and repeating items your team can change. A new layout or feature is separate development work; the live demonstration uses your real editing tasks."], ["Running the site", "Name the hosting account, domain, paid licences, backups, security updates and support responsibilities. Your proposal states what is included and what is billed by other providers."]],
    workTitle: "From WordPress. Built around the business.", workIntro: "Panda Patches and Ladies 4 Jesus both started on WordPress. These projects show our migration work; your proposal establishes whether to stay on WordPress or move to a custom build.",
    workName: "Panda Patches", workImage: "/work/panda-patches.png", workAlt: "Panda Patches storefront migrated from WordPress", workHref: "/work/panda-patches",
    workDescription: "A WordPress storefront moved to a custom build, with the product and enquiry journey designed around the business.", workCaveat: "Founder-affiliated business. This is a migration from WordPress, not a website currently running on WordPress.",
    secondWork: { name: "Ladies 4 Jesus", image: "/work/ladies-4-jesus.png", alt: "Ladies 4 Jesus publishing website migrated from WordPress", href: "/work/ladies-4-jesus", description: "A WordPress publishing site moved to a custom build, with a content editor and moderation workflow for the owner.", caveat: "Independent client. This is a migration from WordPress, not a website currently running on WordPress." },
    pathTitle: "Choose the build that fits.",
    paths: [["WordPress", "A familiar way to publish", "Choose WordPress when its editing, themes and plugins fit the site you need and the upkeep your team can manage."], ["Custom build", "More control where you need it", "If your design, store or business workflow needs a different approach, we explain the custom option and its costs. You choose before work starts."]],
    steps: [["Talk to the founders", "Tell Hassan or Imran about the business, the pages you need, your budget and what you would like to edit. You do not need a technical brief."], ["Agree the site and price", "Confirm design, content responsibilities, editing tools, forms, licences and running costs in a written quote."], ["Review the working site", "See the pages on a private preview, try the editing tasks and give feedback before launch."], ["Launch with a walkthrough", "Check the agreed pages and forms, then hand over access, written instructions and a live demo. Ask the founders to explain anything you need to use."]],
    priceTitle: "Know the build and running costs.", price: "Quoted to scope", priceCopy: "Your WordPress quote depends on the pages, design, content and connections involved. It lists the build price, any theme or plugin licences, hosting and who handles updates. Ongoing support is agreed separately.",
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
    title: "Custom software.", accent: "Built around the work.",
    lead: "A dashboard, portal or internal tool should fit the people using it. We map the job first, then build the smallest useful system with a clear handover.",
    image: "/work/a-step-above-medical-portal-dashboard.png", imageAlt: "A Step Above Medical portal dashboard preview", imageCaption: "Portal preview / A Step Above Medical",
    problemTitle: "Build around the work people do.", problemIntro: "Start with real tasks, handoffs and decisions. The useful system is one your team can trust on an ordinary Tuesday.",
    checks: [["Scattered information", "Which records are copied between spreadsheets, inboxes and tools, and who needs to see them?"], ["Permissions and decisions", "Who can view, change or approve each step? The answer shapes the data model before a screen is designed."], ["Running costs", "We list hosting, integrations, licences and support alongside the build price."], ["A smaller first release", "We separate what must work on day one from features that need actual usage to justify them."]],
    detailsTitle: "What kind of system are we scoping?", detailsIntro: "Custom software development can mean a focused internal tool or a much larger product. The first proposal describes the job, users and boundaries.",
    details: [["Staff tools and portals", "For an operations dashboard or client portal, map the records, approvals and notifications people use today. Importing old data, connecting an existing system and changing staff permissions are separate decisions."], ["SaaS and customer accounts", "A subscription product adds login, account separation, billing and support workflows. We review who can access each customer's data and what happens when a payment or connection fails."], ["AI-assisted answers", "If an assistant would help, identify the approved guides and policies it may use, the sources it can show, and when a person takes over. Private information needs its own access rules."], ["Rights and handover", "The written terms identify repository access, third-party licences, intellectual-property transfer, documentation and who supports the release after launch."]],
    workTitle: "One connected operations system.", workIntro: "This is an example of product and operations engineering, with its business relationship stated plainly.",
    workName: "Panda Patches operations", workImage: "/work/enterprise-ops.png", workAlt: "Panda Patches internal operations dashboard", workHref: "/work/enterprise-ops",
    workDescription: "A separate operations system brings orders, production, payments and reporting into one workflow connected to the storefront.", workCaveat: "Founder-affiliated work: Panda Patches shares an owner with PandaCodeGen. This is delivery evidence, not an independent client endorsement.",
    pathTitle: "Build what the job needs.", paths: [["Improve", "Keep a tool that works", "Fix a broken handoff or integration before replacing an entire system."], ["Build", "Create the missing workflow", "Scope a dashboard, portal or app around the people, records and decisions involved."]],
    steps: [["Map the workflow", "Walk through a real task, the people involved and the information each one needs."], ["Agree a first release", "Write the screens, data, integrations, permissions and acceptance checks into the proposal."], ["Build in reviewable parts", "Show working parts against real examples throughout the build."], ["Test and hand over", "Check roles, edge cases and connected systems, then transfer code, accounts and documentation as agreed."]],
    priceTitle: "Scope before software price.", price: "From $1,500", priceCopy: "Focused work can start at the published Starter price. A portal, SaaS product or complex integration is priced after requirements and dependencies are reviewed; the accepted proposal sets the final amount and dates.",
    scopeNotes: [["Requirements", "Named users, workflows, data and integrations."], ["Acceptance", "The working behaviours and test cases agreed before build."], ["Control", "Code, accounts and documentation transferred on handover."]],
    costs: {
      title: "What software costs to run.",
      lines: [["Subscriptions it would replace", "Your SaaS invoices and card statement"], ["Hosting and database", `For example Vercel Pro from ${spec("vercel-pro-price").value}, plus your database provider`], ["Maintenance", "Dependency updates and monitoring, agreed in the proposal"], ["Manual work", "The hours your team spends on spreadsheets and handoffs"]],
      note: "Compare the build and its running cost against the subscriptions and hours it replaces.",
    },
  },
  {
    slug: "ecommerce", name: "E-commerce", category: "Ecommerce website development",
    title: "Ecommerce stores.", accent: "Built around the order.",
    lead: "Start a store or improve one you already run. Product discovery, checkout and the work after purchase should form one clear journey.",
    // 8 Oct 2026, owner: the hero shows Saforne. The Sleek Jackets image it replaces was captioned
    // "Independent client", but case-study-facts.json records Sleek Jackets as "Demo, not client work".
    // Saforne is an independent client whose store is a preview build, not yet selling (WorkIndex.tsx).
    image: "/work/saforne.png", imageAlt: "Saforne storefront home page, showing the hooded jacket hero.", imageCaption: "Independent client / Saforne storefront, preview build",
    problemTitle: "Follow the customer and the order.", problemIntro: "The right work may be a product page, a checkout fix or a new storefront. We look at the full path before proposing a rebuild.",
    checks: [["Find a product", "Can a buyer find the right category, variant and answer before contacting your team?"], ["Place an order", "Review the real cart and checkout path, payment provider and failure states."], ["Fulfil it", "Check what staff need after payment: specifications, status, shipping and customer messages."], ["Keep it current", "Decide which product details your team changes and how those changes reach the live store."]],
    detailsTitle: "What stays behind the storefront?", detailsIntro: "Ecommerce website development includes what buyers see and the system your team uses after they click buy.",
    details: [["Shopify or WooCommerce backend", "The current platform can still hold products, stock, orders and payments when it fits. A separate custom storefront changes the buyer-facing pages; it does not automatically replace the commerce backend."], ["Cart and checkout", "Agree product options, discounts, shipping, taxes, payment methods and order confirmation. If Shopify remains the backend, its hosted checkout remains the payment step; custom cart work belongs before it."], ["An existing catalogue", "If a store is moving, inventory products, variants, images, customer accounts and order history. The proposal specifies which records transfer, which stay and how a sample is reconciled before launch."], ["A measured improvement", "For an existing store, compare the current theme, apps and purchase path with a focused repair. Performance is tested on agreed pages and devices against your own baseline."]],
    workTitle: "A storefront with real buyers.", workIntro: "MyCustomPatches is an independent client project. Its documented migration and client review are available to inspect.",
    workName: "MyCustomPatches", workImage: "/work/mycustompatches-product-template.png", workAlt: "MyCustomPatches product page template", workHref: "/work/mycustompatches",
    workDescription: "A custom storefront and product templates built during a migration from WordPress. The project record covers the move and launch checks.", workCaveat: "This project illustrates the storefront and migration work. Another store needs its own catalogue, backend and checkout assessment.", reviewId: "mycustompatches",
    pathTitle: "Choose the useful change.", paths: [["Improve", "Fix the purchase path", "Measure pages and checkout steps before changing the platform."], ["Build", "Create a custom storefront", "Keep the commerce backend where it fits, and build the customer experience around your catalogue."]],
    steps: [["Map products and buyers", "Review catalogue structure, variants, questions and purchasing routes."], ["Choose the system of record", "Confirm where products, orders, payments and customer data will live."], ["Build and connect", "Develop the agreed pages and integrations using representative real products."], ["Test the whole order", "Check variant selection, payment, confirmation, operations and handover before launch."]],
    priceTitle: "Small stores have a starting point.", price: "From $1,500", priceCopy: "A focused store can start at Starter. Large catalogues, subscriptions and custom commerce logic change the scope. Your written quote names the backend, third-party charges and actual price.",
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
    title: "Your WooCommerce store.", accent: "Built for buyers.",
    lead: "Starting a store, improving one, or considering a different storefront? We review products, checkout and the work after each order, then help you choose what to keep and what to change.",
    image: "/work/mycustompatches-categories.png", imageAlt: "MyCustomPatches product categories after its WordPress migration", imageCaption: "Independent client / WordPress and WooCommerce migration",
    problemTitle: "Follow the full purchase journey.", problemIntro: "Cart and checkout need a live session, so a cached homepage cannot settle the question. We review your own purchase path and the systems attached to it.",
    checks: [["Checkout steps", "Test cart, payment, confirmation and error handling with your actual configuration."], ["Extension footprint", "Find what each extension does, what it costs and whether its role can be simplified."], ["Product data", "Inventory products, variants, images, stock, tax and shipping rules. List customer accounts, order history and subscriptions separately so the quote names exactly which records and behaviours will move."], ["Old addresses", "Inventory product and category URLs, then plan relevant redirects where paths change."]],
    detailsTitle: "A store move is more than a new theme.", detailsIntro: "A WooCommerce migration needs an answer for data, payments and the work your team does after an order arrives.",
    details: [["Keep or change the backend", "WooCommerce can continue to manage products and orders behind a different storefront. If a replacement backend is needed, the quote names the data and integrations to move and the new admin tasks."], ["Subscriptions and saved cards", "Recurring billing, customer payment methods and booking or wholesale rules depend on the existing providers and account permissions. We verify what can be transferred, what must be recreated and whether a customer must act before committing to a cutover."], ["Reconcile the records", "Define the product, variant, category, review, customer and order-history records included in scope. Test an import on a safe copy and compare agreed samples with the source."], ["Launch the purchase path", "Check relevant redirects, mobile cart and checkout, payment outcomes, confirmation messages, tax and shipping cases. Record who watches the first live orders and how to respond to a failed step."]],
    workTitle: "A completed client migration.", workIntro: "This client moved from WordPress and WooCommerce to a custom build. The case record distinguishes verified delivery facts from outcomes still under review.",
    workName: "MyCustomPatches", workImage: "/work/mycustompatches-product-template.png", workAlt: "Completed MyCustomPatches product template", workHref: "/work/mycustompatches",
    workDescription: "Product templates, content and important URLs moved while the previous site stayed live until cutover.", workCaveat: "The recorded launch describes this project. It does not promise the same timeline, uptime or search result for another store.", reviewId: "mycustompatches",
    pathTitle: "Repair or rebuild the store.", paths: [["Repair", "Keep WooCommerce", "A checkout configuration, theme or extension fix may solve the measured issue."], ["Rebuild", "Change the storefront", "Scope a replacement when the workflow and extension stack are the constraint."]],
    steps: [["Audit the store", "Inventory products, extensions, checkout rules, integrations and URLs."], ["Agree the architecture", "Decide what backend remains and how orders and content will move."], ["Reconcile real data", "Test representative products, variants, accounts, payment and order flows."], ["Cut over carefully", "Check redirects and transactions, assign monitoring and a rollback path."]],
    priceTitle: "A written store scope.", price: "From $1,500", priceCopy: "A small catalogue can start at Starter. Larger product data, subscriptions and custom checkout logic may call for Growth or Scale. The accepted proposal controls the price and schedule.",
    scopeNotes: [["Data", "Products, customers and orders included in the move."], ["Payments", "Provider access, checkout tests and responsibility."], ["Search", "URL map and validation, with no ranking promise."]],
    costs: {
      title: "What a WooCommerce store costs to run.",
      lines: [["Hosting", "Your host's invoice"], ["Extension and theme licences", "Renewal emails"], ["Payment fees", "Your payment provider's statement"], ["Security, backups and updates", "Card statement or your developer"], ["Fixes and downtime", "Your own records"]],
      note: "That total is what a rebuild or a move has to beat, so it's the figure we quote against.",
    },
  },
  {
    slug: "wix", name: "Wix websites & migration", category: "Website builds, improvements & migration",
    title: "Wix websites.", accent: "Improve or migrate.",
    lead: "Build or improve your Wix website, or migrate to a custom site with a Sanity editor your team can use. We review content, forms, integrations and redirects before recommending a move.",
    image: "/work/panda-publisher.png", imageAlt: "Panda Publisher custom publishing website", imageCaption: "Related publishing work / not a Wix migration",
    problemTitle: "What should your website help you do?", problemIntro: "A platform change should serve a clear need. We review the current site, the plan you pay for and the tasks your team wants to handle more easily.",
    checks: [["Pages and content", "Which pages, articles, images and forms must carry across?"], ["Editing", "What should your team be able to change without a developer?"], ["Connected tools", "List Wix Bookings, Stores, Members Area, payments, CRM and email tools you use. For each, agree whether to keep the connection, replace it or rebuild the required behaviour."], ["Search addresses", "Record existing URLs and metadata, then plan relevant destinations if they change."]],
    detailsTitle: "What a Wix move includes.", detailsIntro: "A Wix migration starts with an inventory. The account's available exports and apps determine the manual work.",
    details: [["Content and design", "List pages, posts, media, CMS collections and the layouts that should stay. Review the export available from your account, then name any content or design that needs rebuilding by hand."], ["Bookings, stores and members", "A Wix app is a working service, not just a page. Record its data, payments, messages and access rules. Decide whether each workflow stays connected, moves to another provider or needs rebuilding."], ["Forms, domain and search", "Test where enquiries arrive, map changed URLs to appropriate destinations, and plan domain, analytics and Search Console checks. The old site remains available while the replacement is reviewed; the launch window and fallback are agreed in writing."], ["Your new editor", "Show your team how to update the business details, images, posts and repeating content included in scope. State which new layouts or functions would require development."]],
    workTitle: "What editor freedom can look like.", workIntro: "This is relevant content and workflow work. We have not presented it as a Wix migration.",
    workName: "Ladies 4 Jesus", workImage: "/work/ladies-4-jesus-editor-devotional.png", workAlt: "Content editor for the Ladies 4 Jesus site", workHref: "/work/ladies-4-jesus",
    workDescription: "A publishing and moderation workflow that lets the owner manage content without a developer.", workCaveat: "The client originally used WordPress. Wix export limits and connected apps need a separate assessment for your site.", reviewId: "ladies-4-jesus",
    pathTitle: "Choose the right amount of change.", paths: [["Improve", "Stay on Wix", "Fix a limited issue in the current site when it still supports the business."], ["Move", "Build for your workflow", "Replace the site when the content model, design or integrations justify it."]],
    steps: [["Inventory the site", "List pages, content, URLs, forms and integrations."], ["Design the new editor", "Agree the fields your team will own and the templates they will publish."], ["Build and compare", "Review content and journeys on staging against the source site."], ["Launch and check", "Test redirects, forms, analytics and live pages after cutover."]],
    priceTitle: "Start with the content count.", price: "From $1,500", priceCopy: "A focused site starts at Starter; fuller content migration and redirect mapping often call for Growth. Access and export constraints affect the final written quote.",
    scopeNotes: [["Content", "Pages and records included in the move."], ["Editor", "Fields and publishing tasks your team controls."], ["Cutover", "URL map, form checks and launch responsibilities."]],
    costs: {
      title: "What a Wix site costs to run.",
      lines: [["Wix plan", "Your Wix billing page"], ["Apps from the Wix App Market", "Each app's billing"], ["Domain and business email", "Renewal emails"], ["Help and changes", "Your own records or your designer's invoices"]],
      note: "That total is what any change has to beat, so it's the figure we quote against.",
    },
  },
  {
    slug: "squarespace", name: "Squarespace websites & migration", category: "Website builds, improvements & migration",
    title: "Your Squarespace site.", accent: "Built for more.",
    lead: "Build or improve your Squarespace website, or move to a custom site with a Sanity editor. We map content, commerce, scheduling and redirects, then compare the build and running costs.",
    image: "/work/emblematic-studio-quote-start.png", imageAlt: "Emblematic Studio custom quote journey", imageCaption: "Independent client / custom brand and enquiry journey",
    problemTitle: "Choose the setup that fits.", problemIntro: "A custom site makes sense when it supports work the current setup cannot easily handle. We review your content, commerce, editing and connected services first.",
    checks: [["Design and content", "Identify the layouts and editorial changes your current setup cannot support cleanly."], ["Shop and forms", "Map Squarespace Commerce products, payments, enquiries, Member Areas and scheduling where used. Agree what carries over and test the customer journeys included in the move."], ["Costs to run", "Compare the current plan and add-ons with hosting, CMS and support for a proposed rebuild."], ["Migration risk", "Record URLs, metadata, media and any content that needs a manual move."]],
    detailsTitle: "What a Squarespace move involves.", detailsIntro: "The plan distinguishes reusable content from platform features that need another way to work.",
    details: [["Pages and blog", "Inventory the pages, posts, authors, dates, images and page metadata in scope. Check the export and list manual cleanup before promising a content transfer."], ["Commerce and appointments", "Products, checkout, Member Areas and Squarespace Scheduling may involve separate accounts or customer data. Agree what stays, what connects to the new site and what needs rebuilding or migrating."], ["Design and editing", "Review Fluid Engine layouts and responsive behaviour with real pages. Choose editable fields and collections for routine updates, then let your team try them on the preview."], ["Cost and cutover", "Compare the current plan and add-ons with future hosting, content editing, connected services and support. Map old addresses, test forms and agree the domain switch and fallback steps."]],
    workTitle: "A brand carried through the build.", workIntro: "Emblematic Studio shows our custom design and implementation work. Its review belongs to this project.",
    workName: "Emblematic Studio", workImage: "/work/emblematic-studio.png", workAlt: "Emblematic Studio completed website", workHref: "/work/emblematic-studio",
    workDescription: "A custom site shaped around the brand, its work and its enquiry journey.", workCaveat: "This is an independent client website, not a Squarespace migration case study. Your export and content requirements need their own review.", reviewId: "emblematic-studio",
    pathTitle: "Keep the fit, or create one.", paths: [["Improve", "Stay on Squarespace", "Use the current platform when a design or content adjustment meets the need."], ["Move", "Build a tailored site", "Agree the new editing model, content and connected tools before rebuilding."]],
    steps: [["Review the current site", "List pages, collections, forms, products and connected services."], ["Choose the destination", "Define content fields, layouts and which accounts your team will control."], ["Migrate and review", "Compare agreed pages and journeys on staging with representative content."], ["Switch and validate", "Check old addresses, enquiries and live behaviour after launch."]],
    priceTitle: "Know the full cost of moving.", price: "From $1,500", priceCopy: "A smaller site can start at Starter. Content volume, commerce and integrations change the scope. We include operating costs and responsibilities in the proposal.",
    scopeNotes: [["Pages", "Content and assets to carry across."], ["Systems", "Forms, payments and third-party services."], ["Handover", "Editing, accounts and ongoing costs."]],
    costs: {
      title: "What a Squarespace site costs to run.",
      lines: [["Squarespace plan", "Your billing page"], ["Extensions", "Each extension's billing"], ["Domain and email", "Renewal emails"], ["Help and changes", "Your own records"]],
      note: "That total is what any change has to beat, so it's the figure we quote against.",
    },
  },
  {
    slug: "webflow", name: "Webflow websites & migration", category: "Website builds, improvements & migration",
    title: "Webflow websites.", accent: "Improve or migrate.",
    lead: "Planning a website, refining a live Webflow site, or considering a move? We look at pages, publishing and connected tools, then compare improvements with a new build where useful.",
    image: "/work/panda-patches-editor-blog.png", imageAlt: "Panda Patches custom blog editor", imageCaption: "Related CMS work / not a Webflow migration",
    problemTitle: "Review the site you actually run.", problemIntro: "A speed score or a new plan alone is not a reason to migrate. We look at publishing work, connected services and your actual bill.",
    checks: [["Mobile pages", "Measure priority Webflow pages, including images, fonts, scripts and interactions. Record the device and connection so the same checks can be repeated after changes."], ["CMS work", "Ask an editor to publish a real item. Review collection fields, references, slugs and media, then list the content and relationships a replacement editor must support."], ["Forms and CRM", "Follow an enquiry from submission into the system that should receive it."], ["Operating bill", "Read the current plan, seats, add-ons and asset usage before comparing alternatives."]],
    detailsTitle: "Code export is one part of a Webflow move.", detailsIntro: "A Webflow to Next.js migration needs separate plans for publishing, interactions and connected services.",
    details: [["CMS data and relationships", "Map collections, fields, references, rich text, media and slugs into the chosen editor. Count distinct templates as well as URLs; validate scoped records and publish a representative item before launch."], ["Interactions and access", "Decide which animations remain and which interactions perform a business action, such as a form step or calculator. Forms, search, languages and restricted pages need their own replacement and tests where included."], ["People and approvals", "Your team supplies account and domain access, new copy or imagery if required, and a decision maker for the scope and preview. The written proposal identifies who handles content transfer, redirects, cutover and support."], ["The continuing bill", "A new site still needs hosting and may need a CMS, seats, forms, search, localisation and maintenance. Compare those charges with the Webflow plan and add-ons you actually pay for."]],
    workTitle: "Relevant CMS and integration work.", workIntro: "These projects show how we build editors and connected systems; they did not begin on Webflow.",
    workName: "Panda Patches", workImage: "/work/panda-patches-editor.png", workAlt: "Panda Patches custom content editor", workHref: "/work/panda-patches",
    workDescription: "The team edits storefront content and manages a connected operations workflow in a custom build.", workCaveat: "Founder-affiliated work. Panda Patches originally used WordPress and WooCommerce, not Webflow.",
    pathTitle: "Improve or migrate.", paths: [["Improve", "Keep Webflow", "Fix identified issues in pages, scripts or publishing settings."], ["Migrate", "Move beyond Webflow", "Build a different content and frontend system when the current one limits the work."]],
    steps: [["Review access and structure", "Inventory pages, components, interactions, CMS collections, forms and integrations."], ["Price both options", "Compare a scoped Webflow improvement with the complete cost of a move."], ["Build and reconcile", "Validate content, fields and connected services against agreed samples."], ["Launch with checks", "Crawl the preview, test redirects and forms, then monitor cutover."]],
    priceTitle: "Two routes, two scopes.", price: "From $1,500", priceCopy: "Custom rebuilds start at the published Starter price. Improvements within Webflow are quoted to their own scope. The written proposal states the chosen route, price and dates.",
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
    title: "GoHighLevel websites.", accent: "Speed, builds and CRM.",
    lead: "Is your GoHighLevel site slow, or have you outgrown the builder? We review the cause, then scope improvements or a custom site that keeps your CRM, forms, calendars and pipelines connected.",
    image: "/work/northdeck-group-enquiry.png", imageAlt: "Northdeck Group custom enquiry journey", imageCaption: "Related enquiry frontend / integration assessed per project",
    problemTitle: "Follow the enquiry end to end.", problemIntro: "The public page and the CRM are two parts of one customer journey. We check the connection before proposing a new frontend.",
    checks: [["Page experience", "Measure priority pages on a defined device and connection, and review content and forms."], ["CRM handoff", "Map contact fields, tags, consent and attribution to the correct GoHighLevel account and pipeline. Agree how duplicates and failed submissions will be handled."], ["Automations", "List workflows that rely on forms, calendars, webhooks or domains. Test the agreed triggers and messages with sample enquiries before switching the public site."], ["Account economics", "Review your active plan, add-ons, messaging and usage alongside proposed hosting."]],
    detailsTitle: "Keep the CRM work that matters.", detailsIntro: "GoHighLevel can remain the system for contacts and follow-up while the public pages change, if the account and integration support it.",
    details: [["Locations and funnels", "Inventory the locations, sub-accounts, pipelines, funnels, forms and calendars the new site must reach. Confirm available API or webhook access and credentials before choosing an integration."], ["A complete enquiry", "Map fields, tags, consent and source information. Submit agreed test enquiries and bookings, then check the right record, pipeline, notification and automation rather than stopping at a form success message."], ["Failure and handover", "Agree how duplicate submissions, failed connections and account changes are handled. Document the connector, access and who monitors it after launch; moving all CRM workflows later is a separate scope."], ["Stay with GHL when it fits", "If a page or form repair inside the current setup solves the measured problem, scope that route. Compare its cost with a separate frontend and the ongoing charges of both systems."]],
    workTitle: "Custom frontend, visible work.", workIntro: "Northdeck Group shows the kind of tailored public site we build. We do not present it as a GoHighLevel migration.",
    workName: "Northdeck Group", workImage: "/work/northdeck-group.png", workAlt: "Northdeck Group custom website", workHref: "/work/northdeck-group",
    workDescription: "A code-driven marketing site with a clear service journey and contact path.", workCaveat: "This project does not establish a GoHighLevel integration outcome. Your CRM data flow needs its own access, test fixtures and written acceptance criteria.",
    pathTitle: "Keep the parts that earn their place.", paths: [["Improve", "Tune the current frontend", "Repair measured page or form issues within the existing setup."], ["Separate", "Build a custom frontend", "Keep agreed GoHighLevel CRM functions while the public site moves to code you control."]],
    steps: [["Inventory the account", "List pages, forms, calendars, pipelines, automations and connected tools."], ["Agree the data contract", "Define fields, consent, source information and expected CRM events."], ["Build and test", "Run test submissions through the approved frontend and GHL configuration."], ["Switch and monitor", "Validate live forms, domains and automation triggers after launch."]],
    priceTitle: "Price the site and connection.", price: "From $1,500", priceCopy: "A focused site can start at Starter. More pages, funnels and CRM workflows increase the work. Your written quote states what remains in GHL, what we build and what both systems cost to run.",
    scopeNotes: [["Frontend", "Pages and editing responsibilities."], ["CRM", "Fields, forms and automations to verify."], ["Costs", "GHL charges and new hosting stated separately."]],
    costs: {
      title: "What GoHighLevel costs to run.",
      lines: [["HighLevel subscription", "Your HighLevel billing"], ["Sub-account add-ons", "Per sub-account charges on the same bill"], ["Usage", "Calls, texts and email billed on usage"], ["Website help", "Your own records"]],
      note: "Keeping the CRM and replacing only the website changes the last line, not the subscription.",
    },
  },
  {
    slug: "ai-seo", name: "AI SEO", category: "AI SEO & answer engine optimization",
    title: "AI SEO.", accent: "Answers people can find.",
    lead: "We research what buyers ask, improve the pages that answer them and check what search and AI systems can access. Monthly work starts at $500.",
    image: "/work/panda-patches-editor-case-study.png", imageAlt: "Panda Patches editor for structured case-study content", imageCaption: "Content publishing example / founder-affiliated business",
    problemTitle: "Useful answers come first.", problemIntro: "A page can render perfectly and still omit the price basis, delivery constraint or detail a buyer needs. We work from real questions and evidence.",
    checks: [["Buyer questions", "Choose ten questions across one product or service area and up to five priority pages."], ["Page access", "Check whether the answer is in readable HTML, with descriptive headings and appropriate structured data."], ["An improvement shipped", "Agree one page improvement or small technical task, implement it and verify it each month."], ["Measurement limits", "Report changes, visibility signals and enquiries separately; an impression is not a visit or a sale."]],
    detailsTitle: "What happens in a $500 month?", detailsIntro: "The starting AI SEO and answer engine optimization scope is small enough to inspect. It can support a site you already run, without buying a new build.",
    details: [["Research and baseline", "Choose ten buyer questions across one product or service area, up to five priority pages and two agreed AI-search surfaces. Review what the pages actually say and what search systems can access."], ["One finished change", "Implement one agreed page improvement or small technical task and verify it, with a revision round. The scope states who can publish the change and what requires additional access."], ["Reporting with limits", "Report the change, observed visibility and the next priority. Search impressions are not visits; captured referrals and customer-declared discovery are different kinds of evidence and should be recorded separately."], ["Work beyond the starting scope", "New articles, broad content production, a source-tracking dashboard, extra markets, large integrations or a bigger implementation backlog need their own quote. The monthly service is optional and does not control whether your site keeps working."]],
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
