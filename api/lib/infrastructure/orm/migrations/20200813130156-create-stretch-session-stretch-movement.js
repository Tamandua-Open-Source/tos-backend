'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StretchSessionStretchMovements', {
      StretchSessionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      StretchMovementId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('StretchSessionStretchMovements')
  },
}
