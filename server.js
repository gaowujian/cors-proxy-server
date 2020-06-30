const express = require("express");

const app = express();

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
app.listen(5000, () => {
  console.log("listening 5000");
});
