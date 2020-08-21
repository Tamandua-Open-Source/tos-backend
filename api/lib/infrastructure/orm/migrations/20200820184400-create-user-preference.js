'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserPreferences', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      UserId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      UserPreferenceTimeTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      UserPreferenceStartPeriodId: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      startTime: {
        type: Sequelize.DATE,
      },
      breakDuration: {
        type: Sequelize.DATE,
      },
      nextBreak: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('UserPreferences')
  },
}
