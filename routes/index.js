const express = require('express');
const route = express();

const { Author } = require('./models');
const { Book } = require('./models');

route.use(express.json());

route.get('/authors', (req, res) => {
    Author.findAll()
    .then(author => {
        res.status(200).json(author);
    })
})

route.get('/books', (req, res) => {
    Book.findAll()
    .then(book => {
        res.status(200).json(book);
    })
})

route.put('/books/buy/:id', (req, res) => {
    Book.update({
        where: {
            id: req.params.id
        }
    })
    .then(book => {
        res.status(200).json(book);
    }) .catch(err => {
        res.status(422).json(err);
    })
})

