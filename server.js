require("dotenv/config");
const express = require("express");
const app = express();
const Routers = require("./routers/Routers");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views", [__dirname + "/views", __dirname + "/public"]);
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
app.use(Routers);
app.get("/", (req, res) => {
  res.render("index");
});
const server = app.listen(process.env.PORT || 3000);
