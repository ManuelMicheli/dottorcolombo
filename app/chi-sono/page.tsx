'use client'

import { GraduationCap, Briefcase, Award, Heart } from 'lucide-react'
import Card from '@/components/Card'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/motionConfig'
import Timeline from '@/components/Timeline'

interface ChiSonoHeroProps {
  imageUrl?: string
  imageAlt?: string
}

export default function ChiSonoPage({ imageUrl, imageAlt = 'Dott. Mario Colombo' }: ChiSonoHeroProps) {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        {/* Hero Section - Chi Sono */}
        <motion.section
          className="max-w-6xl mx-auto mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            {/* Card container con bordo elegante */}
            <div className="relative bg-bg-surface border-2 border-border-subtle rounded-2xl overflow-hidden shadow-lg">
              {/* Decorative gradient line top */}
              <div 
                className="h-1 w-full"
                style={{
                  background: 'linear-gradient(90deg, var(--mc-primary) 0%, var(--mc-primary-dark) 50%, var(--mc-accent-lilac) 100%)',
                }}
              />
              
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                  {/* Immagine */}
                  <motion.div
                    className="lg:col-span-1"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:max-w-none rounded-xl overflow-hidden shadow-xl">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={imageAlt}
                          fill
                          className="object-cover"
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-accent-lilac/20 flex items-center justify-center">
                          <div className="text-center p-8">
                            <div 
                              className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
                              style={{
                                background: 'linear-gradient(135deg, var(--mc-primary) 0%, var(--mc-primary-dark) 50%, var(--mc-accent-lilac) 100%)',
                              }}
                            >
                              <Heart className="w-12 h-12 text-white" />
                            </div>
                            <p className="text-text-muted text-sm">Immagine del Dott. Colombo</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Contenuto testuale */}
                  <motion.div
                    className="lg:col-span-2"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h1 className="heading-1 mb-6">Dott. Mario Colombo</h1>
                    <div className="mb-6">
                      <p className="text-xl text-text-muted font-medium mb-4">
                        Specialista in Ginecologia e Ostetricia
                      </p>
                      <p className="text-lg text-primary font-semibold">
                        Oltre 35 anni di esperienza nella cura della salute femminile
                      </p>
                    </div>
                    
                    <div className="prose prose-lg max-w-none space-y-4">
                      <p className="text-text-muted leading-relaxed">
                        La mia filosofia si basa su un approccio personalizzato ed empatico che pone al centro 
                        la paziente, la sua storia clinica e le sue necessità specifiche. Credo fermamente in 
                        una medicina che ascolti la paziente, che dedichi il tempo necessario alla comprensione 
                        del problema e che offra soluzioni personalizzate basate sulle più recenti evidenze 
                        scientifiche, senza mai dimenticare l'aspetto umano della relazione medico-paziente.
                      </p>
                      <p className="text-text-muted leading-relaxed">
                        Nel corso della mia carriera ho avuto l'opportunità di ricoprire ruoli di responsabilità 
                        in strutture ospedaliere, gestendo équipe mediche e assistendo migliaia di pazienti. 
                        Oggi esercito la libera professione presso due sedi nell'area metropolitana milanese, 
                        continuando a dedicarmi con passione alla ginecologia clinica, all'ostetricia e alle 
                        consulenze medico-legali.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative gradient line bottom */}
              <div 
                className="h-1 w-full"
                style={{
                  background: 'linear-gradient(90deg, var(--mc-accent-lilac) 0%, var(--mc-primary-dark) 50%, var(--mc-primary) 100%)',
                }}
              />
            </div>
          </div>
        </motion.section>

        {/* Formazione */}
        <section className="max-w-5xl mx-auto mb-20">
          <motion.div
            className="flex items-center space-x-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, var(--mc-primary) 0%, var(--mc-primary-dark) 50%, var(--mc-accent-lilac) 100%)',
              }}
            >
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="heading-2">Formazione</h2>
          </motion.div>
          
          <Timeline
            items={[
              {
                year: '1982-88',
                title: 'Laurea in Medicina e Chirurgia',
                description: 'Laurea conseguita con eccellenti risultati, base solida per la specializzazione successiva.',
                icon: <GraduationCap className="w-4 h-4" />,
                variant: 'primary',
              },
              {
                year: '1988-92',
                title: 'Specializzazione in Ostetricia e Ginecologia',
                description: 'Specializzazione quadriennale con focus su ginecologia diagnostica, ostetricia e medicina materno-fetale. Formazione pratica in reparti ospedalieri di alto livello.',
                icon: <GraduationCap className="w-4 h-4" />,
                variant: 'gradient',
              },
            ]}
          />
        </section>

        {/* Esperienza Professionale */}
        <section className="max-w-5xl mx-auto mb-20">
          <motion.div
            className="flex items-center space-x-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, var(--mc-primary) 0%, var(--mc-primary-dark) 50%, var(--mc-accent-lilac) 100%)',
              }}
            >
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="heading-2">Esperienza Professionale</h2>
          </motion.div>
          
          <Timeline
            items={[
              {
                year: '[Da definire]',
                title: 'Responsabile di Struttura Complessa',
                description: 'Gestione del reparto di Ginecologia e Ostetricia con responsabilità su équipe medica, sala parto, ambulatori specialistici. Oltre [X] parti assistiti, [X] interventi chirurgici eseguiti. Coordinamento di progetti di miglioramento qualità assistenziale e formazione di medici specializzandi.',
                icon: <Award className="w-4 h-4" />,
                variant: 'gradient',
              },
              {
                year: '[Da definire]',
                title: 'Dirigente Medico',
                description: 'Attività clinica in reparto e ambulatorio, partecipazione a progetti di miglioramento qualità assistenziale, formazione medici specializzandi. Esperienza diretta in sala parto e sala operatoria.',
                icon: <Briefcase className="w-4 h-4" />,
                variant: 'primary',
              },
              {
                year: 'Dal 2017 ad oggi',
                title: 'Attività Libero-Professionale',
                description: 'Attività privata presso Studio Medico di Sesto San Giovanni e Casa di Cura Ambrosiana di Cesano Boscone. Focus su ginecologia preventiva, assistenza ostetrica personalizzata, medicina della menopausa e consulenze medico-legali in ambito ginecologico-ostetrico.',
                icon: <Heart className="w-4 h-4" />,
                variant: 'accent',
              },
            ]}
          />
        </section>

        {/* Competenze Specialistiche */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="heading-2 mb-8">Competenze Specialistiche</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Ginecologia" variant="outlined" padding="md">
              <ul className="space-y-2.5 text-text-muted text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Ginecologia diagnostica e terapeutica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Ecografia ginecologica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Colposcopia e prevenzione oncologica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Chirurgia ginecologica</span>
                </li>
              </ul>
            </Card>
            <Card title="Ostetricia" variant="outlined" padding="md">
              <ul className="space-y-2.5 text-text-muted text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Ostetricia e medicina materno-fetale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Ecografia ostetrica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Assistenza al parto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Monitoraggio gravidanza a rischio</span>
                </li>
              </ul>
            </Card>
            <Card title="Medicina della Riproduzione" variant="outlined" padding="md">
              <ul className="space-y-2.5 text-text-muted text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Fertilità e sterilità di coppia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Consulenza preconcezionale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Supporto percorsi PMA</span>
                </li>
              </ul>
            </Card>
            <Card title="Medicina Legale" variant="outlined" padding="md">
              <ul className="space-y-2.5 text-text-muted text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Perizie medico-legali (CTU e CTP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Revisione cartelle cliniche</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Valutazione danno alla persona</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Formazione Continua */}
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-8">Formazione Continua</h2>
          <Card variant="gradient" padding="lg">
            <p className="text-text-muted mb-4">
              Partecipazione regolare a congressi nazionali e internazionali di ginecologia e ostetricia. 
              Aggiornamento costante su linee guida SIGO, ISS, NICE e best practice internazionali.
            </p>
            <p className="text-text-muted">
              Mantenimento di competenze all'avanguardia attraverso formazione continua e confronto 
              con la comunità scientifica nazionale e internazionale.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}

