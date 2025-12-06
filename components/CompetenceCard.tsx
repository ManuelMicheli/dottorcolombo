'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode, useState, useEffect } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface CompetenceCardProps {
  title: string
  subtitle: string
  items: string[]
  icon: ReactNode
  delay?: number
}

export default function CompetenceCard({
  title,
  subtitle,
  items,
  icon,
  delay = 0,
}: CompetenceCardProps) {
  const prefersReducedMotion = useReducedMotion()
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleInteraction = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => !isMobile && !prefersReducedMotion && setIsHovered(true)}
      onMouseLeave={() => !isMobile && !prefersReducedMotion && setIsHovered(false)}
      onClick={handleInteraction}
    >
      <motion.div
        className={`
          relative bg-white/80 backdrop-blur-md
          border border-primary/10
          rounded-xl sm:rounded-2xl p-6 sm:p-8
          cursor-pointer
          transition-all duration-300 ease-in-out
          ${isMobile ? 'touch-manipulation' : ''}
        `}
        style={{
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
        }}
        whileHover={
          !isMobile && !prefersReducedMotion
            ? {
                scale: 1.03,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)',
                transition: {
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                },
              }
            : {}
        }
        animate={
          !prefersReducedMotion
            ? {
                boxShadow:
                  isHovered || isExpanded
                    ? '0 8px 24px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)'
                    : '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
              }
            : {}
        }
      >
        {/* Soft glow outline on hover/expand */}
        <motion.div
          className="absolute -inset-1 rounded-2xl bg-primary/8 blur-xl opacity-0 pointer-events-none"
          animate={
            !prefersReducedMotion
              ? {
                  opacity: isHovered || isExpanded ? 0.6 : 0,
                }
              : {}
          }
          transition={{ duration: 0.3 }}
        />

        {/* Icon */}
        <motion.div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto border-2 border-primary/20 bg-white/50"
          style={{
            color: 'var(--mc-primary)',
          }}
          animate={
            !prefersReducedMotion && (isHovered || isExpanded)
              ? {
                  y: [0, -4, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }
              : {}
          }
        >
          <div className="w-7 h-7" style={{ color: 'var(--mc-primary)' }}>{icon}</div>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-serif font-semibold text-center mb-3 tracking-wide" style={{ color: 'var(--mc-text-main)' }}>
          {title}
        </h3>

        {/* Subtitle */}
        <motion.p
          className="text-sm text-text-muted text-center mb-6 leading-relaxed"
          animate={
            !prefersReducedMotion
              ? {
                  opacity: isHovered || isExpanded ? 0.6 : 1,
                }
              : {}
          }
          transition={{ duration: 0.3 }}
        >
          {subtitle}
        </motion.p>

        {/* Expandable details list */}
        <AnimatePresence>
          {(isHovered || isExpanded) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <motion.ul
                className="space-y-3 pt-4 border-t border-primary/10"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1,
                }}
              >
                {items.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start text-sm text-text-muted"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 + index * 0.05,
                      duration: 0.2,
                    }}
                  >
                    <span
                      className="mr-3 flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/30"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

