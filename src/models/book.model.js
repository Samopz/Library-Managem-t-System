import mongoose from 'mongoose';


// Define Book model
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: { type: String, unique: true },
  borrowedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
const Book = mongoose.model("Book", bookSchema);

export default Book;