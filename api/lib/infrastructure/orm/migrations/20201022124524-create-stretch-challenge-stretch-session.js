'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StretchChallengeStretchSessions', {
      StretchChallengeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      StretchSessionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('StretchChallengeStretchSessions')
  },
}
