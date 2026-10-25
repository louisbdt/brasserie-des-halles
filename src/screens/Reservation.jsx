import { useState } from 'react'
import Button from '../components/Button'
import TextField from '../components/TextField'
import { formatPhoneNumber } from '../utils/formatPhoneNumber'

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
          Merci {form.name.trim()}, votre table pour {form.guests} personne(s) le {form.date} à{' '}
          {form.time} est enregistrée.
        </p>
        <div className="mt-6">
          <Button
            variant="secondary"
            onClick={() => {
              setForm(INITIAL_STATE)
              setConfirmed(false)
            }}
          >
            Faire une autre réservation
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-xl px-6 py-10">
      <h1 className="font-heading text-2xl text-ink">Réserver une table</h1>
      <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <TextField
          id="date-field"
          label="Date"
          type="date"
          value={form.date}
          onChange={handleFieldChange('date')}
          error={errors.date}
        />

        <TextField
          id="time-field"
          label="Heure"
          type="time"
          value={form.time}
          onChange={handleFieldChange('time')}
          error={errors.time}
        />

        <TextField
          id="guests-field"
          label="Nombre de couverts"
          type="number"
          min="1"
          max="8"
          value={form.guests}
          onChange={handleFieldChange('guests')}
          error={errors.guests}
        />

        <TextField
          id="name-field"
          label="Nom"
          type="text"
          value={form.name}
          onChange={handleFieldChange('name')}
          error={errors.name}
        />

        <TextField
          id="phone-field"
          label="Téléphone"
          type="tel"
          placeholder="06 12 34 56 78"
          value={form.phone}
          onChange={(event) =>
            setForm({ ...form, phone: formatPhoneNumber(event.target.value) })
          }
          error={errors.phone}
        />

        <Button type="submit">Confirmer la réservation</Button>
      </form>
    </section>
  )
}

export default Reservation
