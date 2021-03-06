'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class StretchSessionStretchMovement extends Model {
    static associate(models) {}
  }
  StretchSessionStretchMovement.init(
    {
      StretchSessionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      StretchMovementId: {
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
      modelName: 'StretchSessionStretchMovement',
    }
  )
  return StretchSessionStretchMovement
}
