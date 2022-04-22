const { book } = require('../models/index');

class Controller {
    static getAll(req, res) {
        book.findAll()
            .then(books => {
                res.render('books', { books });
            })
            .catch(err => {
                res.send(err);
            })
    }
    static create (req, res) {
        book.create(req.body)
        .then(() => {
            res.redirect('/books');
        })
        .catch(err => {
            res.send(err);
        })
    }

    static getById(req, res) {
        book.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(book => {
            res.render('buy', { book });
        })
        .catch(err => {
            res.send(err);
        })
    }

    static restock(req, res) {
        book.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/books');
        })
        .catch(err => {
            res.send(err);
        })
    }

    static delete(req, res) {
        book.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/books');
        })
        .catch(err => {
            res.send(err);
        })
    }

    static getEmptyList(req, res) {
        res.render('emptyList');
    }

    static getRestock(req, res) {
        res.render('restock');
    }
}