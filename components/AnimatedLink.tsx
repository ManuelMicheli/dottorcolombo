'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface AnimatedLinkProps {
  href: string
  children: ReactNode
  className?: string
  underline?: boolean
  onClick?: () => void
}

export default function AnimatedLink({
  href,
  children,
  className = '',
  underline = false,
  onClick,
}: AnimatedLinkProps) {
  const prefersReducedMotion = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <Link
      href={href}
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
      {underline && !prefersReducedMotion && (
        <motion.span
          className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
          style={{
            backgroundColor: 'var(--mc-accent-lilac)',
          }}
          variants={underlineVariants}
          initial="hidden"
          animate={isHovered ? 'visible' : 'hidden'}
        />
      )}
    </Link>
  )
}

