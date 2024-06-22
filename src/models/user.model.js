import mongoose from "mongoose";

// Define User model
const userSchema = new mongoose.Schema({
  name: String,
  id: String,
  borrowedBooks: [String], // array of ISBNs
});
const User = mongoose.model("User", userSchema);

export default User;
