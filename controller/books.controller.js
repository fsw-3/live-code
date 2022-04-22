const { Authors, Books } = require("../models/index");
const { Op } = require("sequelize");

class Controller {
  static async getAll(req, res) {
    return await Books.findAll({
      where: {
        stock: {
          [Op.gt]: 0,
        },
      },
      order: [["id", "ASC"]],
      include: Authors,
    })
      .then((books) => {
        if (!books) {
          return res.status(404).send({
            message: "Not Found",
          });
        }
        res.status(200).send(books);
      })
      .catch((error) => res.status(400).send(error));
  }

  static async getBookById(req, res) {
    return await Books.findByPk(req.params.id)
      .then((book) => {
        if (!book) {
          return res.status(404).send({
            message: `Book with id ${req.params.id} not found`,
          });
        }
        res.status(200).send(book);
      })
      .catch((error) => res.status(400).send(error));
  }

  static async addBook(req, res) {
    return await Books.create({
      title: req.body.title,
      isbn: req.body.isbn,
      price: req.body.price,
      stock: req.body.stock,
      author_id: req.body.authorId,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then((book) => res.status(201).send(book))
      .catch((error) => res.status(400).send(error));
  }

  static async getAllEmptyBooks(req, res) {
    return await Books.findAll({
      where: {
        stock: {
          [Op.eq]: 0,
        },
      },
      order: [["id", "ASC"]],
      include: Authors,
    })
      .then((books) => res.status(200).send(books))
      .catch((error) => res.status(400).send(error));
  }
  static async deleteBookById(req, res) {
    return await Books.findByPk(req.params.id)
      .then(async (book) => {
        if (!book) {
          return res.status(404).send({
            message: `Book with id ${req.params.id} is not found`,
          });
        }
        await book.destroy().then(() => res.status(204).send());
      })
      .catch((err) => res.status(400).send(err));
  }

  static async buyBook(req, res) {
    return await Books.findByPk(req.params.id).then((book) => {
      if (!book) {
        return res.status(404).send({
          message: `Book with id ${req.params.id} is not found`,
        });
      }
      const newStock = book.stock - 1;
      book
        .update({
          stock: newStock,
          updatedAt: new Date(),
        })
        .then(() => res.status(200).send(book));
    });
  }

  static async updateBookById(req, res) {
    return await Books.findByPk(req.params.id).then((book) => {
      if (!book) {
        return res.status(404).send({
          message: `Book with id ${req.params.id} is not found`,
        });
      }
      book
        .update({
          stock: req.body.stock,
          updatedAt: new Date(),
        })
        .then(() => res.status(200).send(book));
    });
  }
}

module.exports = Controller;
