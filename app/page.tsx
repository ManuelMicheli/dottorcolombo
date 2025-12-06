'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, CheckCircle, Stethoscope, Heart, Shield, FileText, Baby, Sparkles, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/motionConfig'
import ServiceCard from '@/components/ServiceCard'
import CountUpNumber from '@/components/CountUpNumber'
import AnimatedBackground from '@/components/AnimatedBackground'
import Card from '@/components/Card'
import CompetenceSection from '@/components/CompetenceSection'
import LightBlobs from '@/components/LightBlobs'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <motion.section 
        className="relative text-text-inverse section-padding section-hero overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--mc-primary) 0%, var(--mc-primary-dark) 50%, var(--mc-accent-lilac) 100%)',
          color: 'var(--mc-text-inverse)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, var(--mc-accent-lilac) 0%, var(--mc-primary) 50%, var(--mc-primary-dark) 100%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6" style={{ color: 'var(--mc-text-inverse)' }}>
              Dott. Mario Colombo
            </h1>
            <p className="text-2xl md:text-3xl font-serif font-semibold mb-4" style={{ color: 'var(--mc-text-inverse)' }}>
              Specialista in Ginecologia e Ostetricia
            </p>
            <p className="text-xl md:text-2xl mb-8 opacity-90" style={{ color: 'var(--mc-text-inverse)' }}>
              Oltre 35 anni di esperienza al servizio della salute femminile a Milano
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contatti" 
                className="btn-primary bg-bg-surface text-primary hover:bg-bg-alt"
                style={{
                  backgroundColor: 'var(--mc-surface)',
                  color: 'var(--mc-primary)',
                }}
              >
                Prenota una Visita
              </Link>
              <Link 
                href="/contatti" 
                className="btn-secondary border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-primary"
                style={{
                  borderColor: 'var(--mc-text-inverse)',
                  color: 'var(--mc-text-inverse)',
                }}
              >
                Contattami
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Perché Scegliere */}
      <motion.section 
        className="section-padding section-surface section-divider relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        {/* Light blobs per retroilluminazione */}
        <LightBlobs variant="default" />
        <div className="container-custom relative z-10">
          <motion.h2
            className="heading-2 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Perché Scegliere il Dott. Colombo
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  background: 'linear-gradient(135deg, var(--mc-primary) 0%, var(--mc-primary-dark) 50%, var(--mc-accent-lilac) 100%)',
                }}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <Stethoscope className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3
                className="font-semibold text-lg mb-2 text-gradient-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                Oltre <CountUpNumber
                  end={35}
                  duration={2000}
                  className="inline-block"
                /> anni di esperienza
              </motion.h3>
              <motion.p
                className="text-text-muted text-sm max-w-[200px] mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                Decenni di pratica clinica ospedaliera e libero-professionale
              </motion.p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  background: 'linear-gradient(135deg, var(--mc-primary) 0%, var(--mc-primary-dark) 50%, var(--mc-accent-lilac) 100%)',
                }}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3
                className="font-semibold text-lg mb-2 text-gradient-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                Ex Responsabile Struttura
              </motion.h3>
              <motion.p
                className="text-text-muted text-sm max-w-[200px] mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                Esperienza di leadership in strutture ospedaliere complesse
              </motion.p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  background: 'linear-gradient(135deg, var(--mc-primary) 0%, var(--mc-primary-dark) 50%, var(--mc-accent-lilac) 100%)',
                }}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 200 }}
              >
                <MapPin className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3
                className="font-semibold text-lg mb-2 text-gradient-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 300 }}
                >Due</motion.span> sedi a Milano
              </motion.h3>
              <motion.p
                className="text-text-muted text-sm max-w-[200px] mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                Sesto San Giovanni e Cesano Boscone per la tua comodità
              </motion.p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  background: 'linear-gradient(135deg, var(--mc-primary) 0%, var(--mc-primary-dark) 50%, var(--mc-accent-lilac) 100%)',
                }}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 200 }}
              >
                <FileText className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3
                className="font-semibold text-lg mb-2 text-gradient-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                Consulenze medico-legali
              </motion.h3>
              <motion.p
                className="text-text-muted text-sm max-w-[200px] mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                CTU e consulenze tecniche di parte specialistiche
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Aree di Competenza */}
      <CompetenceSection />

      {/* Le Mie Sedi */}
      <motion.section 
        className="section-padding section-surface section-transition"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <motion.h2
            className="heading-2 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Le Mie Sedi
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card 
              title="Studio Medico - Sesto San Giovanni"
              variant="elevated"
              padding="lg"
            >
              <div className="space-y-3 text-text-muted">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--mc-primary)' }} />
                  <p>Via Giuseppe Rovani 56<br />20099 Sesto San Giovanni (MI)</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" style={{ color: 'var(--mc-primary)' }} />
                  <a href="tel:0226263196" className="hover:text-primary transition-colors" style={{ color: 'var(--mc-text-muted)' }}>
                    02 2626 3196
                  </a>
                </div>
              </div>
              <Link
                href="/dove-ricevo#sesto"
                className="text-primary hover:text-primary-light hover:underline font-semibold mt-4 inline-block transition-colors"
                style={{ color: 'var(--mc-primary)' }}
              >
                Scopri come raggiungerci →
              </Link>
            </Card>

            <Card 
              title="Casa di Cura Ambrosiana - Cesano Boscone"
              variant="elevated"
              padding="lg"
            >
              <div className="space-y-3 text-text-muted">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--mc-primary)' }} />
                  <p>Piazza Monsignor Luigi Moneta 1<br />20090 Cesano Boscone (MI)</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" style={{ color: 'var(--mc-primary)' }} />
                  <a href="tel:02458761" className="hover:text-primary transition-colors" style={{ color: 'var(--mc-text-muted)' }}>
                    02 4587 61
                  </a>
                </div>
              </div>
              <Link
                href="/dove-ricevo#cesano"
                className="text-primary hover:text-primary-light hover:underline font-semibold mt-4 inline-block transition-colors"
                style={{ color: 'var(--mc-primary)' }}
              >
                Scopri come raggiungerci →
              </Link>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Consulenze Medico-Legali */}
      <motion.section 
        className="section-padding section-surface section-transition"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Consulenze Medico-Legali</h2>
            <p className="text-body mb-8">
              Offro consulenze tecniche d'ufficio (CTU) e di parte in ambito ginecologico-ostetrico 
              per tribunali e studi legali. Oltre 35 anni di esperienza clinica al servizio della 
              giustizia e della valutazione peritale.
            </p>
            <Link href="/perizie-medico-legali" className="btn-primary">
              Scopri di più sulle perizie
            </Link>
          </div>
        </div>
      </motion.section>

      {/* CTA Finale */}
      <motion.section 
        className="section-padding text-text-inverse overflow-hidden relative"
        style={{ backgroundColor: 'var(--mc-primary)', color: 'var(--mc-text-inverse)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, var(--mc-accent-lilac) 0%, var(--mc-primary) 50%, var(--mc-primary-dark) 100%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <div className="container-custom text-center relative z-10">
          <motion.h2
            className="heading-2 mb-6"
            style={{ color: 'var(--mc-text-inverse)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Prenota una Visita
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            style={{ color: 'var(--mc-text-inverse)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Chiama per un appuntamento o compila il form online
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link 
              href="/contatti" 
              className="btn-primary bg-bg-surface text-primary hover:bg-bg-alt"
              style={{
                backgroundColor: 'var(--mc-surface)',
                color: 'var(--mc-primary)',
              }}
            >
              Contattami Ora
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
