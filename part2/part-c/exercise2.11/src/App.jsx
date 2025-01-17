import { useState } from 'react'
import './App.css'
import Filter from './components/Filter.jsx'
import Persons from './components/Persons.jsx'
import PersonForm from './components/PersonForm.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ])

  const [searchPerson, setSearchPerson] = useState("");

  const handleFilterChange = (event) => {
    setSearchPerson(event.target.value);
  }

  const addPerson = (newPerson) => {
    if (persons.some((person) => person.name === newPerson.name)) {
      alert(`${newPerson.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter searchPerson={searchPerson} handleFilterChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} persons={persons}/>
      <h2>Numbers</h2>
      <Persons searchPerson={searchPerson} persons={persons}/> 
    </div>
  )
}

export default App
