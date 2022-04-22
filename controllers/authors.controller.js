const {Author} = require('../models/index');

class Controller{
    static getAll(req,res){
        Author.findAll()
        .then(author => {
            res.render('authors', {author});
        })
        .catch(err => {
            res.send(err);
        })
    }
}
module.exports = Controller;