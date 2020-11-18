'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'UserPreferenceStartPeriods',
      [
        {
          id: 1,
          name: 'MORNING',
          startsAt: new Date(2020, 0, 0, 7, 0, 0, 0),
          endsAt: new Date(2020, 0, 0, 12, 0, 0, 0),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'AFTERNOON',
          startsAt: new Date(2020, 0, 0, 13, 0, 0, 0),
          endsAt: new Date(2020, 0, 0, 17, 0, 0, 0),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'EVENING',
          startsAt: new Date(2020, 0, 0, 18, 0, 0, 0),
          endsAt: new Date(2020, 0, 0, 22, 0, 0, 0),
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
