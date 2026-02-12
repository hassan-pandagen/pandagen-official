import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'PandaGenCode LLC privacy policy. Learn how we collect, use, and protect your personal information when you use our web development services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
