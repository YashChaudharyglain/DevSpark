const express = require("express");
const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  res.send("Namaste Akshay!");
  next();
});

app.get("/user", (req, res) => {
  res.send({ firstName: "Akshay", lastName: "Saini" });
});

app.use("/hello", (req, res, next) => {
  res.send("Hello hello hello!");
  next();
});

app.post("/user", async (req, res) => {
  console.log(req.body);
  res.send("Data successfully saved to the database!");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully!");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
