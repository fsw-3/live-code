const express = require('express');
const router = express.Router();

const authorRoute = require('./author.route');
const bookRoute = require('./book.route');

//home
router.get('/', (req, res) => {
    res.render('home');
});

//authors
router.use('/authors', authorRoute);

//books
router.use('/books', bookRoute);


module.exports = router;