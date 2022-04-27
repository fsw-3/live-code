const express = require('express');
const req = require('express/lib/request');
const Controller = require('../controllers/books.controller');
const router = express.Router();

router.get('/', (req, res) => {
    Controller.getAll(req, res);
})

router.get('/add', (req, res) => {
    res.render('formAdd');
})

router.post('/add', (req, res) => {
    Controller.create(req, res);
})

router.get('/:id', (req, res) => {
    Controller.getById(req, res);
})

// router.get('/restock/:id', (req, res) => {
//     res.render('formUpdate');
// })

router.get('/restock/:id', (req, res) => {
    Controller.restock(req, res);
})

router.delete('/delete/:id', (req, res) => {
    Controller.delete(req, res);
})

router.post('/emptyList', (req, res) => {
    Controller.findEmpty(req, res);
})

router.post('/buy/:id', (req, res) => {
    Controller.buy(req, res);
})


module.exports = router;