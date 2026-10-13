/**
 * Delivery facts confirmed by Hassan Jamal, dated per entry (18 Sep 2026
 * unless noted). These describe implementation and status, not measured
 * migration outcomes. A Step Above Medical stays outside the completed
 * case-study registry until launch. Its public domain still must not be
 * presented as our delivered build.
 *
 * 27 Sep 2026: testing start date added for A Step Above Medical.
 * 4 Oct 2026: Hassan confirmed the scope has grown to a website plus a CRM, both about
 * 80% complete. The 1 Oct testing date is replaced by that progress note.
 * 10 Oct 2026: Hassan confirmed the build is complete and in testing.
 */
export const MIGRATION_PROJECT_DETAILS = {
  pandaPatches: {
    status: "Live",
    summary: "We rebuilt our own WordPress and WooCommerce store with Next.js, a Sanity content editor, custom product pricing and checkout. A custom Supabase backend connects the storefront to a separate operations system for orders, production, payments and reporting.",
    paymentHistory: "Panda Patches started with Stripe. We later moved its payments to Square, which is the current provider.",
    confirmedOn: "2026-09-18",
    // 13 Oct 2026: every tool below was opened live that day. The fal.ai figure is the
    // owner's dashboard for 1 to 13 Oct 2026 (one endpoint, 39 megapixels, $0.003 each).
    tools: "The store also runs six free tools we built: a thread colour chart of 719 thread codes that matches the colours in an uploaded logo on the visitor's own device, DST and PES embroidery file viewers, a DST and PES converter that works in both directions, a stitch count calculator that prices the estimate from the live pricing engine, and an AI patch generator that uses the FLUX.1 [schnell] model through fal.ai.",
    aiGeneratorCost: "fal.ai billed $0.12 for the AI patch generator from 1 to 13 October 2026: 39 megapixels of images at $0.003 per megapixel.",
    toolsCheckedOn: "2026-10-13",
  },
  ladies4Jesus: {
    status: "Live",
    summary: "A WordPress community website rebuilt with Next.js and Sanity, so the owner can publish content and moderate visitor submissions without a developer.",
    confirmedOn: "2026-09-18",
  },
  aStepAboveMedical: {
    name: "A Step Above Medical",
    status: "In testing",
    plannedLaunchOn: "2026-10-19",
    summary: "A complete medical training management system: a public course website, a content editor and a separate team portal for classes, students, payments and certificates. The website was rebuilt from WordPress with Next.js and Sanity; the portal uses Supabase. The build is complete and undergoing pre-launch testing.",
    progress: "Website and operations portal built; pre-launch testing underway",
    disclosure: "Independent client project. The build is complete and in pre-launch testing. Screenshots show the new website and portal before launch; no live-site performance or business results are claimed.",
    confirmedOn: "2026-10-10",
  },
} as const;

export const PAYMENT_INTEGRATION_SCOPE =
  "We integrate Stripe, Square and other payment providers with your checkout and order workflow. We confirm provider availability, API access and the features you need before agreeing the scope.";
