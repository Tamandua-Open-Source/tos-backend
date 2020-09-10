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
          breakDuration: 900,
          breakLimitDuration: 1200,
          breakIdleLimitDuration: 600,
          lastBreakStartTime: new Date(),
          workDuration: 3600,
          workLimitDuration: 600,
          workIdleLimitDuration: 600,
          lastWorkStartTime: new Date(),
          pauseLimitDuration: 3600,
          pauseIdleLimitDuration: 600,
          lastPauseStartTime: new Date(),
          currentState: 'INATIVE',
          lastState: 'INATIVE',
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
