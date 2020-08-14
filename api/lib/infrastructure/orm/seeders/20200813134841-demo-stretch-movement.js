'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'StretchMovements',
      [
        {
          id: 1,
          name: 'Name #1',
          description: 'Description #1',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/otXC9cN.jpg',
          videoFileUrl: 'https://i.imgur.com/WDpeyUI.mp4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Name #2',
          description: 'Description #2',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/otXC9cN.jpg',
          videoFileUrl: 'https://i.imgur.com/WDpeyUI.mp4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'Name #3',
          description: 'Description #3',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/otXC9cN.jpg',
          videoFileUrl: 'https://i.imgur.com/WDpeyUI.mp4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: 'Name #4',
          description: 'Description #4',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/otXC9cN.jpg',
          videoFileUrl: 'https://i.imgur.com/WDpeyUI.mp4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: 'Name #5',
          description: 'Description #5',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/otXC9cN.jpg',
          videoFileUrl: 'https://i.imgur.com/WDpeyUI.mp4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('StretchMovements', null, {})
  },
}
