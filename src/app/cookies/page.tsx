import { ogImageForPath } from "@/lib/seo/og";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: { absolute: "Cookie Policy | PandaCodeGen" },
  description: "How PandaCodeGen uses cookies and similar technologies. Last updated July 22, 2026.",
  alternates: { canonical: "/cookies" },
  openGraph: {
    title: "Cookie Policy | PandaCodeGen",
    description: "How PandaCodeGen uses cookies and similar technologies. Last updated July 22, 2026.",
    url: "https://www.pandacodegen.com/cookies",
    siteName: "PandaCodeGen",
    type: "website",
    images: [ogImageForPath("/cookies")],
  },
  twitter: {
    card: "summary",
    title: "Cookie Policy | PandaCodeGen",
    description: "How PandaCodeGen uses cookies and similar technologies.",
  },
  robots: { index: true, follow: true },
};

const rows = [
  {
    service: "PandaCodeGen consent preferences",
    category: "Strictly necessary",
    examples: "pandacodegen_consent_v1 (local storage)",
    duration: "Up to 180 days",
    purpose: "Stores the cookie choices you make so the site can respect them.",
  },
  {
    service: "Google Analytics 4",
    category: "Analytics",
    examples: "_ga, _ga_*",
    duration: "Provider-controlled and account-configured",
    purpose: "Measures visits and interactions when analytics is allowed.",
  },
  {
    service: "Microsoft Clarity",
    category: "Analytics",
    examples: "_clck, _clsk and related identifiers",
    duration: "Provider-controlled",
    purpose: "Provides usage and session-interaction insights when analytics is allowed.",
  },
  {
    service: "Vercel Web Analytics",
    category: "Analytics",
    examples: "May use browser or request identifiers",
    duration: "Provider-controlled",
    purpose: "Measures site traffic when analytics is allowed.",
  },
  {
    service: "Meta Pixel",
    category: "Marketing",
    examples: "_fbp, _fbc and related identifiers",
    duration: "Provider-controlled",
    purpose: "Measures advertising performance and conversions when marketing is allowed.",
  },
  {
    service: "Cal.com",
    category: "Functional",
    examples: "Booking-session storage and cookies",
    duration: "Session or provider-controlled",
    purpose: "Loads the appointment-booking interface when functional services are allowed.",
  },
  {
    service: "Tawk.to",
    category: "Functional",
    examples: "Chat/session storage and trafficSource",
    duration: "Session or provider-controlled",
    purpose: "Enables live chat and referral context when functional services are allowed.",
  },
] as const;

// The five legal pages were the only indexable routes without structured data.
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.pandacodegen.com/cookies#webpage",
      url: "https://www.pandacodegen.com/cookies",
      name: "Cookie Policy",
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      publisher: { "@id": "https://www.pandacodegen.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pandacodegen.com/cookies#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "Cookie Policy", item: "https://www.pandacodegen.com/cookies" },
      ],
    },
  ],
};

