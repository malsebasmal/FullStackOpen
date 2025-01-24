import e from "express"

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

const reqLogger = (req, res, next) => {
  console.log('Method:', req.method)
  console.log('Path:  ', req.path)
  console.log('Body:  ', req.body)
  console.log('---')
  next()
}

const app = e()
const PORT = 3001
app.use(reqLogger)
app.use(e.json())

app.get("/persons", (req, res) => {
  res.status(200).json(persons)
})

app.get("/info", (req, res) => {
  res.status(200).send(`
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date().toLocaleString()}</p>
  `)
})

app.get("/persons/:id", (req, res) => {
  const person = persons.find(person => person.id === Number(req.params.id))

  if (!person) {
    res.status(404).send("Not found")
  }

  res.status(200).json(person)
})

app.delete("/persons/:id", (req, res) => {
  persons = persons.filter(person => person.id !== Number(req.params.id))
  res.status(204).send(`delete person with id ${req.params.id}`)
})

const gId = () => {
  const id = Math.random().toString(36).substring(2)
  return id
}

app.post("/persons", (req, res) => {
  const requiredFields = ["name", "number"]
  const errors = []

  requiredFields.forEach(field => {
    if (!req.body[field]) {
      errors.push(`El campo "${field}" es obligatorio.`);
    }
  });

  if (errors.length > 0) {
    return res.status(400).json({ errors })
  }

  const person = {
    id: gId(),
    ...req.body
  }
  persons = persons.concat(person)

  res.status(201).json(person)
})

app.listen(PORT, () => {
  console.log(`running http://localhost:${PORT}`)
})