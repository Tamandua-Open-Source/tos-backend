'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserGameActions', {
      UserId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      GameActionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      counter: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('UserGameActions')
  },
}
