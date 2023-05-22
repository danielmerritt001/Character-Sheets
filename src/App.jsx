//modules
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

//pages
import FirstEdition from './pages/FirstEdition/FirstEdition'
import HeroesOnJourneys from './pages/HeroesOnJourneys/HeroesOnJourneys'

//components
import NavBar from './components/NavBar/NavBar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route 
          path='/AD&D1e'
          element={<FirstEdition  />}
        />
        <Route 
          path='/HeroesOnJourneys'
          element={<HeroesOnJourneys />}
        />
      </Routes>
          

    </>
  )
}

export default App
