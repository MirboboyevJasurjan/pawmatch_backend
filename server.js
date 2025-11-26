const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

// TEST route
app.get("/", (req, res) => {
  res.send("PawMatch backend is running 🚀");
});

const PORT = process.env.PORT || 5000;

// connect to MongoDB and then start server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:", err.message);
  });
