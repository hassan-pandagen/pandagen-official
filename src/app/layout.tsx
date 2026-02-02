import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CalEmbed from "@/components/ui/CalEmbed";
import AuroraBackground from "@/components/layout/AuroraBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://pandagencode.com'),
  title: {
    default: "PandaGen | Enterprise Next.js & Shopify Architecture",
    template: "%s | PandaGen",
  },
  description: "We migrate WordPress & Shopify sites to custom Next.js architectures. 0.1s load times. Zero bloat. Enterprise-grade security and SEO.",
  alternates: {
    canonical: '/',
  },
  keywords: [
    "WordPress to Next.js migration",
    "Next.js development agency",
    "React development services",
    "WordPress alternative",
    "enterprise web development",
    "SEO optimization",
    "web performance optimization",
    "ecommerce migration",
    "custom web development",
    "headless CMS",
  ],
  authors: [{ name: "PandaGenCode" }],
  creator: "PandaGenCode",
  publisher: "PandaGenCode",
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
    url: "https://pandagencode.com",
    siteName: "PandaGen",
    title: "PandaGen | Enterprise Next.js & Shopify Architecture",
    description: "We migrate WordPress & Shopify sites to custom Next.js architectures. 0.1s load times. Zero bloat.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PandaGen - Enterprise Next.js Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PandaGen | Enterprise Next.js & Shopify Architecture",
    description: "We migrate WordPress & Shopify sites to custom Next.js architectures. 0.1s load times. Zero bloat.",
    images: ["/og-image.jpg"],
    creator: "@pandagencode",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#050505] text-white selection:bg-neon selection:text-black`} suppressHydrationWarning>
        
        {/* Aurora Background - Living, Animated Gradient */}
        <AuroraBackground />
        
        <CalEmbed />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
