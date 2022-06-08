'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'exercises',
      'repetitions',
      Sequelize.INTEGER 
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'exercises',
      'repetitions',
    );
  }
};
