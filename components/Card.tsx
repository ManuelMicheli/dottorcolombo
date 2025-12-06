'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeInUp } from '@/lib/motionConfig'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient'
  hover?: boolean
  onClick?: () => void
  icon?: ReactNode
  title?: string
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({
  children,
  className = '',
  variant = 'default',
  hover = true,
  onClick,
  icon,
  title,
  padding = 'md',
}: CardProps) {
  const prefersReducedMotion = useReducedMotion()

  const variantClasses = {
    default: 'bg-bg-surface border border-border-subtle',
    elevated: 'bg-bg-surface border-0 shadow-md',
    outlined: 'bg-transparent border-2 border-primary/20',
    gradient: 'bg-gradient-to-br from-primary/5 via-transparent to-accent-lilac/5 border border-primary/10',
  }

  const paddingClasses = {
    sm: 'p-4 sm:p-5',
    md: 'p-5 sm:p-6 md:p-8',
    lg: 'p-6 sm:p-8 md:p-10 lg:p-12',
  }

  const hoverProps = hover && !prefersReducedMotion
    ? {
        whileHover: {
          y: -2,
          scale: 1.01,
          transition: {
            duration: 0.2,
            ease: [0.16, 1, 0.3, 1],
          },
        },
        whileTap: onClick
          ? {
              scale: 0.99,
              transition: {
                duration: 0.1,
              },
            }
          : {},
      }
    : {}

  const CardComponent = onClick ? motion.button : motion.div

  return (
    <CardComponent
      className={`
        ${variantClasses[variant]} 
        ${paddingClasses[padding]} 
        rounded-xl 
        transition-all duration-200
        ${onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2' : ''}
        ${hover && !onClick ? 'hover:shadow-lg hover:border-primary/30' : ''}
        ${className}
      `}
      variants={prefersReducedMotion ? {} : fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      {...hoverProps}
      onClick={onClick}
      style={{
        boxShadow: variant === 'elevated' 
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
          : '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
      whileHover={
        hover && !prefersReducedMotion
          ? {
              boxShadow: variant === 'elevated'
                ? '0 10px 15px -3px rgba(0, 75, 135, 0.1), 0 4px 6px -2px rgba(0, 75, 135, 0.05)'
                : '0 8px 16px rgba(0, 75, 135, 0.08)',
            }
          : {}
      }
    >
      {icon && (
        <div className="mb-4">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, var(--mc-primary) 0%, var(--mc-primary-dark) 50%, var(--mc-accent-lilac) 100%)',
            }}
          >
            <div className="text-white w-6 h-6">
              {icon}
            </div>
          </div>
        </div>
      )}

      {title && (
        <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-gradient-primary mb-3 sm:mb-4">
          {title}
        </h3>
      )}

      <div className="text-text-muted leading-relaxed">
        {children}
      </div>
    </CardComponent>
  )
}

