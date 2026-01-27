import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CalEmbed from "@/components/ui/CalEmbed";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PandaGenCode | WordPress to Next.js Migration Experts",
    template: "%s | PandaGenCode",
  },
  description: "Enterprise-grade web development agency specializing in WordPress to Next.js migration. Get 10x faster websites, bank-grade security, and better SEO at WordPress prices.",
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
      <body className={`${inter.className} antialiased`}>
        {/* GLOBAL AMBIENT LIGHT - Creates "Lit Room" Effect */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[120px]" />
        </div>

        <ThemeProvider>
          <CalEmbed />
          <SmoothScroll>
            {children}
            {/* Noise/Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }}
            />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
