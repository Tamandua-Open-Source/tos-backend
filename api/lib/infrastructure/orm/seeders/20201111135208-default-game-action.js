'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'GameActions',
      [
        {
          id: 1,
          name: 'CONNECT',
          GameActionTypeId: 2,
          xp: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'FINISH_STRETCH_MOVEMENT',
          GameActionTypeId: 1,
          xp: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'FINISH_STRETCH_SESSION',
          GameActionTypeId: 1,
          xp: 50,
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
          name: 'EVALUATE_STRETCH_MOVEMENT',
          GameActionTypeId: 1,
          xp: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: 'EVALUATE_STRETCH_SESSION',
          GameActionTypeId: 1,
          xp: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: 'EVALUATE_STRETCH_CHALLENGE',
          GameActionTypeId: 1,
          xp: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: 'TIMER_ON_WORK_STATE',
          GameActionTypeId: 1,
          xp: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name: 'TIMER_ON_BREAK_STATE',
          GameActionTypeId: 1,
          xp: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          name: 'TIMER_ON_PAUSE_STATE',
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
