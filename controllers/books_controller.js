const { Book } = require('../models/index');

class Controller {
    static getAll(req,res) {
        Book.findAll({ include: Author })
            .then(books => {
                res.render('books', { books});
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
                res.status(200).json(book);
            })
            .catch(err => {
                res.send(err);
            })
    }

    static formUpdate(req, res) {
        Book.findByPk(req.params.id)
            .then(book => {
                res.render('formEdit', { book });
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

    static delete(req, res) {
        Book.destroy({
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


}