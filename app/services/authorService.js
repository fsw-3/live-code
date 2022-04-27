const authorRepository = require("../repositories/authorRepository");

module.exports = {
  list() {
    return authorRepository.findAll();
  },
};
