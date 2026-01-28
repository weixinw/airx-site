import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AIRX | VC + SPV + Incubation',
  description: 'AIRX partners with scientists and tech entrepreneurs to build legendary companies. We provide funding, go-to-market support, and financial connections.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
