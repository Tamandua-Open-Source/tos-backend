'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class ExerciceBodyPart extends Model {}
  ExerciceBodyPart.init(
    {
      BodyPartId: DataTypes.STRING,
      ExerciceId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ExerciceBodyPart',
    }
  )
  return ExerciceBodyPart
}
