/**
 * @file contains request handler of post resource
 * @author Fikri Rahmat Nurhidayat
 */
const authorService = require("../../../services/authorService");

module.exports = {
  showAuthors(req, res) {
    authorService
      .list()
      .then((data) => {
        res.status(200).json({
          status: "OK",
          data,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },
};
