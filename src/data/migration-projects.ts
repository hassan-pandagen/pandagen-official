/**
 * Delivery facts confirmed by Hassan Jamal, dated per entry (18 Sep 2026
 * unless noted). These describe implementation and status, not measured
 * migration outcomes. Launch status does not establish performance or business results.
 *
 * 27 Sep 2026: testing start date added for A Step Above Medical.
 * 4 Oct 2026: Hassan confirmed the scope has grown to a website plus a CRM, both about
 * 80% complete. The 1 Oct testing date is replaced by that progress note.
 * 10 Oct 2026: Hassan confirmed the build is complete and in testing.
 * 20 Oct 2026: Hassan confirmed A Step Above Medical is live.
 */
export const MIGRATION_PROJECT_DETAILS = {
  pandaPatches: {
    contentUpdatedOn: "2026-10-22",
    status: "Live",
    summary: "We rebuilt our own WordPress and WooCommerce store with Next.js, a Sanity content editor, custom product pricing and checkout. A custom Supabase backend connects the storefront to a separate operations system for orders, production, payments and reporting.",
    paymentHistory: "Panda Patches started with Stripe. We later moved its payments to Square, which is the current provider.",
    confirmedOn: "2026-09-18",
    // 13 Oct 2026: every tool below was opened live that day. The fal.ai figure is the
    // owner's dashboard for 1 to 13 Oct 2026 (one endpoint, 39 megapixels, $0.003 each).
    tools: "The store also runs six free tools we built: a thread colour chart of 719 thread codes that matches the colours in an uploaded logo on the visitor's own device, DST and PES embroidery file viewers, a DST and PES converter that works in both directions, a stitch count calculator that prices the estimate from the live pricing engine, and an AI patch generator that uses the FLUX.1 [schnell] model through fal.ai.",
    aiGeneratorCost: "fal.ai billed $0.12 for the AI patch generator from 1 to 13 October 2026: 39 megapixels of images at $0.003 per megapixel.",
    toolsCheckedOn: "2026-10-13",
    supabaseScope: "The storefront and operations portal share a Supabase backend for the database, authentication, storage buckets and Edge Functions. Customer accounts connect to order history and tracking, while role-based access supports digitizing, reseller, shipping and production workflows. Edge Functions handle server-side business logic and integrations.",
    // Owner supplied a repository folder count on 22 Oct 2026, not a live deployment audit.
    edgeFunctionsRecord: "The owner reported 47 Edge Function implementations in the CRM repository on 22 October 2026, excluding the _shared helper folder. This is a source-code count, not a verified count of functions deployed live.",
  },
  ladies4Jesus: {
    status: "Live",
    summary: "A WordPress community website rebuilt with Next.js and Sanity, so the owner can publish content and moderate visitor submissions without a developer.",
    confirmedOn: "2026-09-18",
  },
  aStepAboveMedical: {
    // Editorial revision; separate from the owner's launch confirmation.
    contentUpdatedOn: "2026-10-23",
    name: "A Step Above Medical",
    status: "Live",
    websiteUrl: "https://astepabovemed.com/",
    summary: "A complete medical training management system: a public course website, a content editor and a separate team portal for classes, students, payments and certificates. The website was rebuilt from WordPress with Next.js and Sanity; the portal uses Supabase. The project is live.",
    progress: "Project live, confirmed by the owner",
    disclosure: "Independent client project, now live. Screenshots were captured before launch and illustrate the website and portal; no live-site performance or business results are claimed.",
    confirmedOn: "2026-10-20",
  },
} as const;

export const PAYMENT_INTEGRATION_SCOPE =
  "We integrate Stripe, Square and other payment providers with your checkout and order workflow. We confirm provider availability, API access and the features you need before agreeing the scope.";
