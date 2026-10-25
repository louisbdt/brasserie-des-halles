import { useState } from 'react'
import Header from './components/Header'
import Groups from './screens/Groups'
import Home from './screens/Home'
import Menu from './screens/Menu'
import Reservation from './screens/Reservation'

const SCREENS = {
  home: Home,
  menu: Menu,
  reservation: Reservation,
  groups: Groups,
}

function App() {
  const [activeScreen, setActiveScreen] = useState('home')
  const ActiveScreen = SCREENS[activeScreen]

  return (
    <div className="min-h-screen bg-white">
      <Header activeScreen={activeScreen} onScreenChange={setActiveScreen} />
      <main>
        <ActiveScreen onBookTable={() => setActiveScreen('reservation')} />
      </main>
    </div>
  )
}

export default App
