const { Authors, Books } = require("../models/index");

class Controller {
  static async getAll(req, res) {
    return await Authors.findAll({
      order: [["id", "ASC"]],
      include: Books,
    })
      .then((authors) => res.status(200).send(authors))
      .catch((error) => res.status(400).send(error));
  }
}

module.exports = Controller;
