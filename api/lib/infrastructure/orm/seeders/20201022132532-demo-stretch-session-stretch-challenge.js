'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'StretchChallengeStretchSessions',
      [
        {
          StretchChallengeId: -1,
          StretchSessionId: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchChallengeId: -1,
          StretchSessionId: -2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('StretchChallengeStretchSessions', null, {})
  },
}
