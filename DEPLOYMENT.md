# Guida al Deployment

## Pre-Deployment Checklist

### 1. Configurazione Variabili d'Ambiente

Crea un file `.env.local` con:

```env
NEXT_PUBLIC_SITE_URL=https://mariocolombo.it
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
SMTP_FROM=noreply@mariocolombo.it
```

### 2. Configurazione Form di Contatto

1. Rinominare `app/api/contact/route.example.ts` in `app/api/contact/route.ts`
2. Installare un servizio email (es. Nodemailer, SendGrid, Resend)
3. Configurare le variabili SMTP
4. Testare l'invio del form

### 3. Google Maps

Aggiornare i link delle mappe in `app/dove-ricevo/page.tsx` con le coordinate corrette:
- Studio Sesto San Giovanni: Via Giuseppe Rovani 56
- Casa di Cura Cesano Boscone: Piazza Monsignor Luigi Moneta 1

### 4. Immagini

Aggiungere le seguenti immagini in `public/`:
- `favicon.ico` - Icona del sito
- `icon-192.png` - Icona PWA 192x192
- `icon-512.png` - Icona PWA 512x512
- `og-image.jpg` - Immagine Open Graph 1200x630

### 5. Google Analytics (Opzionale)

Se si desidera utilizzare Google Analytics:

1. Creare un account Google Analytics
2. Aggiungere lo script in `app/layout.tsx`:

```tsx
import Script from 'next/script'

// Nel componente
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

## Deployment su Vercel (Consigliato)

### Passo 1: Preparazione

1. Push del codice su GitHub/GitLab/Bitbucket
2. Assicurarsi che il branch principale sia aggiornato

### Passo 2: Setup Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Clicca "Import Project"
3. Connetti il repository
4. Configura:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Passo 3: Variabili d'Ambiente

Aggiungi tutte le variabili d'ambiente nella sezione "Environment Variables" di Vercel.

### Passo 4: Deploy

1. Clicca "Deploy"
2. Attendi il completamento del build
3. Il sito sarà disponibile su un URL temporaneo

### Passo 5: Dominio Personalizzato

1. Vai su "Settings" > "Domains"
2. Aggiungi `mariocolombo.it`
3. Segui le istruzioni per configurare il DNS

## Deployment su Altri Provider

### Netlify

1. Push su Git
2. Importa su Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Server VPS

1. Installa Node.js 18+
2. Clona il repository
3. Installa dipendenze: `npm install`
4. Build: `npm run build`
5. Avvia con PM2: `pm2 start npm --name "dottorcolombo" -- start`

## Post-Deployment

### 1. Verifica Funzionalità

- [ ] Tutte le pagine caricano correttamente
- [ ] Form di contatto funziona
- [ ] Mappe Google Maps visualizzate
- [ ] Link interni funzionanti
- [ ] Mobile responsive

### 2. SEO Setup

1. **Google Search Console**
   - Aggiungi il sito
   - Verifica la proprietà
   - Invia la sitemap: `https://mariocolombo.it/sitemap.xml`

2. **Google Business Profile**
   - Crea/aggiorna le schede per entrambe le sedi
   - Aggiungi link al sito web
   - Carica foto professionali

3. **Bing Webmaster Tools**
   - Aggiungi il sito
   - Invia la sitemap

### 3. Performance

- Verifica PageSpeed Insights
- Ottimizza immagini se necessario
- Abilita CDN se disponibile

### 4. Sicurezza

- Verifica certificato SSL
- Abilita HTTPS redirect
- Configura security headers

## Manutenzione

### Aggiornamenti Regolari

```bash
# Aggiorna dipendenze
npm update

# Verifica vulnerabilità
npm audit

# Fix automatici
npm audit fix
```

### Backup

- Backup automatico del database (se presente)
- Backup del codice su Git
- Backup delle immagini in `public/`

## Supporto

Per problemi di deployment, consulta:
- [Documentazione Next.js](https://nextjs.org/docs/deployment)
- [Documentazione Vercel](https://vercel.com/docs)

