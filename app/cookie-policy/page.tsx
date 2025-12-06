import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy - Dott. Mario Colombo',
  description: 'Informativa sull\'utilizzo dei cookie sul sito del Dott. Mario Colombo.',
}

export default function CookiePolicyPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="heading-3 mb-4">Cosa sono i Cookie</h2>
              <p className="text-body">
                I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente 
                quando visita un sito web. I cookie permettono al sito di ricordare le azioni e le 
                preferenze dell'utente per un determinato periodo di tempo.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Tipologie di Cookie Utilizzati</h2>
              
              <div className="mb-6">
                <h3 className="font-semibold text-xl mb-3">Cookie Tecnici (Necessari)</h3>
                <p className="text-body mb-3">
                  Questi cookie sono essenziali per il funzionamento del sito e non possono essere disattivati.
                </p>
                <ul className="list-disc list-inside space-y-2 text-body">
                  <li>Cookie di sessione per la navigazione</li>
                  <li>Cookie per la gestione del consenso</li>
                  <li>Cookie di sicurezza</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-xl mb-3">Cookie Analitici</h3>
                <p className="text-body mb-3">
                  Questi cookie ci aiutano a comprendere come i visitatori interagiscono con il sito, 
                  raccogliendo informazioni in forma anonima.
                </p>
                <ul className="list-disc list-inside space-y-2 text-body">
                  <li>Google Analytics (se attivo): per analisi statistiche del traffico</li>
                  <li>Dati raccolti in forma anonimizzata</li>
                </ul>
                <p className="text-body mt-3">
                  <strong>Nota:</strong> Questi cookie richiedono il consenso dell'utente e possono essere 
                  disattivati tramite il banner cookie.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">Cookie di Terze Parti</h3>
                <p className="text-body mb-3">
                  Il sito può utilizzare servizi di terze parti che impostano cookie:
                </p>
                <ul className="list-disc list-inside space-y-2 text-body">
                  <li>Google Maps: per la visualizzazione delle mappe</li>
                  <li>Google Analytics: per l'analisi del traffico (se attivo)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Gestione dei Cookie</h2>
              <p className="text-body mb-4">
                L'utente può gestire le preferenze sui cookie in diversi modi:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Tramite il banner cookie visualizzato al primo accesso</li>
                <li>Modificando le impostazioni del browser per bloccare o eliminare i cookie</li>
                <li>Utilizzando strumenti di terze parti per la gestione dei cookie</li>
              </ul>
              <p className="text-body mt-4">
                <strong>Importante:</strong> La disattivazione di alcuni cookie può compromettere 
                la funzionalità del sito.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Cookie di Terze Parti - Informazioni Dettagliate</h2>
              
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Google Maps</h3>
                <p className="text-body mb-2">
                  Utilizziamo Google Maps per visualizzare le mappe delle sedi. Google può impostare 
                  cookie per funzionalità di mappatura.
                </p>
                <p className="text-body">
                  Privacy Policy Google:{' '}
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Google Analytics</h3>
                <p className="text-body mb-2">
                  Se attivo, utilizziamo Google Analytics per analizzare il traffico del sito. 
                  I dati sono raccolti in forma anonimizzata.
                </p>
                <p className="text-body">
                  Privacy Policy Google Analytics:{' '}
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
                <p className="text-body mt-2">
                  Opt-out:{' '}
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Durata dei Cookie</h2>
              <p className="text-body">
                I cookie possono essere:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li><strong>Cookie di sessione:</strong> eliminati alla chiusura del browser</li>
                <li><strong>Cookie persistenti:</strong> rimangono sul dispositivo per un periodo determinato o fino alla loro eliminazione manuale</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Contatti</h2>
              <p className="text-body">
                Per domande sulla cookie policy, è possibile contattare:
              </p>
              <p className="text-body">
                Email: <a href="mailto:emmecol@mariocolombo.it" className="text-primary hover:underline">emmecol@mariocolombo.it</a><br />
                Telefono: <a href="tel:3381290118" className="text-primary hover:underline">338 1290118</a>
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Modifiche alla Cookie Policy</h2>
              <p className="text-body">
                Il titolare si riserva il diritto di modificare la presente cookie policy in qualsiasi momento. 
                Le modifiche saranno pubblicate su questa pagina.
              </p>
              <p className="text-body mt-4">
                <strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

