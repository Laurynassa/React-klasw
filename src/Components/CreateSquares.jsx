import { useState } from 'react'
import { random } from '../function/function'

export const CreateSquares = () => {
  const [square, setSquare] = useState([])

  function creation() {
    setSquare((prevSquare) => [...prevSquare, random(0, 50)])
  }
  return (
    <div>
      <button onClick={creation}>Click</button>
      <div style={{ display: 'flex' }}>
        {square.map((square, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'aqua',
              width: '70px',
              height: '70px',
              margin: '5px',
            }}
          >
            {square}
          </div>
        ))}
      </div>
    </div>
  )
}
