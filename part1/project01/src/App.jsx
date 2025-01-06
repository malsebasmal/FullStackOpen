import './App.css'

const Hello = (props) => {
  console.log(props)

  return (
    <div>
      <h1>Hello word and {props.name}, you age {props.age} years old</h1>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const name = "Peter"
  const age = 25

  return (
    <div>
      <h1>Greetings:</h1>
      <Hello name="Thomas" age={10 + 5}/>
      <Hello name={name} age={age}/>
      <p>Date: {now.toDateString()}</p>
    </div>
  )
}

export default App
