import CaseStudyWalkthrough, { type WalkthroughChapter } from "./CaseStudyWalkthrough";

// Screenshots retaken from the live site (emblematicstudio.com), 2 Oct 2026,
// at 1440x900 in a clean browser with the scroll animations allowed to finish.
// The first set (owner-supplied build milestones, 18-23 Jul 2026) had been
// captured from a dev server: the Next.js dev badge was baked into the
// images, animations were caught half-drawn, and the quote screen still
// showed placeholder "prototype" copy. The live quote page has also changed
// since then ("Tell us just enough to start."), so its captions now quote
// what is on screen today. Chapter copy is checked against the current repo
// (C:\Projects\Emblematic-studio): the session draft, the product-specific
// backing options and the email handoff are all still in
// components/quote/ProjectBrief.tsx and app/api/quote/route.ts.
const chapters: WalkthroughChapter[] = [
  {
    id: "catalogue",
    label: "Catalogue",
    title: "One registry, every material.",
    description: "The homepage introduces the studio, then routes into a catalogue of 22 product types across patches, keychains, enamel pins and challenge coins. Eight of them have their own in-depth material comparison page.",
    detail: "Every material is judged on the same terms: detail, depth, exposure, colour and tone, not which one trended this year. A visitor compares all eight before choosing where to start.",
    note: "The registry that drives this comparison page is the same one behind the mega-menu, the individual product pages and the quote form's own options: one source, not eight maintained separately.",
    shots: [
      {
        key: "homepage",
        src: "/work/emblematic-studio-home.png",
        width: 1440,
        height: 900,
        alt: "The Emblematic Studio homepage: 'A mark you can feel,' with an embroidered mountain patch labelled Specimen 001 beside its vector line drawing.",
        label: "Homepage",
        body: "An embroidered specimen shown next to its own vector drawing: the artwork before the thread.",
      },
      {
        key: "materials",
        src: "/work/emblematic-studio-library.png",
        width: 1440,
        height: 900,
        alt: "The patches page listing materials with photos (Embroidered, Chenille, Woven, PVC / Rubber), each with 'Choose when' and 'Watch for' notes.",
        label: "Eight materials",
        body: "Each material says when to choose it and what to watch for, so the trade-off is stated up front.",
      },
      {
        key: "compare",
        src: "/work/emblematic-studio-compare.png",
        width: 1440,
        height: 900,
        alt: "The side-by-side table, 'Compare behavior, including the compromise,' rating eight constructions on detail, relief, color and surface.",
        label: "Compare all eight",
        body: "One table rates every construction on detail, relief, color and surface.",
      },
    ],
  },
  {
    id: "product-page",
    label: "Material page",
    title: "One material, studied in depth.",
    description: "Each of the eight materials gets its own page. This one's Embroidered, the flagship construction, with a real photographed specimen instead of a rendered mockup.",
    detail: "Satin and fill stitch on twill, described in terms a buyer actually needs: merrowed border, rayon thread, true satin coverage, thread direction as part of the drawing itself.",
    note: "One of eight material pages, all built from the same typed registry, so a new material means extending one entry, not writing a new page from scratch.",
    shots: [
      {
        key: "embroidered",
        src: "/work/emblematic-studio-embroidered.png",
        width: 1440,
        height: 900,
        alt: "The Embroidered material page: 'Thread direction becomes part of the drawing,' with a moth patch specimen labelled Study 03.",
        label: "Embroidered",
        body: "A photographed specimen with the construction stated plainly: merrowed border, rayon thread, true satin coverage.",
      },
      {
        key: "direction-test",
        src: "/work/emblematic-studio-direction-test.png",
        width: 1440,
        height: 900,
        alt: "The direction test: 'Turn the stitch path. Watch the surface change,' above an interactive panel with the moth patch.",
        label: "Direction test",
        body: "Move the control and the stitch angle changes, to show why direction is a design decision.",
      },
    ],
  },
  {
    id: "quote",
    label: "Project brief",
    title: "A compact request, not a sales form.",
    description: "A short project-brief flow: what the mark needs to become, where it will live, what it needs to communicate, with required questions kept deliberately few.",
    detail: "Session recovery means a half-finished brief survives a closed tab. Keychain and pin requests show their own backing options instead of a generic form. Artwork is optional: a sketch, a reference or a clear description is enough to start.",
    note: "No account, no upload requirement, no forced login. The form sends directly to the studio's inbox rather than holding a lead in a database.",
    shots: [
      {
        key: "start",
        src: "/work/emblematic-studio-quote-start.png",
        width: 1440,
        height: 900,
        alt: "The quote page: 'Tell us just enough to start,' with notes on time (about two minutes), artwork (optional at this stage) and next step (WhatsApp, email or call).",
        label: "Start a project",
        body: "\u201cTell us just enough to start.\u201d About two minutes, artwork optional, and a reply by WhatsApp, email or call.",
      },
      {
        key: "form",
        src: "/work/emblematic-studio-quote-form.png",
        width: 1440,
        height: 900,
        alt: "The short quote form, 'Just the essentials,' asking for name, company name, contact number and email address.",
        label: "The short form",
        body: "Product, size, quantity and backing, plus contact details. The closing note is optional.",
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
      heading={<>Compare eight materials<br />side by side.</>}
      lead={<>The <strong>catalogue</strong> a visitor browses, one <strong>material page</strong> studied in depth, and the <strong>project brief</strong> that turns a description into a quote.</>}
      navAriaLabel="Explore the Emblematic Studio build"
      chapters={chapters}
      handoff="A material compared, a specimen studied, a brief submitted: three steps, one typed registry behind all of them."
    />
  );
}
