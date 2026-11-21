import type { ServicePreview } from "./service-data";
import { COMMERCIAL, POST_LAUNCH_SUPPORT_SUMMARY, startingPrice } from "@/data/company-facts";
import { MIGRATION_PROJECT_DETAILS } from "@/data/migration-projects";
import { asOf, spec } from "@/data/spec-facts";

// 12 Oct 2026, owner: two hiring pages the Search Console check found missing.
// "small business website design" (about 3,600 US searches a month, owner-supplied seodata
// estimate) and "medical website design" (about 1,300) had no page aimed at them. Both show
// the Next.js + Sanity + Supabase stack, with A Step Above Medical as the medical example.
// ASAM is a medical TRAINING provider, confirmed live on 20 Oct 2026: never describe it as
// patient-care software or a source of measured results. Its website does not handle patient
// health information and was not built as a HIPAA project. Owner, 12 Oct 2026: we take on HIPAA
// projects and sign a BAA when a client needs it; provider BAA facts are in spec-facts.json.
// Prices, delivery times and support come from company-facts, not typed copy.

const fact = (label: string) => {
  const found = COMMERCIAL.find((item) => item.label === label)?.value;
  if (!found) throw new Error(`Missing COMMERCIAL fact: ${label}`);
  return found;
};
const tier = (label: "Starter" | "Growth" | "Scale") => fact(label).replace(/^From \$[\d,]+\.\s*/, "");
const asam = MIGRATION_PROJECT_DETAILS.aStepAboveMedical;
const vercelPro = spec("vercel-pro-price");
const sanityFree = spec("sanity-free-plan");
const supabasePro = spec("supabase-pro-price");
const vercelBaa = spec("vercel-hipaa-baa");
const supabaseBaa = spec("supabase-hipaa-baa");

const stackCosts: ServicePreview["costs"] = {
  title: "What the stack costs to run.",
  lines: [
    ["Hosting", `Vercel Pro, ${vercelPro.value}`],
    ["Content editor", `Sanity Free, ${sanityFree.value} for most small teams`],
    ["Database and logins, only if you need them", `Supabase Pro, ${supabasePro.value}`],
    ["Domain", "Paid yearly to your registrar, in your name"],
  ],
  note: `Published prices as of ${asOf("vercel-pro-price")}. On our maintenance or SEO package, hosting is included if you want it.`,
  links: [{ label: "Every monthly bill, line by line", href: "/blog/website-monthly-running-cost" }],
};

