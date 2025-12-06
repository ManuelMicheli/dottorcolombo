'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface LightBlobsProps {
  variant?: 'default' | 'competence'
  className?: string
}

/**
 * LightBlobs - Macchie di luce morbide per retroilluminazione
 * 
 * MODIFICA QUI:
 * - Velocità animazione: duration (linea ~30, ~45)
 * - Intensità: opacity (linea ~25, ~40)
 * - Dimensioni: width/height (linea ~20, ~35)
 * - Colori: background radial-gradient (linea ~22, ~37)
 */
export default function LightBlobs({ variant = 'default', className = '' }: LightBlobsProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return null
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Large blob center - retroilluminazione principale in bianco/grigio
          Animazione ondulata: drift lento con scale per effetto floating */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(250, 250, 250, 0.4) 0%, rgba(248, 248, 248, 0.2) 50%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.15, 0.95, 1.1, 1],
          x: ['-50%', '-48%', '-52%', '-49%', '-50%'],
          y: ['-50%', '-52%', '-48%', '-51%', '-50%'],
        }}
        transition={{
          duration: variant === 'competence' ? 35 : 38, /* Velocità: range 30-40s */
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Small blob right - asimmetria elegante in bianco/grigio
          Animazione ondulata: movimento più pronunciato per contrasto */}
      <motion.div
        className="absolute top-1/4 right-1/4 rounded-full blur-3xl"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(252, 252, 252, 0.35) 0%, rgba(250, 250, 250, 0.18) 50%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 0.9, 1.15, 1],
          x: [0, 30, -15, 20, 0],
          y: [0, -25, 15, -10, 0],
        }}
        transition={{
          duration: variant === 'competence' ? 40 : 42, /* Velocità: range 30-40s */
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

