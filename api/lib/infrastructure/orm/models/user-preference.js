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
      },
      UserPreferenceStartPeriodId: {
        type: DataTypes.INTEGER,
      },
      fcmToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      startTime: {
        type: DataTypes.DATE,
      },
      allowTimerNotifications: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      allowWorkoutNotifications: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      allowGeneralNotifications: {
        type: DataTypes.BOOLEAN,
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
