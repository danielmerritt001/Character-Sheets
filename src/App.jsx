import { useState } from 'react'

//pages
import FirstEdition from './pages/FirstEdition'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstEdition />
    </>
  )
}

export default App
