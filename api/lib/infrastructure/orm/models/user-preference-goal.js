'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class UserPreferenceGoal extends Model {
    static associate(models) {
      UserPreferenceGoal.belongsTo(models.UserPreference)
    }
  }
  UserPreferenceGoal.init(
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
      criticalPain: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      painFromWork: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      futurePain: {
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
      modelName: 'UserPreferenceGoal',
    }
  )
  return UserPreferenceGoal
}
