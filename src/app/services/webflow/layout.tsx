import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Webflow Migration to Custom Code | PandaGen',
  description: 'Outgrown Webflow? We migrate your site to custom-coded Next.js. Stop paying $39-212/month for hosting limitations. Get full code ownership, faster loading, and real SEO.',
  keywords: [
    'Webflow migration',
    'Webflow alternative',
    'Webflow to Next.js',
    'Webflow to custom code',
    'leave Webflow',
    'Webflow replacement',
    'Webflow too expensive',
    'Webflow vs custom code',
    'Webflow limitations',
  ],
  openGraph: {
    title: 'Webflow Migration to Custom Code | PandaGen',
    description: 'Outgrown Webflow? We migrate your site to custom-coded Next.js. Stop paying premium hosting fees. Get full code ownership, faster loading, and real SEO.',
    url: 'https://www.pandacodegen.com/services/webflow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webflow Migration to Custom Code | PandaGen',
    description: 'Outgrown Webflow? We migrate your site to custom-coded Next.js. Stop paying premium hosting fees. Get full code ownership, faster loading, and real SEO.',
  },
  alternates: {
    canonical: '/services/webflow',
  },
  other: {
    'last-modified': '2026-02-17',
  },
}

export default function WebflowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
