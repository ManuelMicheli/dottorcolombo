'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface TimelineItem {
  year: string
  title: string
  description: string
  icon?: React.ReactNode
  variant?: 'primary' | 'gradient' | 'accent'
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export default function Timeline({ items, className = '' }: TimelineProps) {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const lineVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
        type: 'spring',
        stiffness: 200,
      },
    },
  }

  const getVariantStyles = (variant: string = 'primary') => {
    const styles = {
      primary: {
        dot: 'bg-primary',
        line: 'bg-primary',
        glow: 'shadow-primary/20',
      },
      gradient: {
        dot: 'bg-gradient-to-br from-primary via-primary-dark to-accent-lilac',
        line: 'bg-gradient-to-b from-primary via-primary-dark to-accent-lilac',
        glow: 'shadow-primary/30',
      },
      accent: {
        dot: 'bg-accent-lilac',
        line: 'bg-accent-lilac',
        glow: 'shadow-accent-lilac/20',
      },
    }
    return styles[variant as keyof typeof styles] || styles.primary
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Vertical line */}
      <motion.div
        className="absolute left-8 top-0 bottom-0 w-0.5 origin-top"
        variants={prefersReducedMotion ? {} : lineVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{
          background: 'linear-gradient(to bottom, var(--mc-primary) 0%, var(--mc-primary-dark) 50%, var(--mc-accent-lilac) 100%)',
        }}
      />

      <motion.div
        variants={prefersReducedMotion ? {} : variants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="space-y-12"
      >
        {items.map((item, index) => {
          const variantStyles = getVariantStyles(item.variant)
          const isLast = index === items.length - 1

          return (
            <motion.div
              key={index}
              variants={prefersReducedMotion ? {} : itemVariants}
              className="relative pl-20"
            >
              {/* Dot on timeline */}
              <motion.div
                className={`absolute left-6 top-2 w-5 h-5 rounded-full ${variantStyles.dot} ${variantStyles.glow} shadow-lg`}
                variants={prefersReducedMotion ? {} : dotVariants}
                style={{
                  boxShadow: `0 0 20px rgba(0, 75, 135, 0.3)`,
                }}
              >
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-full bg-white/30 blur-sm" />
              </motion.div>

              {/* Content card */}
              <motion.div
                className="relative"
                whileHover={prefersReducedMotion ? {} : {
                  x: 5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="bg-bg-surface border border-border-subtle rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                  {/* Year badge */}
                  <motion.div
                    className="inline-flex items-center gap-2 mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.3 }}
                  >
                    <span 
                      className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20"
                    >
                      {item.year}
                    </span>
                    {item.icon && (
                      <div className="text-primary">
                        {item.icon}
                      </div>
                    )}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl font-serif font-semibold text-gradient-primary mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.15 + 0.4, duration: 0.3 }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-text-muted leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.3 }}
                  >
                    {item.description}
                  </motion.p>

                  {/* Decorative line */}
                  <motion.div
                    className="mt-4 h-px w-16 rounded-full opacity-30"
                    style={{
                      background: 'linear-gradient(90deg, var(--mc-primary) 0%, transparent 100%)',
                    }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: 64 } : {}}
                    transition={{ delay: index * 0.15 + 0.6, duration: 0.4 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

