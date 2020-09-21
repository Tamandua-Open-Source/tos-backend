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
          fcmToken:
            'fB_deuQbPkTOsFUPrb_I45:APA91bHP6kNOOahgukAMDSMF9ppuOD832iN0204CJG_COQHC9HQW5cqTlR9zxPLtQXYXdragbmnmqI8rE2O9KJSN-vpN_AWyC5dv78f7VwKPCPkRRV97f0xMie8DLIP0ak0nNUqoRCu2',
          startTime: null,
          breakDuration: 5000,
          breakLimitDuration: 15000,
          breakIdleLimitDuration: 10000,
          lastBreakStartTime: new Date(),
          workDuration: 5000,
          workLimitDuration: 15000,
          workIdleLimitDuration: 10000,
          lastWorkStartTime: new Date(),
          pauseLimitDuration: 15000,
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
