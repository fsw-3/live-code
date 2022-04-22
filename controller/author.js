const express = required('express')
const app = express()
const {Author} = require('./models')

app.use(express.json())

app.get('./author', (req, res) => {
    Author.findAll()
    .then(author => {
        res.status(200).json(author)
    })
})

app.get('./author/:id', (req, res) => {
    Author.findOne({
        where: {id:req.params.id}
    })
    .then(author => {
        res.status(200).json(author)
    })
})
