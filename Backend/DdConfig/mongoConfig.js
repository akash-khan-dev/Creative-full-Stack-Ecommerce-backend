const mongoose = require("mongoose");
const Dd = process.env.DB_URL;

const mongoConfig = () => {
  mongoose.connect(Dd).then(() => console.log("database Connected!"));
};
module.exports = mongoConfig;
