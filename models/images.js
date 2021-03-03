'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.image.hasMany(models.comment)
      models.image.belongsToMany(models.user, {through: 'usersImages'})
    }
  };
  image.init({
    name: DataTypes.STRING,
    url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'image',
  });
  return image;
};