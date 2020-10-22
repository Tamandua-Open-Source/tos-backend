'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class StretchChallenge extends Model {
    static associate(models) {
      StretchChallenge.belongsToMany(models.StretchSession, {
        through: models.StretchChallengeStretchSession,
      })
      StretchChallenge.belongsToMany(models.User, {
        through: models.UserStretchChallenge,
      })
    }
  }
  StretchChallenge.init(
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
      modelName: 'StretchChallenge',
    }
  )
  return StretchChallenge
}
