const express=require('express');
const router=express.Router();

const booksRoute=require('./books.route');
const authorsRoute=require('./authors.route');

// Home
router.get('/',(req,res)=>{
    res.render('dashboard');
});
// Books
router.use('/books', booksRoute);
// Authors
router.use('/authors', authorsRoute);

module.exports=router;