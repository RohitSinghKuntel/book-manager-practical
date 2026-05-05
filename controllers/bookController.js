const Book = require("../models/Book")

exports.getAllBooks = async (req, res) => {
  const books = await Book.find()
  res.json(books)
}

exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body)
    res.json(book)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}

exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id)
  res.json(book)
}

exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(book)
}

exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id)
  res.json({ message: "Deleted" })
}