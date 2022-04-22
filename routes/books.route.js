const express = require('express');
const Controller = require('../controllers/books.controller');
const router = express.Router();

router.get('/ ',(req,res)=>{
    Controller.getAll(req,res);
})
router.get('/buy/:id',(req,res)=>{
    Controller.buy(req,res);
})
router.get('/add',(req,res)=>{
    Controller.add(req,res);
})
router.post('/add',(req,res)=>{
    Controller.add(req,res);
})
router.get('/emptyList',(req,res)=>{
    Controller.emptyList(req,res);
})
router.get('restock/:id',(req,res)=>{
    Controller.restock(req,res);
})
router.post('restock/:id',(req,res)=>{
    Controller.restock(req,res);
})
router.get('delete/:id',(req,res)=>{
    Controller.delete(req,res);
})
module.exports = router;