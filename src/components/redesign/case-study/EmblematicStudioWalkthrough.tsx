import CaseStudyWalkthrough, { type WalkthroughChapter } from "./CaseStudyWalkthrough";

// Screenshots supplied by the project owner from the site's own build
// milestones (C:\Projects\Emblematic-studio), dated 18-23 Jul 2026 --
// before the site's FAQ says it became publicly indexable (7 Aug), but
// confirmed current by the owner, 28 Sep 2026. Copy below is checked
// against that repo's README.md (dated 17 Aug, the most recent source of
// truth) rather than the screenshots' own on-page text, since one screen
// (the quote form) still carried stale "private prototype" placeholder
// copy in these builds that's since been removed from the live source --
// confirmed by grepping the current repo for that text and finding none.
const chapters: WalkthroughChapter[] = [
  {
    id: "catalogue",
    label: "Catalogue",
    title: "One registry, every material.",
    description: "The homepage introduces the studio, then routes into a catalogue of 22 product types across patches, keychains, enamel pins and challenge coins -- eight of them with their own in-depth material comparison page.",
    detail: "Every material is judged on the same terms: detail, depth, exposure, colour, tone -- not which one trended this year. A visitor compares all eight before choosing where to start.",
    note: "The registry that drives this comparison page is the same one behind the mega-menu, the individual product pages and the quote form's own options -- one source, not eight maintained separately.",
    shots: [
      {
        key: "homepage",
        src: "/work/emblematic-studio-homepage.png",
        width: 1440,
        height: 1000,
        alt: "The Emblematic Studio homepage: 'A mark you can feel,' with a specimen photograph of an embroidered mountain patch and its vector source drawing.",
        label: "Homepage",
        body: "An embroidered specimen shown next to its own vector source -- the drawing before the thread.",
      },
      {
        key: "materials",
        src: "/work/emblematic-studio-materials.png",
        width: 1440,
        height: 900,
        alt: "The material comparison page: 'Choose by what the mark needs to do,' introducing eight constructions that can carry the same artwork.",
        label: "Compare all eight",
        body: "\u201cEight constructions can carry the same artwork in eight different ways.\u201d Chosen by constraint, not trend.",
      },
    ],
  },
  {
    id: "product-page",
    label: "Material page",
    title: "One material, studied in depth.",
    description: "Each of the eight materials gets its own page -- this one's Embroidered, the flagship construction, with a real photographed specimen instead of a rendered mockup.",
    detail: "Satin and fill stitch on twill, described in terms a buyer actually needs: merrowed border, rayon thread, true satin coverage, thread direction as part of the drawing itself.",
    note: "One of eight material pages, all built from the same typed registry -- a new material means extending one entry, not writing a new page from scratch.",
    shots: [
      {
        key: "embroidered",
        src: "/work/emblematic-studio-product-page.png",
        width: 1440,
        height: 900,
        alt: "The Embroidered material page: 'Thread direction becomes part of the drawing,' with a photographed moth patch specimen and construction details (merrowed border, rayon thread, true satin coverage).",
        label: "Embroidered",
        body: "A photographed specimen, not a render -- merrowed border, rayon thread, true satin coverage, stated plainly.",
      },
    ],
  },
  {
    id: "quote",
    label: "Project brief",
    title: "A compact request, not a sales form.",
    description: "A short project-brief flow: what the mark needs to become, where it will live, what it needs to communicate -- required questions kept deliberately few.",
    detail: "Session recovery means a half-finished brief survives a closed tab. Keychain and pin requests show their own backing options instead of a generic form. Artwork is optional -- a sketch, a reference, or a clear description is enough to start.",
    note: "No account, no upload requirement, no forced login -- the form sends directly to the studio's inbox rather than holding a lead in a database.",
    shots: [
      {
        key: "brief",
        src: "/work/emblematic-studio-quote.png",
        width: 1425,
        height: 4195,
        alt: "The Emblematic Studio project brief form: 'Bring the idea. We'll build the route to thread,' with a four-step brief (Idea, Scope, Contact, Review) and a closing sequence describing Share, Recommend, Proof and Make.",
        label: "Project brief",
        body: "\u201cGive the idea enough structure to become a proof.\u201d Few required fields, one decision closing before the next opens.",
      },
    ],
  },
];

export default function EmblematicStudioWalkthrough() {
  return (
    <CaseStudyWalkthrough
      slug="emblematic"
      projectName="Emblematic Studio"
      eyebrow="One registry. Three things worth seeing."
      heading={<>A catalogue that compares materials,<br />not just lists them.</>}
      lead={<>The <strong>catalogue</strong> a visitor browses, one <strong>material page</strong> studied in depth, and the <strong>project brief</strong> that turns a description into a quote.</>}
      navAriaLabel="Explore the Emblematic Studio build"
      chapters={chapters}
      handoff="A material compared, a specimen studied, a brief submitted -- three steps, one typed registry behind all of them."
    />
  );
}
