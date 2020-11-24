'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class GameActionType extends Model {
    static associate(models) {
      GameActionType.hasOne(models.GameAction)
    }
  }
  GameActionType.init(
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
      modelName: 'GameActionType',
    }
  )
  return GameActionType
}
