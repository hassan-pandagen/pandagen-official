import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | PandaCodeGen" },
  description: "How PandaCodeGen collects, uses, and protects your data. Last updated July 22, 2026.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | PandaCodeGen",
    description: "How PandaCodeGen collects, uses, and protects your data.",
    url: "https://www.pandacodegen.com/privacy",
    siteName: "PandaCodeGen",
    type: "website",
    images: [ogImageForPath("/privacy")],
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | PandaCodeGen",
    description: "How PandaCodeGen collects, uses, and protects your data.",
  },
  robots: { index: true, follow: true },
};

// The five legal pages were the only indexable routes without structured data.
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.pandacodegen.com/privacy#webpage",
      url: "https://www.pandacodegen.com/privacy",
      name: "Privacy Policy",
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      publisher: { "@id": "https://www.pandacodegen.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pandacodegen.com/privacy#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://www.pandacodegen.com/privacy" },
      ],
    },
  ],
};

export default function PrivacyPage() {
  return (
    <main className="bg-paper min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />

      <div className="pt-20 md:pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">

          <div className="mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-bold text-charcoal mb-4">Privacy Policy</h1>
            <p className="text-stone-600">Last updated: July 22, 2026</p>
          </div>

          <div className="space-y-8 text-stone-600 leading-relaxed">

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">1. Introduction</h2>
              <p>
                PandaCodeGen ("we," "us," or "our") operates pandacodegen.com and is the controller of personal information collected through this public website, its automated audit, and its inquiry forms. This notice explains how that information is handled when you visit the website, request an audit, submit an inquiry, or enable an optional service.
              </p>
              <p className="mt-4">
                This notice is not used to manufacture consent. Optional analytics, advertising, scheduling, and chat services remain off until you make the relevant choice. Project-specific processing is also described in the signed engagement documents where applicable.
              </p>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">2. Information We Collect</h2>

              <h3 className="text-lg font-semibold text-charcoal mb-3 mt-6">2.1 Information You Provide Directly</h3>
              <ul className="list-disc list-inside space-y-2 text-stone-600">
                <li><strong>Contact Information:</strong> Name, email address, phone number, company name, website URL, and business details when you fill out forms or contact us.</li>
                <li><strong>Project Information:</strong> Details about your project requirements, budget, timeline, and current technology stack.</li>
                <li><strong>Communication Data:</strong> Messages, files, and documents you send us through email, contact forms, or meetings.</li>
                <li><strong>Payment Information:</strong> Billing details processed through secure third-party payment processors (we do not store credit card data).</li>
              </ul>

              <h3 className="text-lg font-semibold text-charcoal mb-3 mt-6">2.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside space-y-2 text-stone-600">
                <li><strong>Usage Data:</strong> With analytics consent, pages visited, time spent, click patterns, browser information, and aggregate form milestones such as started, progressed, abandoned, errored, or completed. Form-field values are not included in these analytics events.</li>
                <li><strong>Device Information:</strong> Device type, operating system, IP address, and browser type where needed to deliver the site, protect it, or provide a service you enable.</li>
                <li><strong>Cookies and Similar Technologies:</strong> We use necessary preference storage and, only with the applicable choice, analytics, advertising, scheduling, chat, and approximate-location technologies.</li>
              </ul>

              <h3 className="text-lg font-semibold text-charcoal mb-3 mt-6">2.3 Free Website Audit Tool Data</h3>
              <p className="text-stone-600 mb-3">
                Our homepage provides a free website audit tool. When you submit a URL through this tool, we collect and process the following information for the purpose of providing the audit and tracking tool usage:
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-600">
                <li><strong>The URL You Submit:</strong> We pass it to Google PageSpeed Insights and run bounded internal checks to return the automated result. Google and our hosting infrastructure process the request under their own service terms.</li>
                <li><strong>Approximate Geographic Location:</strong> Country, region, and city may be read from Vercel request headers for abuse monitoring and, when you request an emailed summary, included in the internal notification. The application does not place the raw IP address in that message.</li>
                <li><strong>Audit Results:</strong> The response can include lab scores, detected platform, web-vital diagnostics, and issue findings. These are point-in-time automated estimates.</li>
                <li><strong>Email Address (Optional):</strong> If you ask us to email the automated summary, your email, submitted URL, result, and coarse location are sent through our email provider to deliver the confirmation and notify us of the request.</li>
              </ul>
              <p className="text-stone-600 mt-3">
                You can use the audit tool without leaving an email. Do not submit a private, confidential, or unauthorized URL. We do not create a database of partially completed forms or receive the values entered into an unfinished form; consented analytics records only aggregate milestone and field-identifier events.
              </p>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-stone-600">
                <li>To respond to your inquiries and provide customer support.</li>
                <li>To process contracts and deliver web development services.</li>
                <li>To send you project updates, proposals, and service-related communications.</li>
                <li>To improve our website functionality and user experience.</li>
                <li>To send marketing communications (with your consent).</li>
                <li>To comply with legal obligations and protect our legal rights.</li>
                <li>To detect and prevent fraud or security breaches.</li>
              </ul>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">4. How We Share Your Information</h2>
              <p>
                We do not sell, trade, or rent your personal information. We may share information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-600 mt-4">
                <li><strong>Service Providers:</strong> Vendors that help us host the site, process email and payments, and deliver requested services.</li>
                <li><strong>Optional Website Providers:</strong> When a provider is configured for the deployment and you allow its category, Google Analytics, Microsoft Clarity, and Vercel Web Analytics may provide analytics; Meta Pixel may provide advertising measurement; Cal.com may provide scheduling; and Tawk.to may provide chat.</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request.</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets.</li>
                <li><strong>With Your Consent:</strong> We will share information only with your explicit permission.</li>
              </ul>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">5. Data Security</h2>
              <p>
                We use reasonable technical and organizational safeguards appropriate to the website, including encrypted transport, access controls, bounded requests, origin checks, rate limits, dependency checks, and data minimization. No transmission or storage method is completely secure, and this statement is not a guarantee against every incident.
              </p>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">6. Your Rights and Choices</h2>
              <ul className="list-disc list-inside space-y-2 text-stone-600">
                <li><strong>Access:</strong> You can request a copy of your personal data.</li>
                <li><strong>Correction:</strong> You can request that we update or correct inaccurate information.</li>
                <li><strong>Deletion:</strong> You can request deletion of your data (subject to legal obligations).</li>
                <li><strong>Opt-Out:</strong> You can unsubscribe from marketing emails at any time.</li>
                <li><strong>Data Portability:</strong> You can request your data in a portable format.</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at <a href="mailto:info@pandacodegen.com" className="text-cognac hover:underline">info@pandacodegen.com</a>.
              </p>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                Optional browser technologies are off by default. The first-visit banner lets you accept all, reject optional services, or choose analytics, advertising, and functional services separately. You can change or withdraw a choice at any time with the persistent <strong>Cookie settings</strong> control at the lower-left of the site. We remember the selection for up to 180 days.
              </p>
              <p className="mt-4">
                The categories are:
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-600 mt-2">
                <li><strong>Necessary:</strong> Local storage that records and applies your privacy choice.</li>
                <li><strong>Analytics:</strong> Google Analytics, Microsoft Clarity, and Vercel Web Analytics.</li>
                <li><strong>Advertising:</strong> Meta Pixel.</li>
                <li><strong>Functional:</strong> Cal.com scheduling and Tawk.to chat.</li>
              </ul>
              <p className="mt-4">
                See our <a href="/cookies" className="text-cognac hover:underline">Cookie Policy</a> for the current inventory, purposes, and retention details. Browser settings provide an additional way to delete or block storage, but are not the only control available.
              </p>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to review their privacy policies before providing personal information.
              </p>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">9. Data Retention</h2>
              <p>
                We keep inquiry and project information only for the period needed to respond, administer an engagement, secure the service, resolve disputes, and meet legal or accounting duties. We periodically review whether identifiable records are still needed. Email, hosting, analytics, and scheduling providers may retain data under their configured retention periods. You may request deletion; legal, security, backup, and contractual exceptions can apply.
              </p>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">10. International Data Transfers</h2>
              <p>
                Website and communication providers may process information in countries other than the one where you live. Where transfer safeguards are legally required, the responsible contracting entity must use the appropriate provider terms or transfer mechanism; providing an inquiry is not treated as blanket consent to waive those protections.
              </p>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">11. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete the information promptly.
              </p>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will post the revised policy and its effective date here and provide any additional notice the law requires. Where a new use requires consent, we will ask for that consent instead of relying on continued use of the website.
              </p>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">13. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-stone-50 border border-stone-200 rounded-lg">
                <p className="text-charcoal font-semibold">PandaCodeGen, website operator and controller</p>
                <p>Email: <a href="mailto:info@pandacodegen.com" className="text-cognac hover:underline">info@pandacodegen.com</a></p>
                <p>Mailing address: 701 Tillery St Ste 12, Austin, TX 78702, United States.</p>
                <p>Project agreements separately record whether PandaCodeGen acts as a controller or processes project data only on a client&apos;s documented instructions.</p>
              </div>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">14. GDPR Rights (EU/UK Users)</h2>
              <p>
                If EU or UK data-protection law applies to the processing, the potential lawful bases include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-600 mt-4">
                <li><strong>Contractual necessity:</strong> To deliver the web development services you have engaged us for.</li>
                <li><strong>Legitimate interests:</strong> Fraud prevention, service security, responding to ordinary business inquiries, and essential operations, subject to the required balancing assessment.</li>
                <li><strong>Consent:</strong> For optional analytics, marketing, scheduling, chat, and related browser storage where consent is the applicable basis.</li>
                <li><strong>Legal obligation:</strong> Compliance with applicable laws and regulations.</li>
              </ul>
              <p className="mt-4">As an EEA or UK resident, you have the following rights under GDPR:</p>
              <ul className="list-disc list-inside space-y-2 text-stone-600 mt-4">
                <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data where there is no compelling reason for its continued processing.</li>
                <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your data in certain circumstances.</li>
                <li><strong>Right to Data Portability:</strong> Receive your personal data in a structured, machine-readable format.</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
                <li><strong>Rights Related to Automated Decisions:</strong> We do not make solely automated decisions that significantly affect you.</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at <a href="mailto:info@pandacodegen.com" className="text-cognac hover:underline">info@pandacodegen.com</a>. You also have the right to lodge a complaint with your local Data Protection Authority. UK residents may contact the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" className="text-cognac hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
              </p>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6 mb-16">
              <h2 className="text-2xl font-bold text-charcoal mb-4">15. CCPA Rights (California Residents)</h2>
              <p>
                If California privacy law applies to the operator and the processing, it may grant rights including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-600 mt-4">
                <li><strong>Right to Know:</strong> Request information about the categories and specific pieces of personal data we have collected, used, disclosed, or sold in the past 12 months.</li>
                <li><strong>Right to Delete:</strong> Request deletion of personal data we have collected from you, subject to certain exceptions (e.g., completing transactions, legal obligations).</li>
                <li><strong>Right to Opt Out of Sale or Sharing:</strong> We do not sell personal information. Optional marketing measurement remains off unless you allow marketing cookies, and you can withdraw that choice through Cookie settings. We also honor a browser&apos;s enabled Global Privacy Control signal by keeping marketing disabled.</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any CCPA rights, including by denying services or charging different prices.</li>
                <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information we maintain about you.</li>
                <li><strong>Right to Limit Sensitive Information:</strong> We do not collect sensitive personal information beyond what is necessary for service delivery.</li>
              </ul>
              <p className="mt-4">
                To submit a privacy request, contact us at <a href="mailto:info@pandacodegen.com" className="text-cognac hover:underline">info@pandacodegen.com</a>. We will verify and handle applicable requests within the period required by the law that governs the request. An authorized agent may be permitted where the law provides for one.
              </p>
            </FadeIn>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
