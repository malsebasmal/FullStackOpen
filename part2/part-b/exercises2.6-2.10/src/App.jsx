import { useState } from 'react'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchPerson, setSearchPerson] = useState("")

  const addPerson = (event) => {
    event.preventDefault()
    const newNameObject = {name: newName, number: newNumber , id: persons.length + 1 }

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

  const handleFilterChange = (event) => {
    setSearchPerson(event.target.value)
  }
  
  const filteredPersons = searchPerson ?
    persons.filter(person => person.name.toLowerCase().includes(searchPerson.toLocaleLowerCase())) :
    persons

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with <input
            onChange={handleFilterChange}
            value={searchPerson}
            type="text"
            placeholder="type to search"
          />
      </div>
      <h2>Add a new</h2>
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
        {filteredPersons.map(person => 
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App
