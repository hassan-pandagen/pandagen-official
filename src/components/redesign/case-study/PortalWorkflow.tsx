import { BODY, DISPLAY, T } from "@/components/redesign/tokens";

// Live workflows supplied by Hassan on 30 October 2026. No outcome metrics inferred.
const workflows = {
  patches: {
    intro: "Our founder-affiliated Panda Patches store connects orders, customer approvals and production in one operations portal.",
    steps: ["Order", "Mockup", "Approval and payment", "Production", "Delivery"],
    items: [
      ["Orders reach the right team", "New orders arrive in one place and are routed to the appropriate team. Rush orders have their own board, with ship-by deadlines calculated in working days."],
      ["Mockups have a follow-up clock", "Each new order starts a 24-business-hour mockup timer. Overdue mockups are flagged, with unresolved alerts escalating to the team lead and then management. Uploading a mockup triggers a customer approval email."],
      ["Payments connect to production", "Staff create Square card or PayPal payment links in one click. Invoices are generated from the order, deposit payments notify the responsible person, and paid orders move to production."],
      ["Conversations stay with the order", "Each order has tasks and chat. Teammate mentions trigger phone or laptop push notifications, overdue tasks are flagged, and each person sees their tasks and chats in urgency order."],
      ["Shipping updates stay connected", "The floor board shows each job's production status. Courier tracking is pulled into the order so customers receive shipping updates without staff retyping them."],
      ["Resellers place their own orders", "Reseller partners use a separate ordering portal connected to the same pricing engine as the public website."],
    ],
  },
  medical: {
    intro: "Routine booking and class administration runs automatically, with items needing a human brought into one Needs attention list.",
    steps: ["Booking", "Registration", "Class preparation", "Attendance", "Certificate"],
    items: [
      ["Seats follow booking status", "Online booking and payment reserve a seat within the class capacity. Unpaid holds expire and release the seat, and waitlists help fill places as they become available."],
      ["Students and instructors get the details", "New bookings alert the owner and trigger student confirmation emails. Class details go out before the session, and instructors receive their class rosters."],
      ["Group bookings keep individual records", "Someone can book seats for others, with each attendee receiving a link to complete registration. Signed terms stay with each booking."],
      ["Attendance leads to certificates", "Staff record attendance and late arrivals for each day. Certificates are emailed after the class, keeping completion administration in the same workflow."],
      ["Payments stay matched to students", "Payments are matched to the correct student and sync to QuickBooks every 30 minutes. Refunds and transfers remain in the records."],
      ["Advertising follows paid bookings", "Paid bookings are reported to Google Ads, and refunds trigger conversion adjustments. This connects advertising measurement to recorded payments and refunds."],
    ],
  },
};

export default function PortalWorkflow({ project }: { project: keyof typeof workflows }) {
  const workflow = workflows[project];
  const id = `${project}-daily-workflow`;
  return (
    <section aria-labelledby={id} className="px-6 py-10 md:px-10 md:py-16" style={{ backgroundColor: T.paperHi }}>
      <div className="mx-auto max-w-[1100px]">
        <h2 id={id} style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", lineHeight: 1.1, color: T.ink }}>How it works day to day</h2>
        <p className="mt-4 max-w-[48rem] text-base leading-relaxed" style={{ color: T.body }}>{workflow.intro}</p>
        <ol aria-label="Workflow stages" className="my-8 grid gap-3 sm:grid-cols-5">
          {workflow.steps.map((step, index) => <li key={step} className="border-l-2 pl-3 text-sm font-semibold" style={{ borderColor: T.accentText, color: T.ink }}><span className="block text-xs mb-1" style={{ color: T.quiet }}>0{index + 1}</span>{step}</li>)}
        </ol>
        <dl className="grid gap-x-10 md:grid-cols-2" style={{ fontFamily: BODY }}>
          {workflow.items.map(([title, body]) => <div key={title} className="border-t py-5" style={{ borderColor: T.rule }}><dt className="font-semibold" style={{ color: T.ink }}>{title}</dt><dd className="mt-2 text-base leading-relaxed" style={{ color: T.body }}>{body}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}
