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
    default: "PandaGenCode | WordPress to Next.js Migration Experts",
    template: "%s | PandaGenCode",
  },
  description: "Enterprise-grade web development agency specializing in WordPress to Next.js migration. Get 10x faster websites, bank-grade security, and better SEO at WordPress prices.",
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
    siteName: "PandaGenCode",
    title: "PandaGenCode | WordPress to Next.js Migration Experts",
    description: "Enterprise-grade web development at WordPress prices. 10x faster, bank-grade security, better SEO.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PandaGenCode - Next.js Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PandaGenCode | WordPress to Next.js Migration Experts",
    description: "Enterprise-grade web development at WordPress prices. 10x faster, bank-grade security, better SEO.",
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
      <body className={`${inter.className} antialiased bg-[#050505] text-white selection:bg-neon selection:text-black`}>
        
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
