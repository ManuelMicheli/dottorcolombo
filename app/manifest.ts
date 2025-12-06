import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dott. Mario Colombo - Ginecologo',
    short_name: 'Dott. Colombo',
    description: 'Specialista in Ginecologia e Ostetricia con oltre 35 anni di esperienza',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1E4D7B',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

