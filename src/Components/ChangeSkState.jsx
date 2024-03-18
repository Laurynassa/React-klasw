import { useState } from 'react'
import { ChangeSkVaikas } from './ChangeSkVaikas'

export const ChangeSkState = () => {
  const [number, setnumber] = useState(250000)

  function clickableBtn() {
    setnumber((prev) => prev + 1)
  }

  return (
    <div>
      <button onClick={clickableBtn}>haha</button>
      <ChangeSkVaikas number={number} />
    </div>
  )
}
