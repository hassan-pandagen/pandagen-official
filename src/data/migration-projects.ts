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
 */
export const MIGRATION_PROJECT_DETAILS = {
  pandaPatches: {
    status: "Live",
    summary: "We rebuilt our own WordPress and WooCommerce store with Next.js, a Sanity content editor, custom product pricing and checkout. A custom Supabase backend connects the storefront to a separate operations system for orders, production, payments and reporting.",
    paymentHistory: "Panda Patches started with Stripe. We later moved its payments to Square, which is the current provider.",
    confirmedOn: "2026-09-18",
  },
  ladies4Jesus: {
    status: "Live",
    summary: "A WordPress community website rebuilt with Next.js and Sanity, so the owner can publish content and moderate visitor submissions without a developer.",
    confirmedOn: "2026-09-18",
  },
  aStepAboveMedical: {
    name: "A Step Above Medical",
    status: "In progress",
    summary: "A WordPress website being rebuilt with Next.js and Sanity, together with a CRM for the practice. The scope has grown since the project began; launch is pending.",
    progress: "Website and CRM about 80% complete",
    confirmedOn: "2026-10-04",
  },
} as const;

export const PAYMENT_INTEGRATION_SCOPE =
  "We integrate Stripe, Square and other payment providers with your checkout and order workflow. We confirm provider availability, API access and the features you need before agreeing the scope.";
