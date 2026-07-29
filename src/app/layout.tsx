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
  keywords: [
    "website migration service",
    "SEO-safe website migration",
    "WordPress to Next.js migration",
    "Webflow migration",
    "Wix migration",
    "Squarespace migration",
    "GoHighLevel website migration",
    "custom Next.js development",
    "headless Shopify development",
  ],
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
