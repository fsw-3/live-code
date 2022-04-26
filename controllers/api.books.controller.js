const { Book } = require('../models/index');
const { Op } = require('sequelize');
class apiBooksController{
      static getAll(req, res) {
        Book.findAll({
            order: [
                ['id', 'DESC']
            ],
            where: {
                stock: {
                [Op.not]: 0
                }
            }
        })
        .then(books => {
            res.status(200).json(books);
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
}

module.exports = apiBooksController;