import { useState } from 'react'
import './App.css'

// const Statistics = ({data}) => {
//   const [good, neutral, bad] = data

//   const total = good + neutral + bad
//   const average = (good + neutral + bad) / 3
//   const positive = (good / total) * 100

//   if (good !== 0 || neutral !== 0 || bad !== 0) {
//     return (
//       <div>
//         <h2>Statistics</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Votes</th>
//               <th>Others</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>
//                 <StatisticLine text="Good" value={good} />
//               </td>
//               <td>
//                 <p>Total: {total}</p>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <StatisticLine text="Neutral" value={neutral} />
//               </td>
//               <td>
//                 <p>Average: {average}</p>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <StatisticLine text="Bad" value={bad} />
//               </td>
//               <td>
//                 <p>Positive: {isNaN(positive) ? "0" : positive}</p>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     )
//   }

//   return (
//     <div>
//       No feedback given
//     </div>
//   )
// }

// const StatisticLine = ({text, value}) => {
//   return (
//     <div>
//       <p>
//         {text} {value}
//       </p>
//     </div>
//   )
// }

// const Button = ({text, onClick}) => {
//   return ( 
//     <button onClick={onClick}>
//       {text}
//     </button>
//   )
// }

const App = () => {
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const handleRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  return (
    <div>
      {/* <h1>Give Feedback</h1>
      <Button text="Good" onClick={() => {setGood(good + 1)}}/>
      <Button text="Neutral" onClick={() => {setNeutral(neutral + 1)}}/>
      <Button text="Bad" onClick={() => {setBad(bad + 1)}}/>

      <Statistics data={[good, neutral, bad]}/> */}
      <p>{anecdotes[selected]}</p>
      <button onClick={handleRandomAnecdote}>Next anecdote</button>
    </div>
  )
}

export default App
