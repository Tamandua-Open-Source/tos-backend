'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserPreferenceWeeklyStretchActivities', {
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
      startTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      monday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      tuesday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      wednesday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      thursday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      friday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      saturday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      sunday: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserPreferenceWeeklyStretchActivities')
  },
}
