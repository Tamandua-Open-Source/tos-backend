'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class UserStretchMovement extends Model {
    static associate(models) {}
  }
  UserStretchMovement.init(
    {
      UserId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      StretchMovementId: {
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
      modelName: 'UserStretchMovement',
    }
  )
  return UserStretchMovement
}
