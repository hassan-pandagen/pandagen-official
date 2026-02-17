import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GoHighLevel Website & Funnel Development',
  description: 'Professional GoHighLevel funnel development and migration. We build custom-coded landing pages that integrate with GHL CRM for faster loading, better SEO, and lower ad costs.',
  keywords: [
    'GoHighLevel developer',
    'GHL funnel builder',
    'GoHighLevel website',
    'GHL landing pages',
    'GoHighLevel alternative',
    'GHL website developer',
    'GoHighLevel funnel optimization',
    'GHL integration',
    'GoHighLevel custom website',
  ],
  openGraph: {
    title: 'GoHighLevel Development & Migration | PandaGen',
    description: 'Keep GHL for CRM. Upgrade your funnels to custom-coded pages that load instantly, rank on Google, and convert 2-3x better.',
    url: 'https://www.pandacodegen.com/services/gohighlevel',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoHighLevel Development & Migration | PandaGen',
    description: 'Keep GHL for CRM. Upgrade your funnels to custom-coded pages that load instantly, rank on Google, and convert 2-3x better.',
  },
  alternates: {
    canonical: '/services/gohighlevel',
  },
  other: {
    'last-modified': '2026-02-17',
  },
}

export default function GoHighLevelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
