'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class GameAction extends Model {
    static associate(models) {
      GameAction.belongsTo(models.GameActionType)
      GameAction.hasMany(models.Achievement)
      GameAction.belongsToMany(models.User, {
        through: models.UserGameAction,
      })
    }
  }
  GameAction.init(
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
      GameActionTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      xp: {
        type: DataTypes.INTEGER,
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
      modelName: 'GameAction',
    }
  )
  return GameAction
}
