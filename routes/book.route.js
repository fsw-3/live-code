const express = require('express');
const Controller = require('../controllers/book.controller');
const router = express.Router();

router.get('/', (req, res) => {
    Controller.getAll(req, res);
});

router.get('/add', (req, res) => {
    res.render('addBook');
});

router.get('/emptyList', (req, res) => {
    Controller.stockBy0(req, res);
});

router.post('/create', (req, res) => {
    Controller.create(req, res);
});

router.get('/:id', (req, res) => {
    Controller.getById(req, res);
});

router.get('/restock/:id', (req, res) => {
    Controller.updateBook(req, res);
});

router.post('/restock/:id', (req, res) => {
    Controller.update(req, res);
});

router.get('/delete/:id', (req, res) => {
    Controller.delete(req, res);
});

module.exports = router;