export const audienceServices: ServicePreview[] = [
  {
    slug: "small-business-website-design", name: "Small business websites", category: "Small business website design",
    title: "Small business website design.", accent: "Built with the founders.",
    lead: `Web design services for small businesses that need more calls, bookings and enquiries, at a price fixed in writing before work starts. Websites start at ${startingPrice("Starter")}. A website with booking, payments and automatic emails starts at $10,000. Moving off Wix, Squarespace or WordPress? Every old address gets a redirect, so your links and search listings keep working. You work directly with Hassan and Imran. Every build includes the AI-search setup: answer-first pages, structured data and an llms.txt file for AI tools.`,
    image: "/work/ladies-4-jesus-hero.png", imageAlt: "Ladies 4 Jesus website homepage, a client site built by PandaCodeGen", imageCaption: "Client website / Ladies 4 Jesus / Moved from WordPress",
    problemTitle: "What does your website need to do?", problemIntro: "Most small business websites have a few jobs: explain what you do, show proof and make it easy to call, book or enquire. We plan those first, then the pages. If you already have a site, we start with what it does well and what has to move.",
    checks: [
      ["Pages", "Home, services, about, contact and any page people need before they buy. We agree the list and who writes the words."],
      ["Enquiries", "Forms, calls, bookings or quote requests, tested from the website to your inbox before launch."],
      ["Editing", "The text, images and business details you will change yourself, shown in a live walkthrough at handover."],
      ["Running costs", "Hosting, domain and any paid tools listed before you sign, so you know the monthly bill."],
      ["Your current site", "Every page, post and image on your Wix, Squarespace or WordPress site is listed before we start. Wix can't export a site, and Squarespace's export leaves out some page types, so we plan which pages to rebuild and which to copy."],
    ],
    detailsTitle: "What a small business website includes.", detailsIntro: "The written quote lists the pages, features and handover for your site. These are the published starting points for custom builds.",
    details: [
      [`Starter, from ${startingPrice("Starter")}`, tier("Starter")],
      [`Growth, from ${startingPrice("Growth")}`, tier("Growth")],
      [`Scale, from ${startingPrice("Scale")}`, tier("Scale")],
      ["Website and business system, from $10,000", "Your website plus online booking, payments, automatic emails, a staff portal and accounting sync. The full package is usually $12,000. It starts at $10,000 without the parts you don't need yet."],
      ["Moving from Wix, Squarespace or WordPress", "We list every old URL, set a redirect from each one to its new page, and carry over page titles, descriptions and canonical tags. Posts and internal links move with them. Your domain and business email are moved without downtime, and we check the redirects in Search Console after launch."],
      ["WordPress", "WordPress builds are quoted to their own scope, with the theme, plugins, hosting and who handles updates named in the quote."],
      ["Support after launch", POST_LAUNCH_SUPPORT_SUMMARY],
    ],
    workTitle: "Websites for real businesses.", workIntro: "Two client sites we built, each around the way the business actually works.",
    workName: "Ladies 4 Jesus", workImage: "/work/ladies-4-jesus.png", workAlt: "Ladies 4 Jesus publishing website", workHref: "/work/ladies-4-jesus",
    workDescription: "A community publishing site moved from WordPress to a custom website, with a Sanity editor the owner uses for devotionals and stories.", workCaveat: "Independent client.",
    secondWork: { name: "Emblematic Studio", image: "/work/emblematic-studio.png", alt: "Emblematic Studio product catalogue website", href: "/work/emblematic-studio", description: "A product catalogue website where customers browse and request quotes instead of checking out.", caveat: "Independent client." },
    pathTitle: "Choose the build that fits.",
    paths: [
      ["WordPress", "A familiar way to publish", "Choose WordPress when its themes, plugins and editor fit the site you need and the upkeep you can manage."],
      ["Custom build", "A site built around your business", `A Next.js website with a Sanity editor, from ${startingPrice("Starter")}. We explain the difference and the running costs before you choose.`],
    ],
    steps: [
      ["Talk to the founders", "Tell Hassan or Imran about the business, the pages you need and what you want to edit. You do not need a technical brief."],
      ["Agree the site and price", "Confirm pages, content, editing, forms and running costs in a written quote. The price is fixed once the scope is agreed."],
      ["Review a private preview", "See the pages on a private link, try the editing tasks and give feedback before launch."],
      ["Launch with a walkthrough", "Check the agreed pages and forms, then get access, written instructions and a live demo of your editing tasks."],
    ],
    priceTitle: "Small business website cost.", price: `From ${startingPrice("Starter")}`,
    priceCopy: `Websites start at ${startingPrice("Starter")} (up to 7 pages, moving your current site included), ${startingPrice("Growth")} (8 to 20 pages, with a full move and redirect map) and ${startingPrice("Scale")}. A website with a business system (booking, payments, automatic emails and a staff portal) starts at $10,000. WordPress builds are quoted to scope. The price is fixed in writing and paid 30 / 70. If we don't deliver the signed scope, you get 100% back.`,
    scopeNotes: [["Included work", "Pages, design, content responsibilities and forms listed in the quote."], ["Your accounts", "Domain in your name; hosting arranged as agreed."], ["Your confidence", "Written instructions and a live demo of the editing tasks agreed for your site."]],
    relatedService: { name: "WordPress websites", href: "/services/wordpress" },
    costs: stackCosts,
  },
  {
    slug: "medical-website-design", name: "Medical websites", category: "Medical website design & development",
    title: "Medical website design.", accent: "For practices and medical training providers.",
    lead: "Medical and healthcare website design for practices, clinics and medical training schools. Patients or students find the right treatment or course, see who they'll meet and book or enquire in a few steps. Your staff update services, profiles and schedules themselves. For a medical training school we also built online booking, payments, certificates and a staff portal. Every build includes the AI-search setup: answer-first pages, structured data and an llms.txt file for AI tools.",
    image: "/work/a-step-above-medical-preview-homepage.png", imageAlt: "A Step Above Medical course website, captured before launch", imageCaption: `Client build / A Step Above Medical / ${asam.status}`,
    problemTitle: "What should your website do for patients and staff?", problemIntro: "Start with the decisions a visitor makes: which treatment or course fits, how to book or enquire, and who they'll see. Then decide what your staff update themselves, and which tracking tags belong on which pages.",
    checks: [
      ["Services and treatments", "Plan a clear page for each treatment, service or course, with the questions people ask before they book."],
      ["Enquiries and booking", "Decide how people book or enquire: a form, a phone call or your existing booking system. We test the agreed route from the website to your inbox or system."],
      ["Staff editing", "Choose which text, staff profiles, locations and schedules your team edits in Sanity. We demonstrate those tasks before handover."],
      ["Patient information", "Tell us what the site may collect. Forms ask only for what the agreed workflow needs. If the site must collect or store protected health information, we scope it as a HIPAA project: providers that sign a Business Associate Agreement (BAA), health information kept out of the content editor, and a BAA between you and us."],
      ["Ad and analytics tags", "Google and Meta tags help measure ads, but on a booking or patient login page they can send health details to the ad company. We list every tag, keep ad tags off pages behind a login or holding health details, and send conversions from the server without them."],
    ],
    detailsTitle: "The stack behind a medical website.", detailsIntro: "Our usual stack is Next.js on Vercel, Sanity for content, and Supabase when the site needs a database and logins. The proposal names each account and what it costs to run.",
    details: [
      ["Website on Next.js and Vercel", "Pages for treatments, courses, locations and staff, hosted on Vercel Pro. On our maintenance or SEO package, hosting on our account is included if you want it; otherwise the site runs in a Vercel account in your name."],
      ["Editor on Sanity", "Your team updates services, staff, locations and announcements in Sanity Studio. Every build that uses Sanity includes training on Sanity Studio and written documentation."],
      ["Database and logins on Supabase", "When you need classes, students, payments or staff records behind the website, we build them on Supabase in an account in your name. A Step Above Medical's team portal works this way."],
      ["Moving from WordPress, Wix or Squarespace", "We list every page, post, image and PDF on your current site, move them, and set a redirect from each old address to its new page. Page titles, descriptions and canonical tags carry over, so search listings and links keep working. We check the redirects again after launch. A Step Above Medical's website was rebuilt from WordPress this way."],
    ],
    workTitle: "A medical training system on this stack.", workIntro: "A Step Above Medical teaches medical courses. We rebuilt their WordPress website with Next.js and Sanity, and built a team portal on Supabase for classes, students, payments and certificates.",
    workName: "A Step Above Medical", workImage: "/work/a-step-above-medical-preview-homepage.png", workAlt: "A Step Above Medical website, captured before launch", workHref: "/work/a-step-above-medical",
    workDescription: asam.summary, workCaveat: asam.disclosure,
    secondWork: { name: "Medical practice demo", image: "/work/medical-template-hero.png", alt: "Medical practice website demo homepage with treatment navigation", href: "/work/medical-template", description: "A practice website demo with treatment pages, care steps and a consultation journey.", caveat: "Portfolio demo. Every name, treatment and detail is invented; it is not a real practice." },
    pathTitle: "Improve your site or build a new one.",
    paths: [
      ["Improve", "Keep your current website", "If your WordPress or builder site mostly works, we fix the pages, forms or editing problems first."],
      ["Build", "A custom medical website", "Next.js and Sanity, plus Supabase when you need logins or records, scoped around your services, staff and booking route."],
    ],
    steps: [
      ["Talk to the founders", "Tell Hassan or Imran about your practice or courses, the pages you need and how people book today."],
      ["Agree pages, editing and price", "Confirm treatments or courses, staff editing, forms, any portal and running costs in a written quote."],
      ["Review a private preview", "Check the pages and editing tasks on a private link, with your team, before anything goes live."],
      ["Launch with a walkthrough", "Check the agreed pages, forms and redirects, including HTTP and www versions to one secure address, plus canonical tags and internal links. Then get access, written instructions and a live demo."],
    ],
    priceTitle: "Medical website design cost.", price: `From ${startingPrice("Starter")}`,
    priceCopy: `Websites start at ${startingPrice("Starter")} (up to 7 pages), ${startingPrice("Growth")} (8 to 20 pages, with a full move and redirect map) and ${startingPrice("Scale")}. A website with a business system (online booking, payments, reminders, a staff portal and accounting sync) starts at $10,000. The full package is usually $12,000. A HIPAA project adds the provider BAA costs, listed in the proposal. The price is fixed in writing before work starts.`,
    scopeNotes: [["Included work", "Pages, editor, forms and connections listed in the quote."], ["Your accounts", "Domain and database in your name; hosting as agreed in the proposal."], ["Your team", "Written instructions and a live walkthrough of the editing tasks."]],
    // 14 Nov 2026: linked both ways with the training-business page (Imran's brief).
    relatedService: { name: "Training business websites and booking systems", href: "/services/training-business-websites" },
    costs: stackCosts,
  },
  // 14 Nov 2026, Imran's brief: a page for training providers, with A Step Above Medical as
  // the example. The medical page targets practices and clinics; this one targets class-based
  // training businesses. ASAM facts stay exactly as the case study states them: certificates
  // are emailed after the class, payments sync to QuickBooks every 30 minutes. Everything else
  // here is described as scope we can agree, not as something ASAM has.
  {
    slug: "training-business-websites", bookCall: true, name: "Training business websites", category: "Training business websites & booking systems",
    title: "Let students book and pay online.", accent: "Reminders and certificates send themselves.",
    lead: "A website and training management system for schools that run classes: students pick a date, book and pay on your website, day or night. Reminders, receipts and certificates go out on their own, payments sync to QuickBooks, and your staff run rosters and attendance from one portal. A Step Above Medical, a medical training school, went from 7 website bookings in the 30 days before launch to 37 in the first 30 days after. Every build also includes the AI-search setup: answer-first pages, structured data and an llms.txt file for AI tools.",
    image: "/work/a-step-above-medical-portal-classes.png", imageAlt: "A Step Above Medical staff portal showing the class schedule", imageCaption: "Client build / A Step Above Medical / Pre-launch capture",
    problemTitle: "Is your website costing you students?", problemIntro: "Count how many of these happen at your school. Two or more is time and students your website could be saving you. Our free written check goes through each one for your school and what it would cost to fix.",
    checks: [
      ["Students call to ask if Tuesday's class has seats.", "They see live dates and open seats, then book and pay on your site. Full classes close on their own."],
      ["You chase deposits and payments.", "Stripe takes the full fee or a deposit at booking, and the receipt goes out on its own."],
      ["Students forget, don't show up, or ask what to bring.", "Confirmations and reminders send themselves, with the date, the address and what to bring."],
      ["You make certificates by hand after every class.", "Staff mark attendance in the portal, approve each student and the certificate is emailed from your template."],
      ["You copy payments into your books.", "Payments and refunds sync to QuickBooks Online. At A Step Above Medical they sync every 30 minutes."],
      ["Ask ChatGPT for a class like yours in your city. Did it name you?", "Course pages answer the questions students ask, with your dates and prices, plus structured data and an llms.txt file for AI tools. Nobody can promise a mention."],
    ],
    detailsTitle: "What a training management system includes.", detailsIntro: "Each project starts with the parts your business uses. The proposal names every feature, account and running cost.",
    details: [
      ["Course and location pages", "Course pages, locations and upcoming classes your team edits in Sanity, built to be found in search."],
      ["Booking and payments", "Students choose a class, register and pay by Stripe, in full or with a deposit, and get automatic confirmation emails."],
      ["Staff portal", "Class schedules, enrolment, rosters, attendance, instructor assignments and student records in one workspace, built on Supabase in an account in your name."],
      ["Certificates and accounting", "Certificates issued from the portal using your template, and payments sent to your accounting software, such as QuickBooks Online."],
      ["Moving off your old site and booking tool", "We list every page and course URL on your current site and redirect each old address to its new page, so search listings and links keep working. Upcoming classes and student records come across from your current booking tool, and both run side by side until a live booking test passes."],
    ],
    workTitle: "A training system we built.", workIntro: `A Step Above Medical teaches medical courses. We rebuilt its WordPress website and connected it to online booking, payments, student emails and a staff portal for classes and certificates. Payments sync to QuickBooks every 30 minutes. ${asam.firstMonthResult} Founder Dillon Lynch: "We did 6x technically since the business launched the new website." New Google Ads campaigns ran in the same period, replacing old ones that had counted homepage views as conversions. ${asam.adBudgetNote}`,
    workName: "A Step Above Medical", workImage: "/work/a-step-above-medical-preview-homepage.png", workAlt: "A Step Above Medical course website, captured before launch", workHref: "/work/a-step-above-medical",
    workDescription: asam.summary, workCaveat: asam.disclosure,
    pathTitle: "Connect what you have, or build it new.",
    paths: [
      ["Connect", "Keep your current website", "If your website works for you, we can start with booking, payments or a staff portal alongside it."],
      ["Build", "A custom training system", "A course website and staff portal scoped around your classes, payments and certificates."],
    ],
    steps: [
      ["Book a 15-minute call", "Show Hassan or Imran how a student books today and which steps your team does by hand."],
      ["Agree the first release and price", "Confirm courses, booking rules, payments, portal roles, integrations and running costs in a written proposal."],
      ["Review a private preview", "Test booking, payment and portal tasks on a private link with your team before launch."],
      ["Launch with training", "Get access, written instructions and a live walkthrough of the booking, roster and certificate tasks."],
    ],
    // 21 Nov 2026, Imran's decisions: systems published from $10,000, paid 30 / 40 / 30.
    priceTitle: "Training website and booking system cost.", price: "From $10,000",
    priceCopy: `A course website on its own starts at ${startingPrice("Starter")}. A website with booking, payments, reminders, certificates, a staff portal, QuickBooks sync and the AI-search setup is usually $12,000. It starts at $10,000 when you leave out parts you don't need yet, such as the portal or accounting sync. The price is fixed in writing and paid 30 / 40 / 30, with the last 30% after a live booking test. If we don't deliver the signed scope, you get 100% back.`,
    scopeNotes: [["Included work", "Pages, booking rules, portal screens and connections listed in the proposal."], ["Your accounts", "Domain, database, payment and accounting accounts in your name."], ["Your team", "Written instructions and a live walkthrough of the staff tasks."]],
    relatedService: { name: "Medical websites for practices and clinics", href: "/services/medical-website-design" },
    costs: stackCosts,
  },
];

