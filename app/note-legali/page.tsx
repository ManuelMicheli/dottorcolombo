import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Note Legali - Dott. Mario Colombo',
  description: 'Note legali e disclaimer medico del sito del Dott. Mario Colombo.',
}

export default function NoteLegaliPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 mb-8">Note Legali</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="heading-3 mb-4">Informazioni sul Sito</h2>
              <p className="text-body">
                <strong>Titolare del sito:</strong> Dott. Mario Colombo<br />
                <strong>Specializzazione:</strong> Ginecologia e Ostetricia<br />
                <strong>P.IVA:</strong> 10021610968<br />
                <strong>Email:</strong> emmecol@mariocolombo.it<br />
                <strong>Telefono:</strong> 338 1290118
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Disclaimer Medico</h2>
              <p className="text-body mb-4">
                <strong>IMPORTANTE:</strong> Le informazioni contenute in questo sito web hanno carattere 
                puramente informativo e divulgativo e non possono in alcun modo sostituire la consulenza 
                medica professionale, la diagnosi o il trattamento.
              </p>
              <p className="text-body mb-4">
                Il contenuto del sito non costituisce una diagnosi medica, una prescrizione terapeutica 
                o un consiglio medico personalizzato. Per qualsiasi problema di salute o condizione medica, 
                è sempre necessario consultare un medico qualificato.
              </p>
              <p className="text-body">
                Il Dott. Mario Colombo e il sito web non si assumono alcuna responsabilità per decisioni 
                prese sulla base delle informazioni presenti sul sito senza una consultazione medica diretta.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Limiti di Responsabilità</h2>
              <p className="text-body mb-4">
                Il titolare del sito si impegna a mantenere le informazioni aggiornate e accurate, 
                tuttavia:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Non garantisce la completezza, l&apos;accuratezza o l&apos;attualità delle informazioni</li>
                <li>Non è responsabile per eventuali errori o omissioni nel contenuto</li>
                <li>Non è responsabile per danni derivanti dall&apos;uso o dall&apos;impossibilità di usare il sito</li>
                <li>Non garantisce che il sito sia privo di virus o altri elementi dannosi</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Link Esterni</h2>
              <p className="text-body">
                Il sito può contenere link a siti web esterni. Il titolare non è responsabile per il 
                contenuto, le politiche sulla privacy o le pratiche di tali siti esterni. Si consiglia 
                di leggere le condizioni d&apos;uso e le privacy policy dei siti visitati.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Proprietà Intellettuale</h2>
              <p className="text-body">
                Tutti i contenuti del sito (testi, immagini, loghi, grafica) sono di proprietà del 
                Dott. Mario Colombo o dei rispettivi proprietari e sono protetti dalle leggi sul 
                copyright e sulla proprietà intellettuale.
              </p>
              <p className="text-body mt-4">
                È vietata la riproduzione, la distribuzione o l&apos;utilizzo non autorizzato dei contenuti 
                senza il consenso scritto del titolare.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Privacy e Trattamento Dati</h2>
              <p className="text-body">
                Per informazioni dettagliate sul trattamento dei dati personali, consulta la{' '}
                <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Legge Applicabile</h2>
              <p className="text-body">
                Le presenti note legali sono disciplinate dalla legge italiana. Per qualsiasi controversia 
                relativa al sito o alle presenti condizioni, sarà competente il foro italiano.
              </p>
            </section>

            <section>
              <h2 className="heading-3 mb-4">Modifiche</h2>
              <p className="text-body">
                Il titolare si riserva il diritto di modificare le presenti note legali in qualsiasi momento. 
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