export default function CookiesPage() {
  return (
    <main className="bg-paper min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />

      <div className="pt-20 md:pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-bold text-charcoal mb-4">Cookie Policy</h1>
            <p className="text-stone-600">Last updated: July 22, 2026</p>
          </div>

          <div className="space-y-8 text-stone-600 leading-relaxed">
            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">1. Scope</h2>
              <p>
                This policy explains how PandaCodeGen uses cookies, local storage, pixels, scripts,
                and similar browser technologies on this website. These technologies can remember
                settings, measure use of the site, support advertising measurement, or enable
                features such as scheduling and live chat.
              </p>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">2. Your choices</h2>
              <p>
                Optional services are off by default. On your first visit, you can accept all
                optional categories, reject them, or choose categories individually. Rejecting
                optional services does not prevent access to the main website.
              </p>
              <p className="mt-4">
                You can review or withdraw a choice at any time with the persistent <strong>Cookie
                settings</strong> control at the lower-left of the site. Withdrawing a previously
                allowed category reloads the page so its scripts and embedded services stop. We
                remember your selection for up to 180 days, after which we ask again.
              </p>
              <p className="mt-4">
                If you try to open scheduling or live chat before allowing functional services,
                the site asks for that choice at the time. We do not treat continued browsing as
                consent.
              </p>
              <p className="mt-4">
                If your browser sends an enabled Global Privacy Control signal, the site keeps the
                marketing category disabled. You can still choose analytics and functional services
                separately.
              </p>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">3. Categories</h2>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">Strictly necessary</h3>
              <p>
                The site stores your consent selection so it can apply your choices. This storage
                cannot be switched off in our preference center because it is needed to remember
                the choice itself.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">Analytics</h3>
              <p>
                Google Analytics, Microsoft Clarity, and Vercel Web Analytics help us understand
                traffic, interactions, technical performance, and aggregate lead-form funnel
                milestones such as start, progress, validation, abandonment, and completion. We do
                not send the values typed into form fields as analytics events. Their client-side
                code loads only after you allow analytics.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">Marketing</h3>
              <p>
                Meta Pixel measures advertising activity and conversions. It loads only after you
                allow marketing. We do not load a fallback tracking pixel when marketing is denied.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mb-2 mt-6">Functional</h3>
              <p>
                Cal.com provides appointment scheduling. Tawk.to provides live chat, and the chat
                setup may request approximate IP-based location and referral context. These
                services and requests load only after you allow functional services.
              </p>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">4. Current technology list</h2>
              <p className="mb-4">
                Exact names and lifetimes can change when providers update their services. The list
                below describes optional technologies the codebase supports. A provider is active
                only when the deployment has a verified configuration and you allow its category.
              </p>

              <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Scrollable table">
                <table className="w-full min-w-[760px] text-sm border border-stone-200 rounded-lg overflow-hidden">
                  <caption className="sr-only">Current cookie and browser-storage technology inventory</caption>
                  <thead className="bg-stone-50">
                    <tr className="border-b border-stone-200">
                      <th className="px-4 py-3 text-left text-charcoal font-bold">Service</th>
                      <th className="px-4 py-3 text-left text-charcoal font-bold">Category</th>
                      <th className="px-4 py-3 text-left text-charcoal font-bold">Examples</th>
                      <th className="px-4 py-3 text-left text-charcoal font-bold">Duration</th>
                      <th className="px-4 py-3 text-left text-charcoal font-bold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {rows.map((row) => (
                      <tr key={row.service}>
                        <td className="px-4 py-3 font-medium text-charcoal">{row.service}</td>
                        <td className="px-4 py-3">{row.category}</td>
                        <td className="px-4 py-3">{row.examples}</td>
                        <td className="px-4 py-3">{row.duration}</td>
                        <td className="px-4 py-3">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">5. Browser controls and vendor policies</h2>
              <p>
                You can also delete or block browser storage through your browser. Doing so may
                remove your saved preference and cause the consent prompt to appear again. Browser
                controls cannot replace our in-site settings for services that use requests or
                scripts without cookies.
              </p>
              <p className="mt-4">
                Third-party providers process information under their own privacy and retention
                terms. Their settings and storage names may change independently of PandaCodeGen.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Google Privacy Policy</a></li>
                <li><a href="https://www.microsoft.com/en-us/privacy/privacystatement" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Microsoft Privacy Statement</a></li>
                <li><a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Meta Privacy Policy</a></li>
                <li><a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Vercel Privacy Notice</a></li>
                <li><a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Cal.com Privacy Policy</a></li>
                <li><a href="https://www.tawk.to/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Tawk.to Privacy Policy</a></li>
              </ul>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">6. Changes to this policy</h2>
              <p>
                We may update this policy when our services, providers, or legal obligations change.
                We will publish the new date here. Where a new use requires consent, we will ask
                for that consent instead of relying on continued use of the website.
              </p>
            </FadeIn>

            <FadeIn as="section" className="border-l-2 border-stone-300 pl-6 mb-16">
              <h2 className="text-2xl font-bold text-charcoal mb-4">7. Contact us</h2>
              <p>
                For questions about these technologies or your choices, contact us. For more about
                how we handle personal data, read our{" "}
                <a href="/privacy" className="text-cognac hover:underline">Privacy Policy</a>.
              </p>
              <div className="mt-4 p-4 bg-stone-50 border border-stone-200 rounded-lg">
                <p className="text-charcoal font-semibold">PandaCodeGen, website operator and controller</p>
                <p>
                  Email:{" "}
                  <a href="mailto:info@pandacodegen.com" className="text-cognac hover:underline">
                    info@pandacodegen.com
                  </a>
                </p>
                <p className="mt-2 text-sm">Mailing address: 12250 S Kirkwood Rd, Apt 1128, Stafford, TX 77477, United States.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
