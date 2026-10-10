import CaseStudyWalkthrough, { type WalkthroughChapter } from "./CaseStudyWalkthrough";

// Owner-supplied screenshots, 10 October 2026. Use the redacted permissions
// image only; the original staff list is kept outside public/ in private-assets/.
const chapters: WalkthroughChapter[] = [
  {
    id: "orders",
    label: "Customers and orders",
    title: "Keep the whole order together.",
    description: "The team records the customer, product, artwork, delivery details and payment information in one order. Staff can see what needs to happen next without piecing the job together from separate messages.",
    detail: "The form includes a lead source, order status and an optional shipping reminder. Files have their own places for proofs, production artwork and delivery labels.",
    note: "This is an empty order form. No customer record is shown.",
    shots: [
      {
        key: "new-order", src: "/work/panda-patches-crm-new-order.png", width: 1920, height: 3236,
        alt: "Panda Patches custom CRM order form with customer details, product specifications, shipping, artwork uploads, payment fields and order status",
        label: "From customer details to a working order",
        body: "The complete order form, including the information the sales and production teams need to hand over a job.",
      },
    ],
  },
  {
    id: "team",
    label: "Team access",
    title: "A workspace for the people doing the work.",
    description: "Team members sign in to the CRM. Their role determines which records and actions they can use, from sales and production to shipping and administration.",
    detail: "An administrator manages accounts and permissions. The wider build enforces access in the database as well as the application, so hiding a button is not the only access check.",
    note: "Names, personal emails and permission details are obscured in the published staff-list screenshot.",
    shots: [
      {
        key: "sign-in", src: "/work/panda-patches-crm-sign-in.png", width: 1920, height: 945,
        alt: "Panda Patches CRM sign-in screen with email and masked password fields",
        label: "A separate team sign-in",
        body: "The staff workspace has its own sign-in, separate from the public Panda Patches store.",
      },
      {
        key: "permissions", src: "/work/panda-patches-crm-permissions.png", width: 1787, height: 880,
        alt: "CRM user-management screen showing staff roles and active accounts, with names, emails and permission details redacted",
        label: "Roles for sales, production and administration",
        body: "The account-management screen shows roles and account status. Personal information has been hidden.",
      },
    ],
  },
  {
    id: "reports",
    label: "Reporting",
    title: "See where enquiries and orders come from.",
    description: "The team can review lead sources alongside orders and order values. Discovery records combine captured referral information with what customers tell us in quote forms and the CRM.",
    detail: "The charts and tables offer different views of the records. The orders-to-quotes ratio compares separate counts in a period; it is not a matched-customer conversion rate and can exceed 100%.",
    note: "These screenshots show the reporting interface. Their selected date range is not visible, so the figures are not presented here as a dated revenue result or proof that a channel caused a sale.",
    shots: [
      {
        key: "sources", src: "/work/panda-patches-crm-source-reports.png", width: 1920, height: 945,
        alt: "CRM reporting interface with source tables and charts for orders, recorded revenue and lead distribution",
        label: "Source reporting in one view",
        body: "The team can compare recorded sources using tables and charts without assembling a separate spreadsheet.",
      },
      {
        key: "source-orders", src: "/work/panda-patches-crm-source-orders.png", width: 1920, height: 945,
        alt: "CRM lead-source report with a bar chart and a table of lead counts, order counts and booked order values",
        label: "From a chart to the underlying totals",
        body: "The table separates leads, orders and booked order value. Booked value is not the same as cash collected.",
      },
    ],
  },
];

export default function PandaPatchesCrmWalkthrough() {
  return (
    <CaseStudyWalkthrough
      slug="panda-patches-crm"
      projectName="Panda Patches CRM"
      eyebrow="Inside our custom CRM"
      heading={<>One workspace.<br />The team&apos;s working day.</>}
      lead={<>A custom CRM built around how the Panda Patches team manages customers, orders and the work that follows. These screens show the order form, team access and reporting.</>}
      navAriaLabel="Explore the custom CRM"
      chapters={chapters}
      handoff="For a CRM built around your team, start with one real workflow: who receives the enquiry, who does the work, and what each person needs to see. That becomes the scope for a useful first release."
    />
  );
}
