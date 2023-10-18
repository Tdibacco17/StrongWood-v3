import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300','500','700'],
  style: 'normal',
  preload: true,
  variable: '--font-Montserrat',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'StrongWood®',
  description: 'Strongwood',
  colorScheme: 'light',
  themeColor: 'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main id="top">
          {children}
        </main>
      </body>
    </html>
  )
}
