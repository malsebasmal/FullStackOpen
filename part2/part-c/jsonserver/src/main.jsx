import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios'

const promise = axios.get("http://localhost.localdomain:3001/notes")
console.log(promise)
promise.then(response => {
  const notes = response.data
  console.log(notes)
})

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
