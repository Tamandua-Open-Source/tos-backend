'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Achievement extends Model {
    static associate(models) {
      Achievement.belongsTo(models.GameAction)
    }
  }

  Achievement.init(
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
      GameActionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      requirement: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      xp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      badgeImageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      iconImageUrl: {
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
      modelName: 'Achievement',
    }
  )
  return Achievement
}
