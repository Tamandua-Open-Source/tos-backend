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

        //a partir daqui apresentação 30/09

        {
          StretchMovementId: -11,
          BodyPartId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -11,
          BodyPartId: -2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -11,
          BodyPartId: -3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          StretchMovementId: -12,
          BodyPartId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -12,
          BodyPartId: -2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -12,
          BodyPartId: -3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          StretchMovementId: -13,
          BodyPartId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -13,
          BodyPartId: -2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -13,
          BodyPartId: -3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          StretchMovementId: -14,
          BodyPartId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -14,
          BodyPartId: -2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -14,
          BodyPartId: -3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          StretchMovementId: -15,
          BodyPartId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -15,
          BodyPartId: -2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -15,
          BodyPartId: -3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          StretchMovementId: -16,
          BodyPartId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -16,
          BodyPartId: -2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -16,
          BodyPartId: -3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          StretchMovementId: -17,
          BodyPartId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -17,
          BodyPartId: -2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -17,
          BodyPartId: -3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          StretchMovementId: -18,
          BodyPartId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -18,
          BodyPartId: -2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: -18,
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
