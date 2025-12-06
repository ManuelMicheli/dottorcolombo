'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/chi-sono', label: 'Chi Sono' },
    { href: '/dove-ricevo', label: 'Dove Ricevo' },
    { href: '/perizie-medico-legali', label: 'Perizie Medico-Legali' },
    { href: '/contatti', label: 'Contatti' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md" style={{ backgroundColor: 'var(--mc-primary)' }}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div>
              <h1 className="text-xl md:text-2xl font-serif font-bold text-text-inverse" style={{ color: 'var(--mc-text-inverse)' }}>
                Dott. Mario Colombo
              </h1>
              <p className="text-xs md:text-sm text-text-inverse opacity-90" style={{ color: 'var(--mc-text-inverse)' }}>
                Ginecologo
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-inverse hover:opacity-80 transition-all duration-300 font-medium link-active"
                style={{ color: 'var(--mc-text-inverse)' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contatti"
              className="btn-secondary ml-4 border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-primary"
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
            className="lg:hidden p-2 text-text-inverse hover:opacity-80 transition-colors"
            style={{ color: 'var(--mc-text-inverse)' }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-text-inverse hover:opacity-80 transition-colors font-medium"
                style={{ color: 'var(--mc-text-inverse)' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contatti"
              onClick={() => setIsMenuOpen(false)}
              className="btn-secondary inline-block mt-4 border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-primary"
              style={{
                borderColor: 'var(--mc-text-inverse)',
                color: 'var(--mc-text-inverse)',
              }}
            >
              Prenota
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

