const express = require('express');
const Controller = require('../controllers/api.books.controller');
const router = express.Router();

router.get('/', (req, res) => {
    Controller.getAll(req, res);
});

//buy books
router.post('/buy/:id', (req, res) => {
    Controller.buyBook(req, res);
});

//menampilkan form menambahkan buku
router.get('/add', (req, res) => {
    Controller.formBook(req, res);
});

//add book to database
router.post('/add', (req, res) => {
    Controller.addBook(req, res);
});

//menampilkan data buku dengan stock 0
router.get('/emptyList', (req, res) => {
    Controller.emptyList(req, res);
});

//menampilkan form untuk update buku
router.get('/restock/:id',(req, res) => {
    Controller.restockForm(req, res);
});

//update data  buku
router.post('/restock/:id', (req, res) => {
    Controller.restock(req, res);
});

//delete book
router.get('/delete/:id', (req, res) => {
    Controller.deleteBook(req, res);
});



module.exports = router;