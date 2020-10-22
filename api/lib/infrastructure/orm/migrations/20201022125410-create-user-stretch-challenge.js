'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserStretchChallenges', {
      UserId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      StretchChallengeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      progress: {
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
    await queryInterface.dropTable('UserStretchChallenges')
  },
}
