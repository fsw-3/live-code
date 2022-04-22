const express = require("express");
const router = express.Router();
const Controller = require("../controller/books.controller");

router.get("/", Controller.getAll);
router.get("/id/:id", Controller.getBookById);
router.get("/buy/:id", Controller.buyBook);
router.get("/emptyList", Controller.getAllEmptyBooks);
router.post("/", Controller.addBook);
router.post("/restock/:id", Controller.updateBookById);
router.get("/delete/:id", Controller.deleteBookById);

module.exports = router;
