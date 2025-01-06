import './App.css'

const App = () => {
  const now = new Date()
  const a = 20
  const b = 5
  console.log(now, a + b)

  return (
    <div>
      <p>Hello word / Hola mundo!</p>
      <p>
        Today the date is {now.toDateString()}
      </p>
      <ul>
        <li>
          <p>
            {a} plus {b} is {a + b}
          </p>
        </li>
        <li>
          <p>
            {a} unless {b} is {a - b}
          </p>
        </li>
        <li>
          <p>
            {a} by {b} is {a * b}
          </p>
        </li>
        <li>
          <p>
            {a} divided {b} is {a * b}
          </p>
        </li>
      </ul>
    </div>
  )
}

export default App
