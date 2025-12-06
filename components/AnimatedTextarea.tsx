'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { forwardRef, useState, FocusEvent } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { shake } from '@/lib/motionConfig'

interface AnimatedTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  showError?: boolean
}

const AnimatedTextarea = forwardRef<HTMLTextAreaElement, AnimatedTextareaProps>(
  ({ label, error, showError, className = '', ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion()
    const [isFocused, setIsFocused] = useState(false)
    const [hasError, setHasError] = useState(false)

    const handleFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true)
      if (props.onFocus) props.onFocus(e)
    }

    const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false)
      if (props.onBlur) props.onBlur(e)
    }

    if (showError && error && !hasError) {
      setHasError(true)
      setTimeout(() => setHasError(false), 400)
    }

    return (
      <div className="relative">
        <label htmlFor={props.id} className="block text-sm font-semibold mb-2 text-text-main">
          {label}
          {props.required && <span className="text-error ml-1">*</span>}
        </label>
        <motion.textarea
          ref={ref}
          {...props}
          className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none resize-none ${
            showError && error
              ? 'border-error focus:ring-2 focus:ring-error/20'
              : isFocused
              ? 'border-primary focus:ring-2 focus:ring-primary/20'
              : 'border-border-subtle'
          } ${className}`}
          style={{
            boxShadow: isFocused
              ? '0 0 0 3px rgba(0, 75, 135, 0.1)'
              : 'none',
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          variants={prefersReducedMotion || !hasError ? {} : shake}
          animate={hasError ? 'shake' : 'initial'}
        />
        <AnimatePresence>
          {showError && error && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-error text-sm mt-1"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedTextarea.displayName = 'AnimatedTextarea'

export default AnimatedTextarea

