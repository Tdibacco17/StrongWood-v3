import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Strongwood',
  description: 'Strongwood',
  colorScheme: 'light',
  themeColor: 'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  //className={inter.className}
  return (
    <html lang="en">
      <body >
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
