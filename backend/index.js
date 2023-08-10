/** @format */

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json()); // parse json bodies in the request object

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

//Allows requests from origin endpoint
app.use(cors());

const db = require("./models");

// db.sequelize.sync().then((req) => {
//   console.log("db running");
// });

db.sequelize.authenticate().then(
  function (err) {
    console.log("Connection has been established successfully.");
  },
  function (err) {
    console.log("Unable to connect to the database:", err);
  }
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5002, () => {
  console.log(`Server listening at ${5002}`);
});
