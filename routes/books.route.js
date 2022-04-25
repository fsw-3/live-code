const express = require('express');
const Controller = require('../controllers/books.controller');
const router = express.Router();

router.get('/', (req, res) => {
    Controller.getAll(req, res);
    // res.send('ini root dari author');
})

router.get('/buy/:id', (req,res)=>{

});

router.get('/add', (req,res)=>{

});

router.post('/add', (req,res)=>{

});

router.get('/emptyList', (req,res)=>{

});

router.get('/restock/:id',(req,res)=>{

});

router.post('/restock/:id',(req,res)=>{

});

router.get('/delete/:id',(req,res)=>{

});

module.exports = router;