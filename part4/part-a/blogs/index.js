import e from "express"
import cors from "cors"

export const app = e()
app.use(cors())
app.use(e.json())


const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`)
})