const {
    Book, Author
} = require('../models/index');

const { Op } = require("sequelize");

class Controller{

    static getAll(req, res) {
        Book.findAll()
            .then(books => {
                res.render('books', {books});
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = Controller;