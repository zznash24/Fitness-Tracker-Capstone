'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'exercises',
      'id',
    );
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'exercises',
      'id',
     Sequelize.TEXT

    )}
};
