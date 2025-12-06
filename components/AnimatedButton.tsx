'use client'

import { motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { scaleOnHoverButton, scaleOnTapButton } from '@/lib/motionConfig'

interface AnimatedButtonProps extends MotionProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  href?: string
  as?: 'button' | 'a'
}

export default function AnimatedButton({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  href,
  as = 'button',
  ...motionProps
}: AnimatedButtonProps) {
  const prefersReducedMotion = useReducedMotion()

  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  const combinedClasses = `${baseClasses} ${className}`

  const hoverProps = prefersReducedMotion
    ? {}
    : {
        whileHover: {
          ...scaleOnHoverButton,
          boxShadow: '0 4px 12px rgba(0, 75, 135, 0.2)',
        },
        whileTap: scaleOnTapButton,
      }

  const commonProps = {
    className: combinedClasses,
    disabled,
    ...hoverProps,
    ...motionProps,
  }

  if (as === 'a' && href) {
    return (
      <motion.a
        href={href}
        {...commonProps}
        onClick={onClick}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      {...commonProps}
    >
      {children}
    </motion.button>
  )
}

