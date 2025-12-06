'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/chi-sono', label: 'Chi Sono' },
    { href: '/dove-ricevo', label: 'Dove Ricevo' },
    { href: '/perizie-medico-legali', label: 'Perizie Medico-Legali' },
    { href: '/contatti', label: 'Contatti' },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const linkVariants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md" style={{ backgroundColor: 'var(--mc-primary)' }}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-text-inverse" style={{ color: 'var(--mc-text-inverse)' }}>
                Dott. Mario Colombo
              </h1>
              <p className="text-[10px] sm:text-xs md:text-sm text-text-inverse opacity-90" style={{ color: 'var(--mc-text-inverse)' }}>
                Ginecologo
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm xl:text-base text-text-inverse hover:opacity-80 transition-all duration-300 font-medium link-active"
                style={{ color: 'var(--mc-text-inverse)' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contatti"
              className="btn-secondary ml-4 border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-primary text-sm xl:text-base px-6 xl:px-8"
              style={{
                borderColor: 'var(--mc-text-inverse)',
                color: 'var(--mc-text-inverse)',
              }}
            >
              Prenota
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-text-inverse hover:opacity-80 transition-colors rounded-lg active:bg-white/10"
            style={{ color: 'var(--mc-text-inverse)' }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="lg:hidden overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="pb-6 pt-4 space-y-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={linkVariants}
                    custom={index}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 px-4 text-text-inverse hover:bg-white/10 rounded-lg transition-colors font-medium text-base"
                      style={{ color: 'var(--mc-text-inverse)' }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={linkVariants} custom={navLinks.length}>
                  <Link
                    href="/contatti"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-secondary inline-block w-full text-center mt-2 border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-primary"
                    style={{
                      borderColor: 'var(--mc-text-inverse)',
                      color: 'var(--mc-text-inverse)',
                    }}
                  >
                    Prenota
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

