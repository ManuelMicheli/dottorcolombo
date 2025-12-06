import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  variant?: 'light' | 'tinted' | 'surface'
  className?: string
}

export default function Section({ children, variant = 'light', className = '' }: SectionProps) {
  const variantClasses = {
    light: 'section-light',
    tinted: 'section-tinted',
    surface: 'section-surface',
  }

  return (
    <section className={`section-padding ${variantClasses[variant]} ${className}`}>
      {children}
    </section>
  )
}

