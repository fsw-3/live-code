const { Book, Author } = require('../models/index');

class Controller {
    static getAll(req, res) {
        Book.findAll({
            include: Author
        })
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

    static formRestock(req, res) {
        Book.findbyPk(req.params.id)
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
            .then(() => {
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
}

module.exports = Controller;