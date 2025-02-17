import e from "express"
import cors from "cors"
import mongoose from "mongoose"
import "dotenv/config"

const app = e()
app.use(cors())
app.use(e.json())

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model("Blog", blogSchema)

const mongoUrl = process.env.MONGOURL
mongoose.connect(mongoUrl)

app.get("/api/blogs", (req, res) => {
  Blog
    .find({})
    .then(blogs => {
      res.json(blogs)
    })
})

app.post("/api/blogs", (req, res) => {
  const blog = new Blog(req.body)
  blog
    .save()
    .then(result => {
      res.status(201).json(result)
    })
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`)
})