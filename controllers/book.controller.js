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

    static stockBy0(req, res) {
        Book.findAll()
            .then(books => {
                res.render('emptyList', { books });
            })
            .catch(err => {
                res.send(err);
            })
    }
    
    static create(req, res) {
        Book.create(req.body)
            .then(books => {
                res.redirect('/books'); 
            })
            .catch(err => {
                res.send(err);
            })
    }

    static getById(req, res) {
        Book.findByPk(req.params.id)
            .then(books => {
                res.status(200).json(books);
            })
            .catch(err => {
                res.send(err);
            })
    }

    static updateBook(req, res) {
        Book.findByPk(req.params.id)
            .then(books => {
                res.render('editBook', { books });
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
            .then(books => {
                res.redirect('/books/emptyList');
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
            .then(books => {
                res.redirect('/books/emptyList');
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = Controller;