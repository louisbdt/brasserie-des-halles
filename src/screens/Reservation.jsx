import { useState } from 'react'
import Button from '../components/Button'

const INITIAL_STATE = { date: '', time: '', guests: '2', name: '', phone: '' }

function validateForm(form) {
  const errors = {}

  if (!form.date) errors.date = 'Indiquez une date.'
  if (!form.time) errors.time = 'Indiquez une heure.'
  const guests = Number(form.guests)
  if (!guests || guests < 1 || guests > 8) {
    errors.guests = 'Entre 1 et 8 personnes en ligne (au-delà, voir Groupes).'
  }
  if (!form.name.trim()) errors.name = 'Indiquez votre nom.'
  if (!/^0[1-9](\s?\d{2}){4}$/.test(form.phone.trim())) {
    errors.phone = 'Numéro de téléphone invalide, par exemple 06 12 34 56 78.'
  }

  return errors
}

function Reservation() {
  const [form, setForm] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [confirmed, setConfirmed] = useState(false)

  const handleFieldChange = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formErrors = validateForm(form)
    setErrors(formErrors)
    if (Object.keys(formErrors).length === 0) setConfirmed(true)
  }

  if (confirmed) {
    return (
      <section className="mx-auto max-w-xl px-6 py-16 text-center">
        <h1 className="font-heading text-2xl text-ink">Réservation confirmée</h1>
        <p className="mt-4 text-ink/70">
          Merci {form.name}, votre table pour {form.guests} personne(s) le {form.date} à{' '}
          {form.time} est enregistrée.
        </p>
        <Button
          variant="secondary"
          onClick={() => {
            setForm(INITIAL_STATE)
            setConfirmed(false)
          }}
        >
          Faire une autre réservation
        </Button>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-xl px-6 py-10">
      <h1 className="font-heading text-2xl text-ink">Réserver une table</h1>
      <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="date-field" className="block font-medium text-ink/80">
            Date
          </label>
          <input
            id="date-field"
            type="date"
            value={form.date}
            onChange={handleFieldChange('date')}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? 'date-error' : undefined}
            className="mt-1 min-h-11 w-full rounded-lg border border-sage/30 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          />
          {errors.date && (
            <p id="date-error" className="mt-1 text-sm text-terracotta-700">
              {errors.date}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="time-field" className="block font-medium text-ink/80">
            Heure
          </label>
          <input
            id="time-field"
            type="time"
            value={form.time}
            onChange={handleFieldChange('time')}
            aria-invalid={Boolean(errors.time)}
            aria-describedby={errors.time ? 'time-error' : undefined}
            className="mt-1 min-h-11 w-full rounded-lg border border-sage/30 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          />
          {errors.time && (
            <p id="time-error" className="mt-1 text-sm text-terracotta-700">
              {errors.time}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="guests-field" className="block font-medium text-ink/80">
            Nombre de couverts
          </label>
          <input
            id="guests-field"
            type="number"
            min="1"
            max="8"
            value={form.guests}
            onChange={handleFieldChange('guests')}
            aria-invalid={Boolean(errors.guests)}
            aria-describedby={errors.guests ? 'guests-error' : undefined}
            className="mt-1 min-h-11 w-full rounded-lg border border-sage/30 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          />
          {errors.guests && (
            <p id="guests-error" className="mt-1 text-sm text-terracotta-700">
              {errors.guests}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="name-field" className="block font-medium text-ink/80">
            Nom
          </label>
          <input
            id="name-field"
            type="text"
            value={form.name}
            onChange={handleFieldChange('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="mt-1 min-h-11 w-full rounded-lg border border-sage/30 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-terracotta-700">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone-field" className="block font-medium text-ink/80">
            Téléphone
          </label>
          <input
            id="phone-field"
            type="tel"
            placeholder="06 12 34 56 78"
            value={form.phone}
            onChange={handleFieldChange('phone')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className="mt-1 min-h-11 w-full rounded-lg border border-sage/30 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-terracotta-700">
              {errors.phone}
            </p>
          )}
        </div>

        <Button type="submit">Confirmer la réservation</Button>
      </form>
    </section>
  )
}

export default Reservation
