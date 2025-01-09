import { useState } from 'react'
import './App.css'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good + neutral + bad) / 3
  const positive = (good / total) * 100

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => {setGood(good + 1)}}>Good</button>
      <button onClick={() => {setNeutral(neutral + 1)}}>Neutral</button>
      <button onClick={() => {setBad(bad + 1)}}>Bad</button>

      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      ----------------
      <p>Total: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {isNaN(positive) ? "0" : positive}</p>
    </div>
  )
}

export default App
