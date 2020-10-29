'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class UserStretchChallenge extends Model {
    static associate(models) {}
  }
  UserStretchChallenge.init(
    {
      UserId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      StretchChallengeId: {
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
      modelName: 'UserStretchChallenge',
    }
  )
  return UserStretchChallenge
}
