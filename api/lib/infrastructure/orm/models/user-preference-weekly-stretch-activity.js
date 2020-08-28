'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class UserPreferenceWeeklyStretchActivity extends Model {
    static associate(models) {
      UserPreferenceWeeklyStretchActivity.belongsTo(models.UserPreference)
    }
  }
  UserPreferenceWeeklyStretchActivity.init(
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
        unique: true,
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
      modelName: 'UserPreferenceWeeklyStretchActivity',
    }
  )
  return UserPreferenceWeeklyStretchActivity
}
