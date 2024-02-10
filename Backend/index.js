const express = require("express");
require("dotenv").config();
const app = express();
const router = require("./router/index");

app.use("/", router);

app.listen(3000);
