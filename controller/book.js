const express = required('express')
const app = express()
const {Book} = require('./models')

app.use(express.json())

app.get('./book', (req, res) => {
    Book.findAll()
    .then(book => {
        res.status(200).json(book)
    })
})

app.get('./book/buy/:id', (req, res) => {
    Book.findOne({
        where: {id:req.params.id}
    })
    .then(book => {
        res.status(200).json(book)
    })
})

app.get('./book/add', (req, res) => {
    Book.findAll()
    .then(book => {
        res.status(200).json(book)
    })
})

app.post('./book/add', (req, res) => {
    Book.create({
        title: req.body.title,
        isbn: req.body.string,
        price: req.body.price,
        stock: req.body.number
    })
    .then(book => {
        res.status(201).json(book)
    }).catch(err => {
        res.status(422).json("Tidak dapat membuat data buku")
    })
})

app.get('./book/emptyList', (req, res) => {
    Book.findAll()
    .then(book => {
        res.status(200).json(book)
    })
})

app.get('./book/restock/:id', (req, res) => {
    Book.findAll()
    .then(book => {
        res.status(200).json(book)
    })
})

app.post('./book/restock/:id', (req, res) => {
    Book.findAll()
    .then(book => {
        res.status(200).json(book)
    })
})

app.get('./book/delete/:id', (req, res) => {
    Book.findAll()
    .then(book => {
        res.status(200).json(book)
    })
})