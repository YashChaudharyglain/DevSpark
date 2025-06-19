const express = require("express");

const app = express();

// Default route - runs for "/"
app.use("/", (req, res) => {
  res.send("Yash Chaudhary!");
});

// Route for "/hello"
app.use("/hello", (req, res) => {
  res.send("Hello hello hello!");
});

// Route for "/test"
app.use("/test", (req, res) => {
  res.send("Hello from the server!");
});

// Start the server
app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
