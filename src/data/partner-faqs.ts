// The /partners FAQ. One list for the visible rows and the FAQPage data in
// src/app/partners/page.tsx, so the schema always matches the page (10 Oct 2026).
// It lives here, not in PartnersContent, because that file is a client component
// and a server page cannot read plain data from one.
export const partnerFaqs: readonly { q: string; a: string }[] = [
  {
    q: "Do you sign NDAs before we share client details?",
    a: "Yes. Mutual NDA signed before you send us a single client detail. We have a standard template ready (takes 5 minutes to sign). Your client relationship stays yours, end to end. We communicate only with you.",
  },
  {
    q: "Will our clients know PandaCodeGen is building the site?",
    a: "No. We stay completely invisible. Your GitHub, your Vercel deployment, your custom domain, your brand emails if you want them routed that way. Your client sees YOUR agency as the builder.",
  },
  {
    q: "What if the client wants to meet the developer?",
    a: "Your call. You can loop us in as a \"senior engineering partner\" on the call (no branding mentioned), or keep us fully invisible. Most partners keep us invisible. Some introduce us as their \"dev team lead.\" We follow your lead.",
  },
  {
    q: "How does the white-label handoff actually work?",
    a: "We push the code to YOUR GitHub repo, deploy to YOUR Vercel account, use YOUR brand colors in any internal docs, and hand over complete source code + documentation. You own everything from day one. If you ever stop working with us, the site keeps running untouched.",
  },
  {
    q: "What's the minimum commitment?",
    a: "Referral Partner: zero commitment. Send a lead, get commission, done. White-Label Partner: one paid pilot project to start, no minimums after that. Ongoing volume is whatever suits your pipeline; nothing is committed unless the partner agreement says so.",
  },
  {
    q: "How fast can you start on a project?",
    a: "Usually within about a week of brief approval, subject to current capacity. Rush timelines can sometimes be arranged. Build duration depends on scope; the committed dates for your project are the ones written into the accepted terms, not a published average.",
  },
  {
    q: "What happens if my client asks for changes after launch?",
    a: "The project's included support applies: 15 calendar days for Starter builds and 30 for Growth, Scale and upgraded projects, starting the day the site goes live. In that time we fix issues in the work we delivered and help your team use it, and any bug or glitch in the work we delivered, or anything missing from the agreed scope, is fixed at no charge even after that period. New pages, features, integrations and larger changes are quoted to you at our internal cost before work starts, and you set your client's price.",
  },
  {
    q: "What technologies do you build with?",
    a: "WordPress, where it suits the pages, editing needs and budget. Custom builds use Next.js, React, TypeScript and Tailwind CSS, with Sanity as the CMS, Supabase or Postgres for data, Stripe for payments and Vercel for hosting. Builds carry a 90+ Lighthouse handover target on mobile and desktop for the agreed representative pages, verified across three recorded runs before handover.",
  },
];
