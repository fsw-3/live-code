'use strict';
const {
  Model
} = require('sequelize');
const A = sequelize.define('A', Author);
const B = sequelize.define('B', Book);
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      A.belongsTo(B, { foreignkey: 'id' });
    }
  }
  Book.init({
    title: DataTypes.STRING,
    isbn: DataTypes.STRING,
    price: DataTypes.NUMBER,
    stock: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};