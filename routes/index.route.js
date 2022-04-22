const express = require('express');
const router = express.Router();

const booksRoute = require('./books.route');
const authorsRoute = require('./authors.route');

// router.use('/books', booksRoute);
router.use('/authors', authorsRoute);

module.exports = router;