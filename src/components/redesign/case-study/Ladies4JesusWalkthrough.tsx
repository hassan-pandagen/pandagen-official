import CaseStudyWalkthrough, { type WalkthroughChapter } from "./CaseStudyWalkthrough";

// Real screenshots taken live, 28 Sep 2026 (ladies4jesus.com and its Sanity
// Studio), supplied by the project owner. Two chapters -- the public
// community and the editor behind it -- each grounded in exactly what's
// visible. The moderation workflow and video-upload cleanup are real,
// already-published facts (from the live /work page's own FAQ) but have no
// screenshot of their own yet, so they stay in prose on the page below
// rather than becoming a third chapter with no image to back it.
const chapters: WalkthroughChapter[] = [
  {
    id: "community",
    label: "Community",
    title: "Where the community gathers.",
    description: "The public site: a welcome, then four doors in -- stories and testimonies, devotionals, Q&A, and an entry point for anyone asking what a relationship with Jesus means.",
    detail: "The homepage leads with “Come as you are. Leave encouraged,” then a “Find your place” section routes a visitor into Stories & Testimonies, Thoughts to Ponder (devotionals), Questions & Answers, or Got Jesus?. The devotionals section itself is searchable by title, topic, date or scripture, with its own table of contents.",
    note: "Stories, questions and comments are all visitor-submitted -- what's shown here is what's already been approved for the public site.",
    shots: [
      {
        key: "hero",
        src: "/work/ladies-4-jesus-hero.png",
        width: 1912,
        height: 914,
        alt: "The Ladies 4 Jesus homepage hero: 'Come as you are. Leave encouraged.' with a welcome message and links into Devotionals, Testimonies, Honest Q&A and A place to belong.",
        label: "Homepage",
        body: "“Come as you are. Leave encouraged.” -- the tone the rest of the site follows.",
      },
      {
        key: "sections",
        src: "/work/ladies-4-jesus-sections.png",
        width: 1912,
        height: 914,
        alt: "The 'Find your place in the community' section, showing four cards: Stories & Testimonies, Thoughts to Ponder, Questions & Answers, and Got Jesus?.",
        label: "Find your place",
        body: "Four ways in, each with its own card: Stories & Testimonies, Thoughts to Ponder, Questions & Answers, Got Jesus?.",
      },
      {
        key: "devotionals",
        src: "/work/ladies-4-jesus-devotionals.png",
        width: 1912,
        height: 914,
        alt: "The Devotionals ('Thoughts to Ponder') listing page, showing a searchable, filterable grid of devotional posts and a table of contents sidebar.",
        label: "Devotionals",
        body: "Searchable by title, topic, date or scripture, with category filters and a running table of contents.",
      },
    ],
  },
  {
    id: "editor",
    label: "Content editor",
    title: "What the owner can change.",
    description: "Sanity Studio, embedded at /studio: nine content types in the sidebar, from site-wide settings down to individual devotionals.",
    detail: "This devotional (“Get Real with God”) shows the fields the owner actually fills in: a rich-text body, a scripture reference, and the scripture text itself. Site Settings, a separate content type, controls the site name, tagline and logo shown on every page.",
    note: "Publishing a devotional here reaches the live site in about sixty seconds through incremental regeneration -- no deploy, no developer.",
    shots: [
      {
        key: "devotional",
        src: "/work/ladies-4-jesus-editor-devotional.png",
        width: 1912,
        height: 914,
        alt: "Sanity Studio open on the 'Get Real with God' devotional, showing its rich-text Body field, Scripture Reference and Scripture Text.",
        label: "Editing a devotional",
        body: "Body text, scripture reference and scripture text -- the same fields behind every devotional on the site.",
      },
      {
        key: "settings",
        src: "/work/ladies-4-jesus-editor-settings.png",
        width: 1912,
        height: 914,
        alt: "Sanity Studio open on Site Settings, showing the Site Name, Tagline and Logo fields for Ladies 4 Jesus.",
        label: "Site settings",
        body: "The name, tagline and logo shown on every page, editable from one place.",
      },
    ],
  },
];

export default function Ladies4JesusWalkthrough() {
  return (
    <CaseStudyWalkthrough
      slug="ladies4jesus"
      projectName="Ladies 4 Jesus"
      eyebrow="One community. Two things worth seeing."
      heading={<>A community she runs,<br />and the editor behind it.</>}
      lead={<>The <strong>community</strong> visitors find, and the <strong>content editor</strong> the owner uses to run it alone.</>}
      navAriaLabel="Explore the Ladies 4 Jesus build"
      chapters={chapters}
      handoff="A devotional written, published, and live in about sixty seconds -- the same editor behind every content type on the site."
    />
  );
}
