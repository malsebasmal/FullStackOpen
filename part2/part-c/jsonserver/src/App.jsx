import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState([""])
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log("effect")
    axios
      .get("http://localhost:3001/notes")
      .then(response => {
        console.log("promise fulfilled")
        setNotes(response.data)
      })
  }, [])
  console.log("render", notes.length, "notes")

  return (
    <div>
      s
    </div>
  )
}

export default App
