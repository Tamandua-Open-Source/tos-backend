'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class UserPreference extends Model {
    static associate(models) {
      UserPreference.belongsTo(models.User)
      UserPreference.hasOne(models.UserPreferenceWeeklyWorkActivity)
      UserPreference.hasOne(models.UserPreferenceWeeklyStretchActivity)
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
        primaryKey: true,
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
      },
      workDuration: {
        type: DataTypes.INTEGER,
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
