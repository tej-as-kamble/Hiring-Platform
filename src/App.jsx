import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='msg'>Don't judge me right now. I am busy in family function.</p>
      <p className='msg'>You will see everything completed on <span className='deadline'>1st November</span>.</p>
    </>
  )
}

export default App
