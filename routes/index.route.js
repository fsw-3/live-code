const express = require('express');
const author = require('../models/author');
const { route } = require('./books.route');
const router = express.Router();

const booksRoute = require('./books.route');
const authorRoute = require('./author.route');

router.get('/', (req, res) => {
    res.render('home');
})

router.use('/books', booksRoute);
router.use('/authors', authorRoute);

module.exports = router;