const Sequelize = require('sequelize');
const { Author, Book }  = require('../models/index');

class AuthorController{

    static getAll(req, res){
        Author.findAll({
            order: [
                [
                    "id", "DESC"
                ]
            ],
            include: Book
         })
        .then(authors => {
            // res.status(200).json(authors);
            res.render('authors', { authors});
        })
        .catch(err => {
            res.send(err);
        });
    }

}

module.exports = AuthorController;