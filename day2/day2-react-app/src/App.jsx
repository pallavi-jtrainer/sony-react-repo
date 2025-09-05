// import './App.css'
import CrudOp from './components/CrudOp'

import { useState } from "react"

import Demo from "./components/Demo"
import Demo1 from './components/Demo1'
import Timer from './components/Timer'

function App() {

  const [loading, setLoading] = useState(false)

  if (loading) {
    return (
      <>
        {/* <h2>Hello</h2>*/}
        {/* <Demo name="Pallavi" /> */}
        {/* <Timer /> */}
        {/* <Demo1 /> */}
        <div className="container">
          <CrudOp />
        </div>

      </>
    )
  } else {
    return (
      <div>
        <h3>Error Loading</h3>
      </div>
    )
  }

}

export default App
