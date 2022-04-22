const express = require('express');
const Controller = require('../controllers/authors.controller');
const router = express.Router();

router.get('/',(req,res)=>{
    Controller.getAll(req,res);
})

module.exports = router;