import mongoose from "mongoose"
import "dotenv/config"

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model("Blog", blogSchema)

const mongoUrl = process.env.MONGOURL
mongoose.connect(mongoUrl)

export {
  Blog
}