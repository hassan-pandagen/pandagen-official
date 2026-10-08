import CaseStudyWalkthrough, { type WalkthroughChapter } from "./CaseStudyWalkthrough";

// Real screenshots taken live, 28 Sep 2026 (mycustompatches.net), supplied
// by the project owner. Three chapters, each grounded in exactly what's
// visible in its screenshot -- no claim here goes further than that.
const chapters: WalkthroughChapter[] = [
  {
    id: "storefront",
    label: "Storefront",
    title: "Eight categories, one entry point.",
    description: "The public storefront: patch types organized as category cards, each leading to its own product page.",
    detail: "Chenille, PVC, woven, leather, shoe charms and embroidery are among the categories on the homepage, each with a short description and a direct link into that category's product page.",
    note: "The homepage also carries an instant-quote entry point and a live chat widget, visible in the corner of this screenshot.",
    shots: [
      {
        key: "categories",
        src: "/work/mycustompatches-categories.png",
        width: 1912,
        height: 914,
        alt: "The MyCustomPatches homepage showing category cards for Custom Chenille, PVC, Woven, Leather, Shoes Charm and Embroidery Patches.",
        label: "Category grid",
        body: "Each category card links straight into that product's own page -- the same shared template every category runs on.",
      },
    ],
  },
  {
    id: "product-template",
    label: "Product template",
    title: "One template, every category.",
    description: "Every product category page runs on the same shared template -- this one's Custom Chenille Patches, but the layout, fields and CTA are identical across all eight.",
    detail: "A photo gallery, a feature checklist, and the specifics that actually change a customer's decision: turnaround time (12 to 14 days standard, 4 to 7 days rush), minimum order quantity (as low as 50 units), and what's included (professional digitization, free revisions).",
    note: "This is the same ProductPageTemplate component referenced in the migration record -- one template change applies to all eight category pages at once.",
    shots: [
      {
        key: "chenille",
        src: "/work/mycustompatches-product-template.png",
        width: 1912,
        height: 914,
        alt: "The Custom Chenille Patches product page, showing a photo gallery, a feature checklist and turnaround/MOQ details.",
        label: "Custom Chenille Patches",
        body: "12–14 day standard turnaround, 4–7 day rush, MOQ as low as 50 units -- the specifics a buyer actually needs, not filler copy.",
      },
    ],
  },
  {
    id: "process",
    label: "Order process",
    title: "Design to finished patches, four steps.",
    description: "The page that explains how an order actually moves: submit a design, approve a mockup, wait for production, receive finished patches.",
    detail: "Submit Your Design (professional digitization included) → Approve Your Mockup (free revisions until perfect) → Production Begins (US quality standards) → Receive Ready Patches (12 to 14 days standard turnaround).",
    note: "Each of the four steps has its own “Get Quote Now” button, rather than routing every visitor to one generic contact form.",
    shots: [
      {
        key: "process",
        src: "/work/mycustompatches-process.png",
        width: 1912,
        height: 914,
        alt: "The MyCustomPatches 'Your production partner from design to finished patches' page, showing four steps: Submit Your Design, Approve Your Mockup, Production Begins, Receive Ready Patches.",
        label: "Design to production",
        body: "Four steps, each with its own detail and its own path to a quote -- not one generic “how it works” paragraph.",
      },
    ],
  },
];

export default function MyCustomPatchesWalkthrough() {
  return (
    <CaseStudyWalkthrough
      slug="mycustompatches"
      projectName="MyCustomPatches"
      eyebrow="One storefront, one template, one process."
      heading={<>A store built on one <em>template,</em>{" "}<br />backed by a real process.</>}
      lead={<>The <strong>storefront</strong> customers browse, the <strong>product template</strong> that runs every category page, and the <strong>order process</strong> behind each purchase.</>}
      navAriaLabel="Explore the MyCustomPatches build"
      chapters={chapters}
      handoff="Design submitted, mockup approved, patches produced -- the same four-step process and the same product template across all eight categories."
    />
  );
}
