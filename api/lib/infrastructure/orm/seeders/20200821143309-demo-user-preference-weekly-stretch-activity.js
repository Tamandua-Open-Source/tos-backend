'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'UserPreferenceWeeklyStretchActivities',
      [
        {
          id: 1,
          UserPreferenceId: 1,
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
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
