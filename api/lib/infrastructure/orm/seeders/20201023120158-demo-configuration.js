'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Configurations',
      [
        {
          version: '1.0.0',
          lastCompatibleVersion: '1.0.0',
          status: 'ok',
          website: 'https://flexibe.app',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Configurations', null, {})
  },
}
