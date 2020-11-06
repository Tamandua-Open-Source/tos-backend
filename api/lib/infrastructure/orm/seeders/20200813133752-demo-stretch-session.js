'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'StretchSessions',
      [
        {
          id: -1,
          name: 'Stretching of the day',
          description: 'Stretch Session description',
          imageFileUrl: 'https://i.imgur.com/HRShzBw.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: -2,
          name: 'Seated stretching',
          description: 'Stretch Session description',
          imageFileUrl: 'https://i.imgur.com/Fajp2c9.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: -3,
          name: 'Stretching for a better sleep',
          description: 'Stretch Session description',
          imageFileUrl: 'https://i.imgur.com/8sIklQE.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: -4,
          name: 'Upper body stretching',
          description: 'Stretch Session description',
          imageFileUrl: 'https://i.imgur.com/jQayNkp.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //a partir daqui apresentação 30/09
        {
          id: -5,
          name: 'Liven up your day',
          description: 'Liven up your day',
          imageFileUrl: 'https://i.imgur.com/bgWNDYj.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('StretchSessions', null, {})
  },
}
