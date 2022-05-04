const { User } = require("../models/index");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  if (!user) {
    return res.status(404).send({
      message: "Email salah",
    });
  }
  const status = await bcrypt.compare(password, user.password);
  if (!status) {
    return res.status(404).send({
      message: "Password salah",
    });
  }
  req.session.isAuthenticated = true;
  req.session.user = user;
  res.redirect("/authors");
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};

const publicOnly = (req, res, next) => {
  next();
};

const authorizedOnly = (req, res, next) => {
  if (!req.session.isAuthenticated) {
    res.redirect("/login");
    return;
  }
  next();
};

module.exports = { login, logout, publicOnly, authorizedOnly };
