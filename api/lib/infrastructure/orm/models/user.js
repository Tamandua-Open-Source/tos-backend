'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.UserPreference)
      User.belongsToMany(models.StretchChallenge, {
        through: models.UserStretchChallenge,
      })
      User.belongsToMany(models.StretchSession, {
        through: models.UserStretchSession,
      })
      User.belongsToMany(models.StretchMovement, {
        through: models.UserStretchMovement,
      })
      User.belongsToMany(models.Group, {
        through: models.UserGroup,
      })
      User.belongsToMany(models.GameAction, {
        through: models.UserGameAction,
      })
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      photoUrl: {
        type: DataTypes.STRING,
        allowNull: true,
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
      modelName: 'User',
    }
  )
  return User
}
