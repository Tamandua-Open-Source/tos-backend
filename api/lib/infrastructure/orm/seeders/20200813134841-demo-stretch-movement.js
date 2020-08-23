'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'StretchMovements',
      [
        {
          id: 1,
          name: 'Back left arm',
          description: 'Stretching description',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/O01jWeW.png',
          videoFileUrl: 'https://i.imgur.com/WDpeyUI.mp4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 2,
          name: 'Back right arm',
          description: 'Stretching description',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/fWEEYlX.png',
          videoFileUrl: 'https://i.imgur.com/WDpeyUI.mp4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 3,
          name: 'Left hand on the wall',
          description: 'Stretching description',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/v5gwc04.png',
          videoFileUrl: 'https://i.imgur.com/WDpeyUI.mp4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 4,
          name: 'Right Hand on the wall',
          description: 'Stretching description',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/Rh5rcP4.png',
          videoFileUrl: 'https://i.imgur.com/WDpeyUI.mp4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 5,
          name: 'Hands Up',
          description: 'Stretching description',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/XdfPmWZ.png',
          videoFileUrl: 'https://i.imgur.com/WDpeyUI.mp4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 6,
          name: 'Inverted Elephant Left',
          description: 'Stretching description',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/Rv7ygS2.png',
          videoFileUrl: 'https://i.imgur.com/WDpeyUI.mp4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 7,
          name: 'Inverted Elephant Right',
          description: 'Stretching description',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/LfaqBkU.png',
          videoFileUrl: 'https://i.imgur.com/WDpeyUI.mp4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 8,
          name: 'Left Knee Up',
          description: 'Stretching description',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/iobCld1.png',
          videoFileUrl: 'https://i.imgur.com/WDpeyUI.mp4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 9,
          name: 'Right Knee Up',
          description: 'Stretching description',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/codihln.png',
          videoFileUrl: 'https://i.imgur.com/WDpeyUI.mp4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 10,
          name: 'Pray for your neck',
          description: 'Stretching description',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/Jah9eT7.png',
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
