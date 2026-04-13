require("dotenv").config();          // ← MUST be first line

const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const db = require("./config/db");   // ← load db AFTER dotenv

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend server is running");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});