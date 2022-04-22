const { Author, Book } = require("../models");
const collect = require("collect.js");

const getAllAuthor = async (req, res) => {
  try {
    const dataAuthor = await Author.findAll({ include: Book });
    res.status(200);
    res.render("authors", {
      title: "Data Authors",
      authors: dataAuthor,
      collect: collect,
    });
    // res.status(200).json({
    //   message: "Success",
    //   data: dataAuthor,
    // });
  } catch (error) {
    res.status(404).send({
      message: "Fail",
    });
  }
};

module.exports = {
  getAllAuthor,
};
