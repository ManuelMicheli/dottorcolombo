import type { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://mariocolombo.it'),
  title: {
    default: 'Dott. Mario Colombo - Specialista in Ginecologia e Ostetricia | Milano',
    template: '%s | Dott. Mario Colombo',
  },
  description: 'Specialista in Ginecologia e Ostetricia con oltre 35 anni di esperienza. Visite a Sesto San Giovanni e Cesano Boscone. Consulenze medico-legali CTU e CTP.',
  keywords: [
    'ginecologo milano',
    'ostetrico milano',
    'ginecologo sesto san giovanni',
    'specialista menopausa milano',
    'CTU ginecologia milano',
    'consulente tecnico ostetricia',
    'perizie medico-legali ginecologiche',
    'visita ginecologica milano',
    'ginecologo cesano boscone',
  ],
  authors: [{ name: 'Dott. Mario Colombo' }],
  creator: 'Dott. Mario Colombo',
  publisher: 'Dott. Mario Colombo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://mariocolombo.it',
    siteName: 'Dott. Mario Colombo - Ginecologo',
    title: 'Dott. Mario Colombo - Specialista in Ginecologia e Ostetricia',
    description: 'Oltre 35 anni di esperienza al servizio della salute femminile a Milano',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dott. Mario Colombo - Ginecologo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dott. Mario Colombo - Specialista in Ginecologia e Ostetricia',
    description: 'Oltre 35 anni di esperienza al servizio della salute femminile a Milano',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Aggiungere i codici di verifica quando disponibili
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

