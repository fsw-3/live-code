const {Books, Authors} = require('../models/index');

class Controller{
    static getAll(req,res){
        Books.findAll({
            include: {
                Authors
            }
        })
        .then(data => {
            res.render('books', {data});
        })
        .catch(err => {
            res.send(err);
        })
    }
    static buy(req,res){
        Books.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            data.update({
                stock: data.stock - 1
            })
            .then(() => {
                res.redirect('/books');
            })
        })
        .catch(err => {
            res.send(err);
        })
    }
    static add(req,res){
        Books.create(req.body)
        .then(Books => {
            res.redirect('/books');  
        })
        .catch(err => {
            res.send(err);
        })
    }
    static emptyList(req,res){
        Books.findOne({
            where: {
                stock: 0
            }
        })
        .then(() => {
            res.redirect('/books');
        })
        .catch(err => {
            res.send(err);
        })
    }
}
module.exports = Controller;