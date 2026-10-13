// Buyer-facing automation examples and service FAQs, scoped per project.
export const businessFeatureCopy = {
  heading: "You run the business. We automate the busywork.",
  intro: "An order is confirmed. A booking needs a reminder. An invoice needs sending. Tell us the steps your team repeats, and we'll build workflow automation around your business, so routine work happens without someone doing it by hand each time.",
  costs: "Some platforms charge a subscription for these features. We can build the agreed workflow into your website or business software, with no required PandaCodeGen monthly plan. We compare the build and running costs with the apps it could replace; hosting, email delivery and connected services still have their own costs.",
  cta: "Tell us what you repeat",
};

export const businessFeatures = [
  {
    title: "Can you automate order and booking emails?",
    body: "Yes. When an order is accepted or a booking is confirmed, your system can send the customer an email with the details and next steps. Your team gets the update too.",
    example: "Booking confirmed → email with the time and location",
    edits: "Message templates, recipients and when emails go out",
  },
  {
    title: "Can you send booking and payment reminders?",
    body: "Yes. Send appointment reminders before a booking or payment reminders when an invoice is due. The workflow checks the current status so paid invoices and cancelled bookings leave the reminder queue.",
    example: "Appointment tomorrow → reminder email today",
    edits: "Reminder timing, wording and when reminders stop",
  },
  {
    title: "Can my system generate PDF invoices?",
    body: "Yes. Create a branded PDF invoice from the customer and order details, then email it or make it available to download. Your team can review and approve it before it goes out.",
    example: "Order approved → PDF invoice created and emailed",
    edits: "Invoice layout, numbering and approval settings",
  },
  {
    title: "Can you stop us entering the same details twice?",
    body: "Yes. Connect your website, CRM, booking or order system so the same customer details reach the right record and teammate. We build the handoffs around your process, including any approvals your team needs.",
    example: "New enquiry → CRM record and a follow-up task",
    edits: "Agreed fields, routing and notification settings",
  },
];

// Customer questions shared with the service FAQ and assistant knowledge.
// New workflow rules or integrations are scoped development work.
export const businessAutomationFaqs = [
  ...businessFeatures.map(({ title, body }) => ({
    q: title,
    a: `${body} We check the connected systems and agree the workflow, editable settings and running costs before building.`,
  })),
  {
    q: "Can you replace paid apps with custom business software?",
    a: "Yes, when a tailored workflow is a better fit. We review what each app does, the records and connections you need, then compare the custom build, hosting, email delivery and maintenance costs with the subscriptions it could replace. Keep useful existing tools and replace the parts that do not fit your business. There is no required PandaCodeGen monthly plan, but connected providers may still charge for their services.",
  },
];
