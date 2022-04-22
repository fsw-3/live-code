const { Book, Author } = require('../models/index');

class Controller {
    static getAll(req, res) {
        Book.findAll(req.body, {
                where: {
                    stock: req.params.stock
                },
                include: Author
            })
            .then(book => {
                res.render('book', { book });
            })
            .catch(err => {
                res.send(err);
            })
    }

    static buy(req, res) {
        Book.create(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(book => {
                res.redirect('/book');
            })
            .catch(err => {
                res.send(err);
            })
    }

    static formCreate(req, res) {
        Author.findAll()
            .then(author => {
                res.render('formCreate', { author });
            })
            .catch(err => {
                res.send(err);
            })
    }

    static create(req, res) {
        Book.create(req.body)
            .then(book => {
                res.redirect('/book');
            })
            .catch(err => {
                res.send(err);
            })
    }

    static getEmptyList(req, res) {
        Book.findAll(req.body, {
                where: {
                    stock: req.params.stock
                }
            })
            .then(book => {
                res.status(200).json(book);
            })
            .catch(err => {
                res.send(err);
            })
    }

    static formRestock(req, res) {
        Book.findByPk(req.params.id)
            .then(book => {
                res.render('formEdit', { book });
            })
            .catch(err => {
                res.send(err);
            })
    }

    static restock(req, res) {
        Book.update(req.body, {
                where: {
                    id: req.params.id
                }
             })
            .then(book => {
                res.redirect('/book');
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
                res.redirect('/book');
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = Controller;