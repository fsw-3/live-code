const express = require('express');
const req = require('express/lib/request');
const Controller = require('../controllers/books.controller');
const router = express.Router();

router.get('/', (req, res) => {
    Controller.getAll(req, res);
});

router.get('/buy/:id', (req,res) => {
    Controller.buy(req, res);
});

router.get('/add', (req,res) => {
    res.render('form');
});

router.post('/add', (req,res) => {
    Controller.add(req, res);
});

router.get('/emptyList', (req,res) => {
    res.render('emptylist');
});

router.get('/restock/:id', (req,res) => {
    Controller.formRestock(req, res);
});

router.post('/restock/:id', (req,res) => {
    Controller.restock(req, res);
});

router.get('/delete/:id', (req, res) => {
    Controller.delete(req, res);
});

module.exports = router;