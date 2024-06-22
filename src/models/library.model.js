import mongoose from "mongoose";

const librarySchema = new mongoose.Schema({
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Library = mongoose.model("Library", librarySchema);

export default Library;
