const { Book, Author } = require('../models/index');

class Controller {
    static getAll(req, res) {
        Book.findAll({ include: Author })
            .then(books => {
                res.render('books', { books });
            })
            .catch(err => {
                res.send(err);
            });
    }

    static add(req, res) {
        Book.create(req.body)
            .then(() => {
                res.redirect('/books');
            })
            .catch(err => {
                res.send(err);
            });
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

    static buy(req, res) {
        Book.findByPk(req.params.id)
            .then(book => {
                if (book.stock > 0) {
                    const updateStock = book.stock - 1;
                    book.update({
                        stock: updateStock,
                        updatedAt: new Date()
                    })
                }
                res.redirect('/books');
            })
            .catch(err => {
                res.send(err);
            })
    }

    static formRestock(req, res) {
        Book.findByPk(req.params.id, { include: Author })
            .then(book => {
                res.render('formRestock', { book });
            })
            .catch(err => {
                res.send(err);
            });
    }

    static restock(req, res) {
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
            });
    }

    static delete(req, res) {
        Book.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect('/books');
            })
            .catch(err => {
                res.send(err);
            });
    }

    static getEmptyList(req, res) {
        Book.findAll({
            where: {
                stock: 0
            },
            include: Author
        })
            .then(books => {
                res.render('emptyList', { books });
            })
            .catch(err => {
                res.send(err);
            });
    }
}

module.exports = Controller;