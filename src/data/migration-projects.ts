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
    contentUpdatedOn: "2026-10-30",
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
  // CRM case-study editorial date, independent of the storefront and measured project facts.
  enterpriseOps: {
    contentUpdatedOn: "2026-10-30",
  },
  ladies4Jesus: {
    status: "Live",
    summary: "A WordPress community website rebuilt with Next.js and Sanity, so the owner can publish content and moderate visitor submissions without a developer.",
    confirmedOn: "2026-09-18",
  },
  aStepAboveMedical: {
    // Editorial revision; separate from the owner's launch confirmation.
    contentUpdatedOn: "2026-11-14",
    name: "A Step Above Medical",
    status: "Live",
    websiteUrl: "https://astepabovemed.com/",
    summary: "A complete medical training management system: a public course website, a content editor and a separate team portal for classes, students, payments and certificates. The website was rebuilt from WordPress with Next.js and Sanity; the portal uses Supabase. The project is live.",
    progress: "Project live, confirmed by the owner",
    disclosure: "Independent client project, now live. The separately described Search Console observations come from owner-supplied screenshots reviewed on 11 November 2026; they are visibility evidence, not booking or revenue results.",
    confirmedOn: "2026-10-20",
    // 19 Nov 2026: the first-month counts, stated once. The case study and the
    // AI-facing surfaces (ai-info, llms.txt, assistant) all read this. Method:
    // portal database, equal 30-day windows by booking date (Pacific), staff-added,
    // abandoned, cancelled and test bookings excluded. Any multiplier is added by
    // the page that uses it, not here.
    // 19 Nov 2026: dates and what counted are now in the sentence itself, so no surface can
    // quote the counts without them. The 7 are bookings made through the old website only;
    // phone bookings and staff-added bookings are excluded from both periods.
    firstMonthResult: "From 20 September to 19 October, the 30 days before launch, 7 bookings came through the old website. From 20 October to 18 November, the first 30 days on the new system, students made 37 bookings online, the portal sent 170 automated student emails, and 9 certificates went out after an administrator approved each student's completion. Both counts include website bookings only, not bookings taken by phone or added by staff.",
    // 19 Nov 2026: Google Ads account, same two windows: spend rose about 27% (amounts not
    // published). The monthly budget setting stayed the same; actual spend did not.
    // 20 Nov 2026: Imran confirmed 27% (the published line had said "about 25%").
    adBudgetNote: "Google Ads spend rose about 27% between the two periods.",
    // 20 Nov 2026: moved here from the case study (Design.tsx) so blog posts can quote it
    // without retyping. Source: Imran's Google Ads audit, 19 Nov 2026. The 559 homepage-view
    // "conversions" in the month before launch were approved for publication by Imran on
    // 20 Nov. Google credits 4 first-month bookings directly to ads, so no surface may tie
    // the ads to the 37 bookings.
    adsFix: "The old campaigns bid for conversions, but the only conversion they counted was a view of the homepage: 559 in the month before launch, and none of them was a booking. So Google bought the cheapest homepage visits it could find. Registrations, form fills and calls weren't measured at all. Their Performance Max campaign targeted the whole United States across Google's display and video network, for a school that teaches in a handful of cities. We replaced them with three search campaigns, for phlebotomy classes, IV therapy classes and the school's own name, each targeting a 40-mile radius around the cities where it teaches, with keywords people type when looking for a class, such as \"phlebotomy classes near me\" and \"iv therapy course\". Each paid registration is now sent to Google Ads from the server, by the same Supabase backend that runs the bookings, so the tracking doesn't depend on the visitor's browser and refunds are adjusted automatically. The old campaigns ran for part of the first month before they were paused.",
  },
} as const;

export const PAYMENT_INTEGRATION_SCOPE =
  "We integrate Stripe, Square and other payment providers with your checkout and order workflow. We confirm provider availability, API access and the features you need before agreeing the scope.";
