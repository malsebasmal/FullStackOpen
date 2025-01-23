const express = require("express")
const app = express()
app.use(express.json())

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

app.get("/", (req, res) => {
  res.send("<h1>Habla causa</h1>")
})

app.get("/notes", (req, res) => { 
  res.json(notes)
})

app.get("/notes/:id", (req, res) => {
  const id = Number(req.params.id)
  const note = notes.find(note => note.id === id)

  if (note) {
    res.json(note)
  } else {
    res.status(404).send("not found webon")
  }
})

app.delete("/notes/:id", (req, res) => {
  const id = Number(req.params.id)
  notes = notes.filter(note => note.id !== id)
  res.status(204).end()
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}


app.post("/notes", (req, res) => {
  const body = req.body

  if (!body.content) {
    return response.status(400).json({
      error: "content missing"
    })
  }

  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateId()
  }

  notes = notes.concat(note)
  res.json(note)
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`running  http://localhost:${PORT}`)
})