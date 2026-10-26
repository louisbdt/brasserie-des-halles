import { useState } from 'react'
import Button from '../components/Button'
import TextField from '../components/TextField'
import { RESERVATION_HOURS_MESSAGE, RESERVATION_WINDOWS } from '../constants/restaurant'
import { formatPhoneNumber } from '../utils/formatPhoneNumber'

const INITIAL_STATE = { date: '', time: '', guests: '2', firstName: '', lastName: '', phone: '' }

const isWithinServiceHours = (time) =>
  RESERVATION_WINDOWS.some((window) => time >= window.start && time <= window.end)

function validateForm(form, todayISO) {
  const errors = {}

  if (!form.date) errors.date = 'Indiquez une date.'
  else if (form.date < todayISO) errors.date = 'La date ne peut pas être dans le passé.'

  if (!form.time) errors.time = 'Indiquez une heure.'
  else if (!isWithinServiceHours(form.time)) errors.time = RESERVATION_HOURS_MESSAGE

  const guests = Number(form.guests)
  if (!guests || guests < 1 || guests > 19) {
    errors.guests = 'Entre 1 et 19 personnes en ligne (au-delà, voir Groupes).'
  }
  if (!form.firstName.trim()) errors.firstName = 'Indiquez votre prénom.'
  if (!form.lastName.trim()) errors.lastName = 'Indiquez votre nom.'
  if (!/^0[1-9](\s?\d{2}){4}$/.test(form.phone.trim())) {
    errors.phone = 'Numéro de téléphone invalide, par exemple 06 12 34 56 78.'
  }

  return errors
}

function Reservation() {
  const [form, setForm] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [confirmed, setConfirmed] = useState(false)
  const todayISO = new Date().toLocaleDateString('en-CA')

  const handleFieldChange = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formErrors = validateForm(form, todayISO)
    setErrors(formErrors)
    if (Object.keys(formErrors).length === 0) setConfirmed(true)
  }

  if (confirmed) {
    return (
      <section className="mx-auto max-w-xl px-6 py-16 text-center">
        <h1 className="font-heading text-2xl text-ink">Réservation confirmée</h1>
        <p className="mt-4 text-ink/70">
          Merci {form.firstName.trim()}, votre table pour {form.guests} personne(s) le {form.date}{' '}
          à {form.time} est enregistrée.
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
          min={todayISO}
          value={form.date}
          onChange={handleFieldChange('date')}
          error={errors.date}
        />

        <div>
          <TextField
            id="time-field"
            label="Heure"
            type="time"
            value={form.time}
            onChange={handleFieldChange('time')}
            error={errors.time}
          />
          {!errors.time && <p className="mt-1 text-sm text-ink/60">{RESERVATION_HOURS_MESSAGE}</p>}
        </div>

        <TextField
          id="guests-field"
          label="Nombre de couverts"
          type="number"
          min="1"
          max="19"
          value={form.guests}
          onChange={handleFieldChange('guests')}
          error={errors.guests}
        />

        <TextField
          id="first-name-field"
          label="Prénom"
          type="text"
          value={form.firstName}
          onChange={handleFieldChange('firstName')}
          error={errors.firstName}
        />

        <TextField
          id="last-name-field"
          label="Nom"
          type="text"
          value={form.lastName}
          onChange={handleFieldChange('lastName')}
          error={errors.lastName}
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
