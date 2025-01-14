import { useState } from 'react'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    {name: "Arthur Hellas"}
  ])
  const [newName, setNewName] = useState("")

  const addPerson = (event) => {
    event.preventDefault()
    const newNameObject = {name: newName}
    
    if (persons.some(person => person.name === newNameObject.name)) {
      alert(`${newNameObject.name} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newNameObject))
      setNewName("")
    }
  }

  const handleNamePersonChange = (event) => {
    setNewName(event.target.value)
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
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => 
          <li key={index}>
            {person.name}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App
