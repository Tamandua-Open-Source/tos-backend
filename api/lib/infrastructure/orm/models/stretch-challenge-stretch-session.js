'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class StretchChallengeStretchSession extends Model {
    static associate(models) {}
  }
  StretchChallengeStretchSession.init(
    {
      StretchChallengeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      StretchSessionId: {
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
      modelName: 'StretchChallengeStretchSession',
    }
  )
  return StretchChallengeStretchSession
}
