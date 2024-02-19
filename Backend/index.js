const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
app.use(cors());
const mongoConfig = require("./DdConfig/mongoConfig");
const router = require("./router/index");
app.use(express.json());

app.use("/", router);
mongoConfig();
const port = process.env.PORT || 8000;

app.listen(port, function (req, res) {
  console.log(`port running from ${port}`);
});
