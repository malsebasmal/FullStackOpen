import e from "express"
import cors from "cors"
import { MONGODB_URI } from "./utils/config.js"
import { notesRouter } from "./controllers/notes.js"
import { info, errors } from "./utils/logger.js"
import mongoose from "mongoose"
import { unknownEndpoint, requestLogger, errorHandler } from "./utils/middleware.js"

export const app = e()

mongoose.set('strictQuery', false)

info('connecting to', MONGODB_URI)

mongoose.connect(MONGODB_URI)
  .then(() => {
    info('connected to MongoDB')
  })
  .catch((error) => {
    errors('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(e.static('dist'))
app.use(e.json())
app.use(requestLogger)

app.use('/api/notes', notesRouter)

app.use(unknownEndpoint)
app.use(errorHandler)