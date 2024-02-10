const router = require("express").Router();
const api = process.env.API_URL;
const apiRoute = require("./api");

router.use(api, apiRoute);

module.exports = router;
