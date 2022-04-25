const express = require('express');
const Controller = require('../controllers/authors.controller');
const router = express.Router();

router.get('/', (req, res) => {
    Controller.getAll(req, res);
    // res.send('ini root dari author');
})

module.exports = router;