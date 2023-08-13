import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from 'src/components/footer'
import Header from 'src/components/Home Page/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Videvo',
  description: 'Get Stock Videos & audio to brighten up your site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Header /> {children} <Footer /> </body>
    </html>
  )
}
