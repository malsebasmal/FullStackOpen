import { useState } from "react"
import phonebook from "../services/phonebook"

const PersonForm = ({addPerson}) => {
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPhoneNumber = {name: newName, number: newNumber}
    phonebook
      .create(newPhoneNumber)
      .then(returnPhoneNumber => {
        addPerson(returnPhoneNumber)
        setNewName("")
        setNewNumber("")
      })
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