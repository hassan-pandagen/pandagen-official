import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services & Capabilities',
  description: 'Expert Next.js development services: WordPress migration, Shopify headless commerce, and custom web application development. Fixed pricing, guaranteed results.',
  openGraph: {
    title: 'PandaGen Services - Enterprise Next.js Development',
    description: 'WordPress migrations, Shopify optimization, and custom SaaS applications built with modern architecture.',
    url: 'https://www.pandacodegen.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PandaGen Services - Enterprise Next.js Development',
    description: 'WordPress migrations, Shopify optimization, and custom SaaS applications built with modern architecture.',
  },
  alternates: {
    canonical: '/services',
  },
  other: {
    'last-modified': '2026-02-12',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
