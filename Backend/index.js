const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

require("dotenv").config();
app.use(cors());
const mongoConfig = require("./DdConfig/mongoConfig");
const router = require("./router/index");
app.use(express.json());

app.use("/", router);
app.use("/images", express.static(path.join(__dirname, "images")));
mongoConfig();
const port = process.env.PORT || 8000;

app.listen(port, function (req, res) {
  console.log(`port running from ${port}`);
});
