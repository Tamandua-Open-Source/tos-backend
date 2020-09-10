'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'UserPreferenceWeeklyStretchActivities',
      [
        {
          id: -1,
          UserPreferenceId: -1,
          startTime: new Date(),
          monday: false,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: false,
          sunday: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      'UserPreferenceWeeklyStretchActivities',
      null,
      {}
    )
  },
}
