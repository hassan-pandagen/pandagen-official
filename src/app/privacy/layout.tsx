import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'PandaCodeGen LLC privacy policy. Learn how we collect, use, and protect your personal information when you use our web development services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | PandaCodeGen',
    description: 'PandaCodeGen LLC privacy policy. Learn how we collect, use, and protect your personal information when you use our web development services.',
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
