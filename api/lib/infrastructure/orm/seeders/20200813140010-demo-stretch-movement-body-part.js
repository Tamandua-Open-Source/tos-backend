'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'StretchMovementBodyParts',
      [
        {
          StretchMovementId: -1,
          BodyPartId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -2,
          BodyPartId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -3,
          BodyPartId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -4,
          BodyPartId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -5,
          BodyPartId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -6,
          BodyPartId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -7,
          BodyPartId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -8,
          BodyPartId: -2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -9,
          BodyPartId: -2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -10,
          BodyPartId: -3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('StretchMovementBodyParts', null, {})
  },
}
