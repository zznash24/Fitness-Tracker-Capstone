'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.exercises = favorites.belongsTo(models.exercises, {
        foreignKey: " exerciseId",
      });

      this.users = favorites.belongsTo(models.users, {
        foreignKey: "userId",
      });
    }
  }
  favorites.init({
    userId: DataTypes.STRING,
    exerciseId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'favorites',
  });
  return favorites;
};