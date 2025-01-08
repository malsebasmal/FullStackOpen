import { useState } from 'react'
import './App.css'

const App = () => {
  const [right, setRight] = useState(0)
  const [left, setLeft] = useState(0)
  
  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>left</button>
      <button onClick={() => setRight(right + 1)}>right</button>
      {right}
    </div>
  )
}

export default App
