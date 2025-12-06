'use client'

/**
 * CompetenceSection - Sezione premium per le aree di competenza
 * 
 * MODIFICHE RAPIDE:
 * 
 * 1. PALETTE COLORI:
 *    - Background gradient: modifica i colori in .section-competence (linea ~50)
 *    - Colori icone: modifica il gradient in CompetenceCard.tsx (linea ~60)
 *    - Colori testo: usa le variabili CSS --mc-primary, --mc-text-muted
 * 
 * 2. CONTENUTI:
 *    - Modifica l'array 'competences' in questo file (linea ~30)
 *    - Ogni oggetto ha: title, subtitle, items[], icon
 * 
 * 3. ANIMAZIONI:
 *    - Durata animazione scroll: modifica 'duration' in motion.div (linea ~80)
 *    - Delay tra card: modifica 'delay' in CompetenceCard (linea ~100)
 *    - Intensità hover scale: modifica 'scale: 1.03' in CompetenceCard (linea ~40)
 *    - Velocità reveal lista: modifica 'duration' in AnimatePresence (linea ~90)
 */

import { motion } from 'framer-motion'
import { Heart, Baby, Sparkles, Shield, Stethoscope } from 'lucide-react'
import CompetenceCard from './CompetenceCard'
import LightBlobs from './LightBlobs'

interface Competence {
  title: string
  subtitle: string
  items: string[]
  icon: React.ReactNode
}

const competences: Competence[] = [
  {
    title: 'Ginecologia',
    subtitle: 'Cura completa della salute ginecologica',
    items: [
      'Visite ginecologiche complete',
      'Prevenzione e screening oncologico',
      'Diagnostica avanzata',
      'Trattamento patologie',
    ],
    icon: <Heart className="w-7 h-7" />,
  },
  {
    title: 'Ostetricia',
    subtitle: 'Assistenza durante la gravidanza',
    items: [
      'Monitoraggio gravidanza fisiologica',
      'Ecografie ostetriche',
      'Assistenza al parto',
      'Follow-up post-partum',
    ],
    icon: <Baby className="w-7 h-7" />,
  },
  {
    title: 'Menopausa',
    subtitle: 'Supporto nella transizione ormonale',
    items: [
      'Gestione sintomi menopausali',
      'Terapie ormonali sostitutive',
      'Prevenzione osteoporosi',
      'Counseling personalizzato',
    ],
    icon: <Sparkles className="w-7 h-7" />,
  },
  {
    title: 'Medicina della Fertilità',
    subtitle: 'Percorsi di procreazione assistita',
    items: [
      'Valutazione fertilità di coppia',
      'Indagini diagnostiche specialistiche',
      'Percorsi PMA',
      'Supporto psicologico',
    ],
    icon: <Stethoscope className="w-7 h-7" />,
  },
  {
    title: 'Prevenzione',
    subtitle: 'Screening e programmi personalizzati',
    items: [
      'Screening tumori ginecologici',
      'Vaccinazioni (HPV)',
      'Educazione sanitaria',
      'Programmi di prevenzione',
    ],
    icon: <Shield className="w-7 h-7" />,
  },
]

export default function CompetenceSection() {
  return (
    <section className="relative section-padding section-competence overflow-hidden">
      {/* Light blobs - retroilluminazione soft */}
      <LightBlobs variant="competence" />

      {/* Content */}
      <div className="container-custom relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-12 sm:mb-16 md:mb-20 tracking-wide px-4"
          style={{
            color: 'var(--mc-primary)',
            letterSpacing: '0.02em',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Aree di Competenza
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto px-4 sm:px-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {competences.map((competence, index) => (
            <CompetenceCard
              key={index}
              title={competence.title}
              subtitle={competence.subtitle}
              items={competence.items}
              icon={competence.icon}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

