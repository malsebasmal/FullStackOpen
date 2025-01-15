import { useState } from "react"

const PersonForm = ({addPerson, persons}) => {
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
      const newNameObject = {name: newName, number: newNumber , id: persons.length + 1 }
      addPerson(newNameObject)
      setNewName("")
      setNewNumber("")
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