import CaseStudyWalkthrough, { type WalkthroughChapter } from "./CaseStudyWalkthrough";

// Screenshots taken from the live preview (sleek-jackets.vercel.app), 30 Sep
// 2026, after its intro overlay. The store is a private preview: its own
// banner reads "Private preview, Purchases are not live", visible in the
// collection shot. Prices shown are the preview catalogue's own.
const chapters: WalkthroughChapter[] = [
  {
    id: "storefront",
    label: "Storefront",
    title: "Product first, from the first screen.",
    description:
      "The homepage opens on a carousel of jackets, then a short curated edit, then a closer look at one design.",
    detail:
      "The Core Edit shows four lambskin jackets with their prices. “Character is in the details” takes one jacket, the Blake Harrington, apart: collar, zip front, leather, lining and fit.",
    note: "Outerwear sells on material and fit, so the page gives the product room instead of a crowded grid.",
    shots: [
      {
        key: "hero",
        src: "/work/sleek-jackets-hero.png",
        width: 1600,
        height: 900,
        alt: "Sleek Jackets homepage: a carousel of leather jackets on a dark rock background above the large SLEEK wordmark.",
        label: "Homepage",
        body: "The collection is the first thing a visitor sees.",
      },
      {
        key: "core-edit",
        src: "/work/sleek-jackets-core-edit.png",
        width: 1600,
        height: 900,
        alt: "The Core Edit: four lambskin leather jackets (Blake Harrington, Grayson biker, Dakota quilted jacket, Vintage waxed jacket) with prices.",
        label: "The Core Edit",
        body: "Four jackets, each with its style, material and price.",
      },
      {
        key: "details",
        src: "/work/sleek-jackets-details.png",
        width: 1600,
        height: 900,
        alt: "'Character is in the details.': a close product shot of the Blake Harrington beside its description and three details: lambskin leather, regular fit, zip closure.",
        label: "A closer look",
        body: "One design explained piece by piece.",
      },
    ],
  },
  {
    id: "collection",
    label: "Collection",
    title: "A full catalogue, filtered by style.",
    description:
      "Collection pages for men and women, filtered by style (biker, bomber, Harrington, varsity, coats) and sortable.",
    detail: "The men's collection lists 126 pieces. The banner at the top of every page reads “Private preview, Purchases are not live”.",
    note: "Checkout and payments come with a launch decision. The catalogue and product pages are built.",
    shots: [
      {
        key: "collection",
        src: "/work/sleek-jackets-collection.png",
        width: 1600,
        height: 900,
        alt: "The 'Outerwear for him.' collection page: style filters, 126 pieces, sorting, and the Private preview banner at the top.",
        label: "Outerwear for him",
        body: "Style filters and sorting across the whole catalogue.",
      },
    ],
  },
];

export default function SleekJacketsWalkthrough() {
  return (
    <CaseStudyWalkthrough
      slug="sleek-jackets"
      projectName="Sleek Jackets"
      eyebrow="An outerwear store, in private preview."
      heading={<>A storefront that lets{" "}<br />the product <em>lead.</em></>}
      lead={<>The <strong>storefront</strong> a shopper lands on, and the <strong>collection</strong> behind it.</>}
      navAriaLabel="Explore the Sleek Jackets build"
      chapters={chapters}
      handoff="Built as far as a launch decision: catalogue and product pages done, checkout waiting on it."
    />
  );
}
