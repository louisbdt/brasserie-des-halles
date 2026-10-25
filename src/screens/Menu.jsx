import { useState } from 'react'
import DishCard from '../components/DishCard'
import DishDetailModal from '../components/DishDetailModal'
import FilterChip from '../components/FilterChip'
import dishes from '../data/dishes.json'

const CATEGORIES = [
  { id: 'starter', label: 'Entrées' },
  { id: 'main', label: 'Plats' },
  { id: 'dessert', label: 'Desserts' },
]

const DIETS = [
  { id: 'vegetarian', label: 'végé' },
  { id: 'vegan', label: 'vegan' },
  { id: 'gluten-free', label: 'sans gluten' },
]

function Menu({ onBookTable }) {
  const [categoryFilter, setCategoryFilter] = useState(null)
  const [dietFilter, setDietFilter] = useState(null)
  const [selectedDish, setSelectedDish] = useState(null)

  const filteredDishes = dishes
    .filter((dish) => !categoryFilter || dish.category === categoryFilter)
    .filter((dish) => !dietFilter || dish.diets.includes(dietFilter))

  const sections = CATEGORIES.map((category) => ({
    ...category,
    dishes: filteredDishes.filter((dish) => dish.category === category.id),
  })).filter((section) => section.dishes.length > 0)

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="font-heading text-3xl text-ink">Notre carte</h1>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-10">
        <div>
          <span className="block text-sm font-medium text-ink/70" id="category-filter-label">
            Catégorie
          </span>
          <div
            role="group"
            aria-labelledby="category-filter-label"
            className="mt-2 flex flex-wrap gap-2"
          >
            {CATEGORIES.map((category) => (
              <FilterChip
                key={category.id}
                label={category.label}
                active={categoryFilter === category.id}
                onClick={() =>
                  setCategoryFilter(categoryFilter === category.id ? null : category.id)
                }
              />
            ))}
          </div>
        </div>

        <div>
          <span className="block text-sm font-medium text-ink/70" id="diet-filter-label">
            Régime
          </span>
          <div
            role="group"
            aria-labelledby="diet-filter-label"
            className="mt-2 flex flex-wrap gap-2"
          >
            {DIETS.map((diet) => (
              <FilterChip
                key={diet.id}
                label={diet.label}
                active={dietFilter === diet.id}
                onClick={() => setDietFilter(dietFilter === diet.id ? null : diet.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {sections.length === 0 ? (
        <p className="mt-10 text-center text-ink/70">
          Aucun plat ne correspond à ces filtres. Essayez d'en retirer un.
        </p>
      ) : (
        sections.map((section) => (
          <div key={section.id} className="mt-10">
            <h2 className="font-heading text-xl text-ink">{section.label}</h2>
            <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.dishes.map((dish) => (
                <li key={dish.id}>
                  <DishCard dish={dish} onViewDetail={setSelectedDish} />
                </li>
              ))}
            </ul>
          </div>
        ))
      )}

      {selectedDish && (
        <DishDetailModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
          onBookTable={onBookTable}
        />
      )}
    </section>
  )
}

export default Menu
