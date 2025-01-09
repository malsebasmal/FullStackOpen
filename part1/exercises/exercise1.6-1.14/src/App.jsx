import { useState } from 'react'
import './App.css'

const Statistics = ({data}) => {
  const [good, neutral, bad] = data

  const total = good + neutral + bad
  const average = (good + neutral + bad) / 3
  const positive = (good / total) * 100

  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <StatisticLine text="Good" value={good}/>
        <StatisticLine text="Neutral" value={neutral}/>
        <StatisticLine text="Bad" value={bad}/>
        ----------------
        <p>Total: {total}</p>
        <p>Average: {average}</p>
        <p>Positive: {isNaN(positive) ? "0" : positive}</p>
      </div>
    )
  }

  return (
    <div>
      No feedback given
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <div>
      <p>
        {text} {value}
      </p>
    </div>
  )
}

const Button = ({text, onClick}) => {
  return ( 
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" onClick={() => {setGood(good + 1)}}/>
      <Button text="Neutral" onClick={() => {setNeutral(neutral + 1)}}/>
      <Button text="Bad" onClick={() => {setBad(bad + 1)}}/>

      <Statistics data={[good, neutral, bad]}/>
    </div>
  )
}

export default App
