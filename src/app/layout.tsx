import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import HtmlShell from "@/components/layout/HtmlShell";
import ReferrerBanner from "@/components/ui/ReferrerBanner";
import { blogPosts } from "@/data/blog";
import { ConsentProvider } from "@/components/consent/ConsentProvider";
import ConsentManagedServices from "@/components/consent/ConsentManagedServices";
import CookieConsent from "@/components/consent/CookieConsent";
import { PHONE } from "@/data/company-facts";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  adjustFontFallback: false,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pandacodegen.com'),
  title: {
    default: "SEO-Safe Website Migrations | PandaCodeGen",
    template: "%s | PandaCodeGen",
  },
  description: "SEO-safe website migrations for revenue-generating WordPress, Webflow, and GoHighLevel sites, with URLs, content, analytics, integrations, and cutover mapped before launch.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: "/manifest.json",
  // Domain-ownership proofs for third-party directories. `verification.other`
  // is Next's escape hatch for providers it has no first-class field for; it
  // emits a plain <meta name="..." content="..."> in <head>.
  //
  // These are proofs, not claims — they assert only that we control this domain,
  // so they carry none of the evidence obligations the rest of the site does.
  // Keep them here rather than hand-writing a <meta> into the document: the tag
  // then survives any head refactor and cannot be duplicated on a child route.
  verification: {
    other: {
      // Verified Agencies Index (vai.me), added 12 Aug 2026.
      "vaime-verify": "vaime-site-MxabpGKunFfb2RLT9ixdfDrjlxSzz0Gw",
    },
  },
  authors: [{ name: "PandaCodeGen" }],
  creator: "PandaCodeGen",
  publisher: "PandaCodeGen",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#B8410C',
};


const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.pandacodegen.com/#website",
      url: "https://www.pandacodegen.com",
      name: "PandaCodeGen",
      publisher: { "@id": "https://www.pandacodegen.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://www.pandacodegen.com/#organization",
      name: "PandaCodeGen",
      alternateName: "Panda Code Gen",
      url: "https://www.pandacodegen.com",
      logo: { "@type": "ImageObject", url: "https://www.pandacodegen.com/logo.png", width: 655, height: 113 },
      // telephone added 11 Aug 2026, from PHONE in company-facts.ts. NAP facts
      // (name, address, phone) only corroborate an entity when they are identical
      // everywhere, so this renders from the same constant as the header rather
      // than being retyped here.
      telephone: PHONE.e164,
      contactPoint: { "@type": "ContactPoint", contactType: "Customer Service", email: "info@pandacodegen.com", telephone: PHONE.e164 },
      description: "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses migrating from slow or costly platforms. Performance targets, test conditions, acceptance criteria, and remedies are defined in each signed scope.",
      areaServed: "Worldwide",
      foundingDate: "2026",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Build a lean slug → title map server-side and pass to ReferrerBanner as a prop.
  // This keeps the heavy server-only blog.ts (with all 248 FAQ entries) out of the
  // client bundle that ships on every page via the layout.
  const referrerMap: Record<string, string> = Object.fromEntries(
    blogPosts.map((p) => [p.id, p.title])
  );

  return (
    <HtmlShell
      bodyClassName={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-charcoal`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph) }}
      />
      <ConsentProvider>
          {/* Skip-navigation for keyboard + screen reader users (WCAG 2.4.1) */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-charcoal focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-bold focus:no-underline focus:outline-2 focus:outline-cognac"
          >
            Skip to main content
          </a>

          <ConsentManagedServices />
          <ReferrerBanner referrerMap={referrerMap} />
          <SmoothScroll>
            <div id="main-content" tabIndex={-1}>
              {children}
            </div>
          </SmoothScroll>
          <CookieConsent />
      </ConsentProvider>
    </HtmlShell>
  );
}
