'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      author.hasMany(models.book, {
        foreignKey: 'author_id'
      });
    }
  }
  author.init({
    name: DataTypes.STRING,
    age: DataTypes.NUMBER,
    gender: DataTypes.VARCHAR
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'author',
  });
  return author;
};