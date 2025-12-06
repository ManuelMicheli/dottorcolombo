import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-text-inverse" style={{ backgroundColor: 'var(--mc-primary)', color: 'var(--mc-text-inverse)' }}>
      <div className="container-custom py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Colonna 1 - Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-text-inverse" style={{ color: 'var(--mc-text-inverse)' }}>
              Dott. Mario Colombo
            </h3>
            <p className="text-sm text-text-inverse opacity-90 mb-2" style={{ color: 'var(--mc-text-inverse)' }}>
              Specialista in Ginecologia e Ostetricia
            </p>
            <p className="text-sm text-text-inverse opacity-90" style={{ color: 'var(--mc-text-inverse)' }}>
              P.IVA: 10021610968
            </p>
            <p className="text-sm text-text-inverse opacity-80 mt-4" style={{ color: 'var(--mc-text-inverse)' }}>
              © {currentYear} Dott. Mario Colombo
            </p>
          </div>

          {/* Colonna 2 - Contatti */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-text-inverse" style={{ color: 'var(--mc-text-inverse)' }}>Contatti</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-text-inverse" style={{ color: 'var(--mc-text-inverse)' }} />
                <div>
                  <p className="font-medium text-text-inverse" style={{ color: 'var(--mc-text-inverse)' }}>Studio Sesto San Giovanni</p>
                  <p className="text-text-inverse opacity-90" style={{ color: 'var(--mc-text-inverse)' }}>02 2626 3196</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-text-inverse" style={{ color: 'var(--mc-text-inverse)' }} />
                <div>
                  <p className="font-medium text-text-inverse" style={{ color: 'var(--mc-text-inverse)' }}>Casa di Cura Cesano Boscone</p>
                  <p className="text-text-inverse opacity-90" style={{ color: 'var(--mc-text-inverse)' }}>02 4587 61</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-text-inverse" style={{ color: 'var(--mc-text-inverse)' }} />
                <a
                  href="mailto:emmecol@mariocolombo.it"
                  className="text-text-inverse opacity-90 hover:opacity-100 hover:text-accent-lilac transition-colors"
                  style={{ color: 'var(--mc-text-inverse)' }}
                >
                  emmecol@mariocolombo.it
                </a>
              </div>
            </div>
          </div>

          {/* Colonna 3 - Link Utili */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-text-inverse" style={{ color: 'var(--mc-text-inverse)' }}>Link Utili</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-text-inverse opacity-90 hover:opacity-100 hover:text-accent-lilac transition-colors"
                  style={{ color: 'var(--mc-text-inverse)' }}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-text-inverse opacity-90 hover:opacity-100 hover:text-accent-lilac transition-colors"
                  style={{ color: 'var(--mc-text-inverse)' }}
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/note-legali"
                  className="text-text-inverse opacity-90 hover:opacity-100 hover:text-accent-lilac transition-colors"
                  style={{ color: 'var(--mc-text-inverse)' }}
                >
                  Note Legali
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonna 4 - Social/Info Aggiuntive */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-text-inverse" style={{ color: 'var(--mc-text-inverse)' }}>Informazioni</h3>
            <p className="text-sm text-text-inverse opacity-90 mb-4" style={{ color: 'var(--mc-text-inverse)' }}>
              Oltre 35 anni di esperienza al servizio della salute femminile.
            </p>
            <div className="text-sm text-text-inverse opacity-90" style={{ color: 'var(--mc-text-inverse)' }}>
              <p>Consulenze medico-legali disponibili</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

