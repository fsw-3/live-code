const { Author } = require('../models/index');

class Controller {
    static getAll(req, res) {
        Author.findAll()
            .then(author => {
                res.render('author', { author });
            })
            .catch(err => {
                res.send(err);
            })
    }

    static create(req, res) {
        Author.create(req.body)
            .then(author => {
                res.redirect('/author');
            })
            .catch(err => {
                res.send(err);
            })
    }

    static getById(req, res) {
        Author.findByPk(req.params.id)
            .then(author => {
                res.status(200).json(author);
            })
            .catch(err => {
                res.send(err);
            })
    }

    static formUpdate(req, res) {
        Author.findByPk(req.params.id)
            .then(author => {
                res.render('formEdit', { author });
            })
            .catch(err => {
                res.send(err);
            })
    }

    static update(req, res) {
        Author.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(author => {
                res.redirect('/author');
            })
            .catch(err => {
                res.send(err);
            })
    }

    static delete(req, res) {
        Author.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(author => {
                res.redirect('/author');
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = Controller;