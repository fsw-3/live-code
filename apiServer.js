const express = require("express");
const app = express();
const port = process.env.port || 5000;
const authorRoutes = require("./routes/authors");
const booksRoutes = require("./routes/books");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/authors", authorRoutes);
app.use("/books", booksRoutes);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
