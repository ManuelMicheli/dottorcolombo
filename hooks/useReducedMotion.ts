'use client'

import { useEffect, useState } from 'react'

/**
 * Hook per rilevare la preferenza prefers-reduced-motion dell'utente
 * Rispetta l'accessibilità disabilitando o riducendo le animazioni
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    // Supporto per browser più vecchi
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
    } else {
      // Fallback per browser che non supportano addEventListener su MediaQueryList
      mediaQuery.addListener(handleChange)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange)
      } else {
        mediaQuery.removeListener(handleChange)
      }
    }
  }, [])

  return prefersReducedMotion
}

/**
 * Utility per ottenere varianti di animazione ridotte quando necessario
 */
export function getReducedMotionVariants(
  prefersReducedMotion: boolean,
  normalVariants: any,
  reducedVariants?: any
) {
  if (prefersReducedMotion) {
    // Se ridotto, usa solo fade semplice o disabilita
    return reducedVariants || {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.1 } },
    }
  }
  return normalVariants
}

