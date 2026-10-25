const SCREENS = [
  { id: 'home', label: 'Accueil' },
  { id: 'menu', label: 'Carte' },
  { id: 'reservation', label: 'Réserver' },
  { id: 'groups', label: 'Groupes' },
]

function Header({ activeScreen, onScreenChange }) {
  return (
    <header className="border-b border-sage/15 bg-cream">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <span className="font-heading text-xl text-sage">La Brasserie des Halles</span>
        <nav aria-label="Navigation principale">
          <ul className="flex gap-2">
            {SCREENS.map((screen) => (
              <li key={screen.id}>
                <button
                  type="button"
                  aria-current={activeScreen === screen.id ? 'page' : undefined}
                  onClick={() => onScreenChange(screen.id)}
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
      </div>
    </header>
  )
}

export default Header
