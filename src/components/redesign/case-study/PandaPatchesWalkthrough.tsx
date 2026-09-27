import CaseStudyWalkthrough, { type WalkthroughChapter } from "./CaseStudyWalkthrough";

const editorShots = [
  {
    key: "process",
    src: "/work/panda-patches-editor.png",
    width: 1920,
    height: 902,
    alt: "Sanity Studio open on the homepage's process section: a heading, a sub-heading and three ordered steps (Sketch, Mockup, Patch).",
    label: "Homepage copy",
    body: "Rewrite the homepage's “how we make your patches” steps directly in the editor.",
  },
  {
    key: "blog",
    src: "/work/panda-patches-editor-blog.png",
    width: 1912,
    height: 914,
    alt: "Sanity Studio open on a blog post: title, URL slug and a main image field for a custom hockey patches guide.",
    label: "Blog posts",
    body: "Publish a new guide, the same editor that runs the storefront's 63-post blog.",
  },
  {
    key: "case-study",
    src: "/work/panda-patches-editor-case-study.png",
    width: 1912,
    height: 914,
    alt: "Sanity Studio open on a bulk case study page: title, description and a patch photo field for a law enforcement client.",
    label: "Case studies",
    body: "Add a case study for a new industry with the same fields every sales page uses.",
  },
];

const chapters: WalkthroughChapter[] = [
  {
    id: "storefront", label: "Website", title: "What your customers see.",
    description: "Your public website: where customers explore products, choose their patch specifications and send an enquiry. This is the front end of the business.",
    detail: "Instead of describing everything in a blank message, customers choose their backing, shape, border, size and quantity. The team receives those details with the request and returns a quote.",
    note: "Customers also have a private portal for order history, tracking and reorders. That login-only area is not pictured here.",
    shots: [
      { key: "home", src: "/work/panda-patches.png", width: 1912, height: 914, label: "The storefront", alt: "Panda Patches homepage with product introduction and quote enquiry form.", body: "The public website introduces the products and gives customers a way to start an enquiry." },
      { key: "configure", src: "/work/panda-patches-calculator-configure.png", width: 1440, height: 560, label: "Choose your patch", alt: "Panda Patches configurator showing patch specifications and quantity options.", body: "Customers choose the details the team needs to prepare a quote." },
      { key: "enquiry", src: "/work/panda-patches-calculator-submit.png", width: 740, height: 520, label: "Send it for a price", alt: "The configurator contact step requesting a name and email before a quote enquiry is submitted.", body: "The next step captures contact details. This is a quote request, not an instant checkout price." },
    ],
  },
  {
    id: "content", label: "Content editor", title: "What your team can change.",
    description: "Sanity is where your website content lives. You or your marketing team can edit copy, publish articles and add case studies without editing code.",
    detail: "The editor gives your team fields for the content they manage, including promotional banners where configured. Change the content, then publish it to the website without asking a developer to rewrite the page.",
    note: "These three screens show the actual editing experience: homepage copy, a blog post and a case study.",
    shots: editorShots,
  },
  {
    id: "operations", label: "CRM & operations", title: "Where your business runs.",
    description: "Your internal system brings customer records, quotes, orders, production, payment status and reports into one place. This is where the team manages the work behind the website.",
    detail: "Sales and production work from the same order records, with access based on their roles. Automations support follow-ups, while activity logs record who changed what and when.",
    note: "The storefront and operations platform share a Supabase backend. Sanity separately manages website content. Customer and financial details in this screenshot are blurred.",
    shots: [{ key: "dashboard", src: "/work/enterprise-ops.png", width: 1711, height: 919, label: "The operations dashboard", alt: "Full Panda Patches operations dashboard showing navigation, order metrics and production pipeline, with sensitive details blurred.", body: "A shared view of orders and production, with reports and team tools available from the same system." }],
    more: { href: "/work/enterprise-ops", label: "Explore the operations case study" },
  },
];

export default function PandaPatchesWalkthrough() {
  return (
    <CaseStudyWalkthrough
      slug="panda"
      eyebrow="One business. Three connected parts."
      heading={<>Your customers shop.<br />Your team keeps things moving.</>}
      lead={<>The <strong>storefront</strong> customers see, the <strong>content editor</strong> your team controls, and the <strong>operations system</strong> behind each order.</>}
      navAriaLabel="Explore the Panda Patches build"
      chapters={chapters}
      handoff="An enquiry becomes a quote. A confirmed order moves through payment, production and delivery—with the team working from the same record."
    />
  );
}
