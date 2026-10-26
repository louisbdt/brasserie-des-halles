import { useState } from 'react'
import Footer from './components/Footer'
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
    <div className="flex min-h-screen flex-col bg-white">
      <Header activeScreen={activeScreen} onScreenChange={setActiveScreen} />
      <main className="flex-1">
        <ActiveScreen onBookTable={() => setActiveScreen('reservation')} />
      </main>
      <Footer />
    </div>
  )
}

export default App
