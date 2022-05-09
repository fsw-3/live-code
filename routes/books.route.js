const express = require('express');
const Controller = require('../controllers/books.controller');
const router = express.Router();
const { Book, Author } = require('../models/index');

router.get('/', (req, res) => {
    Controller.getAll(req, res);
});

router.get('/emptyList', (req, res) => {
    Controller.getEmptyList(req, res);
});

router.get('/buy/:id', (req, res) => {
    Controller.buy(req, res);
});

router.get('/add', (req, res) => {
    Author.findAll()
        .then(authors => {
            res.render('form', { authors });
        })
        .catch(err => {
            res.send(err);
        });
});

router.post('/add', (req, res) => {
    Controller.add(req, res);
});

router.get('/:id', (req, res) => {
    Controller.getById(req, res);
})

router.get('/buy/:id', (req, res) => {
    Controller.buy(req, res);
})

router.get('/restock/:id', (req, res) => {
    Controller.formRestock(req, res);
});

router.post('/restock/:id', (req, res) => {
    Controller.restock(req, res);
});

router.get('/delete/:id', (req, res) => {
    Controller.delete(req, res);
});

module.exports = router;