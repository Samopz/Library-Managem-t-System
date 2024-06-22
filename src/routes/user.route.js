import User from "../models/user.model.js"; // Import the User model
import Book from "../models/book.model.js"; // Import the Book model
import express from "express"; // Import express

const router = express.Router();  // Create a new router

// Define routes
router.post("/register/user", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/user/:userId/borrow/:isbn", async (req, res) => {
  try {
    const user = await User.findOne({ uniqueId: req.params.userId });
    const book = await Book.findOne({ isbn: req.params.isbn });
    if (!user || !book) {
      return res.status(404).send("User or book not found");
    }
    if (user.borrowedBooks.length >= 3) {
      return res.status(400).send("User has already borrowed 3 books");
    }
    user.borrowedBooks.push(book.isbn);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/user/:userId/return/:isbn", async (req, res) => {
  try {
    const user = await User.findOne({ uniqueId: req.params.userId });
    if (!user) {
      return res.status(404).send("User not found");
    }
    user.borrowedBooks = user.borrowedBooks.filter(
      (isbn) => isbn !== req.params.isbn
    );
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
