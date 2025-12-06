# Sito Web Dott. Mario Colombo

Sito web professionale per il Dott. Mario Colombo, Specialista in Ginecologia e Ostetricia.

## Tecnologie Utilizzate

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipizzazione statica
- **Tailwind CSS** - Styling utility-first
- **React Hook Form** - Gestione form
- **Lucide React** - Icone

## Struttura del Progetto

```
├── app/                    # App Router di Next.js
│   ├── layout.tsx         # Layout principale
│   ├── page.tsx           # Homepage
│   ├── chi-sono/         # Pagina Chi Sono
│   ├── dove-ricevo/       # Pagina Dove Ricevo
│   ├── perizie-medico-legali/  # Pagina Perizie
│   ├── contatti/          # Pagina Contatti
│   ├── privacy-policy/    # Privacy Policy
│   ├── cookie-policy/     # Cookie Policy
│   └── note-legali/       # Note Legali
├── components/            # Componenti riutilizzabili
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CookieBanner.tsx
│   └── ContactForm.tsx
├── public/               # File statici
└── ...
```

## Setup e Installazione

1. **Installa le dipendenze:**
   ```bash
   npm install
   ```

2. **Avvia il server di sviluppo:**
   ```bash
   npm run dev
   ```

3. **Apri il browser:**
   Naviga su [http://localhost:3000](http://localhost:3000)

## Build per Produzione

```bash
npm run build
npm start
```

## Caratteristiche

- ✅ Design responsive e mobile-first
- ✅ SEO ottimizzato (metadata, sitemap, robots.txt)
- ✅ Form di contatto con validazione
- ✅ Cookie banner GDPR-compliant
- ✅ Accessibilità WCAG 2.1 AA
- ✅ Performance ottimizzate
- ✅ Integrazione Google Maps
- ✅ Schema markup per medico

## Configurazione

### Variabili d'Ambiente

Crea un file `.env.local` per le variabili d'ambiente:

```env
NEXT_PUBLIC_SITE_URL=https://mariocolombo.it
```

### Google Maps

Le mappe sono integrate tramite iframe. Per personalizzare le coordinate, modifica i link nelle pagine `dove-ricevo`.

### Form di Contatto

Il form di contatto attualmente simula l'invio. Per la produzione, è necessario:

1. Creare un endpoint API (`app/api/contact/route.ts`)
2. Configurare un servizio email (SendGrid, Mailgun, ecc.)
3. Aggiungere protezione anti-spam (reCAPTCHA)

## Deployment

### Vercel (Consigliato)

1. Push del codice su GitHub
2. Importa il progetto su Vercel
3. Configura le variabili d'ambiente
4. Deploy automatico

### Altri Provider

Il sito può essere deployato su qualsiasi provider che supporta Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Server VPS con Node.js

## Manutenzione

### Aggiornare Contenuti

I contenuti sono gestiti direttamente nei file delle pagine in `app/`.

### Aggiungere Nuove Pagine

1. Crea una nuova cartella in `app/`
2. Aggiungi `page.tsx` con il contenuto
3. Aggiorna `sitemap.ts` e `Header.tsx`

## SEO

- Sitemap automatica: `/sitemap.xml`
- Robots.txt: `/robots.txt`
- Metadata ottimizzati per ogni pagina
- Schema markup per LocalBusiness (da implementare)

## Supporto

Per domande o supporto, contattare:
- Email: emmecol@mariocolombo.it
- Telefono: 338 1290118

## Licenza

© 2025 Dott. Mario Colombo - Tutti i diritti riservati

