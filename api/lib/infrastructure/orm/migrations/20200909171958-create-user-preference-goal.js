'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserPreferenceGoals', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      UserPreferenceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      criticalPain: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      painFromWork: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      futurePain: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('UserPreferenceGoals')
  },
}
