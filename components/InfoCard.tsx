'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeInUp } from '@/lib/motionConfig'

interface InfoCardProps {
  title: string
  content: ReactNode
  icon?: ReactNode
  variant?: 'default' | 'highlight' | 'tinted'
  className?: string
  onClick?: () => void
  selected?: boolean
}

export default function InfoCard({
  title,
  content,
  icon,
  variant = 'default',
  className = '',
  onClick,
  selected = false,
}: InfoCardProps) {
  const prefersReducedMotion = useReducedMotion()

  const variantClasses = {
    default: 'bg-bg-surface border-border-subtle',
    highlight: 'bg-primary/5 border-primary/30',
    tinted: 'bg-secondary-light/30 border-secondary/30',
  }

  const selectedClasses = selected
    ? 'bg-secondary-light/50 border-primary/50 ring-2 ring-primary/20'
    : ''

  const hoverProps = prefersReducedMotion
    ? {}
    : {
        whileHover: {
          y: -2,
          scale: 1.01,
          transition: {
            duration: 0.18,
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

  const CardComponent = onClick ? motion.button : motion.div

  return (
    <CardComponent
      className={`
        group text-left rounded-xl
        ${variantClasses[variant]} ${selectedClasses} 
        transition-all duration-200 
        ${onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2' : ''} 
        ${className}
      `}
      variants={prefersReducedMotion ? {} : fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      {...hoverProps}
      onClick={onClick}
      style={{
        boxShadow: selected
          ? '0 4px 12px rgba(0, 75, 135, 0.12)'
          : '0 1px 3px rgba(0, 0, 0, 0.05)',
        padding: '1.5rem',
      }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              boxShadow: selected
                ? '0 10px 24px rgba(0, 75, 135, 0.15)'
                : '0 8px 16px rgba(0, 75, 135, 0.08)',
              y: -2,
            }
      }
    >
      {icon && (
        <motion.div 
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
          style={{
            background: 'linear-gradient(135deg, var(--mc-primary) 0%, var(--mc-primary-dark) 50%, var(--mc-accent-lilac) 100%)',
          }}
          whileHover={prefersReducedMotion ? {} : { rotate: 5 }}
        >
          <div className="text-white w-6 h-6">
            {icon}
          </div>
        </motion.div>
      )}

      <h3 className="text-xl font-serif font-semibold text-gradient-primary mb-3 transition-all duration-200">
        {title}
      </h3>

      <div className="text-text-muted text-sm leading-relaxed">
        {content}
      </div>
    </CardComponent>
  )
}

