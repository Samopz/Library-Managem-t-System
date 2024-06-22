import Book from "../models/book.model.js";  // Import the Book model
import express from "express";  // Import express

const router = express.Router();  // Create a new router

// Define routes
router.post("/register/book", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/book/:isbn", async (req, res) => {
  try {
    const book = await Book.findOne({ isbn: req.params.isbn });
    if (!book) {
      return res.status(404).send("Book not found");
    }
    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;

