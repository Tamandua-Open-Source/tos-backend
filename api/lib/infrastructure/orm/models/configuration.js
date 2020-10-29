'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Configuration extends Model {
    static associate(models) {}
  }
  Configuration.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      version: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastCompatibleVersion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      website: {
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
      modelName: 'Configuration',
    }
  )
  return Configuration
}
