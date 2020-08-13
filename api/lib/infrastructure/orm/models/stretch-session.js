'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class StretchSession extends Model {
    static associate(models) {
      StretchSession.belongsToMany(models.StretchMovement, {
        through: models.StretchSessionStretchMovement,
      })
    }
  }
  StretchSession.init(
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
      modelName: 'StretchSession',
    }
  )
  return StretchSession
}
