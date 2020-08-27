'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'StretchSessionStretchMovements',
      [
        {
          StretchSessionId: -1,
          StretchMovementId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -1,
          StretchMovementId: -2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -1,
          StretchMovementId: -3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -1,
          StretchMovementId: -4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -1,
          StretchMovementId: -5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -1,
          StretchMovementId: -6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -1,
          StretchMovementId: -7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -1,
          StretchMovementId: -8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -1,
          StretchMovementId: -9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -1,
          StretchMovementId: -10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          StretchSessionId: -2,
          StretchMovementId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -2,
          StretchMovementId: -2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -2,
          StretchMovementId: -3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -2,
          StretchMovementId: -4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -2,
          StretchMovementId: -5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -2,
          StretchMovementId: -6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -2,
          StretchMovementId: -7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -2,
          StretchMovementId: -8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -2,
          StretchMovementId: -9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -2,
          StretchMovementId: -10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          StretchSessionId: -3,
          StretchMovementId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -3,
          StretchMovementId: -2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -3,
          StretchMovementId: -3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -3,
          StretchMovementId: -4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -3,
          StretchMovementId: -5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -3,
          StretchMovementId: -6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -3,
          StretchMovementId: -7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -3,
          StretchMovementId: -8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -3,
          StretchMovementId: -9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -3,
          StretchMovementId: -10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          StretchSessionId: -4,
          StretchMovementId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -4,
          StretchMovementId: -2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -4,
          StretchMovementId: -3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -4,
          StretchMovementId: -4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -4,
          StretchMovementId: -5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -4,
          StretchMovementId: -6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -4,
          StretchMovementId: -7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -4,
          StretchMovementId: -8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -4,
          StretchMovementId: -9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: -4,
          StretchMovementId: -10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('StretchSessionStretchMovements', null, {})
  },
}
