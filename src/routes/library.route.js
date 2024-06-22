import express from "express";
import Library from "../models/library.model.js";
import Book from "../models/book.model.js";
import User from "../models/user.model.js";

const router = express.Router();

// Route to get all books and users in the library
router.get("/", async (req, res) => {
  try {
    const library = await Library.findOne().populate("books").populate("users");
    res.send(library);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to add a book to the library
router.post("/book/:bookId", async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    const library = await Library.findOne();
    library.books.push(book);
    await library.save();
    res.send(library);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to add a user to the library
router.post("/user/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const library = await Library.findOne();
    library.users.push(user);
    await library.save();
    res.send(library);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
