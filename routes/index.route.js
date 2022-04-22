const express = require('express');
const ControllerAuthor = require('../controllers/author.controller');
const ControllerBook = require('../controllers/book.controller');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/authors', (req, res) => {
    ControllerAuthor.getAll(req, res);
});

router.get('/books', (req, res) => {
    ControllerBook.getAll(req, res);
});

router.get('/books/buy/:id', (req, res) => {
    ControllerBook.getById(req, res);
});

router.get('/books/add', (req, res) => {
    res.render('book');
});

router.post('/books/add', (req, res) => {
    ControllerBook.create(req, res);
});

router.get('/emptyList', (req, res) => {
    res.render('emptyList');
});

router.get('/restock/:id', (req, res) => {
    res.render('restock');
});

router.post('/restock/:id', (req, res) => {
    ControllerBook.restock(req, res);
});

router.get('/delete/:id', (req, res) => {
    ControllerBook.delete(req, res);
});


module.exports = router;