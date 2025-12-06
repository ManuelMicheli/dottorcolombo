import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contatti e Prenotazioni - Dott. Mario Colombo',
  description: 'Prenota una visita ginecologica o ostetrica. Contatti per Studio Sesto San Giovanni e Casa di Cura Cesano Boscone. Consulenze medico-legali.',
}

export default function ContattiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

