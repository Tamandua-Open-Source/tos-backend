'use strict'

import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
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
