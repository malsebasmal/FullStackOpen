import './App.css'

const Hello = () => {
  return (
    <div>
      <h1>Hello word / Hola mundo!</h1>
    </div>
  )
}

const App = () => {
  const now = new Date()

  return (
    <div>
      <h1>Saludos:</h1>
      <Hello />
      <p>Date: {now.toDateString()}</p>
    </div>
  )
}

export default App
