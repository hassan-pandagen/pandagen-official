import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work & Portfolio',
  description: 'PandaGen portfolio: high-performance Next.js projects. Real results from WordPress migrations, Shopify headless stores, and custom apps.',
  openGraph: {
    title: 'PandaGen Portfolio - Results That Speak',
    description: 'From slow WordPress sites to blazing-fast Next.js applications. See our migrations, e-commerce builds, and custom dashboards.',
    url: 'https://www.pandacodegen.com/work',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PandaGen Portfolio - Results That Speak',
    description: 'From slow WordPress sites to blazing-fast Next.js applications. See our migrations, e-commerce builds, and custom dashboards.',
  },
  alternates: {
    canonical: '/work',
  },
  other: {
    'last-modified': '2026-02-12',
  },
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
