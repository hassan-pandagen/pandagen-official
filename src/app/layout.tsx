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

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
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
    default: "PandaCodeGen | WordPress & Shopify Migration, Under 1s Load Time",
    template: "%s | PandaCodeGen",
  },
  description: "Get a free AI audit of your slow WordPress or Shopify site. We migrate to custom coded websites with load times under 1 second, zero bloat, and bank level security.",
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
    "100/100 pagespeed score",
    "wordpress to nextjs migration",
    "replace shopify with custom code",
    "custom ecommerce development",
    "web performance agency",
    "wordpress plugin bloat fix",
    "shopify alternative for businesses",
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
    title: "PandaCodeGen | WordPress & Shopify Migration, Under 1s Load Time",
    description: "Get a free AI audit of your slow WordPress or Shopify site. We migrate to custom coded websites with load times under 1 second, zero bloat, and bank level security.",
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
    title: "PandaCodeGen | WordPress & Shopify Migration, Under 1s Load Time",
    description: "Get a free AI audit of your slow WordPress or Shopify site. We migrate to custom coded websites with load times under 1 second, zero bloat, and bank level security.",
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
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-charcoal`} suppressHydrationWarning>

        {/* Preconnect to external resources for better performance */}
        <PreconnectLinks />

        <CalEmbed />
        <TawkToChat />
        <FacebookPixel />
        <MicrosoftClarity />
        <GoogleAnalytics />
        <ReferrerBanner />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
