'use client'

import { useInView } from 'react-intersection-observer'
import { useAnimation, AnimationControls } from 'framer-motion'
import { useEffect } from 'react'
import { useReducedMotion } from './useReducedMotion'

interface UseInViewAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

/**
 * Hook per animazioni basate su Intersection Observer
 * Restituisce ref e controls per Framer Motion
 */
export function useInViewAnimation(
  options: UseInViewAnimationOptions = {}
): {
  ref: (node?: Element | null) => void
  controls: AnimationControls
  inView: boolean
} {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px 0px -50px 0px',
  } = options

  const prefersReducedMotion = useReducedMotion()
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  })

  useEffect(() => {
    if (inView && !prefersReducedMotion) {
      controls.start('visible')
    } else if (inView && prefersReducedMotion) {
      // Per reduced motion, usa solo fade semplice
      controls.start({
        opacity: 1,
        transition: { duration: 0.1 },
      })
    }
  }, [controls, inView, prefersReducedMotion])

  return { ref, controls, inView }
}

