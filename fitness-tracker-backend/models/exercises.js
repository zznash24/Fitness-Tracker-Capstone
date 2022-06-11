'use strict';
const {
  Model
} = require('sequelize');
const favorites = require('./favorites');
module.exports = (sequelize, DataTypes) => {
  class exercises extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.favorites = exercises.hasMany(models.favorites)
    }

  }
  exercises.init({
    bodyPart: DataTypes.STRING,
    equipment: DataTypes.STRING,
    gitURL: DataTypes.STRING,
    name: DataTypes.STRING,
    target: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'exercises',
  });
  return exercises;
};