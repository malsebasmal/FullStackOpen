import { useState } from 'react'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    {name: "Arthur Hellas", number: "040-1234567"}
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const addPerson = (event) => {
    event.preventDefault()
    const newNameObject = {name: newName, number: newNumber}

    if (persons.some(person => person.name === newNameObject.name)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newNameObject))
      setNewNumber("")
      setNewName("")
    }
  }

  const handleNamePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberPersonChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNamePersonChange}
            type="text"
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberPersonChange}
            type="text"
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => 
          <li key={index}>
            {person.name} {person.number}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App
