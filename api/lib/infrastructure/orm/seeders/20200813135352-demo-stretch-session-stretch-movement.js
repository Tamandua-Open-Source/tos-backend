'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'StretchSessionStretchMovements',
      [
        {
          StretchSessionId: 1,
          StretchMovementId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 3,
          StretchMovementId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 3,
          StretchMovementId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 3,
          StretchMovementId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 4,
          StretchMovementId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 4,
          StretchMovementId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 4,
          StretchMovementId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 4,
          StretchMovementId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 5,
          StretchMovementId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 5,
          StretchMovementId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 5,
          StretchMovementId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 5,
          StretchMovementId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 5,
          StretchMovementId: 5,
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
