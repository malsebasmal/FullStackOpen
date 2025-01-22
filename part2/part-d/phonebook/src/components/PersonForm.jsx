import { useState } from "react"
import phonebook from "../services/phonebook"

const PersonForm = ({addPerson, persons, setMessage}) => {
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(person => person.name === newName)
    if (existingPerson) {
      const updatedPerson = { ...existingPerson, number: newNumber }
      phonebook
        .update(existingPerson.id, updatedPerson)
        .then(returnedPerson => {
          addPerson(
            persons.map(person => person.id !== existingPerson.id ? person : returnedPerson)
          )
          setNewName("")
          setNewNumber("")
        })
        .catch(err => {
          setMessage(`Information of ${existingPerson.name} has already been removed from server`)
        })
    } else {
      const newPerson = { name: newName, number: newNumber }
      phonebook
        .create(newPerson)
        .then(returnedPerson => {
          addPerson([...persons, returnedPerson])
          setMessage(`Added ${newPerson.name}`)
          setNewName("")
          setNewNumber("")
        })
        setTimeout(() => {
          setMessage(null)
        }, 2000)
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:
        <input
          value={newName}
          onChange={handleNameChange}
          type="text"
        />
      </div>
      <div>
        number:
        <input
          value={newNumber}
          onChange={handleNumberChange}
          type="text"
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}
export default PersonForm