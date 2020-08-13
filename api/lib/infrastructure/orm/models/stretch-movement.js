'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class StretchMovement extends Model {
    static associate(models) {
      StretchMovement.belongsToMany(models.BodyPart, {
        through: models.StretchMovementBodyPart,
      })

      StretchMovement.belongsToMany(models.StretchSession, {
        through: models.StretchSessionStretchMovement,
      })
    }
  }
  StretchMovement.init(
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
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imageFileUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      videoFileUrl: {
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
      modelName: 'StretchMovement',
    }
  )
  return StretchMovement
}
