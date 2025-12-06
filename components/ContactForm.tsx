'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { scaleIn } from '@/lib/motionConfig'
import AnimatedButton from './AnimatedButton'
import AnimatedInput from './AnimatedInput'
import AnimatedTextarea from './AnimatedTextarea'

interface FormData {
  nome: string
  cognome: string
  email: string
  telefono: string
  sede: string
  motivo: string
  messaggio: string
  privacy: boolean
  marketing?: boolean
}

export default function ContactForm() {
  const prefersReducedMotion = useReducedMotion()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Chiamata API - decommentare quando l'endpoint è configurato
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Errore nell\'invio')
      }

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Errore invio form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <motion.div
        className="card bg-success/10 border-success"
        variants={prefersReducedMotion ? {} : scaleIn}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-start space-x-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 15,
            }}
          >
            <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
          </motion.div>
          <div className="flex-1">
            <motion.h3
              className="font-semibold text-lg mb-2 text-success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Messaggio inviato con successo!
            </motion.h3>
            <motion.p
              className="text-text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Grazie per avermi contattato. Riceverai una risposta entro 24-48 ore lavorative.
            </motion.p>
            <motion.p
              className="text-text-muted mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Per urgenze, puoi contattarmi telefonicamente:
            </motion.p>
            <motion.ul
              className="text-text-muted mt-2 space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <li>• Studio Sesto SG: <a href="tel:0226263196" className="text-primary hover:underline">02 2626 3196</a></li>
              <li>• Casa Cura Cesano: <a href="tel:02458761" className="text-primary hover:underline">02 4587 61</a></li>
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <AnimatedButton
                onClick={() => setSubmitStatus('idle')}
                variant="primary"
                className="mt-4"
              >
                Invia un altro messaggio
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card"
      >
      <AnimatePresence>
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 bg-error/10 border border-error rounded-lg flex items-start space-x-3"
          >
            <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-error font-semibold">Errore nell'invio</p>
              <p className="text-sm text-text-muted">Si è verificato un errore. Riprova o contattaci telefonicamente.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <AnimatedInput
          id="nome"
          type="text"
          label="Nome"
          {...register('nome', { required: 'Il nome è obbligatorio' })}
          error={errors.nome?.message}
          showError={!!errors.nome}
        />

        <AnimatedInput
          id="cognome"
          type="text"
          label="Cognome"
          {...register('cognome', { required: 'Il cognome è obbligatorio' })}
          error={errors.cognome?.message}
          showError={!!errors.cognome}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <AnimatedInput
          id="email"
          type="email"
          label="Email"
          placeholder="nome@esempio.it"
          {...register('email', {
            required: 'L\'email è obbligatoria',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email non valida',
            },
          })}
          error={errors.email?.message}
          showError={!!errors.email}
        />

        <AnimatedInput
          id="telefono"
          type="tel"
          label="Telefono"
          placeholder="+39"
          {...register('telefono', { required: 'Il telefono è obbligatorio' })}
          error={errors.telefono?.message}
          showError={!!errors.telefono}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="sede" className="block text-sm font-semibold mb-2">
            Sede preferita <span className="text-error">*</span>
          </label>
          <select
            id="sede"
            {...register('sede', { required: 'Seleziona una sede' })}
            className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Seleziona...</option>
            <option value="sesto">Studio Sesto San Giovanni</option>
            <option value="cesano">Casa di Cura Cesano Boscone</option>
            <option value="indifferente">Indifferente</option>
          </select>
          {errors.sede && (
            <p className="text-error text-sm mt-1">{errors.sede.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="motivo" className="block text-sm font-semibold mb-2">
            Motivo del contatto <span className="text-error">*</span>
          </label>
          <select
            id="motivo"
            {...register('motivo', { required: 'Seleziona un motivo' })}
            className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Seleziona...</option>
            <option value="prenotazione-prima-visita">Prenotazione prima visita ginecologica</option>
            <option value="prenotazione-ostetrica">Prenotazione visita ostetrica/gravidanza</option>
            <option value="informazioni">Richiesta informazioni su prestazioni</option>
            <option value="consulenza-legale">Consulenza medico-legale (CTU/CTP)</option>
            <option value="altro">Altro</option>
          </select>
          {errors.motivo && (
            <p className="text-error text-sm mt-1">{errors.motivo.message}</p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <AnimatedTextarea
          id="messaggio"
          rows={6}
          label="Messaggio"
          {...register('messaggio', { required: 'Il messaggio è obbligatorio' })}
          error={errors.messaggio?.message}
          showError={!!errors.messaggio}
        />
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-start">
          <input
            id="privacy"
            type="checkbox"
            {...register('privacy', {
              required: 'È necessario accettare l\'informativa privacy',
            })}
            className="mt-1 mr-3 w-5 h-5 text-primary focus:ring-primary"
          />
          <label htmlFor="privacy" className="text-sm text-neutral">
            Ho letto e accetto l'<a href="/privacy-policy" className="text-primary hover:underline font-semibold">informativa privacy</a>{' '}
            <span className="text-error">*</span>
          </label>
        </div>
        {errors.privacy && (
          <p className="text-error text-sm">{errors.privacy.message}</p>
        )}

        <div className="flex items-start">
          <input
            id="marketing"
            type="checkbox"
            {...register('marketing')}
            className="mt-1 mr-3 w-5 h-5 text-primary focus:ring-primary"
          />
          <label htmlFor="marketing" className="text-sm text-neutral">
            Acconsento all'invio di comunicazioni promozionali (facoltativo)
          </label>
        </div>
      </div>

      <AnimatedButton
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="w-full md:w-auto flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Loader2 className="w-5 h-5" />
            </motion.div>
            <span>Invio in corso...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Invia Richiesta</span>
          </>
        )}
      </AnimatedButton>

      <p className="text-xs text-neutral mt-4">
        * Campi obbligatori
      </p>
      </form>
    </motion.div>
  )
}

