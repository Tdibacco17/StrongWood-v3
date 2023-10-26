import { myFont } from '@/models/localFont'
import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  applicationName: 'StrongWood®',
  viewport: 'width=device-width, initial-scale=1',
  title: 'StrongWood®',
  description: 'El balance perfecto entre hierro y madera.',
  colorScheme: 'light',
  themeColor: 'light',
  authors: {
    name: 'Tomás Di Bacco',
    url: 'https://www.linkedin.com/in/tomas-di-bacco/'
  },
  manifest: '/manifest.json'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" key="charset" />
        <meta name="copyright" content="© 2023 StrongWood - Todos los derechos reservados" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      <body className={myFont.className}>
        <main id="top">
          {children}
        </main>
      </body>
    </html>
  )
}
