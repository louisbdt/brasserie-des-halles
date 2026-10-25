import { useState } from 'react'
import Button from '../components/Button'
import TextField from '../components/TextField'

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

  if (submitted) {
    return (
      <section className="mx-auto max-w-xl px-6 py-16 text-center">
        <h1 className="font-heading text-2xl text-ink">Demande envoyée</h1>
        <p className="mt-4 text-ink/70">
          Merci {form.name.trim()}, votre demande de devis pour {form.guests} personnes a bien
          été reçue. Nous vous recontacterons sous 48h à l'adresse {form.email.trim()}.
        </p>
        <div className="mt-6">
          <Button
            variant="secondary"
            onClick={() => {
              setForm(INITIAL_STATE)
              setSubmitted(false)
            }}
          >
            Faire une autre demande
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-xl px-6 py-10">
      <h1 className="font-heading text-2xl text-ink">Groupes & privatisation</h1>
      <p className="mt-3 text-ink/70">
        La salle peut être privatisée à partir de 15 personnes, sur devis. Remplissez le
        formulaire ci-dessous et nous revenons vers vous sous 48h.
      </p>

      <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <TextField
          id="group-name-field"
          label="Nom"
          type="text"
          value={form.name}
          onChange={handleFieldChange('name')}
          error={errors.name}
        />

        <TextField
          id="group-email-field"
          label="E-mail"
          type="email"
          value={form.email}
          onChange={handleFieldChange('email')}
          error={errors.email}
        />

        <TextField
          id="group-guests-field"
          label="Nombre de personnes"
          type="number"
          min="15"
          value={form.guests}
          onChange={handleFieldChange('guests')}
          error={errors.guests}
        />

        <TextField
          id="group-date-field"
          label="Date souhaitée"
          type="date"
          value={form.date}
          onChange={handleFieldChange('date')}
          error={errors.date}
        />

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
    </section>
  )
}

export default Groups
