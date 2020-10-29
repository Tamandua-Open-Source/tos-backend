'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'StretchChallenges',
      [
        {
          id: -1,
          name: 'TikTok Challenge',
          description: 'We are a legion, anonymous',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('StretchChallenges', null, {})
  },
}
