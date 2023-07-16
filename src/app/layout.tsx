import './globals.scss'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import Providers from './providers'

const font = Oswald({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Formula Furious',
  description: 'Formula One Meets Fast & Furious',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
