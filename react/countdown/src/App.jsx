import Title from './components/Title'

import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <div className="Container">
          <Title title="Contagem regressiva para 2023"/>
          <div className="countdown-container">
            <p>Dias</p>
          </div>
        </div>
      </div>
  )
}

export default App
