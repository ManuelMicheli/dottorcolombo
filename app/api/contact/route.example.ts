// Esempio di endpoint API per il form di contatto
// Rinominare questo file in route.ts e configurare il servizio email

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nome, cognome, email, telefono, sede, motivo, messaggio } = body

    // Validazione base
    if (!nome || !cognome || !email || !telefono || !sede || !motivo || !messaggio) {
      return NextResponse.json(
        { error: 'Tutti i campi obbligatori devono essere compilati' },
        { status: 400 }
      )
    }

    // Qui andrebbe l'invio email tramite servizio come:
    // - SendGrid
    // - Mailgun
    // - Resend
    // - Nodemailer con SMTP

    // Esempio con Nodemailer:
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'emmecol@mariocolombo.it',
      subject: `Nuova richiesta da ${nome} ${cognome}`,
      html: `
        <h2>Nuova richiesta di contatto</h2>
        <p><strong>Nome:</strong> ${nome} ${cognome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <p><strong>Sede:</strong> ${sede}</p>
        <p><strong>Motivo:</strong> ${motivo}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${messaggio}</p>
      `,
    })
    */

    // Log per sviluppo (rimuovere in produzione)
    console.log('Nuova richiesta:', { nome, cognome, email, telefono, sede, motivo })

    return NextResponse.json(
      { message: 'Richiesta inviata con successo' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Errore invio form:', error)
    return NextResponse.json(
      { error: 'Errore nel server. Riprova più tardi.' },
      { status: 500 }
    )
  }
}

