const { Author } = require('../models/index');

class Controller {
    static getAll(req, res) {
        Author.findAll()
            .then(authors => {
                res.render('authors', { authors });
            })
            .catch(err => {
                res.send(err);
            });
    }

    static add(req, res) {
        Author.create(req.body)
            .then(() => {
                res.redirect('/authors');
            })
            .catch(err => {
                res.send(err);
            });
    }
}

module.exports = Controller;