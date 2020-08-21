'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class UserPreferenceWeeklyWorkActivity extends Model {
    static associate(models) {
      UserPreferenceWeeklyWorkActivity.belongsTo(models.UserPreference)
    }
  }
  UserPreferenceWeeklyWorkActivity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      UserPreferenceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      monday: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      tuesday: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      wednesday: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      thursday: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      friday: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      saturday: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      sunday: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'UserPreferenceWeeklyWorkActivity',
    }
  )
  return UserPreferenceWeeklyWorkActivity
}
