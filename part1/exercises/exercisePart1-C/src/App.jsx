import { useState } from "react"

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log("rendering with counter value", counter);
  

  const incrementByOne = () => {
    console.log("increment", counter);
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log("decrease", counter);
    setCounter(counter - 1)
  }
  const resetToCero = () => {
    console.log("reset", counter);
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={incrementByOne} text="plus"/>        
      <Button onClick={decreaseByOne} text="minus"/>        
      <Button onClick={resetToCero} text="reset" />
    </div>
  )
}

export default App
