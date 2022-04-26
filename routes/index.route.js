const express = require('express');
const router = express.Router();

const authorsRoute = require('./authors.route');
const apiAuthorsRoute = require('./api.authors.route');
const booksRoute = require('./books.route');
const apiBooksRoute = require('./api.books.route');

router.use('/api.authors', apiAuthorsRoute);
router.use('/authors', authorsRoute);

router.use('/api.books', apiBooksRoute);
router.use('/books', booksRoute);

module.exports = router;