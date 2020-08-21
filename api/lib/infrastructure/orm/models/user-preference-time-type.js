'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class UserPreferenceTimeType extends Model {
    static associate(models) {
      UserPreferenceTimeType.hasOne(models.UserPreference)
    }
  }
  UserPreferenceTimeType.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
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
      modelName: 'UserPreferenceTimeType',
    }
  )
  return UserPreferenceTimeType
}
