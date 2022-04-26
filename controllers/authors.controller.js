const { Author }  = require('../models/index');

class AuthorController{

    static getAll(req, res){
        Author.findAll({
            order:[
                ['id','DESC']
            ]
        })
        .then(authors => {
            res.status(200).json(authors);
        })
        .catch(err => {
            res.send(err);
        });
    }

}

module.exports = AuthorController;