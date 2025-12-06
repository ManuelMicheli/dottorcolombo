'use client'

import { FileText, Scale, Briefcase, Mail, Phone, CheckCircle, Clock, ArrowRight, Award } from 'lucide-react'
import Link from 'next/link'
import Card from '@/components/Card'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/motionConfig'

export default function PeriziePage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.section
          className="max-w-5xl mx-auto mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, var(--mc-primary) 0%, var(--mc-primary-dark) 50%, var(--mc-accent-lilac) 100%)',
              }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <Scale className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="heading-1 mb-6">Perizie Medico-Legali</h1>
            <p className="text-xl text-text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
              Oltre 35 anni di esperienza clinica al servizio della giustizia. 
              Consulenze tecniche qualificate in ambito ginecologico-ostetrico per tribunali, 
              studi legali e compagnie assicurative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#contatti"
                className="btn-primary inline-flex items-center gap-2"
              >
                Richiedi una Consulenza
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/chi-sono"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Scopri la mia Esperienza
                <Award className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Servizi Principali - Grid */}
        <section className="max-w-6xl mx-auto mb-20">
          <motion.h2
            className="heading-2 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Servizi di Consulenza
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* CTU */}
            <motion.div variants={fadeInUp}>
              <Card
                icon={<Scale className="w-6 h-6" />}
                title="CTU - Consulenza Tecnica d'Ufficio"
                variant="gradient"
                padding="lg"
                className="h-full flex flex-col"
              >
                <p className="text-text-muted mb-6 flex-grow">
                  Incarico conferito dal Giudice per chiarire aspetti tecnici di controversie giudiziarie 
                  in ambito ginecologico-ostetrico.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted">Valutazione responsabilità medica</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted">Danni da parto e complicanze</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted">Errori diagnostici e terapeutici</span>
                  </div>
                </div>
                <Link
                  href="#ctu-dettagli"
                  className="text-primary hover:text-primary-light font-semibold text-sm mt-6 inline-flex items-center gap-1"
                >
                  Scopri di più
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            </motion.div>

            {/* CTP */}
            <motion.div variants={fadeInUp}>
              <Card
                icon={<Briefcase className="w-6 h-6" />}
                title="CTP - Consulenza Tecnica di Parte"
                variant="elevated"
                padding="lg"
                className="h-full flex flex-col"
              >
                <p className="text-text-muted mb-6 flex-grow">
                  Assistenza tecnica per avvocati e clienti nella valutazione del caso e nella 
                  dialettica con il CTU nominato dal Giudice.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted">Analisi preventiva del caso</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted">Elaborazione strategie difensive</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted">Redazione memorie tecniche</span>
                  </div>
                </div>
                <Link
                  href="#ctp-dettagli"
                  className="text-primary hover:text-primary-light font-semibold text-sm mt-6 inline-flex items-center gap-1"
                >
                  Scopri di più
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            </motion.div>

            {/* Revisione Cartelle */}
            <motion.div variants={fadeInUp}>
              <Card
                icon={<FileText className="w-6 h-6" />}
                title="Revisione Cartelle Cliniche"
                variant="elevated"
                padding="lg"
                className="h-full flex flex-col"
              >
                <p className="text-text-muted mb-6 flex-grow">
                  Analisi approfondita di cartelle cliniche per studi legali, medici, pazienti 
                  e compagnie assicurative.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted">Valutazione correttezza diagnosi</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted">Conformità linee guida</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted">Nesso di causalità</span>
                  </div>
                </div>
                <Link
                  href="#revisione-dettagli"
                  className="text-primary hover:text-primary-light font-semibold text-sm mt-6 inline-flex items-center gap-1"
                >
                  Scopri di più
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* CTU Dettagli */}
        <section id="ctu-dettagli" className="max-w-4xl mx-auto mb-20 scroll-mt-20">
          <Card
            icon={<Scale className="w-6 h-6" />}
            title="Consulenza Tecnica d'Ufficio (CTU) - Dettagli"
            variant="gradient"
            padding="lg"
          >
            <p className="text-body mb-6">
              La Consulenza Tecnica d'Ufficio è l'incarico conferito dal Giudice a un medico esperto per 
              chiarire aspetti tecnici di una controversia giudiziaria.
            </p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-4 text-text-main">Ambiti di intervento CTU:</h3>
              <ul className="space-y-2.5 text-text-muted">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Valutazione responsabilità professionale medica</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Danni da parto (lesioni neonatali, paralisi ostetrica)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Complicanze chirurgiche ginecologiche</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Errori diagnostici (mancata diagnosi tumori, gravidanze ectopiche)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Danno alla persona in ambito ginecologico</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Invalidità permanente post-chirurgica</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Danno biologico e morale</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-4 text-text-main">Procedura:</h3>
              <ol className="space-y-2.5 text-text-muted list-decimal list-inside pl-4">
                <li>Nomina da parte del Tribunale</li>
                <li>Accettazione incarico e giuramento</li>
                <li>Analisi documentazione clinica (cartelle, referti, linee guida)</li>
                <li>Eventuale visita medico-legale della persona</li>
                <li>Redazione relazione tecnica motivata</li>
                <li>Partecipazione a udienze per chiarimenti</li>
              </ol>
            </div>
          </Card>
        </section>

        {/* CTP Dettagli */}
        <section id="ctp-dettagli" className="max-w-4xl mx-auto mb-20 scroll-mt-20">
          <Card
            icon={<Briefcase className="w-6 h-6" />}
            title="Consulenza Tecnica di Parte (CTP) - Dettagli"
            variant="elevated"
            padding="lg"
          >
            <p className="text-body mb-6">
              Il Consulente Tecnico di Parte assiste l'avvocato e il cliente nella valutazione del caso e 
              nella dialettica con il CTU nominato dal Giudice.
            </p>
            
            <div>
              <h3 className="font-semibold text-xl mb-4 text-text-main">Servizi CTP:</h3>
              <ul className="space-y-2.5 text-text-muted">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Analisi preventiva del caso</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Valutazione documentazione clinica</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Individuazione criticità e punti di forza</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Elaborazione strategie difensive/offensive</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Partecipazione a operazioni peritali del CTU</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Redazione osservazioni e memorie tecniche</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Supporto all'avvocato nella preparazione del caso</span>
                </li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Revisione Cartelle Dettagli */}
        <section id="revisione-dettagli" className="max-w-4xl mx-auto mb-20 scroll-mt-20">
          <Card
            icon={<FileText className="w-6 h-6" />}
            title="Revisione Cartelle Cliniche - Dettagli"
            variant="elevated"
            padding="lg"
          >
            <p className="text-body mb-6">
              Offro servizi di analisi approfondita di cartelle cliniche per:
            </p>
            <ul className="space-y-2.5 text-text-muted mb-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                <span>Studi legali che valutano l'avvio di contenziosi</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                <span>Medici che necessitano di un secondo parere</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                <span>Pazienti che desiderano comprendere il proprio percorso clinico</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                <span>Compagnie assicurative per valutazione sinistri</span>
              </li>
            </ul>
            
            <div>
              <h3 className="font-semibold text-xl mb-4 text-text-main">Cosa analizzo:</h3>
              <ul className="space-y-2.5 text-text-muted">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Correttezza della diagnosi e delle tempistiche</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Appropriatezza delle scelte terapeutiche</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Conformità alle linee guida nazionali/internazionali</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Qualità della documentazione clinica</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Eventuale nesso di causalità tra condotta ed evento</span>
                </li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Ambiti Specialistici */}
        <section className="max-w-6xl mx-auto mb-20">
          <motion.h2
            className="heading-2 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Ambiti Specialistici di Competenza
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Ostetricia e Medicina Materno-Fetale" variant="outlined">
              <ul className="space-y-2.5 text-text-muted text-sm">
                <li>• Danni da parto (asfissia perinatale, trauma ostetrico)</li>
                <li>• Paralisi ostetrica (paralisi di Erb, lesioni plesso brachiale)</li>
                <li>• Sofferenza fetale non riconosciuta</li>
                <li>• Ritardi nell'espletamento del parto</li>
                <li>• Lacerazioni sfinteriche (III-IV grado)</li>
                <li>• Complicanze emorragiche post-partum</li>
              </ul>
            </Card>
            <Card title="Ginecologia" variant="outlined">
              <ul className="space-y-2.5 text-text-muted text-sm">
                <li>• Complicanze chirurgiche (laparoscopie, isterectomie)</li>
                <li>• Lesioni iatrogene (vescica, uretere, intestino)</li>
                <li>• Mancata diagnosi patologie oncologiche</li>
                <li>• Errori nella gestione gravidanza ectopica</li>
                <li>• Complicanze da dispositivi (spirale, mesh)</li>
              </ul>
            </Card>
            <Card title="Medicina della Riproduzione" variant="outlined">
              <ul className="space-y-2.5 text-text-muted text-sm">
                <li>• Complicanze PMA (iperstimolazione ovarica)</li>
                <li>• Errori nella gestione fertilità</li>
                <li>• Gravidanze multiple da tecniche ART</li>
              </ul>
            </Card>
            <Card title="Esperienza e Qualifiche" variant="outlined">
              <ul className="space-y-2.5 text-text-muted text-sm">
                <li>• Oltre 35 anni di pratica clinica ospedaliera</li>
                <li>• Ex Responsabile Struttura Complessa</li>
                <li>• Esperienza diretta in sala parto e sala operatoria</li>
                <li>• Conoscenza approfondita linee guida SIGO, ISS, NICE</li>
                <li>• Numerosi incarichi peritali completati</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Modalità Operative */}
        <section className="max-w-4xl mx-auto mb-20">
          <Card 
            icon={<Clock className="w-6 h-6" />}
            title="Modalità Operative" 
            variant="elevated" 
            padding="lg"
          >
            <div className="mb-8">
              <h3 className="font-semibold text-xl mb-4 text-text-main">Tempistiche:</h3>
              <ul className="space-y-2.5 text-text-muted">
                <li>• Valutazione preliminare: 7-10 giorni</li>
                <li>• Relazione completa: 3-4 settimane (a seconda della complessità)</li>
                <li>• Disponibilità per urgenze (con supplemento)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-xl mb-4 text-text-main">Documentazione Necessaria:</h3>
              <p className="text-text-muted mb-4">
                Per una valutazione accurata, è necessario fornire:
              </p>
              <ul className="space-y-2.5 text-text-muted">
                <li>• Cartella clinica completa (ricoveri, PS, ambulatori)</li>
                <li>• Referti esami strumentali (eco, TC, RMN)</li>
                <li>• Referti esami di laboratorio</li>
                <li>• Documentazione iconografica (tracciati CTG, immagini eco)</li>
                <li>• Eventuale autopsia o perizia già redatta</li>
                <li>• Cronologia degli eventi</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-xl mb-4 text-text-main">Riservatezza:</h3>
              <p className="text-text-muted">
                Ogni incarico è trattato con la massima riservatezza professionale nel rispetto del 
                segreto professionale e della normativa privacy.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-4 text-text-main">Tariffe:</h3>
              <p className="text-text-muted mb-4">
                Le tariffe per consulenze medico-legali sono concordate caso per caso in base a:
              </p>
              <ul className="space-y-2.5 text-text-muted mb-4">
                <li>• Complessità del caso</li>
                <li>• Volume documentazione da analizzare</li>
                <li>• Urgenza richiesta</li>
                <li>• Necessità di visita medico-legale</li>
                <li>• Eventuali trasferte</li>
              </ul>
              <p className="text-text-muted font-semibold">
                Per un preventivo personalizzato, contattare via email o telefono.
              </p>
            </div>
          </Card>
        </section>

        {/* Contatti CTA */}
        <section id="contatti" className="max-w-4xl mx-auto scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card 
              variant="gradient" 
              padding="lg"
              className="bg-gradient-to-br from-primary via-primary-dark to-accent-lilac text-white border-0 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="heading-2 text-white">Contatti per Consulenze Medico-Legali</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-5 h-5" />
                      <p className="font-semibold">Email</p>
                    </div>
                    <a 
                      href="mailto:emmecol@mariocolombo.it" 
                      className="text-white hover:text-white/80 transition-colors text-lg"
                    >
                      emmecol@mariocolombo.it
                    </a>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="w-5 h-5" />
                      <p className="font-semibold">Mobile</p>
                    </div>
                    <a 
                      href="tel:3381290118" 
                      className="text-white hover:text-white/80 transition-colors text-lg"
                    >
                      338 1290118
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-6 text-white/90">
                  <Clock className="w-5 h-5" />
                  <p>Rispondo entro 24-48 ore lavorative</p>
                </div>
                
                <Link
                  href="/contatti"
                  className="btn-primary bg-white text-primary hover:bg-white/90 inline-flex items-center gap-2"
                >
                  Richiedi una Consulenza
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

