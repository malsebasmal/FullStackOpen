import { useState } from "react"

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const incrementByOne = () => setCounter(counter + 1)
  const resetToCero = () => setCounter(0)

  return (
    <div>
      <div>
        {counter}
      </div>
      <button onClick={incrementByOne}>
        plus
      </button>
      <button onClick={resetToCero}>
        zero
      </button>
    </div>
  )
}

export default App
