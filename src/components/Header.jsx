import { useState } from 'react'

const SCREENS = [
  { id: 'home', label: 'Accueil' },
  { id: 'menu', label: 'Carte' },
  { id: 'reservation', label: 'Réserver' },
  { id: 'groups', label: 'Groupes' },
]

function Header({ activeScreen, onScreenChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const selectScreen = (screenId) => {
    onScreenChange(screenId)
    setIsMenuOpen(false)
  }

  return (
    <header className="border-b border-sage/15 bg-cream">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <span className="font-heading text-lg text-sage sm:text-xl">La Brasserie des Halles</span>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex gap-2">
            {SCREENS.map((screen) => (
              <li key={screen.id}>
                <button
                  type="button"
                  aria-current={activeScreen === screen.id ? 'page' : undefined}
                  onClick={() => selectScreen(screen.id)}
                  className={`min-h-11 rounded-lg px-4 py-2 font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${
                    activeScreen === screen.id ? 'bg-sage text-white' : 'text-sage hover:bg-sage/10'
                  }`}
                >
                  {screen.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-sage hover:bg-sage/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage md:hidden"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-nav" aria-label="Navigation principale" className="border-t border-sage/15 md:hidden">
          <ul className="flex flex-col px-6 py-2">
            {SCREENS.map((screen) => (
              <li key={screen.id}>
                <button
                  type="button"
                  aria-current={activeScreen === screen.id ? 'page' : undefined}
                  onClick={() => selectScreen(screen.id)}
                  className={`min-h-11 w-full rounded-lg px-4 py-2 text-left font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${
                    activeScreen === screen.id ? 'bg-sage text-white' : 'text-sage hover:bg-sage/10'
                  }`}
                >
                  {screen.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
