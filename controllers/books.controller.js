const { Book } = require('../models/index');

class BookController {

    static getAll(req, res) {
        Book.findAll({
            order: [
                ['id', 'DESC']
            ],
            where: [
                ['stock', '>', 0]
            ]
        })
        .then(books => {
            res.status(200).json(books);
        })
        .catch(err => {
            res.send(err);
        });
    }

}

module.exports = BookController;