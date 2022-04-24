const express = require('express');
const router = express.Router();

const booksRoute = require('./books.route');
const authorsRoute = require('./authors.route');

//books
router.use('/books', booksRoute);

//authors
router.use('/authors', authorsRoute);

module.exports = router;