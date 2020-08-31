'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'UserPreferences',
      [
        {
          id: -1,
          UserId: 'vN7Kodp84zQg1KDTPd3IfwvaF1r1',
          UserPreferenceTimeTypeId: 2,
          UserPreferenceStartPeriodId: 1,
          startTime: null,
          breakDuration: 7200,
          workDuration: 1200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserPreferences', null, {})
  },
}
