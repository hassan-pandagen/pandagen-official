import CaseStudyWalkthrough, { type WalkthroughChapter } from "./CaseStudyWalkthrough";

// Screenshots taken from the live concept site (pandapublisher-eight.vercel.app),
// 30 Sep 2026. There is no publishing business behind it; its cover gallery is
// captioned "Concept cover gallery · Not client work" on the site itself,
// visible in the first shot. Captions describe only what is on screen.
const chapters: WalkthroughChapter[] = [
  {
    id: "library",
    label: "Cover library",
    title: "A cover gallery as the front door.",
    description:
      "The homepage is a library of ten concept covers. Choosing one shows its genre and points to the service that fits it.",
    detail:
      "The centre panel reads “One book is missing from this library. It could be yours.” with two ways forward: start your book, or explore services.",
    note: "The gallery labels itself on screen: “Concept cover gallery · Not client work”.",
    shots: [
      {
        key: "library",
        src: "/work/panda-publisher-library.png",
        width: 1600,
        height: 900,
        alt: "Panda Publisher homepage: a ring of concept book covers around a central 'Your book could be next' cover, with 'It could be yours.' and Start your book and Explore services buttons.",
        label: "The library",
        body: "Ten concept covers, one of them the visitor's own book.",
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    title: "Services, with their limits written down.",
    description:
      "Five service areas (strategy, writing and editorial, design and production, publishing and distribution, launch and platform), each broken into named services.",
    detail:
      "The same page lists what the service will not promise: guaranteed bestseller lists, rankings, reviews or sales; guaranteed bookstore stocking; legal clearance or tax advice; hidden ownership of the author's accounts; unlimited revisions behind a package name.",
    note: "The rule we hold our own site to: say what the work includes, and what nobody can promise.",
    shots: [
      {
        key: "services",
        src: "/work/panda-publisher-services.png",
        width: 1600,
        height: 900,
        alt: "The Services page showing the Strategy capability and its Book Strategy & Positioning service card.",
        label: "Named services",
        body: "Each capability opens into services with a plain description.",
      },
      {
        key: "limits",
        src: "/work/panda-publisher-limits.png",
        width: 1600,
        height: 900,
        alt: "The 'What responsible support does not claim.' section listing six things the service does not promise, starting with guaranteed bestseller lists, rankings, reviews, sales or media coverage.",
        label: "What it won't claim",
        body: "Six promises the site refuses to make, listed where a buyer will see them.",
      },
    ],
  },
  {
    id: "journey",
    label: "Journey & enquiry",
    title: "A nine-chapter map, then one form.",
    description:
      "The author journey explains the work in nine chapters, from finding the book's direction to reaching readers. Every path ends at the same enquiry form.",
    detail:
      "Each chapter lists the questions it answers and its milestones. The form asks for the manuscript stage, the book type and the help needed, and tells authors not to paste confidential manuscript passages into it.",
    note: "One enquiry path, instead of contact options scattered across the site.",
    shots: [
      {
        key: "journey",
        src: "/work/panda-publisher-journey.png",
        width: 1600,
        height: 900,
        alt: "Chapter 01 of the author journey, 'Find Your Compass', with the questions the chapter holds and its milestones.",
        label: "Chapter 01",
        body: "Questions on one side, milestones on the other.",
      },
      {
        key: "start",
        src: "/work/panda-publisher-start.png",
        width: 1600,
        height: 900,
        alt: "The Start your book page: what happens next (a human reads it, a considered reply, a clear next step) beside a form asking for manuscript stage, book type and the help needed.",
        label: "Start your book",
        body: "What happens after sending, stated before the visitor sends anything.",
      },
    ],
  },
];

export default function PandaPublisherWalkthrough() {
  return (
    <CaseStudyWalkthrough
      slug="panda-publisher"
      projectName="Panda Publisher"
      eyebrow="An author-services site, shown as a concept."
      heading={<>A hard-to-picture service,<br />made concrete.</>}
      lead={<>The <strong>cover library</strong>, the <strong>services</strong> and their limits, and the <strong>journey</strong> that ends at one form.</>}
      navAriaLabel="Explore the Panda Publisher build"
      chapters={chapters}
      handoff="Every path on the site ends at the same enquiry form."
    />
  );
}
