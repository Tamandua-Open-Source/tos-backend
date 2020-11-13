'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class UserGameAction extends Model {
    static associate(models) {}
  }
  UserGameAction.init(
    {
      UserId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      GameActionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      counter: {
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
      modelName: 'UserGameAction',
    }
  )
  return UserGameAction
}
