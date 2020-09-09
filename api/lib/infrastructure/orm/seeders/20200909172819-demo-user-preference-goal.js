'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'UserPreferenceGoals',
      [
        {
          id: -1,
          UserPreferenceId: -1,
          criticalPain: true,
          painFromWork: true,
          futurePain: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserPreferenceGoals', null, {})
  },
}
