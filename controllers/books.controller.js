const { Book } = require('../models/index');

class Controller {
    static getAll(req, res) {
        Book.findAll()
            .then(books => {
                res.render('books', { books });
            })
            .catch(err => {
                res.send(err);
            })
    }

    static create(req, res) {
        Book.create(req.body)
            .then(book => {
                res.redirect('/books');
            })
            .catch(err => {
                res.send(err);
            })
    }

    static getById(req, res) {
        Book.findByPk(req.params.id)
            .then(book => {
                res.status(201).json(book);
            })
            .catch(err => {
                res.send(err);
            })
    }

    static update(req, res) {
        Book.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(book => {
                res.redirect('/books');
            })
            .catch(err => {
                res.send(err);
            })
    }

    static restock(req, res) {
        Book.findByPk(req.params.id)
            .then(book => {
                res.render('formUpdate', { book });
            })
            .catch(err => {
                res.send(err);
            })
    }

    static delete(req, res) {
        Book.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(book => {
                res.redirect('/books/emptyList');
            })
            .catch(err => {
                res.send(err);
            })
    }

    static findEmpty(req, res) {
        Book.findAll({
            where: {
                stock: 0
            }
        })
            .then(book => {
                res.status(200).json(book);
            })
            .catch(err => {
                res.send(err);
            })
    }

    static buy(req, res) {
        Book.findByPk(req.params.id)
            .then(book => {
                // res.redirect('/books')
                return book.decrement(['stock'], { by: 1 });
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = Controller;