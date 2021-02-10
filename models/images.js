'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.comments.hasMany(models.user)
    }
  };
  images.init({
    name: DataTypes.STRING,
    url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'images',
  });
  return images;
};