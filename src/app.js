import express from "express";
import dotenv from "dotenv";
import bookRoutes from "./routes/book.route.js";
import userRoutes from "./routes/user.route.js";
import libraryRoutes from "./routes/library.route.js";

dotenv.config();
const app = express();

// Routes
app.use(bookRoutes);
app.use(userRoutes);
app.use(libraryRoutes);


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// Add your routes here


export default app;