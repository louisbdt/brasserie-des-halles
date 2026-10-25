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

function Menu() {
  const [categoryFilter, setCategoryFilter] = useState(null)
  const [dietFilter, setDietFilter] = useState(null)
  const [sortOrder, setSortOrder] = useState('none')
  const [selectedDish, setSelectedDish] = useState(null)

  const filteredDishes = dishes
    .filter((dish) => !categoryFilter || dish.category === categoryFilter)
    .filter((dish) => !dietFilter || dish.diets.includes(dietFilter))
    .sort((a, b) => {
      if (sortOrder === 'ascending') return a.price - b.price
      if (sortOrder === 'descending') return b.price - a.price
      return 0
    })

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="font-heading text-3xl text-ink">Notre carte</h1>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="sr-only" id="category-filter-label">
          Filtrer par catégorie
        </span>
        <div role="group" aria-labelledby="category-filter-label" className="flex gap-2">
          {CATEGORIES.map((category) => (
            <FilterChip
              key={category.id}
              label={category.label}
              active={categoryFilter === category.id}
              onClick={() => setCategoryFilter(categoryFilter === category.id ? null : category.id)}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="sr-only" id="diet-filter-label">
          Filtrer par régime
        </span>
        <div role="group" aria-labelledby="diet-filter-label" className="flex gap-2">
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

      <div className="mt-4">
        <label htmlFor="price-sort" className="text-sm font-medium text-ink/70">
          Trier par prix
        </label>
        <select
          id="price-sort"
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value)}
          className="ml-2 min-h-11 rounded-lg border border-sage/30 bg-white px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        >
          <option value="none">Par défaut</option>
          <option value="ascending">Du moins cher au plus cher</option>
          <option value="descending">Du plus cher au moins cher</option>
        </select>
      </div>

      {filteredDishes.length === 0 ? (
        <p className="mt-10 text-center text-ink/60">
          Aucun plat ne correspond à ces filtres. Essayez d'en retirer un.
        </p>
      ) : (
        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDishes.map((dish) => (
            <li key={dish.id}>
              <DishCard dish={dish} onViewDetail={setSelectedDish} />
            </li>
          ))}
        </ul>
      )}

      {selectedDish && (
        <DishDetailModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
      )}
    </section>
  )
}

export default Menu
