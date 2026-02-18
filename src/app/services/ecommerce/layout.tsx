import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopify Headless & E-Commerce Development',
  description: 'Build high-performance Shopify storefronts with Next.js. Eliminate app fees, achieve 2x faster load times, and own your checkout flow.',
  keywords: [
    'Shopify headless commerce',
    'Next.js ecommerce',
    'Shopify migration',
    'custom Shopify storefront',
    'headless Shopify',
    'Shopify alternative',
    'fast Shopify store',
  ],
  openGraph: {
    title: 'Shopify Headless Development - Stop Paying App Taxes',
    description: 'Custom Shopify storefronts built with Next.js. 4x faster load times, zero monthly app fees, complete customization.',
    url: 'https://www.pandacodegen.com/services/ecommerce',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Headless Development - Stop Paying App Taxes',
    description: 'Custom Shopify storefronts built with Next.js. 4x faster load times, zero monthly app fees, complete customization.',
  },
  alternates: {
    canonical: '/services/ecommerce',
  },
  other: {
    'last-modified': '2026-02-12',
  },
}

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
