import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ogImageForPath } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: { absolute: "Website Terms | PandaCodeGen" },
  description: "Terms for using pandacodegen.com, its automated audit, and inquiry forms. Project services follow written terms accepted for each engagement.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Website Terms | PandaCodeGen",
    description: "Website, automated-audit, and inquiry terms for pandacodegen.com.",
    url: "https://www.pandacodegen.com/terms",
    type: "website",
    images: [ogImageForPath("/terms")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Terms | PandaCodeGen",
    description: "Website, automated-audit, and inquiry terms for pandacodegen.com.",
    images: [ogImageForPath("/terms")],
  },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Scope of these website terms",
    body: (
      <>
        <p>These terms apply to access to pandacodegen.com, the automated website audit, and inquiry forms operated under the PandaCodeGen name, the trading name of Panda Group Ventures L.L.C. They do not by themselves form a project-services contract.</p>
        <p className="mt-4">PandaCodeGen was founded in February 2026 and uses 12250 S Kirkwood Rd, Apt 1128, Stafford, TX 77477, United States as its mailing address. Each paid engagement identifies its contracting party, authorized contact, governing law, and dispute process in the written project terms accepted by both parties.</p>
      </>
    ),
  },
  {
    title: "2. Automated audit",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Submit only a public URL you are authorized to request automated diagnostics for.</li>
        <li>The audit uses third-party and internal automated checks and is a point-in-time estimate, not a penetration test, accessibility certification, legal review, or complete performance assessment.</li>
        <li>Scores and findings do not guarantee rankings, revenue, conversions, field performance, uptime, security, accessibility conformance, or AI citations.</li>
        <li>Do not use the tool to probe private networks, bypass access controls, exhaust resources, or interfere with another service.</li>
      </ul>
    ),
  },
  {
    title: "3. Inquiries and form submissions",
    body: (
      <>
        <p>Provide information you are entitled to share and keep it reasonably accurate. Do not place secrets, credentials, regulated data, malware, or unnecessary personal information in a form.</p>
        <p className="mt-4">Submitting a form authorizes us and our email infrastructure to deliver the requested response and evaluate the inquiry. It does not accept a quote, reserve capacity, or create a duty to perform work.</p>
      </>
    ),
  },
  {
    title: "4. Acceptable use",
    body: (
      <p>You may not use the site unlawfully; impersonate another person; submit malicious content; attempt unauthorized access; evade request controls; scrape or automate requests in a way that disrupts the service; or infringe intellectual-property, privacy, or other rights.</p>
    ),
  },
  {
    title: "5. Optional and third-party services",
    body: (
      <p>Analytics, advertising, scheduling, and chat services load only according to the applicable privacy choice described in the Cookie and Privacy Policies. External sites and providers have their own terms, availability, security, and data practices.</p>
    ),
  },
  {
    title: "6. Website content",
    body: (
      <p>Unless stated otherwise, the PandaCodeGen site design, text, and original materials are protected by applicable intellectual-property law. Limited ordinary viewing and sharing of links is permitted. Republishing, selling, or misleadingly presenting the materials as your own requires permission. Client-deliverable ownership and licensing are separate project-contract matters.</p>
    ),
  },
  {
    title: "7. Project engagements",
    body: (
      <>
        <p>Project services begin only after both parties accept written project terms. Those terms may be a signed proposal, statement of work, or master agreement, or a clear quote or order summary explicitly accepted in email or chat. The format is matched to the project&apos;s risk and complexity: regulated or high-risk work may need more detailed documents than a small, straightforward engagement.</p>
        <p className="mt-4">The accepted terms should cover at least the deliverables and exclusions, price and payment milestones, schedule and delivery point, acceptance, revisions and change work, cancellation and refunds, remedies, ownership and licensing, and support. Taxes, third-party costs, confidentiality, data handling, warranty, liability, governing law, and dispute terms are included when relevant. Website examples and another client&apos;s statement of work do not automatically apply to a new engagement.</p>
      </>
    ),
  },
  {
    title: "8. Package starting points",
    body: (
      <>
        <p>These are optional starting points for discussion, not automatic terms or a contract for every customer. The parties may use, change, or omit them. Only provisions expressly included in the written project terms accepted by both parties apply to an engagement.</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Starter begins at $1,500, Growth at $3,500, and Scale normally ranges from $5,000 to $10,000. Extra pages, features, and integrations are priced in a separate written scope before implementation.</li>
          <li>A common payment option is 30% at onboarding and 70% at the delivery milestone defined in the accepted project terms. The parties may agree to a different written schedule.</li>
          <li>When the accepted project terms include the 100% contracted-scope protection, PandaCodeGen refunds the project fees paid under that scope if it fails to deliver the promised deliverables. The trigger, verification, and any cure process are stated before work begins. This is not a change-of-mind or subjective-preference refund.</li>
          <li>When a refund is due or approved, PandaCodeGen normally aims to initiate it within 2-3 business days. The receiving bank or payment provider controls settlement timing, which may take up to 10-12 business days.</li>
          <li>Cancellation and any refund outside an express scope-failure protection follow the accepted project terms and the work completed at that point. PandaCodeGen may approve a goodwill exception in writing, but an exception does not create a general entitlement for other projects.</li>
          <li>Package discussions may start with 15 business days of support for Starter and 30 business days for Growth and Scale. Support applies only when recorded in the accepted project terms, which state the start milestone, covered defects or minor adjustments, response expectations, exclusions, and any bespoke arrangement.</li>
          <li>A project may include a Lighthouse handover target of 90 or higher on mobile and desktop. When included, the accepted project terms identify the representative pages, profiles, conditions, and number of recorded pre-handover runs that must meet the target.</li>
          <li>The Lighthouse target is a controlled lab acceptance condition, not a guarantee of field Core Web Vitals, rankings, traffic, revenue, AI citations, or unchanged results after client or third-party changes.</li>
          <li>After a full refund, the client retains its own content, data, brand assets, and client-owned accounts. The client receives no right to use unpaid or refunded custom code or other PandaCodeGen work product. Successful-project ownership and transfer timing remain governed by the accepted project terms.</li>
          <li>PandaCodeGen retains its reusable internal tools, templates, and pre-existing code. Third-party components remain subject to their original licenses. The accepted project terms record whether domains, hosting, repositories, and vendor accounts are client-controlled or agency-managed and how access or transfer works.</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. No external-outcome promise",
    body: (
      <p>Migration and engineering practices can reduce risk, but search engines, hosting providers, browsers, users, advertising platforms, AI systems, and market conditions remain outside our control. No website statement should be read as a guarantee of ranking, traffic, revenue, conversion, citation, uninterrupted operation, or permanent third-party pricing.</p>
    ),
  },
  {
    title: "10. Availability and responsibility",
    body: (
      <p>The public site is provided for general information and inquiry use and may change or be unavailable. Responsibility for a paid engagement is governed by its accepted written project terms and mandatory applicable law. Nothing on this page excludes a right or responsibility that cannot lawfully be excluded.</p>
    ),
  },
  {
    title: "11. Changes and contact",
    body: (
      <>
        <p>We may update these website terms when the site or applicable requirements change. The updated date will appear on this page; material project-contract changes require the process stated in that contract.</p>
        <p className="mt-4">Questions: <a href="mailto:info@pandacodegen.com" className="font-semibold text-cognac underline underline-offset-2">info@pandacodegen.com</a>.</p>
      </>
    ),
  },
];

// The five legal pages were the only indexable routes without structured data.
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.pandacodegen.com/terms#webpage",
      url: "https://www.pandacodegen.com/terms",
      name: "Website Terms",
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      publisher: { "@id": "https://www.pandacodegen.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pandacodegen.com/terms#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "Website Terms", item: "https://www.pandacodegen.com/terms" },
      ],
    },
  ],
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-paper text-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <div className="px-6 pb-20 pt-28 md:pt-36">
        <div className="mx-auto max-w-4xl">
          <header className="mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-cognac">Website notice</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Website Terms</h1>
            <p className="mt-4 text-stone-700">Last updated: July 21, 2026</p>
          </header>

          <div className="space-y-7">
            {sections.map((section) => (
              <section key={section.title} className="rounded-2xl border border-stone-300 bg-white p-6 md:p-8">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <div className="mt-4 leading-7 text-stone-700">{section.body}</div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
