const express = require('express');
const req = require('express/lib/request');
const Controller = require('../controllers/authors.controller');
const router = express.Router();

router.get('/', (req, res) => {
    Controller.getAll(req, res);
})

module.exports = router;