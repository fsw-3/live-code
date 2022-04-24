const express = require('express');
const Controller = require('../controllers/authors_controller');
const router = express.Router();

router.get('/authors', (req, res) => {
    Controller.getAll(req, res);
})


router.get('/form', (req, res) => {
    res.render('form');
})

router.get('/books', (req, res) => {
    res.render('books');
})

router.get('/books/buy/:id', (req, res) => {
    Controller.getById(req, res);
})

router.post('/books/add', (req, res) => {
    Controller.create(req, res);
})

router.get('/books/restock/:id', (req, res) => {
    Controller.formUpdate(req, res);
})

router.post('/books/restock/:id', (req, res) => {
    Controller.update(req, res);
})

router.get('/books/delete/:id', (req, res) => {
    Controller.delete(req, res);
})

module.exports = router;


