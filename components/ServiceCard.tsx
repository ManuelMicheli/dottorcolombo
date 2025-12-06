'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeInUp } from '@/lib/motionConfig'
import AnimatedLink from './AnimatedLink'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description?: string
  items?: string[]
  previewItems?: string[] // Nuovi bullet sintetici da mostrare sempre
  icon?: ReactNode
  color?: 'primary' | 'secondary' | 'accent-lilac' | 'success'
  link?: string
  linkText?: string
  className?: string
}

export default function ServiceCard({
  title,
  description,
  items,
  previewItems,
  icon,
  color = 'primary',
  link,
  linkText = 'Scopri di più',
  className = '',
}: ServiceCardProps) {
  const prefersReducedMotion = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)

  const colorClasses = {
    primary: {
      border: 'border-primary/20',
      borderHover: 'hover:border-primary/40',
      iconBg: 'bg-primary',
      separator: 'bg-primary',
      checkColor: 'text-primary',
    },
    secondary: {
      border: 'border-secondary/30',
      borderHover: 'hover:border-secondary/50',
      iconBg: 'bg-secondary',
      separator: 'bg-secondary',
      checkColor: 'text-secondary-dark',
    },
    'accent-lilac': {
      border: 'border-accent-lilac/20',
      borderHover: 'hover:border-accent-lilac/40',
      iconBg: 'bg-accent-lilac',
      separator: 'bg-accent-lilac',
      checkColor: 'text-accent-lilac',
    },
    success: {
      border: 'border-success/20',
      borderHover: 'hover:border-success/40',
      iconBg: 'bg-success',
      separator: 'bg-success',
      checkColor: 'text-success',
    },
  }

  const colors = colorClasses[color]

  const frontVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const backVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const itemVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      x: -10,
    },
  }

  return (
    <motion.div
      className={`
        group relative overflow-hidden 
        rounded-xl
        border border-primary/15
        transition-all duration-300 ease-in-out
        ${className}
      `}
      variants={prefersReducedMotion ? {} : fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      onMouseEnter={() => !prefersReducedMotion && setIsHovered(true)}
      onMouseLeave={() => !prefersReducedMotion && setIsHovered(false)}
      style={{
        background: 'linear-gradient(to bottom, rgba(240, 247, 250, 0.3) 0%, rgba(255, 255, 255, 0.95) 100%)',
        boxShadow: '0 2px 8px rgba(0, 75, 135, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
        minHeight: '380px',
      }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              boxShadow: '0 16px 32px rgba(0, 75, 135, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)',
              y: -2,
              scale: 1.02,
              borderColor: 'rgba(0, 75, 135, 0.3)',
              transition: {
                duration: 0.28,
                ease: [0.16, 1, 0.3, 1],
              },
            }
      }
    >
      {/* Front side - Informazione principale */}
      <AnimatePresence mode="wait">
        {!isHovered && (
          <motion.div
            key="front"
            className="h-full flex flex-col justify-center"
            variants={prefersReducedMotion ? {} : frontVariants}
            initial="visible"
            exit="hidden"
            animate="visible"
          >
            {icon && (
              <motion.div 
                className="relative w-[4.5rem] h-[4.5rem] rounded-2xl flex items-center justify-center mb-6 mx-auto"
                style={{
                  background: 'linear-gradient(135deg, var(--mc-primary) 0%, var(--mc-primary-dark) 50%, var(--mc-accent-lilac) 100%)',
                  boxShadow: '0 4px 16px rgba(0, 75, 135, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                }}
                whileHover={prefersReducedMotion ? {} : { 
                  scale: 1.08,
                  rotate: 3,
                  transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                }}
                animate={prefersReducedMotion ? {} : {
                  boxShadow: isHovered 
                    ? '0 8px 24px rgba(0, 75, 135, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.2) inset, 0 0 40px rgba(0, 75, 135, 0.2)'
                    : '0 4px 16px rgba(0, 75, 135, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(255,255,255,0.2) 100%)',
                  }}
                  animate={isHovered ? { opacity: 0.3 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="text-white w-8 h-8 relative z-10">
                  {icon}
                </div>
              </motion.div>
            )}

            <motion.h3 
              className="text-2xl font-serif font-semibold mb-4 text-center transition-colors duration-300"
              style={{
                color: isHovered ? 'var(--mc-primary-dark)' : 'var(--mc-primary)',
              }}
            >
              {title}
              {isHovered && (
                <motion.span
                  className="inline-block ml-2 text-primary-dark"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5 inline" />
                </motion.span>
              )}
            </motion.h3>

            {description && (
              <p className="text-text-muted text-base leading-relaxed text-center px-4 mb-4">
                {description}
              </p>
            )}

            {/* Preview items - sempre visibili */}
            {previewItems && previewItems.length > 0 && (
              <motion.ul 
                className="mt-auto space-y-2.5 px-4 pb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {previewItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-text-muted text-sm font-medium"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <span 
                      className="mr-2.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, var(--mc-primary) 0%, var(--mc-accent-lilac) 100%)',
                      }}
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back side - Informazioni dettagliate */}
      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            key="back"
            className="absolute inset-0 p-6 h-full flex flex-col overflow-y-auto"
            variants={prefersReducedMotion ? {} : backVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {icon && (
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto"
                style={{
                  background: 'linear-gradient(135deg, var(--mc-primary) 0%, var(--mc-primary-dark) 50%, var(--mc-accent-lilac) 100%)',
                }}
              >
                <div className="text-white w-6 h-6">
                  {icon}
                </div>
              </div>
            )}

            <h3 className="text-xl font-serif font-semibold text-gradient-primary mb-4 text-center">
              {title}
            </h3>

            {/* Gradient accent line */}
            <div 
              className="mb-6 opacity-50 h-px rounded-full w-20 mx-auto"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, var(--mc-primary) 50%, transparent 100%)',
              }}
            ></div>

            {items && items.length > 0 && (
              <motion.ul 
                className="space-y-3.5 flex-grow mb-4 px-1"
                variants={prefersReducedMotion ? {} : { visible: { transition: { staggerChildren: 0.06 } } }}
              >
                {items.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start text-text-muted"
                    variants={prefersReducedMotion ? {} : itemVariants}
                  >
                    <span 
                      className="mr-3 flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, var(--mc-primary) 0%, var(--mc-accent-lilac) 100%)',
                      }}
                    ></span>
                    <span className="text-sm leading-relaxed font-medium">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}

            {link && (
              <div className="mt-auto pt-5 text-center border-t border-border-subtle">
                <AnimatedLink
                  href={link}
                  underline
                  className="text-sm font-semibold text-primary hover:text-primary-light transition-colors inline-flex items-center gap-1"
                >
                  {linkText}
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </AnimatedLink>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus indicator */}
      <div className="absolute inset-0 rounded-lg ring-2 ring-primary ring-offset-2 opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  )
}
