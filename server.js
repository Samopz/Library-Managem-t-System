import app from "./src/app.js";
import mongoose from "mongoose";


// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })

  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port: ${process.env.PORT}!`);
});
