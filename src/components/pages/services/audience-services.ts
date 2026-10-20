import type { ServicePreview } from "./service-data";
import { COMMERCIAL, POST_LAUNCH_SUPPORT_SUMMARY, startingPrice } from "@/data/company-facts";
import { MIGRATION_PROJECT_DETAILS } from "@/data/migration-projects";
import { asOf, spec } from "@/data/spec-facts";

// 12 Oct 2026, owner: two hiring pages the Search Console check found missing.
// "small business website design" (about 3,600 US searches a month, owner-supplied seodata
// estimate) and "medical website design" (about 1,300) had no page aimed at them. Both show
// the Next.js + Sanity + Supabase stack, with A Step Above Medical as the medical example.
// ASAM is a medical TRAINING provider, built and in pre-launch testing: never describe it as
// patient-care software, a live site or a source of results. Its website does not handle patient
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
    lead: `Website design for small businesses that want a site they can edit, at a price agreed before work starts. Choose WordPress or a custom Next.js site with a Sanity editor. Custom builds start at ${startingPrice("Starter")}; WordPress is quoted to scope. You work directly with Hassan and Imran.`,
    image: "/work/ladies-4-jesus-hero.png", imageAlt: "Ladies 4 Jesus website homepage, a client site built by PandaCodeGen", imageCaption: "Client website / Ladies 4 Jesus / Moved from WordPress",
    problemTitle: "What does your website need to do?", problemIntro: "Most small business websites have a few jobs: explain what you do, show proof and make it easy to call, book or enquire. We plan those first, then the pages.",
    checks: [
      ["Pages", "Home, services, about, contact and any page people need before they buy. We agree the list and who writes the words."],
      ["Enquiries", "Forms, calls, bookings or quote requests, tested from the website to your inbox before launch."],
      ["Editing", "The text, images and business details you will change yourself, shown in a live walkthrough at handover."],
      ["Running costs", "Hosting, domain and any paid tools listed before you sign, so you know the monthly bill."],
    ],
    detailsTitle: "What a small business website includes.", detailsIntro: "The written quote lists the pages, features and handover for your site. These are the published starting points for custom builds.",
    details: [
      [`Starter, from ${startingPrice("Starter")}`, tier("Starter")],
      [`Growth, from ${startingPrice("Growth")}`, tier("Growth")],
      [`Scale, from ${startingPrice("Scale")}`, tier("Scale")],
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
    priceCopy: `Custom website builds start at ${startingPrice("Starter")} (Starter), ${startingPrice("Growth")} (Growth) and ${startingPrice("Scale")} (Scale). WordPress builds are quoted to scope. The accepted written proposal sets the final price and dates before work starts.`,
    scopeNotes: [["Included work", "Pages, design, content responsibilities and forms listed in the quote."], ["Your accounts", "Domain in your name; hosting arranged as agreed."], ["Your confidence", "Written instructions and a live demo of the editing tasks agreed for your site."]],
    relatedService: { name: "WordPress websites", href: "/services/wordpress" },
    costs: stackCosts,
  },
  {
    slug: "medical-website-design", name: "Medical websites", category: "Medical website design & development",
    title: "Medical website design.", accent: "For practices and medical training providers.",
    lead: "Medical website design and development for practices, clinics and medical training providers. We build on Next.js with a Sanity editor your staff can update, and add a Supabase database and logins when you need classes, students or bookings managed behind the site. The pages, editing and price are agreed in writing first.",
    image: "/work/a-step-above-medical-preview-homepage.png", imageAlt: "A Step Above Medical course website, shown before launch", imageCaption: `Client build / A Step Above Medical / ${asam.status}`,
    problemTitle: "What should your website do for patients and staff?", problemIntro: "Start with the decisions a visitor makes: which treatment or course fits, how to book or enquire, and who they will see. Then decide what your staff update themselves.",
    checks: [
      ["Services and treatments", "Plan a clear page for each treatment, service or course, with the questions people ask before they book."],
      ["Enquiries and booking", "Decide how people book or enquire: a form, a phone call or your existing booking system. We test the agreed route from the website to your inbox or system."],
      ["Staff editing", "Choose which text, staff profiles, locations and schedules your team edits in Sanity. We demonstrate those tasks before handover."],
      ["Patient information", "Tell us what the site may collect. Forms ask only for what the agreed workflow needs. If the site must collect or store protected health information, we scope it as a HIPAA project: providers that sign a Business Associate Agreement (BAA), health information kept out of the content editor, and a BAA between you and us."],
    ],
    detailsTitle: "The stack behind a medical website.", detailsIntro: "Our usual stack is Next.js on Vercel, Sanity for content, and Supabase when the site needs a database and logins. The proposal names each account and what it costs to run.",
    details: [
      ["Website on Next.js and Vercel", "Pages for treatments, courses, locations and staff, hosted on Vercel Pro. On our maintenance or SEO package, hosting on our account is included if you want it; otherwise the site runs in a Vercel account in your name."],
      ["Editor on Sanity", "Your team updates services, staff, locations and announcements in Sanity Studio. Every build that uses Sanity includes training on Sanity Studio and written documentation."],
      ["Database and logins on Supabase", "When you need classes, students, payments or staff records behind the website, we build them on Supabase in an account in your name. A Step Above Medical's team portal works this way."],
      ["Moving from WordPress", "Existing pages, posts and images are inventoried, moved and redirected so their addresses keep working. A Step Above Medical's website was rebuilt from WordPress."],
    ],
    workTitle: "A medical training system on this stack.", workIntro: "A Step Above Medical teaches medical courses. We rebuilt their WordPress website with Next.js and Sanity, and built a team portal on Supabase for classes, students, payments and certificates.",
    workName: "A Step Above Medical", workImage: "/work/a-step-above-medical-preview-homepage.png", workAlt: "A Step Above Medical website, shown before launch", workHref: "/work/a-step-above-medical",
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
      ["Launch with a walkthrough", "Check the agreed pages, forms and redirects, then get access, written instructions and a live demo."],
    ],
    priceTitle: "Medical website design cost.", price: `From ${startingPrice("Starter")}`,
    priceCopy: `Custom websites start at ${startingPrice("Starter")} (Starter), ${startingPrice("Growth")} (Growth) and ${startingPrice("Scale")} (Scale). A portal with logins, classes or payments is priced after the workflow is reviewed. The accepted written proposal sets the final price and dates.`,
    scopeNotes: [["Included work", "Pages, editor, forms and connections listed in the quote."], ["Your accounts", "Domain and database in your name; hosting as agreed in the proposal."], ["Your team", "Written instructions and a live walkthrough of the editing tasks."]],
    relatedService: { name: "Backend development for portals", href: "/services/backend-development" },
    costs: stackCosts,
  },
];

