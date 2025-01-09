import { useState } from 'react'
import './App.css'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleVoteGood = () => {
    setGood(good + 1)
  }

  const handleVoteNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleVoteBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleVoteGood}>Good</button>
      <button onClick={handleVoteNeutral}>Neutral</button>
      <button onClick={handleVoteBad}>Bad</button>

      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}

export default App
