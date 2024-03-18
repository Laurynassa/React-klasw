import React from 'react'
import './App.css'
import { ChangeSkState } from './Components/ChangeSkState'
import { ChangeSkVaikas } from './Components/ChangeSkVaikas'
import { ChangeTextSize } from './Components/ChangeTextSize'
import { Atvaizdavimas } from './Components/ComponentA'
import { CreateSquares } from './Components/CreateSquares'
import {useState} from React
function App() {
  const [number, setNumber]= useState()

  return (
    <div className="App">
      <h1>Hello</h1>
      <ChangeTextSize />
      <ChangeSkState />
      <CreateSquares />
      <ComponentA />
    </div>
  )
}

export default App
