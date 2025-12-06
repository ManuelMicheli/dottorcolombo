'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface UseCountUpOptions {
  end: number
  duration?: number
  start?: number
  decimals?: number
  suffix?: string
  prefix?: string
}

/**
 * Hook per animare un numero da start a end quando entra nel viewport
 */
export function useCountUp({
  end,
  duration = 2000,
  start = 0,
  decimals = 0,
  suffix = '',
  prefix = '',
}: UseCountUpOptions) {
  const [count, setCount] = useState(start)
  const [hasAnimated, setHasAnimated] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
      const startTime = Date.now()
      const difference = end - start

      const animate = () => {
        const now = Date.now()
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3)

        const current = start + difference * easeOut
        setCount(current)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [inView, hasAnimated, end, start, duration])

  const formattedCount = count.toFixed(decimals)
  const displayValue = `${prefix}${formattedCount}${suffix}`

  return { ref, count: displayValue, inView }
}

