'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Achievements', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      GameActionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      requirement: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      xp: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      badgeImageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      iconImageUrl: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Achievements')
  },
}
