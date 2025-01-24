import persons from "./persons.js"
import e from "express"

const app = e()
const PORT = 3001
app.use(e.json())

app.get("/persons", (req, res) => {
  res.status(200).json(persons)
})

// app.get("/info", (req, res) => {
//   res.status(200).send(`
//     <p>Phonebook has info for ${persons.length} people</p>
//     <p>${new Date().toLocaleString()}</p>
//   `)
// })

app.get("/persons/:id", (req, res) => {
  const person = persons.find(person => person.id === Number(req.params.id))

  if (!person) {
    res.status(404).send("Not found")
  }

  res.status(200).json(person)
})

app.get("/", (req, res) => {})

app.listen(PORT, () => {
  console.log(`running http://localhost:${PORT}`)
})