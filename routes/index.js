const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const authController = require("../controller/auth.controller");
const userController = require("../controller/users.controller");

router.get("/authors", authController.publicOnly, async (req, res) => {
  const authors = (await axios.get("http://localhost:5000/authors")).data;
  const data = {
    title: "Homepage",
    layout: "layouts/main_layout",
    authors,
  };
  res.render("index", data);
});

router.get("/books", authController.publicOnly, async (req, res) => {
  const books = (await axios.get("http://localhost:5000/books")).data;
  const data = {
    layout: "layouts/main_layout",
    books,
  };
  res.render("books", data);
});

router.get("/books/add", authController.authorizedOnly, async (req, res) => {
  const authors = (await axios.get("http://localhost:5000/authors")).data;
  const data = {
    layout: "layouts/main_layout",
    authors,
  };
  res.render("addBook", data);
});

router.get("/books/emptyList", authController.publicOnly, async (req, res) => {
  const books = (await axios.get("http://localhost:5000/books/emptyList")).data;
  const data = {
    layout: "layouts/main_layout",
    books,
  };
  res.render("emptyBook", data);
});

router.get("/books/delete/:id", authController.authorizedOnly, async (req, res) => {
  await axios.get(`http://localhost:5000/books/delete/${req.params.id}`);
  res.redirect("/books/emptyList");
});

router.get("/books/restock/:id", authController.authorizedOnly, async (req, res) => {
  const book = (await axios.get(`http://localhost:5000/books/id/${req.params.id}`)).data;
  const data = {
    layout: "layouts/main_layout",
    book,
  };
  res.render("restock", data);
});

router.post("/books/restock/:id", authController.authorizedOnly, async (req, res) => {
  await axios.post(`http://localhost:5000/books/restock/${req.params.id}`, req.body);
  res.redirect("/books/emptyList");
});

router.post("/books/add", authController.authorizedOnly, async (req, res) => {
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

router.get("/login", authController.publicOnly, (req, res) => {
  const data = {
    title: "Login",
    layout: "layouts/main_layout",
  };
  res.render("login", data);
});

router.get("/registrasi", authController.publicOnly, (req, res) => {
  const data = {
    title: "Registrasi",
    layout: "layouts/main_layout",
  };
  res.render("regis", data);
});

router.post("/registrasi", userController.registrasi);

router.post("/login", authController.login);
router.get("/logout", authController.logout);

module.exports = router;
