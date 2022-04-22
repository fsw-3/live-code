const express = require("express");
const router = express.Router();
const axios = require("axios").default;

router.get("/", async (req, res) => {
  const authors = (await axios.get("http://localhost:5000/authors")).data;
  const data = {
    title: "Homepage",
    layout: "layouts/main_layout",
    authors,
  };
  res.render("index", data);
});

router.get("/books", async (req, res) => {
  const books = (await axios.get("http://localhost:5000/books")).data;
  const data = {
    layout: "layouts/main_layout",
    books,
  };
  res.render("books", data);
});

router.get("/books/add", async (req, res) => {
  const authors = (await axios.get("http://localhost:5000/authors")).data;
  const data = {
    layout: "layouts/main_layout",
    authors,
  };
  res.render("addBook", data);
});

router.get("/books/emptyList", async (req, res) => {
  const books = (await axios.get("http://localhost:5000/books/emptyList")).data;
  const data = {
    layout: "layouts/main_layout",
    books,
  };
  res.render("emptyBook", data);
});

router.get("/books/delete/:id", async (req, res) => {
  await axios.get(`http://localhost:5000/books/delete/${req.params.id}`);
  res.redirect("/books/emptyList");
});

router.get("/books/restock/:id", async (req, res) => {
  const book = (await axios.get(`http://localhost:5000/books/id/${req.params.id}`)).data;
  const data = {
    layout: "layouts/main_layout",
    book,
  };
  res.render("restock", data);
});

router.post("/books/restock/:id", async (req, res) => {
  await axios.post(`http://localhost:5000/books/restock/${req.params.id}`, req.body);
  res.redirect("/books/emptyList");
});

router.post("/books/add", async (req, res) => {
  const { title, isbn } = req.body;
  const newTitle = title.toLowerCase().replace(" ", "_");
  const newIsbn = newTitle + isbn;
  req.body.isbn = newIsbn;
  await axios.post("http://localhost:5000/books/", req.body);
  res.redirect("/books");
});

router.get("/books/buy/:id", async (req, res) => {
  await axios.get(`http://localhost:5000/books/buy/${req.params.id}`);
  res.redirect("/books");
});

module.exports = router;
