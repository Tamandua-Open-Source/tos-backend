'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class BodyPart extends Model {
    static associate(models) {
      BodyPart.belongsToMany(models.StretchMovement, {
        through: models.StretchMovementBodyPart,
      })
    }
  }
  BodyPart.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'BodyPart',
    }
  )
  return BodyPart
}
