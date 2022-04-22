const express = require("express");
const router = express.Router();
const Controller = require("../controller/authors.controller");

router.get("/", Controller.getAll);

module.exports = router;
