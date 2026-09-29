import CaseStudyWalkthrough, { type WalkthroughChapter } from "./CaseStudyWalkthrough";

// Screenshots taken from pandacodelab.com, 30 Sep 2026. Only sections without
// performance, ranking or rating claims are shown. The site's homepage and
// "Why Panda?" section carry figures (star ratings, "99/100 Google Speed
// scores", "sub-second load times guaranteed") that have no documented
// measurement, and a screenshot would republish them here.
const chapters: WalkthroughChapter[] = [
  {
    id: "site",
    label: "The agency site",
    title: "Services, process, enquiry.",
    description: "An agency website with four service lines, a four-step way of working, and a contact page built around a project enquiry form.",
    detail:
      "Website design, app development, digital marketing and graphic design. The process runs discovery, strategy, execution and launch, each with the work it includes.",
    note: "Figures shown on the site itself are not repeated here: we only publish numbers backed by a documented measurement.",
    shots: [
      {
        key: "services",
        src: "/work/pandacodelab-services.png",
        width: 1600,
        height: 900,
        alt: "The Panda CodeLab services page: 'Engineering Digital Excellence.' above an 'Our Core Capabilities' section.",
        label: "Services",
        body: "One page for the full range of work.",
      },
      {
        key: "method",
        src: "/work/pandacodelab-method.png",
        width: 1600,
        height: 900,
        alt: "The 'Method to Creativity' section: four numbered steps, Discovery, Strategy, Execution and Launch, each with three activities.",
        label: "How they work",
        body: "Four steps, each listing the work inside it.",
      },
      {
        key: "contact",
        src: "/work/pandacodelab-contact.png",
        width: 1600,
        height: 900,
        alt: "The Panda CodeLab contact page: 'Contact Our Development Team' above common questions and a Project Inquiry form.",
        label: "Contact",
        body: "Common questions answered beside the enquiry form.",
      },
    ],
  },
];

export default function PandaCodeLabWalkthrough() {
  return (
    <CaseStudyWalkthrough
      slug="panda-codelab"
      projectName="Panda CodeLab"
      eyebrow="A second agency brand, built by the same team."
      heading={<>An agency site,<br />end to end.</>}
      lead={<>The <strong>services</strong>, the <strong>process</strong> and the <strong>enquiry path</strong> of pandacodelab.com.</>}
      navAriaLabel="Explore the Panda CodeLab build"
      chapters={chapters}
      handoff="Designed and built by the same team that builds PandaCodeGen's own site."
    />
  );
}
