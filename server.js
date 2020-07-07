const express = require("express");
const cors = require("cors");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
app.use("*", (req, res, next) => {
  res.setHeader("Set-Cookie", JSON.stringify({ id: "110ewer" }));
  next();
});

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/api/user", (req, res, next) => {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  const user = {
    user: "tony",
    age: 28,
  };
  res.json(user);
});

app.get("/api/user", (req, res) => {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  const user = {
    user: "tony",
    age: 28,
  };
  res.json(user);
});
app.get("/b", (req, res) => {
  res.send("b");
});
app.listen(5050, () => {
  console.log("listening 5050");
});
