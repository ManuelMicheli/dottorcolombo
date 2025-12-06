import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - Dott. Mario Colombo',
  description: 'Informativa sulla privacy e trattamento dei dati personali del sito del Dott. Mario Colombo.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="heading-3 mb-4">1. Titolare del Trattamento</h2>
              <p className="text-body">
                Il titolare del trattamento dei dati personali è:
              </p>
              <p className="text-body">
                <strong>Dott. Mario Colombo</strong><br />
                Specialista in Ginecologia e Ostetricia<br />
                P.IVA: 10021610968<br />
                Email: emmecol@mariocolombo.it<br />
                Telefono: 338 1290118
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">2. Tipologie di Dati Raccolti</h2>
              <p className="text-body mb-4">
                Il sito raccoglie i seguenti tipi di dati personali:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Dati anagrafici (nome, cognome)</li>
                <li>Dati di contatto (email, numero di telefono)</li>
                <li>Dati di navigazione (indirizzo IP, cookie, dati di utilizzo)</li>
                <li>Dati forniti volontariamente tramite form di contatto</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">3. Finalità del Trattamento</h2>
              <p className="text-body mb-4">
                I dati personali sono trattati per le seguenti finalità:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Rispondere alle richieste di contatto e prenotazione</li>
                <li>Gestire le prenotazioni di visite mediche</li>
                <li>Fornire informazioni sui servizi offerti</li>
                <li>Adempiere agli obblighi di legge</li>
                <li>Migliorare l'esperienza di navigazione del sito</li>
                <li>Analisi statistiche anonime del traffico (con consenso)</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">4. Base Giuridica</h2>
              <p className="text-body">
                Il trattamento dei dati personali si basa su:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Consenso dell'interessato</li>
                <li>Esecuzione di un contratto o misure precontrattuali</li>
                <li>Adempimento di obblighi di legge</li>
                <li>Legittimo interesse del titolare</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">5. Destinatari dei Dati</h2>
              <p className="text-body">
                I dati personali possono essere comunicati a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Fornitori di servizi di hosting e manutenzione del sito</li>
                <li>Fornitori di servizi di posta elettronica</li>
                <li>Autorità competenti in caso di obblighi di legge</li>
              </ul>
              <p className="text-body mt-4">
                I dati non saranno mai ceduti a terzi per finalità commerciali senza il consenso esplicito dell'interessato.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">6. Periodo di Conservazione</h2>
              <p className="text-body">
                I dati personali sono conservati per il tempo necessario alle finalità per cui sono stati raccolti:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Dati di contatto da form: 12 mesi dalla richiesta</li>
                <li>Dati di navigazione: secondo le impostazioni dei cookie</li>
                <li>Dati per obblighi di legge: secondo i termini previsti dalla normativa</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">7. Diritti dell'Interessato</h2>
              <p className="text-body mb-4">
                Ai sensi del Regolamento UE 2016/679 (GDPR), l'interessato ha diritto a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li><strong>Accesso:</strong> ottenere conferma dell'esistenza dei propri dati e accedervi</li>
                <li><strong>Rettifica:</strong> ottenere la correzione di dati inesatti o incompleti</li>
                <li><strong>Cancellazione:</strong> ottenere la cancellazione dei propri dati</li>
                <li><strong>Limitazione:</strong> ottenere la limitazione del trattamento</li>
                <li><strong>Portabilità:</strong> ricevere i propri dati in formato strutturato</li>
                <li><strong>Opposizione:</strong> opporsi al trattamento dei propri dati</li>
                <li><strong>Revoca del consenso:</strong> revocare il consenso in qualsiasi momento</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">8. Modalità di Esercizio dei Diritti</h2>
              <p className="text-body">
                Per esercitare i propri diritti, l'interessato può contattare il titolare del trattamento:
              </p>
              <p className="text-body">
                Email: <a href="mailto:emmecol@mariocolombo.it" className="text-primary hover:underline">emmecol@mariocolombo.it</a><br />
                Telefono: <a href="tel:3381290118" className="text-primary hover:underline">338 1290118</a>
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">9. Diritto di Reclamo</h2>
              <p className="text-body">
                L'interessato ha diritto di presentare un reclamo al Garante per la Protezione dei Dati Personali 
                se ritiene che il trattamento dei propri dati violi la normativa vigente.
              </p>
              <p className="text-body">
                Contatti Garante Privacy:<br />
                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.garanteprivacy.it
                </a>
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">10. Cookie</h2>
              <p className="text-body">
                Per informazioni dettagliate sull'utilizzo dei cookie, consulta la{' '}
                <Link href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">11. Modifiche alla Privacy Policy</h2>
              <p className="text-body">
                Il titolare si riserva il diritto di modificare la presente privacy policy in qualsiasi momento. 
                Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento.
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

