import React, { useState } from 'react'

import './App.css'
import Demo from "./pages/BasicDemo.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
          Mobx demo
      </h1>
        <Demo/>
    </>
  )
}

export default App
