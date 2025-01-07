import './App.css'

const Hello = (props) => {
  console.log(props)

  return (
    <div>
      <h1>Hello word and {props.name}, you age {props.age} years old</h1>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greeting app created by <a href="https://github.com/mluukkai">muulakai</a>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const name = "Peter"
  const age = 25
  const friendsObj = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]
  const friendsArr = [ 'Peter', 'Maya']

  return (
    <div>
      <h1>Greetings:</h1>
      <Hello name="Thomas" age={10 + 5}/>
      <Hello name={name} age={age}/>
      <p>Date: {now.toDateString()}</p>
      <Footer />
      <p>
        {friendsObj[0].name} {friendsObj[0].age}
      </p>
      <p>
        {friendsObj[1].name} {friendsObj[1].age}
      </p>
      <p>{friendsArr}</p>
    </div>
  )
}

export default App
