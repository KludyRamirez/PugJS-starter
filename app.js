const express = require("express");
const app = express();
const users = require("./render");

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { users });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
