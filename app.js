const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const port = 3000;
const session = require("express-session");
const route = require("./routes/index");

// Public Path
const publicDirectory = path.join(__dirname, "public");

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine, Layouts, Static Serve
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static(publicDirectory));

// Session
app.set("trust proxy", 1);
app.use(
  session({
    secret: "secretKey",
    saveUninitialized: false,
    resave: false,
  })
);

app.use(route);

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
