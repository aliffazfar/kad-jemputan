import { Metadata } from 'next'
import LayoutProvider from '../provider/provider'
import { Suspense } from 'react'

const title = 'Ijab Qabul: Amira & Aliff'
const description = 'Ijab Qabul: Amira & Aliff'
const creator = 'Aliff Azfar'
const url = 'https:/solemnizationofaliffandamira.my'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: '/banner.jpg',
      },
    ],
  },
  twitter: {
    title,
    description,
    card: 'summary',
    site: creator,
    creator,
    images: '/banner.jpg',
  },
  applicationName: title,
  authors: [{ name: creator }],
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  creator,
  publisher: creator,
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
