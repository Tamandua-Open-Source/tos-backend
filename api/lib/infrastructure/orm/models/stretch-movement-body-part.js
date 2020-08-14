'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class StretchMovementBodyPart extends Model {
    static associate(models) {}
  }
  StretchMovementBodyPart.init(
    {
      StretchMovementId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      BodyPartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
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
      modelName: 'StretchMovementBodyPart',
    }
  )
  return StretchMovementBodyPart
}
