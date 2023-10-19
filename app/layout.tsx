import { myFont } from '@/models/localFont'
import './globals.css'
import type { Metadata } from 'next'

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
      <body className={myFont.className}>
        <main id="top">
          {children}
        </main>
      </body>
    </html>
  )
}
