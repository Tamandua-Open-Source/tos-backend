'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'StretchMovements',
      [
        {
          id: 1,
          name: 'Low Body Stretch',
          description: 'Home Office routine with Marina Buck', //mock
          duration: 566,
          imageFileUrl: 'https://i.imgur.com/zwKEcAQ.jpg', //mock
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Wrist Stretch',
          description: 'Home Office routine with Marina Buck', //mock
          duration: 463,
          imageFileUrl: 'https://i.imgur.com/zwKEcAQ.jpg', //mock
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'Upper body Stretch',
          description: 'Home Office routine with Marina Buck', //mock
          duration: 463, //mock
          imageFileUrl: 'https://i.imgur.com/zwKEcAQ.jpg', //mock
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1', //mock
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: 'Seated Stretch',
          description: 'Home Office routine with Marina Buck', //mock
          duration: 463, //mock
          imageFileUrl: 'https://i.imgur.com/zwKEcAQ.jpg', //mock
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1', //mock
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )

    await queryInterface.bulkInsert(
      'StretchMovementBodyParts',
      [
        //1
        {
          StretchMovementId: 1,
          BodyPartId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 1,
          BodyPartId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 1,
          BodyPartId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 1,
          BodyPartId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //2
        {
          StretchMovementId: 2,
          BodyPartId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 1,
          BodyPartId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //3
        {
          StretchMovementId: 3,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 3,
          BodyPartId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 3,
          BodyPartId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 3,
          BodyPartId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 3,
          BodyPartId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //4
        {
          StretchMovementId: 4,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 4,
          BodyPartId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 4,
          BodyPartId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 4,
          BodyPartId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 4,
          BodyPartId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )

    await queryInterface.bulkInsert(
      'StretchSessions',
      [
        {
          id: 1,
          name: 'Low Body Stretch',
          description: 'Home Office routine with Marina Buck', //mock
          imageFileUrl: 'https://i.imgur.com/zwKEcAQ.jpg', //mock
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Wrist Stretch',
          description: 'Home Office routine with Marina Buck', //mock
          imageFileUrl: 'https://i.imgur.com/zwKEcAQ.jpg', //mock
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'Upper body Stretch',
          description: 'Home Office routine with Marina Buck', //mock
          imageFileUrl: 'https://i.imgur.com/zwKEcAQ.jpg', //mock
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: 'Seated Stretch',
          description: 'Home Office routine with Marina Buck', //mock
          imageFileUrl: 'https://i.imgur.com/zwKEcAQ.jpg', //mock
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )

    await queryInterface.bulkInsert(
      'StretchSessionStretchMovements',
      [
        {
          StretchSessionId: 1,
          StretchMovementId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 3,
          StretchMovementId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 4,
          StretchMovementId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )

    //  await queryInterface.bulkInsert(
    //   'StretchChallenges',
    //   [
    //     {
    //       id: 0,
    //       name: '',
    //       description: '',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {}
    // )

    //   await queryInterface.bulkInsert(
    //     'StretchChallengeStretchSessions',
    //     [
    //       {
    //         StretchChallengeId: 0,
    //         StretchSessionId: 0,
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //     ],
    //     {}
    //   )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('StretchMovements', null, {})
    await queryInterface.bulkDelete('StretchMovementBodyParts', null, {})
    await queryInterface.bulkDelete('StretchSessions', null, {})
    await queryInterface.bulkDelete('StretchSessionStretchMovements', null, {})
    // await queryInterface.bulkDelete('StretchChallenges', null, {})
    // await queryInterface.bulkDelete('StretchChallengeStretchSessions', null, {})
  },
}
