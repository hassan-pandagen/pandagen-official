import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ogImageForPath } from "@/lib/seo/og";

export const metadata: Metadata = {
  title: { absolute: "Security Reporting | PandaCodeGen" },
  description: "How to report a suspected security vulnerability affecting PandaCodeGen's website or first-party APIs.",
  alternates: { canonical: "/security" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Security Reporting | PandaCodeGen",
    description: "How to report a suspected security vulnerability affecting PandaCodeGen's website or first-party APIs.",
    type: "website",
    url: "https://www.pandacodegen.com/security",
    images: [ogImageForPath("/security")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Reporting | PandaCodeGen",
    description: "How to report a suspected security vulnerability affecting PandaCodeGen's website or first-party APIs.",
    images: [ogImageForPath("/security")],
  },
};

// The five legal pages were the only indexable routes without structured data.
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.pandacodegen.com/security#webpage",
      url: "https://www.pandacodegen.com/security",
      name: "Security Reporting",
      isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
      publisher: { "@id": "https://www.pandacodegen.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pandacodegen.com/security#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
        { "@type": "ListItem", position: 2, name: "Security Reporting", item: "https://www.pandacodegen.com/security" },
      ],
    },
  ],
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-paper text-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <div className="container mx-auto max-w-3xl px-6 pb-24 pt-28 md:pt-36">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cognac">
          Responsible disclosure
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Report a security issue</h1>
        <p className="mt-6 text-lg leading-relaxed text-stone-600">
          Please report suspected vulnerabilities privately so we can investigate them without putting visitors or customer data at risk.
        </p>

        <section className="mt-12 border-t border-stone-200 pt-8" aria-labelledby="reporting">
          <h2 id="reporting" className="text-2xl font-bold">How to report</h2>
          <p className="mt-4 leading-relaxed text-stone-600">
            Email <a className="font-semibold text-cognac underline underline-offset-4" href="mailto:info@pandacodegen.com?subject=Security%20report">info@pandacodegen.com</a> with the subject <strong>Security report</strong>. Include the affected URL or component, minimal reproduction steps, expected and observed behavior, and the potential impact.
          </p>
          <p className="mt-4 leading-relaxed text-stone-600">
            Use test data and the minimum activity needed to demonstrate the issue. Do not include credentials, personal data, destructive payloads, or details in a public issue.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="scope">
          <h2 id="scope" className="text-2xl font-bold">Scope and response</h2>
          <p className="mt-4 leading-relaxed text-stone-600">
            The public website and its first-party API routes are in scope. Third-party services follow their own disclosure programs. Social engineering, denial-of-service testing, traffic that degrades the service, and accessing another person&apos;s data are out of scope.
          </p>
          <p className="mt-4 leading-relaxed text-stone-600">
            Reports are triaged by severity and reproducibility. We use provided contact details for material updates, but this public policy does not promise a fixed response or remediation deadline.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
