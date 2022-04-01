import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import RattingViews from "./pages";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <RattingViews />
    </div>
  )
}

export default App
