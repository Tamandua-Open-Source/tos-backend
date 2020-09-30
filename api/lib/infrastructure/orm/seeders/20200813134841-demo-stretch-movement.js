'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'StretchMovements',
      [
        {
          id: -1,
          name: 'Back left arm',
          description:
            'Duis ut mattis orci, vitae placerat est. Duis a libero convallis, luctus est et, porttitor lorem. Cras blandit sed mauris eget sollicitudin. Suspendisse blandit id metus a pretium. Suspendisse fermentum nisi tortor, vel pulvinar lectus lacinia ac.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/O01jWeW.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: -2,
          name: 'Back right arm',
          description:
            'Pellentesque vitae mauris rutrum, placerat ante ac, placerat orci. Morbi pellentesque metus et dui vestibulum tincidunt. Mauris vel ornare tortor, et bibendum mi. Vivamus justo magna, lacinia et felis in, lobortis congue felis.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/fWEEYlX.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: -3,
          name: 'Left hand on the wall',
          description:
            'Etiam facilisis sagittis orci sed congue. Curabitur vestibulum porta pellentesque. Proin eget volutpat sapien. Integer eget metus sem. Ut in tempor nisi, in pulvinar velit. Aliquam erat volutpat. Integer a neque dui.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/v5gwc04.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: -4,
          name: 'Right Hand on the wall',
          description:
            'Ut fringilla vel augue eget finibus. Suspendisse aliquam tellus a felis porttitor, nec condimentum purus vulputate. Quisque ultrices lacus et scelerisque consectetur.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/Rh5rcP4.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: -5,
          name: 'Hands Up',
          description:
            'Duis sed quam dui. Praesent a porttitor elit. Mauris molestie diam eget ultrices mattis. Proin consectetur lobortis mi, sit amet pellentesque purus gravida nec.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/XdfPmWZ.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: -6,
          name: 'Inverted Elephant Left',
          description:
            'Nullam venenatis fringilla nisl sit amet laoreet. Maecenas pulvinar sapien id nulla sollicitudin vestibulum. Maecenas convallis euismod faucibus. Praesent placerat eu libero eu dictum.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/Rv7ygS2.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: -7,
          name: 'Inverted Elephant Right',
          description:
            'Fusce sed neque vitae ligula egestas cursus. Proin vulputate quam sed lorem molestie lacinia. Nunc fringilla sollicitudin turpis ut egestas. In eu varius ligula. Duis in orci tincidunt, feugiat nisl non, vestibulum leo.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/LfaqBkU.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: -8,
          name: 'Left Knee Up',
          description:
            'Nam bibendum enim id nisi malesuada, ut aliquam quam lacinia. Nunc hendrerit velit at auctor rhoncus. Pellentesque sit amet ex finibus, fermentum quam eget, lobortis turpis.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/iobCld1.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: -9,
          name: 'Right Knee Up',
          description:
            'Mauris scelerisque diam in ligula varius, in rutrum orci luctus. Quisque consequat, augue a condimentum imperdiet, tortor tellus ullamcorper tellus, sed feugiat orci erat et turpis.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/codihln.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: -10,
          name: 'Pray for your neck',
          description:
            'Proin vel suscipit metus. Ut a quam gravida, ultrices neque sit amet, varius lectus. In hac habitasse platea dictumst. Donec id faucibus dui, non ultricies dui.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/Jah9eT7.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //a partir daqui apresentação 30/09
        {
          id: -11,
          name: 'Arm Rotation',
          description:
            'On your knees, stretch both of your arms and rotate them as you breathe deeply.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/3Sanu1C.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: -12,
          name: 'Side Stretching Right',
          description:
            'On your knees, stretch your arm down reaching the floor. Move your opposite arm upwards and bring it to your side while stretching the side of your upper body.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/Vd0Elfn.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: -13,
          name: 'Side Stretching Left',
          description:
            'On your knees, stretch your arm down reaching the floor. Move your opposite arm upwards and bring it to your side while stretching the side of your upper body.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/0jqEAtE.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: -14,
          name: 'Cat-Cow Flow',
          description:
            'With your hands and knees on the floor, place your knees under your hips. Arch your back up while looking down. After a few seconds arch your back downwards, lift your head and glutes up. Repeat.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/9zmhtEs.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: -15,
          name: 'Warrior Left',
          description:
            'Place your feet apart from each other. Stretch and raise your arms on the line of your sholders and away from your chest. Turn one foot to the right, aligning with your arm and slighlty flex your leg.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/bvm3oTm.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: -16,
          name: 'Warrior Touching the Floor Left',
          description:
            'In the warrior position, bend your upper body down trying to reach the floor with your hand on the same side of your flexed leg, while bringing your opposite hand up.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/HzYKrkX.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: -17,
          name: 'Warrior Right',
          description:
            'Place your feet apart from each other. Stretch and raise your arms on the line of your sholders and away from your chest. Turn one foot to the right, aligning with your arm and slighlty flex your leg.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/GSQGZpP.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: -18,
          name: 'Warrior Touching the Floor Right',
          description:
            'In the warrior position, bend your upper body down trying to reach the floor with your hand on the same side of your flexed leg, while bringing your opposite hand up.',
          duration: 60,
          imageFileUrl: 'https://i.imgur.com/D2OYJ32.png',
          videoFileUrl: 'https://www.youtube.com/embed/luCCqjJnBvk',
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
