import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>cosmonaut</h1>
        <div className="outer-container">
          <div className="inner-container-search">

          </div>
          <div className="inner-container-apod">
            
          </div>
        </div>
    </>
  )
}

export default App
