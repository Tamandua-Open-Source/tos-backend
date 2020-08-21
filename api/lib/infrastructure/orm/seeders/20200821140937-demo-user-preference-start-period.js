'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'UserPreferenceStartPeriods',
      [
        {
          id: 1,
          name: 'MORNING',
          startsAt: new Date(),
          endsAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'AFTERNOON',
          startsAt: new Date(),
          endsAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'EVENING',
          startsAt: new Date(),
          endsAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserPreferenceStartPeriods', null, {})
  },
}
