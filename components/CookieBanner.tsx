'use client'

import { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-light shadow-lg">
      <div className="container-custom py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start space-x-3 flex-1">
            <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div className="text-sm text-neutral-dark">
              <p className="mb-1">
                Questo sito utilizza cookie tecnici necessari per il funzionamento e cookie analitici per migliorare l'esperienza utente.
              </p>
              <p>
                Continuando a navigare, accetti l'utilizzo dei cookie.{' '}
                <Link
                  href="/cookie-policy"
                  className="text-primary hover:underline font-semibold"
                >
                  Maggiori informazioni
                </Link>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 text-sm text-neutral-dark hover:text-primary transition-colors font-medium"
            >
              Rifiuta
            </button>
            <button
              onClick={acceptCookies}
              className="btn-primary px-6 py-2 text-sm"
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

