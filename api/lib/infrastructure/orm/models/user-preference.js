'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class UserPreference extends Model {
    static associate(models) {
      UserPreference.belongsTo(models.User)
      UserPreference.hasOne(models.UserPreferenceWeeklyWorkActivity)
      UserPreference.hasOne(models.UserPreferenceWeeklyStretchActivity)
      UserPreference.hasOne(models.UserPreferenceGoal)
      UserPreference.belongsTo(models.UserPreferenceTimeType)
      UserPreference.belongsTo(models.UserPreferenceStartPeriod)
    }
  }
  UserPreference.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      UserId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      UserPreferenceTimeTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      UserPreferenceStartPeriodId: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      startTime: {
        type: DataTypes.DATE,
      },
      breakDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      breakLimitDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      breakIdleLimitDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lastBreakStartTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      workDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      workLimitDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      workIdleLimitDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lastWorkStartTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      pauseLimitDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pauseIdleLimitDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lastPauseStartTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      currentState: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastState: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'UserPreference',
    }
  )
  return UserPreference
}
