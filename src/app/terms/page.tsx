import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service | PandaCodeGen" },
  description: "The terms governing your use of PandaCodeGen services. Last updated January 26, 2026.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | PandaCodeGen",
    description: "The terms governing your use of PandaCodeGen services.",
    url: "https://www.pandacodegen.com/terms",
    siteName: "PandaCodeGen",
    type: "website",
    images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | PandaCodeGen",
    description: "The terms governing your use of PandaCodeGen services.",
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="bg-paper min-h-screen">
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]" />
      <Header />
      
      <div className="pt-20 md:pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          
          <div className="mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-bold text-charcoal mb-4">Terms of Service</h1>
            <p className="text-stone-600">Last updated: January 26, 2026</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-stone-600 leading-relaxed">
            
            {/* Section 1 */}
            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">1. Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and PandaCodeGen LLC ("Company," "we," "us," or "our"). By accessing our website and engaging with our services, you agree to be bound by these Terms. If you do not agree, do not use our services.
              </p>
            </FadeIn>

            {/* Section 2 */}
            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">2. Services Description</h2>
              <p>
                PandaCodeGen provides web development services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-600 mt-4">
                <li>WordPress to Next.js migration</li>
                <li>Custom web application development</li>
                <li>E-commerce solutions and Shopify integration</li>
                <li>SaaS platform engineering and architecture</li>
                <li>Web performance optimization and SEO</li>
                <li>Full-stack development and consulting</li>
              </ul>
              <p className="mt-4">
                Services are provided on a project basis with fixed pricing, timelines, and deliverables as outlined in signed project agreements or proposals.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-3 mt-6">2.1 Free Website Audit Tool</h3>
              <p className="text-stone-600 mb-3">
                PandaCodeGen provides a free website audit tool on our homepage. This tool is provided as-is for informational purposes. By submitting a URL through the audit tool, you agree to the following:
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-600">
                <li>The URL you submit is processed against the Google PageSpeed Insights API and our internal performance checks. You confirm you have the right to request an audit of the URL you submit.</li>
                <li>You may use the audit tool freely without providing an email address. The on-screen results are yours to keep.</li>
                <li>If you choose to receive a polished PDF report and personal video walkthrough, you provide your email address. We will use your email only to deliver the report and respond to questions about it. We will not add your email to a marketing list without consent.</li>
                <li>Audit results are estimates based on third-party APIs and our own checks. They are accurate to the best of our knowledge but are not a guarantee of search ranking, conversion rate, or revenue impact.</li>
                <li>We may store anonymous usage statistics (URL audited, performance score, approximate location) to understand tool usage. See our Privacy Policy for full details.</li>
              </ul>
            </FadeIn>

            {/* Section 3 */}
            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">3. Payment Terms and Satisfaction Guarantee</h2>
              
              <h3 className="text-lg font-semibold text-charcoal mb-3 mt-6">3.1 Pricing and Quotes</h3>
              <ul className="list-disc list-inside space-y-2 text-stone-600">
                <li>All quotes are provided in USD and are valid for 14 days unless otherwise stated.</li>
                <li>Pricing is fixed and does not include changes beyond the project scope.</li>
                <li>Out-of-scope changes will be quoted separately and require written approval.</li>
              </ul>

              <h3 className="text-lg font-semibold text-charcoal mb-3 mt-6">3.2 Payment Schedule</h3>
              <ul className="list-disc list-inside space-y-2 text-stone-600">
                <li>Typically 30% deposit upon project start, 70% upon delivery and acceptance.</li>
                <li>Custom payment arrangements available based on project size and timeline.</li>
                <li>Payment methods include bank transfer and credit card (via secure processors).</li>
              </ul>

              <h3 className="text-lg font-semibold text-charcoal mb-3 mt-6">3.3 Late Payments</h3>
              <p>
                Invoices are due within 30 days of issuance. Late payments may incur a 1.5% monthly interest charge. Projects may be paused until outstanding balances are settled.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-3 mt-6">3.4 Satisfaction Guarantee & Refund Policy</h3>
              <p className="font-semibold text-cognac mb-3">
                We stand behind our work. If you're not satisfied with the deliverables, we make it right.
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-600">
                <li><strong>30-Day Satisfaction Guarantee:</strong> Within 30 days of project delivery, if you are not satisfied with the quality of work, we will refund 100% of your final payment (70% of total project cost).</li>
                <li><strong>Full Code Ownership:</strong> You receive 100% ownership of all custom code, designs, and deliverables. We transfer all source code, databases, assets, and documentation immediately upon delivery.</li>
                <li><strong>Free 1-Month Support:</strong> Included with every project delivery. During this period, we provide unlimited bug fixes, minor updates, and technical support at no additional cost.</li>
                <li><strong>No Questions Asked:</strong> If you decide the work isn't right for you within 30 days, request a refund. No lengthy explanations required.</li>
                <li><strong>What This Means:</strong> You only pay the final 70% if you are genuinely satisfied. This ensures we deliver excellence every time.</li>
              </ul>

              <div className="mt-6 p-4 bg-stone-50 border border-stone-300 rounded-lg">
                <p className="text-cognac font-semibold mb-2">Risk-Free Engagement</p>
                <p className="text-stone-600 text-sm">
                  Our 30-day satisfaction guarantee combined with free 1-month support means you have zero risk. Get full code ownership, expert support, and if it's not right, get your final payment back.
                </p>
              </div>
            </FadeIn>

            {/* Section 4 */}
            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">4. Intellectual Property Rights</h2>
              
              <h3 className="text-lg font-semibold text-charcoal mb-3 mt-6">4.1 Code Ownership</h3>
              <p>
                Upon full payment, all custom code, designs, and deliverables created for your project become your property. You receive 100% ownership of the codebase and have the right to modify, redistribute, or relicense it.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-3 mt-6">4.2 Pre-Existing Work</h3>
              <p>
                Any tools, frameworks, libraries, or methodologies developed by PandaCodeGen prior to your project remain our intellectual property. You receive a perpetual license to use these within your project.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-3 mt-6">4.3 Third-Party Components</h3>
              <p>
                Projects may utilize open-source libraries and third-party services. Your use of these components is governed by their respective licenses. We comply with all open-source license requirements.
              </p>
            </FadeIn>

            {/* Section 5 */}
            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">5. Client Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-stone-600">
                <li>Provide clear, detailed project requirements and feedback in a timely manner.</li>
                <li>Approve designs and functionality within agreed review periods.</li>
                <li>Ensure all content, assets, and data provided are legally owned or licensed.</li>
                <li>Maintain website security (e.g., updating plugins, managing backups) after delivery.</li>
                <li>Pay invoices on time according to the agreed schedule.</li>
                <li>Communicate project changes as soon as possible to avoid delays.</li>
              </ul>
            </FadeIn>

            {/* Section 6 */}
            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">6. Timeline and Delivery</h2>
              
              <h3 className="text-lg font-semibold text-charcoal mb-3 mt-6">6.1 Project Timeline</h3>
              <p>
                Timelines are estimates based on the scope, complexity, and client feedback responsiveness. Delays caused by client feedback, content provision, or third-party dependencies may extend timelines.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-3 mt-6">6.2 Acceptance and Revisions</h3>
              <p>
                Deliverables include revisions per the agreed scope. Additional revisions beyond the contracted amount will be billed at $100/hour. Final acceptance occurs when the client acknowledges the deliverables meet requirements.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-3 mt-6">6.3 Maintenance and Support</h3>
              <p>
                Post-delivery support (bug fixes, updates, maintenance) is available via fixed-price support packages or a fixed-scope quote for the work requested. We do not bill hourly. Warranty covers critical bugs for 30 days post-launch.
              </p>
            </FadeIn>

            {/* Section 7 */}
            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">7. Confidentiality</h2>
              <p>
                Both parties agree to maintain confidentiality regarding proprietary information, business strategies, and project details disclosed during the engagement. This obligation survives project completion for 2 years.
              </p>
              <p className="mt-4">
                Exceptions include: information legally required to be disclosed, information already public, or information we can use as a case study with your written permission.
              </p>
            </FadeIn>

            {/* Section 8 */}
            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, PandaCodeGen is not liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-600 mt-4">
                <li>Indirect, incidental, or consequential damages.</li>
                <li>Loss of revenue, data, or business interruption.</li>
                <li>Damages exceeding the total amount paid for services.</li>
              </ul>
              <p className="mt-4">
                We are not responsible for third-party service failures (hosting providers, payment processors, CDNs) unless directly caused by our negligence.
              </p>
            </FadeIn>

            {/* Section 9 */}
            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">9. Warranty Disclaimer</h2>
              <p>
                Our services are provided "as is" without warranties of any kind, express or implied. We do not guarantee:
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-600 mt-4">
                <li>Uninterrupted or error-free operation.</li>
                <li>Specific performance or results (e.g., ranking in search engines).</li>
                <li>Compatibility with all browsers or devices (beyond industry standards).</li>
              </ul>
              <p className="mt-4">
                We warrant that deliverables will be substantially free from defects for 30 days post-delivery.
              </p>
            </FadeIn>

            {/* Section 10 */}
            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">10. Termination</h2>
              <p>
                Either party may terminate a project with 14 days written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-600 mt-4">
                <li>You remain responsible for payment of all work completed to date.</li>
                <li>We will deliver all completed code and assets.</li>
                <li>Any prepaid amounts may be credited toward completed work or forfeited.</li>
              </ul>
            </FadeIn>

            {/* Section 11 */}
            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">11. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless PandaCodeGen from any claims arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-stone-600 mt-4">
                <li>Content or assets you provided that infringe third-party rights.</li>
                <li>Your use of the deliverables in ways not approved by us.</li>
                <li>Modifications to our work made by parties other than PandaCodeGen.</li>
              </ul>
            </FadeIn>

            {/* Section 12 */}
            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">12. Dispute Resolution</h2>
              <p>
                Any disputes arising from these Terms or our services shall be governed by the laws of the State of Texas, USA. Both parties agree to attempt informal resolution before pursuing legal action.
              </p>
              <p className="mt-4">
                If disputes cannot be resolved informally, binding arbitration shall be pursued under American Arbitration Association (AAA) rules.
              </p>
            </FadeIn>

            {/* Section 13 */}
            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">13. Changes to Terms</h2>
              <p>
                We may update these Terms to reflect changes in our services or legal requirements. We will notify you of material changes via email or website notice. Your continued use of our services constitutes acceptance.
              </p>
            </FadeIn>

            {/* Section 14 */}
            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6 mb-16">
              <h2 className="text-2xl font-bold text-charcoal mb-4">14. Contact Information</h2>
              <p>
                For questions about these Terms or to report violations, please contact us:
              </p>
              <div className="mt-4 p-4 bg-stone-50 border border-stone-200 rounded-lg">
                <p className="text-charcoal font-semibold">PandaCodeGen LLC</p>
                <p>701 Tillery St Ste 12</p>
                <p>Austin, TX 78702, USA</p>
                <p>Email: <a href="mailto:info@pandacodegen.com" className="text-cognac hover:underline">info@pandacodegen.com</a></p>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
