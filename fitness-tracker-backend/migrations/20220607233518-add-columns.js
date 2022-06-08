'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'exercises',
      'gif',
      Sequelize.TEXT
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'exercises',
      'gif',
    );
  }
};
