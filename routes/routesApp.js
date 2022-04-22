const express = require("express");
const route = express.Router();

const { getAllAuthor } = require("../controllers/AuthorController");

const { getAllBook, buyBook } = require("../controllers/BookController");

route.get("/authors", getAllAuthor);
route.get("/books", getAllBook);
route.get("/books/buy/:id", buyBook);
// route.get("/books/add");
// route.post("/books/add");
// route.get("/books/emptyList");
// route.get("/books/emptyList");
// route.post("/books/restock/:id");
// route.post("/books/delete/:id");

module.exports = route;
