const { author } = require('../models/index');

class Controller {
        static getAll(req, res) {
            author.findAll()
                .then(authors => {
                    res.render('authors', { authors});
                })
                .catch(err => {
                    res.send(err);
                })
        }
}

module.exports = Controller;