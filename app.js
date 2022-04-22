const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const route = require("./routes/routesApp");

app.use(route);

app.listen(3000, () => {
  console.log(`listen on port 3000`);
});
