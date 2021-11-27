require("dotenv/config");
const express = require("express");
const app = express();
const signUpRouter = require("./routers/Sign-up");

//Database
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI, (err) => {
  if (err) throw new Error(err);
});
//connection to DB
mongoose.connection.on("connected", function () {
  console.log("Mongoose default connection open");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(signUpRouter);
app.get("/", (req, res) => {
  res.send("Welcome to the app");
});
const server = app.listen(process.env.PORT || 3000);
