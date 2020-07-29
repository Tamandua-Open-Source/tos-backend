'use strict'

import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class BodyPart extends Model {
    static associate(models) {
      BodyPart.belongsToMany(models.Exercice, {
        through: models.ExerciceBodyPart,
      })
    }
  }
  BodyPart.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'BodyPart',
    }
  )
  return BodyPart
}
