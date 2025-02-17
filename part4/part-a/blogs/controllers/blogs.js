import { Blog } from "./models/blog.js"
import { app } from "../index.js"

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