const delivery = (label: string) => fact(label).replace(/\.$/, "");

export const audienceServiceFaqs: Record<string, [string, string][]> = {
  "small-business-website-design": [
    ["How much does a small business website cost?", `Custom small business websites start at ${startingPrice("Starter")} (Starter), ${startingPrice("Growth")} (Growth) and ${startingPrice("Scale")} (Scale). WordPress builds are quoted to scope. The written proposal sets the price before work starts, and it is fixed once the scope is agreed.`],
    ["How long does a small business website take?", `Starter builds take ${delivery("Delivery, Starter").toLowerCase()}, Growth ${delivery("Delivery, Growth").toLowerCase()} and Scale ${delivery("Delivery, Scale").split(".")[0].toLowerCase()}. The accepted written terms give the dates for your project.`],
    ["Can I edit the website myself?", "Yes. We agree which text, images and business details you will change, set up the editor for those tasks and show you in a live walkthrough. You also get written instructions."],
    ["Do I own my website?", "You buy your domain in your own name. At handover you receive the files we create, written instructions and control of the production accounts, as set out in your proposal."],
    ["What happens after launch?", POST_LAUNCH_SUPPORT_SUMMARY],
    // 20 Oct 2026: for "i need a new website built properly, not just a template" (Search Console).
    ["Is it a template, or built for my business?", `Our custom builds are designed and built for your pages, content and editing needs, starting at ${startingPrice("Starter")}. We also build on WordPress when its themes and plugins fit the site you need, and that is quoted to its own scope. If the lowest possible price is the goal, a template site elsewhere will cost less, and we'll say so on the first call.`],
  ],
  "medical-website-design": [
    ["How much does a medical website cost?", `Custom medical websites start at ${startingPrice("Starter")} (Starter), ${startingPrice("Growth")} (Growth) and ${startingPrice("Scale")} (Scale). A portal with logins, classes or payments is priced after we review the workflow. The written proposal sets the price before work starts.`],
    ["Have you built a medical website before?", `Yes. For A Step Above Medical, a medical training provider, we rebuilt the website from WordPress with Next.js and Sanity and built a team portal on Supabase for classes, students, payments and certificates. ${asam.disclosure} We also built a medical practice demo with treatment pages and a consultation journey.`],
    ["Can my staff update the website?", "Yes. Staff update services, profiles, locations and announcements in Sanity Studio. Every build that uses Sanity includes training on Sanity Studio and written documentation."],
    ["Can you build a HIPAA-compliant website?", `Yes, when your project needs it. Most practice websites don't collect health information, so HIPAA doesn't apply to the pages themselves. If yours must collect or store protected health information, such as intake forms or patient records, we scope it as a HIPAA project. The parts that handle that information run on providers that sign a Business Associate Agreement (BAA): Vercel's BAA is ${vercelBaa.value}, and for Supabase, ${supabaseBaa.value}. Health information stays out of the content editor, and we sign a BAA with you for our work. The extra provider costs and controls are listed in the proposal. HIPAA compliance is shared between you, us and those providers. A Step Above Medical's website doesn't handle patient health information, so it wasn't built as a HIPAA project.`],
    ["What does a medical website cost to run each month?", `On our usual stack, Vercel Pro hosting is ${vercelPro.value} and Sanity's Free plan is ${sanityFree.value} for most small teams. Supabase Pro, ${supabasePro.value}, is added only when you need logins or records. Prices as of ${asOf("vercel-pro-price")}. On our maintenance or SEO package, hosting is included if you want it.`],
  ],
};
