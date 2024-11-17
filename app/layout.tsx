import { Metadata } from 'next'
import LayoutProvider from '../provider/provider'
import { Suspense } from 'react'

const title = 'Ijab Qabul: Amira & Aliff'
const description = 'Ijab Qabul: Amira & Aliff'
const creator = 'Aliff Azfar'
const url = 'https://ijabqabulaliffdanamira.my'

const ogImage = {
  url: '/banner.webp',
  width: 1200,
  height: 630,
  alt: 'Ijab Qabul: Amira & Aliff Wedding',
}

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: [ogImage],
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    site: creator,
    creator,
    images: ogImage,
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
