const { Book, Author } = require('../models/index');
const { Op } = require('sequelize');
class BookController {

    //get all books, stock > 0
    static getAll(req, res) {
        Book.findAll({
            order: [
                ['id', 'DESC']
            ],
            where: {
                stock: {
                [Op.not]: 0
                }
            },
            include: Author
        })
        .then(books => {
            // res.status(200).json(books);
            res.render('index', {books})
        })
        .catch(err => {
            res.send(err);
        });
    }

    static addBook(req, res) {
        Book.create(req.body)
        .then(books => {
            res.status(200).json(books);
        })
        .catch(err => {
            res.send(err);
        })
    }

    static emptyList(req, res) {
        Book.findAll({
            where:{
                stock: 0
            }
        })
        .then(books => {
            res.status(200).json(books);
        })
        .catch(err => {
            res.send(err);
        })
    }

    static deleteBook(req, res) {
        Book.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(books => {
            res.status(200).json(books);
        })
        .catch(err => {
            res.send(err);
        })
    }

}

module.exports = BookController;