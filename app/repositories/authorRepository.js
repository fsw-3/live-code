const { Author } = require("../models");

module.exports = {
  findAll() {
    return Author.findAll();
  },
};
