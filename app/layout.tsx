import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JsonXon Placeholder',
  keywords: ['json', 'placeholder', 'uzbek', 'jsonxon'],
  authors: [{ name: 'Uzbekify', url: 'https://uzbekify.com' }],
  creator: 'Uzbekify',
  description: 'Uzbekifying JSON Placeholder',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  )
}
