const { Book, Author } = require("../models");

const getAllBook = async (req, res) => {
  try {
    const dataBook = await Book.findAll({ include: Author });
    res.status(200);
    res.render("books", {
      title: "Data Books",
      books: dataBook,
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

const buyBook = async (req, res) => {
  try {
    const dataBook = await Book.findOne({
      where: {
        id: req.params.id,
      },
    });

    // console.log(dataBook.price);
    if (dataBook != null) {
      await Book.update(
        {
          stock: dataBook.stock - 1,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
    }

    res.status(200);
    res.redirect("/books");
  } catch (error) {
    res.status(404).send({
      message: "Fail",
    });
  }
};

module.exports = {
  getAllBook,
  buyBook,
};
