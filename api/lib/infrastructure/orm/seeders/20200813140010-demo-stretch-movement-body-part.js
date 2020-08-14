'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'StretchMovementBodyParts',
      [
        {
          StretchMovementId: 1,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 1,
          BodyPartId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 2,
          BodyPartId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 2,
          BodyPartId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 3,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 3,
          BodyPartId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 3,
          BodyPartId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 4,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 4,
          BodyPartId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 4,
          BodyPartId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 4,
          BodyPartId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 5,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 5,
          BodyPartId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 5,
          BodyPartId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 5,
          BodyPartId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 5,
          BodyPartId: 5,
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
