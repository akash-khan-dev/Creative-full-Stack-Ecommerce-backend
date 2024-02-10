const express = require("express");
require("dotenv").config();
const app = express();
const router = require("./router/index");

app.use("/", router);
const port = process.env.PORT || 8000;

app.listen(port, function (req, res) {
  console.log("post running");
});
