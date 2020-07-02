'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(75)
      },
      lastName: {
        type: Sequelize.STRING(75)
      },
      email: {
        type: Sequelize.STRING(75)
      },
      address: {
        type: Sequelize.STRING(255)
      },
      city: {
        type: Sequelize.STRING(75)
      },
      zipCode: {
        type: Sequelize.INTEGER(5)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clients');
  }
};