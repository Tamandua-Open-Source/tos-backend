'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class UserGroup extends Model {
    static associate(models) {}
  }
  UserGroup.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      UserId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      GroupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      admin: {
        type: DataTypes.BOOLEAN,
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
      modelName: 'UserGroup',
    }
  )
  return UserGroup
}
