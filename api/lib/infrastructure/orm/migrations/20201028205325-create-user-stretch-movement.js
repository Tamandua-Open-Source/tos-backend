'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserStretchMovements', {
      UserId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      StretchMovementId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      progress: {
        type: Sequelize.DOUBLE,
        allowNull: false,
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
    await queryInterface.dropTable('UserStretchMovements')
  },
}