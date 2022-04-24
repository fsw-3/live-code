const express = require('express');
const router = express.Router();

const booksRoute = require('./books_route');
const authorsRoute = require('./authors_route');

//books
router.use('/books', booksRoute);

//authors
router.use('/authors', authorsRoute);

module.exports = router;