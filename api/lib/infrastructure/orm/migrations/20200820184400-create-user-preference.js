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
        unique: true,
      },
      UserPreferenceTimeTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      UserPreferenceStartPeriodId: {
        type: Sequelize.INTEGER,
      },
      fcmToken: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      startTime: {
        type: Sequelize.DATE,
      },
      allowTimerNotifications: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      allowWorkoutNotifications: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      allowGeneralNotifications: {
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
    await queryInterface.dropTable('UserPreferences')
  },
}
