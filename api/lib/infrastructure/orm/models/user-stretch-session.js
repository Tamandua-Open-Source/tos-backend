'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class UserStretchSession extends Model {
    static associate(models) {}
  }
  UserStretchSession.init(
    {
      UserId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      StretchSessionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      progress: {
        type: DataTypes.DOUBLE,
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
      modelName: 'UserStretchSession',
    }
  )
  return UserStretchSession
}
