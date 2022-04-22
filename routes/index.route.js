const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

const authorsRoute = require('./authors.route');
const booksRoute = require('./books.route');

// Homepage Routing
router.get('/', (req, res) => {
    res.render('index');
});

// Route for Authors
router.use('/authors', authorsRoute);

// Route for Books
router.use('/books', booksRoute);

module.exports = router;