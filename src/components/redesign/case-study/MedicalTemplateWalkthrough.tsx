import CaseStudyWalkthrough, { type WalkthroughChapter } from "./CaseStudyWalkthrough";

// Screenshots taken from the live demo (pandacodegen-medical-template.vercel.app),
// 30 Sep 2026. Every caption describes only what is on screen. The practice,
// surgeon, credentials, reviews, locations and prices are fictional, and the
// demo's own red banner says so on every screen, visible in each shot here.
// The demo's Gallery link returned a 404 on the day, so it is not shown.
const chapters: WalkthroughChapter[] = [
  {
    id: "homepage",
    label: "Homepage",
    title: "Built around booking a consultation.",
    description:
      "The homepage leads with a consultation button, then lets a visitor pick an area of the body and see how care works, step by step.",
    detail:
      "Four areas (Face, Breast, Body, Men) open their own procedure pages. The care section walks through four stages: tell us what matters, build your plan together, prepare with confidence, stay supported in recovery.",
    note: "The red banner on every screen reads: portfolio demo, fictional practice, surgeon, credentials, reviews, locations and testimonials, not a medical provider.",
    shots: [
      {
        key: "hero",
        src: "/work/medical-template-hero.png",
        width: 1600,
        height: 900,
        alt: "Medical Template homepage: 'There is no default body. There should be no default plan.' with a Book a consultation button and the red portfolio-demo banner.",
        label: "Homepage",
        body: "One clear action above the fold: book a consultation.",
      },
      {
        key: "areas",
        src: "/work/medical-template-areas.png",
        width: 1600,
        height: 900,
        alt: "The 'Explore by area' section with four photo cards: Face, Breast, Body and Men.",
        label: "Explore by area",
        body: "Four ways in, each leading to the procedures for that area.",
      },
      {
        key: "care",
        src: "/work/medical-template-care.png",
        width: 1600,
        height: 900,
        alt: "The 'Care should feel clear and personal' section, with four numbered steps from the first conversation to recovery.",
        label: "How care works",
        body: "Four numbered stages, so a patient knows what happens before they book.",
      },
    ],
  },
  {
    id: "procedures",
    label: "Procedure pages",
    title: "Each treatment gets its own page.",
    description: "Non-surgical treatments sit on their own page, each with a short explanation and the key facts beside it.",
    detail:
      "Botox and Dysport, dermal fillers, Alloclae and GLP-1 weight management are each listed with a summary and a short fact list. Treatments, prices and the surgeon are part of the fictional content.",
    note: "Separate pages let each treatment answer its own questions instead of competing on one crowded page.",
    shots: [
      {
        key: "non-surgical",
        src: "/work/medical-template-non-surgical.png",
        width: 1600,
        height: 900,
        alt: "The Non-Surgical procedures page, opening with Botox / Dysport and a short fact list beside it, with the portfolio-demo banner at the bottom.",
        label: "Non-surgical",
        body: "One page per treatment group, each treatment explained in plain terms.",
      },
    ],
  },
];

export default function MedicalTemplateWalkthrough() {
  return (
    <CaseStudyWalkthrough
      slug="medical-template"
      projectName="Medical Template"
      eyebrow="Medical practice website design / Portfolio concept"
      heading={<>Healthcare website design.<br /><em>A clear way through.</em></>}
      lead={<>See how the <strong>homepage</strong> introduces a fictional practice, helps visitors find treatments and leads into the <strong>procedure pages</strong>.</>}
      navAriaLabel="Explore the Medical Template build"
      chapters={chapters}
      handoff="A real practice would replace every name, credential and price with reviewed, verified information."
    />
  );
}
