import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How PandaCodeGen handles personal information, inquiries, optional services, consent choices, retention, and privacy requests.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | PandaCodeGen',
    description: 'How PandaCodeGen handles personal information, inquiries, optional services, consent choices, retention, and privacy requests.',
    url: 'https://www.pandacodegen.com/privacy',
    siteName: 'PandaCodeGen',
    type: 'website',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
