'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    static associate(models) {}
  }
  Level.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      modelName: 'Level',
    }
  )
  return Level
}
