import RestyledShell from "@/components/redesign/RestyledShell";
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

// 30 Sep 2026: the redesign shell for this route; the page content is
// unchanged. See src/components/redesign/RestyledShell.tsx.
export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RestyledShell kind="legal">{children}</RestyledShell>
}
