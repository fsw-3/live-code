const express = require('express');
const router = express.Router();

const authorRoute = require('./author.routes');
const bookRoute = require('./book.routes');

router.get('/', (req, res) => {
    res.render('index');
});

router.use('/author', authorRoute);

router.use('/book', bookRoute);

module.exports = router;