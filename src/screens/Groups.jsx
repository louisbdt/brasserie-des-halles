import { useState } from 'react'
import Button from '../components/Button'

const INITIAL_STATE = { name: '', email: '', guests: '15', date: '', message: '' }

function validateForm(form) {
  const errors = {}

  if (!form.name.trim()) errors.name = 'Indiquez votre nom.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Adresse e-mail invalide.'
  }
  const guests = Number(form.guests)
  if (!guests || guests < 15) {
    errors.guests = 'La privatisation est possible à partir de 15 personnes.'
  }
  if (!form.date) errors.date = 'Indiquez une date souhaitée.'

  return errors
}

function Groups() {
  const [form, setForm] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleFieldChange = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formErrors = validateForm(form)
    setErrors(formErrors)
    if (Object.keys(formErrors).length === 0) setSubmitted(true)
  }

  return (
    <section className="mx-auto max-w-xl px-6 py-10">
      <h1 className="font-heading text-2xl text-ink">Groupes & privatisation</h1>
      <p className="mt-3 text-ink/70">
        La salle peut être privatisée à partir de 15 personnes, sur devis. Remplissez le
        formulaire ci-dessous et nous revenons vers vous sous 48h.
      </p>

      {submitted ? (
        <p className="mt-8 rounded-lg bg-sage/10 px-4 py-3 text-sage" role="status">
          Votre demande de devis a bien été envoyée, merci {form.name}.
        </p>
      ) : (
        <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="group-name-field" className="block font-medium text-ink/80">
              Nom
            </label>
            <input
              id="group-name-field"
              type="text"
              value={form.name}
              onChange={handleFieldChange('name')}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'group-name-error' : undefined}
              className="mt-1 min-h-11 w-full rounded-lg border border-sage/30 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            />
            {errors.name && (
              <p id="group-name-error" className="mt-1 text-sm text-terracotta-700">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="group-email-field" className="block font-medium text-ink/80">
              E-mail
            </label>
            <input
              id="group-email-field"
              type="email"
              value={form.email}
              onChange={handleFieldChange('email')}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'group-email-error' : undefined}
              className="mt-1 min-h-11 w-full rounded-lg border border-sage/30 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            />
            {errors.email && (
              <p id="group-email-error" className="mt-1 text-sm text-terracotta-700">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="group-guests-field" className="block font-medium text-ink/80">
              Nombre de personnes
            </label>
            <input
              id="group-guests-field"
              type="number"
              min="15"
              value={form.guests}
              onChange={handleFieldChange('guests')}
              aria-invalid={Boolean(errors.guests)}
              aria-describedby={errors.guests ? 'group-guests-error' : undefined}
              className="mt-1 min-h-11 w-full rounded-lg border border-sage/30 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            />
            {errors.guests && (
              <p id="group-guests-error" className="mt-1 text-sm text-terracotta-700">
                {errors.guests}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="group-date-field" className="block font-medium text-ink/80">
              Date souhaitée
            </label>
            <input
              id="group-date-field"
              type="date"
              value={form.date}
              onChange={handleFieldChange('date')}
              aria-invalid={Boolean(errors.date)}
              aria-describedby={errors.date ? 'group-date-error' : undefined}
              className="mt-1 min-h-11 w-full rounded-lg border border-sage/30 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            />
            {errors.date && (
              <p id="group-date-error" className="mt-1 text-sm text-terracotta-700">
                {errors.date}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="group-message-field" className="block font-medium text-ink/80">
              Message (facultatif)
            </label>
            <textarea
              id="group-message-field"
              rows="3"
              value={form.message}
              onChange={handleFieldChange('message')}
              className="mt-1 w-full rounded-lg border border-sage/30 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            />
          </div>

          <Button type="submit">Envoyer la demande de devis</Button>
        </form>
      )}
    </section>
  )
}

export default Groups
