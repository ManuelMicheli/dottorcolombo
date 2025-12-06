'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedBackgroundProps {
  children: React.ReactNode
  className?: string
}

export default function AnimatedBackground({ children, className = '' }: AnimatedBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(163, 211, 208, 0.1) 0%, rgba(164, 125, 171, 0.08) 50%, rgba(163, 211, 208, 0.1) 100%)',
          opacity,
          scale,
        }}
      />
      {children}
    </div>
  )
}

