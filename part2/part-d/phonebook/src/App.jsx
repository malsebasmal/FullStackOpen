import { useState } from 'react'
import './App.css'
import Filter from './components/Filter.jsx'
import Persons from './components/Persons.jsx'
import PersonForm from './components/PersonForm.jsx'
import { useEffect } from 'react'
import phonebook from './services/phonebook.js'
import Notification from './components/Notification.jsx'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchPerson, setSearchPerson] = useState("")
  const [message, setMessage] = useState("Hello")

  useEffect(() => {
    phonebook
      .getAll()
      .then(allNumbers => {
        setPersons(allNumbers)
      })
  }, [])

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
  
  const deletedPerson = (id) => {
    if(window.confirm("Are you sure you want to deleted this person?")) {
      phonebook
      .deleted(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message}/>
      <Filter searchPerson={searchPerson} handleFilterChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} setMessage={setMessage} persons={persons}/>
      <h2>Numbers</h2>
      <Persons searchPerson={searchPerson} persons={persons} deletedPerson={deletedPerson}/> 
    </div>
  )
}

export default App
