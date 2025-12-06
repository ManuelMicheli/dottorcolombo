'use client'

import { MapPin, Phone, Clock, Car, Bus, Train, CheckCircle } from 'lucide-react'
import Card from '@/components/Card'

export default function DoveRicevoPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <h1 className="heading-1 text-center mb-12">Dove Ricevo</h1>

        {/* Studio Sesto San Giovanni */}
        <section id="sesto" className="mb-20">
          <div className="max-w-5xl mx-auto">
            <Card variant="elevated" padding="lg" className="mb-8">
              <h2 className="heading-2 mb-6">Studio Medico - Sesto San Giovanni</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Indirizzo</p>
                        <p className="text-neutral">
                          Via Giuseppe Rovani 56<br />
                          20099 Sesto San Giovanni (MI)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Telefono</p>
                        <a href="tel:0226263196" className="text-primary hover:underline text-lg">
                          02 2626 3196
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Orari di Ricevimento</p>
                        <p className="text-neutral">
                          Lunedì: 14:00 - 19:00<br />
                          Martedì: 9:00 - 13:00<br />
                          Giovedì: 14:00 - 19:00<br />
                          Venerdì: 9:00 - 13:00
                        </p>
                        <p className="text-sm text-neutral mt-2 italic">
                          Gli orari possono subire variazioni. Si consiglia di telefonare per conferma.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Come Raggiungerci</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Car className="w-5 h-5 text-primary" />
                        <p className="font-semibold">In Auto</p>
                      </div>
                      <p className="text-neutral text-sm">
                        Da Milano centro: Autostrada A4, uscita Sesto San Giovanni. 
                        Parcheggio disponibile nelle vicinanze (strisce blu).
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Train className="w-5 h-5 text-primary" />
                        <p className="font-semibold">Con i Mezzi Pubblici</p>
                      </div>
                      <p className="text-neutral text-sm">
                        Metro: Linea M1 (rossa), fermata Sesto Marelli, poi 10 minuti a piedi<br />
                        Autobus: Linee disponibili dalla stazione<br />
                        Treno: Stazione Sesto San Giovanni FS, poi 10 minuti a piedi
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mappa */}
              <div className="mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.0!2d9.2345!3d45.5345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMyJzA0LjIiTiA5wrAxNCcwNC4yIkU!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Mappa Studio Sesto San Giovanni"
                />
              </div>

              <Card variant="outlined" padding="md" className="mt-6">
                <h3 className="font-semibold text-lg mb-4">Informazioni Utili</h3>
                <ul className="space-y-2.5 text-text-muted">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span>Lo studio è situato al piano terra con accesso facilitato</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sala d&apos;attesa confortevole</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span>Strumentazione diagnostica moderna</span>
                  </li>
                </ul>
              </Card>
            </Card>
          </div>
        </section>

        {/* Casa di Cura Cesano Boscone */}
        <section id="cesano" className="mb-20">
          <div className="max-w-5xl mx-auto">
            <Card variant="elevated" padding="lg" className="mb-8">
              <h2 className="heading-2 mb-6">Casa di Cura Ambrosiana - Cesano Boscone</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Indirizzo</p>
                        <p className="text-neutral">
                          Piazza Monsignor Luigi Moneta 1<br />
                          20090 Cesano Boscone (MI)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Telefono</p>
                        <a href="tel:02458761" className="text-primary hover:underline text-lg">
                          02 4587 61
                        </a>
                        <p className="text-sm text-neutral mt-1">
                          Richiedere &quot;Ambulatorio Dott. Colombo - Ginecologia&quot;
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Orari di Ricevimento</p>
                        <p className="text-neutral">
                          Mercoledì: 14:00 - 18:00
                        </p>
                        <p className="text-sm text-neutral mt-2 italic">
                          Per orari specifici e prenotazioni, contattare la segreteria della Casa di Cura.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Come Raggiungerci</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Car className="w-5 h-5 text-primary" />
                        <p className="font-semibold">In Auto</p>
                      </div>
                      <p className="text-neutral text-sm">
                        Autostrada A7, uscita Cesano Boscone. Ampio parcheggio interno gratuito per i pazienti.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Bus className="w-5 h-5 text-primary" />
                        <p className="font-semibold">Con i Mezzi Pubblici</p>
                      </div>
                      <p className="text-neutral text-sm">
                        Metro: Linea M2 (verde), fermata Bisceglie, poi bus per Cesano Boscone<br />
                        Autobus: Linee disponibili da Milano
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mappa */}
              <div className="mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.0!2d9.1234!3d45.4567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI3JzI0LjEiTiA5wrAwNyc0Mi4yIkU!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Mappa Casa di Cura Ambrosiana"
                />
              </div>

              <Card variant="outlined" padding="md" className="mt-6">
                <h3 className="font-semibold text-lg mb-4">Servizi della Struttura</h3>
                <ul className="space-y-2.5 text-text-muted">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span>Diagnostica avanzata (ecografie, laboratorio analisi)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sale chirurgiche per eventuali interventi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ricoveri in regime Day Hospital o ordinario</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span>Convenzioni con principali assicurazioni sanitarie</span>
                  </li>
                </ul>
              </Card>
            </Card>
          </div>
        </section>

        {/* Prepararsi alla Visita */}
        <section className="max-w-5xl mx-auto">
          <h2 className="heading-2 mb-8 text-center">Prepararsi alla Visita</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="Cosa Portare al Primo Appuntamento" variant="outlined">
              <ul className="space-y-2.5 text-text-muted text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Documento d&apos;identità</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tessera sanitaria (se applicabile)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Referti di esami precedenti (ecografie, pap-test, analisi)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Documentazione clinica rilevante</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Lista di eventuali farmaci assunti</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Calendario mestruale (se rilevante)</span>
                </li>
              </ul>
            </Card>

            <Card title="Prima della Visita Ginecologica" variant="outlined">
              <ul className="space-y-2.5 text-text-muted text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Non è necessario essere a digiuno (salvo esami specifici)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>L&apos;igiene intima normale è sufficiente</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Evitare rapporti sessuali 24-48h prima se previsto pap-test</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Preferibile non essere nel periodo mestruale (salvo urgenze)</span>
                </li>
              </ul>
            </Card>

            <Card title="Modalità di Pagamento" variant="outlined">
              <ul className="space-y-2.5 text-text-muted text-sm">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Contanti</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Carte di credito/debito</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Bancomat</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                  <span>Possibilità di fattura per rimborsi</span>
                </li>
              </ul>
            </Card>

            <Card title="Disdetta/Modifica Appuntamento" variant="outlined">
              <p className="text-text-muted">
                In caso di impossibilità a presentarsi, cortesemente avvisare con almeno 24-48 ore 
                di anticipo telefonando al numero della sede interessata.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

