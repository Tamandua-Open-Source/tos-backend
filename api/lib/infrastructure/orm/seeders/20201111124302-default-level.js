'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Levels',
      [
        {
          id: 1,
          xp: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          xp: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          xp: 250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          xp: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          xp: 1000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          xp: 2000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          xp: 3000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          xp: 4000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          xp: 5000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          xp: 10000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Levels', null, {})
  },
}
