import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wix Website Development & Migration',
  description: 'Outgrown Wix? We help businesses migrate from Wix to custom-coded Next.js websites. Faster loading, better SEO, zero monthly fees, and full code ownership.',
  keywords: [
    'Wix developer',
    'Wix website design',
    'Wix alternative',
    'Wix migration',
    'Wix to custom website',
    'Wix slow website fix',
    'leave Wix',
    'Wix replacement',
    'better than Wix',
  ],
  openGraph: {
    title: 'Wix Development & Migration | PandaGen',
    description: 'Outgrown Wix? We help businesses break free from slow templates and own their platform with custom-coded websites.',
    url: 'https://www.pandacodegen.com/services/wix',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wix Development & Migration | PandaGen',
    description: 'Outgrown Wix? We help businesses break free from slow templates and own their platform with custom-coded websites.',
  },
  alternates: {
    canonical: '/services/wix',
  },
  other: {
    'last-modified': '2026-02-17',
  },
}

export default function WixLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
