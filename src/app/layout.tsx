import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CalEmbed from "@/components/ui/CalEmbed";
import PreconnectLinks from "@/components/PreconnectLinks";
import { Analytics } from "@vercel/analytics/react";
import TawkToChat from "@/components/TawkToChat";
import FacebookPixel from "@/components/FacebookPixel";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ReferrerBanner from "@/components/ui/ReferrerBanner";
import { blogPosts } from "@/data/blog";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  // preload disabled: the 22 KiB WOFF2 was holding LCP hostage on slow mobile connections.
  // Hero LCP elements use inline fontFamily: system-ui for instant paint,
  // Inter swaps in silently once downloaded (zero CLS via adjustFontFallback).
  preload: false,
  adjustFontFallback: true,
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: 'swap',
  preload: false,
  weight: ['400'],
  style: ['italic'],
  variable: '--font-serif',
  // Tell next/font NOT to auto-generate fallback metrics — we define them manually in globals.css
  // for perfect metric matching with Georgia. Auto-calc is inaccurate for display serifs.
  adjustFontFallback: false,
  fallback: ['Playfair fallback', 'Georgia', 'Times New Roman', 'serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pandacodegen.com'),
  title: {
    default: "Custom Next.js Websites Cited by AI Search | PandaCodeGen",
    template: "%s | PandaCodeGen",
  },
  description: "We rebuild slow WordPress and Shopify into custom Next.js. Cut subscriptions 40 to 70%. 90+ PageSpeed guaranteed or full refund. Fixed pricing from $1,500.",
  alternates: {
    canonical: '/',
  },
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
    "WordPress migration",
    "custom coded website",
    "WordPress alternative",
    "enterprise web development",
    "SEO optimization",
    "web performance optimization",
    "ecommerce migration",
    "custom web development",
    "Squarespace migration",
    "Webflow migration",
    "Wix migration",
    "GoHighLevel alternative",
    "Shopify custom store",
    "website speed optimization",
    "custom website vs template",
    // Tier 2, medium competition, ranking within 60-120 days
    "wordpress migration service",
    "shopify slow loading fix",
    "custom web development agency",
    "90+ pagespeed score",
    "wordpress to nextjs migration",
    "replace shopify with custom code",
    "custom ecommerce development",
    "web performance agency",
    "wordpress plugin bloat fix",
    "shopify alternative for businesses",
    // AEO / AI-search visibility positioning
    "AI search optimization",
    "get cited by ChatGPT",
    "AEO agency",
    "generative engine optimization",
    "AI visibility for websites",
    "cut SaaS subscription costs",
    "custom code vs subscriptions",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pandacodegen.com",
    siteName: "PandaCodeGen",
    title: "Custom Next.js Websites Cited by AI Search | PandaCodeGen",
    description: "We rebuild slow WordPress and Shopify into custom Next.js. Cut subscriptions 40 to 70%. 90+ PageSpeed guaranteed or full refund. Fixed pricing from $1,500.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PandaCodeGen: Custom Coded Websites That Load in Under 1 Second",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Next.js Websites Cited by AI Search | PandaCodeGen",
    description: "We rebuild slow WordPress and Shopify sites into custom Next.js code that ChatGPT, Claude and Google AI cite, and cut your monthly subscriptions 40 to 70%. Fixed pricing from $1,500.",
    creator: "@pandacodegen",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#3B82F6',
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
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-charcoal`} suppressHydrationWarning>

        {/* Skip-navigation for keyboard + screen reader users (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-charcoal focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-bold focus:no-underline focus:outline-2 focus:outline-cognac"
        >
          Skip to main content
        </a>

        {/* Preconnect to external resources for better performance */}
        <PreconnectLinks />

        <CalEmbed />
        <TawkToChat />
        <FacebookPixel />
        <MicrosoftClarity />
        <GoogleAnalytics />
        <ReferrerBanner referrerMap={referrerMap} />
        <SmoothScroll>
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
