import { DIET_LABELS } from '../constants/diets'
import Badge from './Badge'
import Button from './Button'
import styles from './DishCard.module.scss'

const formatPrice = (price) => `${price.toFixed(2).replace('.', ',')} €`

function DishCard({ dish, onViewDetail }) {
  return (
    <article className={`${styles.card} ${styles[`card--${dish.category}`]}`}>
      <span className={styles.accent} aria-hidden="true" />
      <img className={styles.photo} src={dish.photo} alt={dish.name} />
      <div className={styles.body}>
        <h3 className="font-heading text-lg text-ink">{dish.name}</h3>
        <p className="text-sm text-ink/70">{dish.description}</p>
        {dish.diets.length > 0 && (
          <ul className="flex flex-wrap gap-2" aria-label="Régimes compatibles">
            {dish.diets.map((diet) => (
              <li key={diet}>
                <Badge>{DIET_LABELS[diet]}</Badge>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-2 flex items-center justify-between">
          <span className="font-heading text-lg text-terracotta-600">
            {formatPrice(dish.price)}
          </span>
          <Button variant="secondary" onClick={() => onViewDetail(dish)}>
            Voir le détail
          </Button>
        </div>
      </div>
    </article>
  )
}

export default DishCard
