'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import Card from '@/components/Card'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'Come posso prenotare una visita?',
    answer: 'Puoi prenotare una visita in tre modi: telefonicamente chiamando direttamente la sede di tuo interesse durante gli orari di apertura, online compilando il form di contatto su questa pagina indicando "Prenotazione visita", oppure via email scrivendo a [indirizzo] specificando sede e periodo preferito. Riceverai conferma dell\'appuntamento con data e ora precisi.',
  },
  {
    question: 'Quanto costa una visita ginecologica?',
    answer: 'Il costo di una prima visita ginecologica completa è di € [X]. Le visite di controllo hanno un costo di € [Y]. Prestazioni aggiuntive (ecografie, pap-test, colposcopie) hanno tariffe separate che verranno comunicate al momento della prenotazione.',
  },
  {
    question: 'Quanto dura una visita?',
    answer: 'Una prima visita ginecologica dura mediamente 30-40 minuti e include: colloquio anamnestico approfondito, esame obiettivo ginecologico, eventuali esami diagnostici (se necessari e concordati), discussione del piano terapeutico/di follow-up. Le visite di controllo hanno una durata di circa 20-30 minuti.',
  },
  {
    question: 'Cosa devo portare alla prima visita?',
    answer: 'Per la prima visita è utile portare: documento d\'identità, tessera sanitaria (se necessario), esami e referti precedenti (ecografie, pap-test, analisi del sangue), lista dei farmaci che assumi abitualmente, calendario mestruale degli ultimi mesi.',
  },
  {
    question: 'Posso effettuare una visita durante il ciclo mestruale?',
    answer: 'Per visite ginecologiche di controllo, è preferibile fissare l\'appuntamento al di fuori del periodo mestruale (idealmente tra il 7° e il 14° giorno del ciclo). Tuttavia, in caso di problematiche urgenti o sintomi specifici, la visita può essere effettuata anche durante le mestruazioni.',
  },
  {
    question: 'Si effettuano visite in regime di convenzione SSN?',
    answer: 'L\'attività è esclusivamente privata / Si effettuano anche visite in convenzione con il SSN presso [struttura].',
  },
  {
    question: 'Quali metodi di pagamento sono accettati?',
    answer: 'Sono accettati i seguenti metodi di pagamento: contanti, carte di credito e debito (Visa, Mastercard, American Express), bancomat/POS. È possibile richiedere fattura sanitaria per eventuali rimborsi assicurativi o detrazioni fiscali.',
  },
  {
    question: 'Posso disdire o spostare un appuntamento?',
    answer: 'Sì, è possibile modificare o annullare un appuntamento contattando telefonicamente la sede con almeno 24-48 ore di preavviso. Questo permette di offrire lo slot ad altri pazienti in attesa.',
  },
  {
    question: 'Quanto tempo devo aspettare per una visita?',
    answer: 'I tempi di attesa variano in base alla disponibilità, ma generalmente è possibile fissare un appuntamento entro 7-15 giorni dalla richiesta. Per urgenze cliniche, farò il possibile per trovare una soluzione nel più breve tempo possibile.',
  },
  {
    question: 'Si effettuano visite domiciliari?',
    answer: 'Le visite si effettuano esclusivamente presso le due sedi attrezzate di Sesto San Giovanni e Cesano Boscone, dove è disponibile la strumentazione diagnostica necessaria.',
  },
  {
    question: 'Come funzionano le consulenze medico-legali?',
    answer: 'Per consulenze medico-legali (CTU/CTP/revisione cartelle), il primo contatto avviene via email (emmecol@mariocolombo.it) o telefono (338 1290118). Dopo una valutazione preliminare del caso, verrà fornito un preventivo e una stima dei tempi di consegna della relazione.',
  },
  {
    question: 'Rilasciate certificati medici?',
    answer: 'Sì, al termine della visita posso rilasciare: certificati medici per attività sportiva non agonistica, certificati di gravidanza, relazioni cliniche per altri specialisti, documentazione per pratiche assicurative.',
  },
]

function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-neutral-light">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-primary transition-colors"
      >
        <span className="font-semibold pr-4">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-neutral flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-neutral">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function ContattiPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 text-center mb-6">Contatti e Prenotazioni</h1>
          <p className="text-body text-center mb-12">
            Sono a vostra disposizione per rispondere a domande, fornire informazioni e fissare un 
            appuntamento presso una delle mie sedi.
          </p>

          {/* Form di Contatto */}
          <section className="mb-16">
            <h2 className="heading-2 mb-8">Invia una Richiesta</h2>
            <ContactForm />
          </section>

          {/* Contatti Diretti */}
          <section className="mb-16">
            <h2 className="heading-2 mb-8">Contatti Diretti</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card title="Visite Cliniche" variant="elevated">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-start space-x-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Studio Medico Sesto San Giovanni</p>
                        <p className="text-neutral text-sm">
                          Via Giuseppe Rovani 56<br />
                          20099 Sesto San Giovanni (MI)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Phone className="w-5 h-5 text-primary" />
                      <a href="tel:0226263196" className="text-primary hover:underline">
                        02 2626 3196
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start space-x-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Casa di Cura Ambrosiana</p>
                        <p className="text-neutral text-sm">
                          Piazza Monsignor Luigi Moneta 1<br />
                          20090 Cesano Boscone (MI)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Phone className="w-5 h-5 text-primary" />
                      <a href="tel:02458761" className="text-primary hover:underline">
                        02 4587 61
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card title="Consulenze Medico-Legali" variant="elevated">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:emmecol@mariocolombo.it" className="text-primary hover:underline text-sm">
                        emmecol@mariocolombo.it
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Mobile</p>
                      <a href="tel:3381290118" className="text-primary hover:underline">
                        338 1290118
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="heading-2 mb-8">Domande Frequenti</h2>
            <Card variant="outlined" padding="lg">
              <div className="space-y-0">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} faq={faq} />
                ))}
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}

