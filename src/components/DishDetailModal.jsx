import { useEffect, useRef } from 'react'
import { DIET_LABELS } from '../constants/diets'
import Badge from './Badge'
import Button from './Button'

function DishDetailModal({ dish, onClose, onBookTable }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    closeButtonRef.current?.focus()

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dish-detail-title"
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl bg-white p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="dish-detail-title" className="font-heading text-xl text-ink">
            {dish.name}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fermer le détail du plat"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-ink/70 hover:bg-cream-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          >
            ✕
          </button>
        </div>
        <img
          className="mt-4 h-40 w-full rounded-lg object-cover"
          src={dish.photo}
          alt={dish.name}
        />
        <p className="mt-4 text-ink/80">{dish.description}</p>
        <div className="mt-4">
          <h3 className="text-sm font-medium text-ink/70">Allergènes</h3>
          <p className="mt-1 text-ink/80">
            {dish.allergens.length > 0
              ? dish.allergens.join(', ')
              : 'Aucun allergène majeur identifié'}
          </p>
        </div>
        {dish.diets.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Régimes compatibles">
            {dish.diets.map((diet) => (
              <li key={diet}>
                <Badge>{DIET_LABELS[diet]}</Badge>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 font-heading text-lg text-terracotta-600">
          {dish.price.toFixed(2).replace('.', ',')} €
        </p>
        {onBookTable && (
          <div className="mt-4">
            <Button
              variant="secondary"
              onClick={() => {
                onClose()
                onBookTable()
              }}
            >
              Réserver une table
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default DishDetailModal
