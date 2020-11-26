'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'GameActions',
      [
        {
          id: 1,
          name: 'APP_ACTIVITY',
          GameActionTypeId: 2,
          xp: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'FINISH_STRETCH_MOVEMENT',
          GameActionTypeId: 1,
          xp: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'FINISH_STRETCH_SESSION',
          GameActionTypeId: 1,
          xp: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: 'FINISH_STRETCH_CHALLENGE',
          GameActionTypeId: 1,
          xp: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: 'TIMER_ON_BREAK_STATE',
          GameActionTypeId: 1,
          xp: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('GameActions', null, {})
  },
}
