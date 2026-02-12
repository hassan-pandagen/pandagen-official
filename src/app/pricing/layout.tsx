import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing & Investment',
  description: 'Transparent, fixed-price Next.js development packages. From $2,500 landing pages to enterprise migrations. No hourly billing - we charge for outcomes, not hours.',
  keywords: [
    'Next.js development pricing',
    'WordPress migration cost',
    'web development packages',
    'fixed price web development',
    'Shopify migration pricing',
    'custom web app cost',
  ],
  openGraph: {
    title: 'PandaGen Pricing - Simple, Transparent Investment',
    description: 'Fixed-price web development packages starting at $2,500. No hourly billing, guaranteed results. 30-day money-back guarantee.',
    url: 'https://www.pandacodegen.com/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PandaGen Pricing - Simple, Transparent Investment',
    description: 'Fixed-price web development packages starting at $2,500. No hourly billing, guaranteed results. 30-day money-back guarantee.',
  },
  alternates: {
    canonical: '/pricing',
  },
  other: {
    'last-modified': '2026-02-12',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
