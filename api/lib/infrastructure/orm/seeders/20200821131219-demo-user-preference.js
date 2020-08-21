'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'UserPreferences',
      [
        {
          id: 1,
          UserId: 'sbKnhMLSphQvD9gXLKPWXkPbAuu2',
          UserPreferenceTimeTypeId: 1,
          UserPreferenceStartPeriodId: 1,
          startTime: new Date(),
          breakDuration: new Date(),
          nextBreak: new Date(),
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
