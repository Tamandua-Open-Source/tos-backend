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
          fcmToken: null,
          startTime: null,
          breakDuration: 30000,
          breakLimitDuration: 40000,
          breakIdleLimitDuration: 10000,
          lastBreakStartTime: new Date(),
          workDuration: 60000,
          workLimitDuration: 70000,
          workIdleLimitDuration: 10000,
          lastWorkStartTime: new Date(),
          pauseLimitDuration: 120000,
          pauseIdleLimitDuration: 10000,
          lastPauseStartTime: new Date(),
          currentState: 'INACTIVE',
          lastState: 'INACTIVE',
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
