const {
    Author,
    Book
} = require("../models/index");

class Controller {
    static getAll(req, res) {
        // res.send( 'ini author controller' );
        Author.findAll()
            .then((authors) => {
                res.status(200).render("authors", {authors});
            })
            .catch((error) => {
                res.status(400).send(error)
            });
        // Author.findAll()
        //     .then(authors => {
        //         res.send({authors});
        //     })
        //     .catch(err => {
        //         res.send(err);
        //     })
    }
}

module.exports = Controller;