const delivery = (label: string) => fact(label).replace(/\.$/, "");

export const audienceServiceFaqs: Record<string, [string, string][]> = {
  "small-business-website-design": [
    ["How much does a small business website cost?", `Our websites start at ${startingPrice("Starter")} for up to 7 pages, ${startingPrice("Growth")} for 8 to 20 pages with a full move and redirect map, and ${startingPrice("Scale")} for larger sites. A website with booking, payments and automatic emails starts at $10,000. WordPress builds are quoted to scope. The price is fixed in writing before work starts.`],
    ["Can I move my website off Wix without losing Google rankings?", "Wix can't export a site to another host, so the pages are rebuilt and only the domain moves. What protects your listings is the redirect map: every old Wix address points to its new page, with titles and descriptions carried over. We check Search Console after launch. Wix won't release a domain within 60 days of buying it. We don't promise rankings."],
    ["What moves over from Squarespace?", "Squarespace exports basic pages, one blog and its posts as a WordPress-format file. It leaves out album, cover, index, portfolio and store pages, and images stay on Squarespace's servers. We download every image and PDF, rebuild the pages the export misses, and redirect each old address to its new page before you close the account."],
    ["Do I need a website or a website with a business system?", "If people mostly call or fill in a form, a website is enough, from $1,500. If you take bookings, deposits or class sign-ups and handle them by hand, a business system adds online booking, payments, automatic emails and a staff portal, from $10,000. Our free written check tells you which one fits."],
    ["How long does a small business website take?", `Starter builds take ${delivery("Delivery, Starter").toLowerCase()}, Growth ${delivery("Delivery, Growth").toLowerCase()} and Scale ${delivery("Delivery, Scale").split(".")[0].toLowerCase()}. The accepted written terms give the dates for your project.`],
    ["Can I edit the website myself?", "Yes. We agree which text, images and business details you will change, set up the editor for those tasks and show you in a live walkthrough. You also get written instructions."],
    ["Do I own my website?", "You buy your domain in your own name. At handover you receive the files we create, written instructions and control of the production accounts, as set out in your proposal."],
    ["What happens after launch?", POST_LAUNCH_SUPPORT_SUMMARY],
    // 20 Oct 2026: for "i need a new website built properly, not just a template" (Search Console).
    ["Is it a template, or built for my business?", `Our custom builds are designed and built for your pages, content and editing needs, starting at ${startingPrice("Starter")}. We also build on WordPress when its themes and plugins fit the site you need, and that is quoted to its own scope. A template-based approach may cost less when it meets your requirements. We'll explain where it fits before recommending a custom build.`],
  ],
  "medical-website-design": [
    ["How much does a medical website cost?", `Custom medical websites start at ${startingPrice("Starter")} (Starter), ${startingPrice("Growth")} (Growth) and ${startingPrice("Scale")} (Scale). A portal with logins, classes or payments is priced after we review the workflow. The written proposal sets the price before work starts.`],
    ["Have you built a medical website before?", `Yes, for a medical training school. For A Step Above Medical we rebuilt the website from WordPress with Next.js and Sanity and built a team portal on Supabase for classes, students, payments and certificates. ${asam.disclosure} For practices, we've built a demo with treatment pages and a consultation journey. It's labelled as a demo; every name in it is invented.`],
    ["Can we use Google or Meta ad tags on a medical website?", "Yes, with care. On a booking page, a patient login or a form about a condition, ad tags can pass health details to the ad company, and privacy rules can apply to that. We list every tag, keep ad tags off those pages and send conversions from the server without health details. This isn't legal advice; check with your compliance adviser."],
    ["Can patients book appointments on the website?", "Yes. If you already use a scheduling or practice management system, we link or embed its booking page and test it end to end. If you need booking built into the site, as we did for a medical training school, it's scoped as a business system from $10,000. Anything that stores health information is scoped as a HIPAA project."],
    ["Will moving my practice website hurt our Google rankings?", "It shouldn't, if every old address redirects to its new page. We list each page, post and PDF on your current site, set a redirect for each one, carry over titles and descriptions, and check Search Console after launch. We don't promise rankings."],
    ["Can my staff update the website?", "Yes. Staff update services, profiles, locations and announcements in Sanity Studio. Every build that uses Sanity includes training on Sanity Studio and written documentation."],
    ["Can you build a HIPAA-compliant website?", `Yes, when your project needs it. Most practice websites don't collect health information, so HIPAA doesn't apply to the pages themselves. If yours must collect or store protected health information, such as intake forms or patient records, we scope it as a HIPAA project. The parts that handle that information run on providers that sign a Business Associate Agreement (BAA): Vercel's BAA is ${vercelBaa.value}, and for Supabase, ${supabaseBaa.value}. Health information stays out of the content editor, and we sign a BAA with you for our work. The extra provider costs and controls are listed in the proposal. HIPAA compliance is shared between you, us and those providers. A Step Above Medical's website doesn't handle patient health information, so it wasn't built as a HIPAA project.`],
    ["What does a medical website cost to run each month?", `On our usual stack, Vercel Pro hosting is ${vercelPro.value} and Sanity's Free plan is ${sanityFree.value} for most small teams. Supabase Pro, ${supabasePro.value}, is added only when you need logins or records. Prices as of ${asOf("vercel-pro-price")}. On our maintenance or SEO package, hosting is included if you want it.`],
  ],
  "training-business-websites": [
    ["How much does a training business booking system cost?", `A website with booking, payments, reminders, certificates, a staff portal and QuickBooks sync is usually $12,000. It starts at $10,000 if you leave out parts like the portal or accounting sync. A course website on its own starts at ${startingPrice("Starter")}. The price is fixed in writing before work starts and paid 30 / 40 / 30, with the last 30% after a live booking test.`],
    ["Should I use class registration software or a custom booking system?", "Registration software is quicker to start and charges every month, either a flat fee or a share of each booking. Its booking pages usually sit on the vendor's system, outside your website. A custom system costs more up front, runs on your own site and accounts, and fits your own rules for deposits, reminders and certificates. If your current tool works, keep it."],
    ["Did the new booking system bring A Step Above Medical more bookings?", `${asam.firstMonthResult} New Google Ads campaigns ran in the same period, and ${asam.adBudgetNote.charAt(0).toLowerCase()}${asam.adBudgetNote.slice(1)} So the website isn't the only cause.`],
    ["Can you move our classes and students from our current booking tool?", "Yes. We export upcoming classes, students and their payment status from your current tool, import them into the new system and check the counts match. Your old website pages are redirected to their new addresses, so links and search listings keep working. Both systems run side by side until a live booking test passes."],
    ["Have you built a booking system for a training business?", `Yes. For A Step Above Medical, a medical training provider, we connected the course website to online booking, Stripe payments, student emails and a staff portal for classes, students and certificates. ${asam.disclosure}`],
    ["Can students pay a deposit to hold a seat?", "Yes, when your booking rules need it. Stripe takes either the full fee or a deposit at registration, and the portal records what each student has paid. We agree the deposit, balance and refund rules with you before the build."],
    ["Can certificates be issued from the system?", "Yes. Certificates are issued from the staff portal using your template. For A Step Above Medical, certificates are emailed after the class."],
    ["Can it connect to QuickBooks?", "Yes, when the project needs it. Payments can be sent to your accounting software. A Step Above Medical's payments sync to QuickBooks every 30 minutes."],
  ],
};
