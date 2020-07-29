'use strict'

import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Exercice extends Model {
    static associate(models) {
      Exercice.belongsToMany(models.BodyPart, {
        through: models.ExerciceBodyPart,
      })
    }
  }
  Exercice.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Exercice',
    }
  )
  return Exercice
}
