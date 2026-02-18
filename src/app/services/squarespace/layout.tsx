import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Squarespace Migration to Custom Code | PandaGen',
  description: 'Outgrown Squarespace? We migrate your site to custom-coded Next.js. Faster loading, better SEO, zero monthly fees, and full code ownership.',
  keywords: [
    'Squarespace migration',
    'Squarespace alternative',
    'Squarespace to Next.js',
    'Squarespace to custom website',
    'leave Squarespace',
    'Squarespace replacement',
    'better than Squarespace',
    'Squarespace slow website',
    'Squarespace SEO problems',
  ],
  openGraph: {
    title: 'Squarespace Migration to Custom Code | PandaGen',
    description: 'Outgrown Squarespace? We migrate your site to custom-coded Next.js. Faster loading, better SEO, zero monthly fees, and full code ownership.',
    url: 'https://www.pandacodegen.com/services/squarespace',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squarespace Migration to Custom Code | PandaGen',
    description: 'Outgrown Squarespace? We migrate your site to custom-coded Next.js. Faster loading, better SEO, zero monthly fees, and full code ownership.',
  },
  alternates: {
    canonical: '/services/squarespace',
  },
  other: {
    'last-modified': '2026-02-17',
  },
}

export default function SquarespaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
