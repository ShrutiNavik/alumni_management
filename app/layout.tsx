import './globals.css'
import type { Metadata } from 'next'
import { Providers } from '@/lib/providers'

export const metadata: Metadata = {
  title: 'AlumniConnect | Alumni Management System',
  description: 'Connect, network, and succeed with your alumni community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
