import type { Metadata } from 'next'
import { Playfair_Display, Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Dott. Mario Colombo - Specialista in Ginecologia e Ostetricia | Milano',
    template: '%s | Dott. Mario Colombo',
  },
  description: 'Specialista in Ginecologia e Ostetricia con oltre 35 anni di esperienza. Visite a Sesto San Giovanni e Cesano Boscone. Consulenze medico-legali CTU e CTP.',
  keywords: 'ginecologo milano, ostetrico milano, ginecologo sesto san giovanni, specialista menopausa, CTU ginecologia milano',
  authors: [{ name: 'Dott. Mario Colombo' }],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://mariocolombo.it',
    siteName: 'Dott. Mario Colombo - Ginecologo',
    title: 'Dott. Mario Colombo - Specialista in Ginecologia e Ostetricia',
    description: 'Oltre 35 anni di esperienza al servizio della salute femminile a Milano',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${playfair.variable} ${openSans.variable}`}>
      <body className={`${playfair.variable} ${openSans.variable}`}>
        {/* Micro-texture overlay */}
        <div className="page-background-texture" />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
