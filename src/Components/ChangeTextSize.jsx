import { useState } from 'react'

export const ChangeTextSize = () => {
  const [fontSize, setFontSize] = useState(16)

  //   function Krabas() {
  //     setTxt(56)
  //   }

  const toggleFontSize = () => {
    setFontSize(fontSize === 16 ? 56 : 16)
  }

  // SetTxt((prev)=>...prev, 0) prideda naujas reiksmes prie esanciu
  // SetTxt((prev)=>...prev, name: e.target.value) objiektu reiksmem

  return (
    <div>
      <button onClick={toggleFontSize}>Text change!</button>
      <p style={{ fontSize: fontSize + 'px' }}>Labas krabas</p>
    </div>
  )
}
