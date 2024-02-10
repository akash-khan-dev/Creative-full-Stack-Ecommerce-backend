const express = require("express");
const app = express();
require("dotenv").config();
const mongoConfig = require("./DdConfig/mongoConfig");
const router = require("./router/index");
app.use(express.json());

app.use("/", router);
mongoConfig();
const port = process.env.PORT || 8000;

app.listen(port, function (req, res) {
  console.log("post running");
});
