import { Metadata } from 'next'
import LayoutProvider from '../provider/provider'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Majlis Pernikahan: Amira & Aliff',
  description: 'Majlis Pernikahan: Amira & Aliff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <script
          async
          type='text/javascript'
          src='/hash-router-redirect.js'
        ></script>
      </head>
      <body>
        <LayoutProvider>
          <Suspense>{children}</Suspense>
        </LayoutProvider>
      </body>
    </html>
  )
}
