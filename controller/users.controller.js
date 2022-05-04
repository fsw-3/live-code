const { User } = require("../models/index");
const bcrypt = require("bcrypt");

class Controller {
  static async registrasi(req, res) {
    const email = req.body.email;
    const password = await bcrypt.hash(req.body.password, 10);
    try {
      await User.create({
        email,
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
    res.redirect("/login");
  }
}

module.exports = Controller;
