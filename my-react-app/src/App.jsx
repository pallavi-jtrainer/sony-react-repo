// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MainComponent from './components/MainComponent'

function App() {
  // const [count, setCount] = useState(0)
  const greeting = "{Welcome}"

  return (
    <>
      <div className="card">
        {greeting} To React !!
      </div>
      <MainComponent first="Pallavi" last="Prasad" />

    </>
  )
}

export default App
