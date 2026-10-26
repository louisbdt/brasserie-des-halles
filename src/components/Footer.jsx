import { RESTAURANT_ADDRESS, RESTAURANT_PHONE, SERVICE_HOURS } from '../constants/restaurant'

function Footer() {
  return (
    <footer className="border-t border-sage/15 bg-cream px-6 py-8 text-sm text-ink/70">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:justify-between">
        <div>
          <p className="font-heading text-base text-sage">La Brasserie des Halles</p>
          <p className="mt-1">{RESTAURANT_ADDRESS}</p>
          <p className="mt-1">{RESTAURANT_PHONE}</p>
        </div>
        <div>
          {SERVICE_HOURS.map((slot) => (
            <p key={slot.label}>
              <span className="font-medium text-ink/80">{slot.label} :</span> {slot.hours}
            </p>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
