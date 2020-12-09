'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'StretchMovements',
      [
        //low body stretch
        {
          id: 1,
          name: 'Simple Quad Stretching',
          description:
            'Standing up, grab one of your foot from behind and pull it towards your glutes. Stand still for a few seconds. For more stability, hold a wall  with your opposite hand or hold up your opposite little finger.',
          duration: 25,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Knee hug Hip Flexion',
          description:
            'Standing up, lift one leg and hug your knee towards your chest. Hold on to a wall if you need more stability.',
          duration: 15,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'Simple Quad Stretching',
          description:
            'Standing up, grab one of your foot from behind and pull it towards your glutes. Stand still for a few seconds. For more stability, hold a wall  with your opposite hand or hold up your opposite little finger.',
          duration: 25,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: 'Knee hug Hip Flexion',
          description:
            'Standing up, lift one leg and hug your knee towards your chest. Hold on to a wall if you need more stability.',
          duration: 15,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: 'Hamstring and Leg Stretch',
          description:
            'Standing up, take a small step forward with one leg and flex your ankle. Bend your upper body while slightly flexing your other other leg, and pull your flexed toes resting the other hand on the flexed knee.',
          duration: 30,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: 'Hamstring and Leg Stretch',
          description:
            'Standing up, take a small step forward with one leg and flex your ankle. Bend your upper body while slightly flexing your other other leg, and pull your flexed toes resting the other hand on the flexed knee.',
          duration: 30,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: 'Alternate Lateral Lunge',
          description:
            'Stand with your feet apart, wider than your hips. Lower your body to one side, keeping your hips back and back straight. Straighten your leg bringing your body up again and repeat the movement to the other side. Repeat a few times.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: 'Plié Squat',
          description:
            'Standing up, place your feet in a distance slightly wider than your shoulders and toes pointing out. Bend both knees and lower your upper body, keeping your back straight. Place your hands on your knees, keeping your arms at a 90 degree angle.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name: 'Plié Squat Tortion',
          description:
            'Still in the plié squat, straighten one arm and rotate your upper body to the opposite side.',
          duration: 15,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          name: 'Plié Squat Tortion',
          description:
            'Still in the plié squat, straighten one arm and rotate your upper body to the opposite side.',
          duration: 15,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          name: 'Adductor Stretch',
          description:
            'Standing up, with feet apart slightly wider than your shoulders, lower your body to one side, flexing your knee and straightening your opposite leg. Flex your foot on your straightened leg with toes pointing up. Place your hands on the floor.',
          duration: 35,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          name: 'Lunge',
          description:
            'Still on the adductor stretch, rotate your whole body to the side of your flexed knee into a lunge. Your leg should be flexed on a 90 degree angle and your knee should not pass your foot line. Place your hands on the floor on the sides of your foot.',
          duration: 25,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          name: 'Low Lunge',
          description:
            'Still in a lunge, place your back knee on the floor, bring your upper body up, with your back straight and place your hands on your flexed knee.',
          duration: 25,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          name: 'Adductor Stretch',
          description:
            'Standing up, with feet apart slightly wider than your shoulders, lower your body to one side, flexing your knee and straightening your opposite leg. Flex your foot on your straightened leg with toes pointing up. Place your hands on the floor.',
          duration: 35,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          name: 'Lunge',
          description:
            'Still on the adductor stretch, rotate your whole body to the side of your flexed knee into a lunge. Your leg should be flexed on a 90 degree angle and your knee should not pass your foot line. Place your hands on the floor on the sides of your foot.',
          duration: 25,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          name: 'Low Lunge',
          description:
            'Still in a lunge, place your back knee on the floor, bring your upper body up, with your back straight and place your hands on your flexed knee.',
          duration: 25,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          name: 'Standing Leg Stretch',
          description:
            'From a low lunge, stand up facing front. With your feet apart slightly wider than your shoulders, bend your body down with arms straightened, trying to touch the floor. Keep your back straight.',
          duration: 40,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          name: 'Standing Leg Stretch on the Side',
          description:
            'Still on the standing leg stretch, bring your body to one of your sides and grab your leg as low as you can.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          name: 'Standing Leg Stretch on the Side',
          description:
            'Still on the standing leg stretch, bring your body to one of your sides and grab your leg as low as you can.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          name: 'Standing Hamstring Stretch',
          description:
            'Standing up with feet together, bend your body forward trying to reach the floor while keeping your back straight.',
          duration: 30,
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/xjzfnyopg1so5gk/Low%20Body%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //wrist stretch
        {
          id: 21,
          name: 'Wrist Rotation w/ Fingers Crossed',
          description:
            'Place your palms together crossing all of your fingers and rotate your wrists. After a few seconds, rotate to the opposite side.',
          duration: 25,
          imageFileUrl:
            'https://www.dropbox.com/s/q1xax8rqe9p7n6a/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22,
          name: 'Wrist Rotation w/ Closed Hands',
          description:
            'Stretch both of your arms to your front and close your hands on fists. Rotate them both. After a few seconds rotate to the opposite side.',
          duration: 25,
          imageFileUrl:
            'https://www.dropbox.com/s/q1xax8rqe9p7n6a/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 23,
          name: 'Hand Flexing',
          description:
            'With both arms stretched to your front, flex your hands with fingers pointing up. Then, point your fingers down. Repeat those movements slowly a few times.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/q1xax8rqe9p7n6a/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 24,
          name: 'Wrist Flexor w/ Fingers Down',
          description:
            'Extend your arm in front of you. Grab your fingers and gently bend them down pulling towards your body.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/q1xax8rqe9p7n6a/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 25,
          name: 'Wrist Flexor w/ Fingers Down',
          description:
            'Extend your arm in front of you. Grab your fingers and gently bend them down pulling towards your body.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/q1xax8rqe9p7n6a/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 26,
          name: 'Wrist Extension w/ Fingers Down',
          description:
            'Extend your arm in front of you with your palm facing away from your body and fingers pointing down. Grab your fingers and gently pull them towards your body.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/q1xax8rqe9p7n6a/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 27,
          name: 'Wrist Extension w/ Fingers Down',
          description:
            'Extend your arm in front of you with your palm facing away from your body and fingers pointing down. Grab your fingers and gently pull them towards your body.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/q1xax8rqe9p7n6a/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 28,
          name: 'Prayer Position',
          description:
            'Place your palms together with your arms on a 90 degree angle. Stay for a few seconds.',
          duration: 30,
          imageFileUrl:
            'https://www.dropbox.com/s/q1xax8rqe9p7n6a/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 29,
          name: 'Prayer Position Opening',
          description:
            'In a prayer position, flex and extend your fingers to one side and then to the other. Repeat a few times.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/q1xax8rqe9p7n6a/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 30,
          name: 'Thumb Pulling',
          description:
            'Extend your arm towards the floor. Make a fist and pull your thumb up.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/q1xax8rqe9p7n6a/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 31,
          name: 'Thumb Pulling',
          description:
            'Extend your arm towards the floor. Make a fist and pull your thumb up.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/q1xax8rqe9p7n6a/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 32,
          name: 'Floor Wrist Stretch w/ Palms Down',
          description:
            'Kneel on the floor with your knees aligned with your hips and place your palms on the floor with hands aligned with your shoulders. Slightly bring your upper body to the front, passing the line of your hands and then bring it back. Repeat a few times.',
          duration: 30,
          imageFileUrl:
            'https://www.dropbox.com/s/q1xax8rqe9p7n6a/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 33,
          name: 'Floor Wrist Stretch w/ Palms Up',
          description:
            'Kneel on the floor with your knees aligned with your hips and place your hands on the floor aligned with your shoulders and palms facing up. Slightly bring your upper body to the front, passing the line of your hands and then bring it back. Repeat a few times.',
          duration: 30,
          imageFileUrl:
            'https://www.dropbox.com/s/q1xax8rqe9p7n6a/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 34,
          name: 'Floor Wrist Side Stretch w/ Fingers Out',
          description:
            'Kneel on the floor with your knees aligned with your hips and place your palms on the floor and fingers pointing away from your body. Your wrists should be touching each other. Slightly bring your upper body to one side and then to the other side. Repeat the movements a few times.',
          duration: 25,
          imageFileUrl:
            'https://www.dropbox.com/s/q1xax8rqe9p7n6a/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/gb48j9i7e8aqojo/Wrist%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //seated stretch
        {
          id: 35,
          name: 'Neck Retraction and Protraction',
          description:
            'Gently retract your face bringing your chin closer to your body but always looking to your front and not facing up or down. Then stretch your neck forward, bringing your chin away from your body. Repeat a few times.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/xcokeg6gcoddetw/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/t40d2bwiszboxk2/Seated%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 36,
          name: 'Neck Retraction',
          description:
            'Gently retract your face bringing your chin closer to your body but always looking to your front and not facing up or down.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/xcokeg6gcoddetw/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/t40d2bwiszboxk2/Seated%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 37,
          name: 'Lateral Flexion',
          description:
            'Looking to your front, tilt your head to one side, flexing your neck, then tilt to the opposite side. Repeat a few times.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/xcokeg6gcoddetw/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/t40d2bwiszboxk2/Seated%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 38,
          name: 'Neck and Back Stretch',
          description:
            'Place your hands on the back of your head. Stretch your upper body by arching your back, opening your chest as much as you can and looking up with your neck flexed. Then arch your back to the opposite side, tucking your belly in and looking down as you gently pull your head. Repeat the movements a few times.',
          duration: 30,
          imageFileUrl:
            'https://www.dropbox.com/s/xcokeg6gcoddetw/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/t40d2bwiszboxk2/Seated%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 39,
          name: 'Wrist Flexor w/ Fingers Down',
          description:
            'Extend your arm in front of you. Grab your fingers and gently bend them down pulling towards your body.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/xcokeg6gcoddetw/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/t40d2bwiszboxk2/Seated%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 40,
          name: 'Wrist Flexor w/ Fingers Down',
          description:
            'Extend your arm in front of you. Grab your fingers and gently bend them down pulling towards your body.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/xcokeg6gcoddetw/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/t40d2bwiszboxk2/Seated%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 41,
          name: 'Forward Fold w/ Flexed Leg',
          description:
            'Cross one of your legs in a 90 degree angle, your foot should be placed on top of your opposite knee. Then bend your upper body forward trying to reach the floor.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/xcokeg6gcoddetw/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/t40d2bwiszboxk2/Seated%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 42,
          name: 'Forward Fold w/ Flexed Leg',
          description:
            'Cross one of your legs in a 90 degree angle, your foot should be placed on top of your opposite knee. Then bend your upper body forward trying to reach the floor.',
          duration: 20,
          imageFileUrl:
            'https://www.dropbox.com/s/xcokeg6gcoddetw/Cover%20Image.png?raw=1',
          videoFileUrl:
            'https://www.dropbox.com/s/t40d2bwiszboxk2/Seated%20Stretch%20%7C%20Home%20Office%20routine%20with%20Marina%20Buck.mp4?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )

    await queryInterface.bulkInsert(
      'StretchMovementBodyParts',
      [
        //low body stretch
        // {
        //   StretchMovementId: 2,
        //   BodyPartId: 3,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        //wrist stretch
        // {
        //   StretchMovementId: 2,
        //   BodyPartId: 3,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        //seated stretch
        {
          StretchMovementId: 1,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 2,
          BodyPartId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 3,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 4,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 5,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 6,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 7,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 8,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 9,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 10,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 11,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 12,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 13,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 14,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 15,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 16,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 17,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 18,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 19,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 20,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 21,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 22,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 23,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 24,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 25,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 26,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 27,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 28,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 29,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 30,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 31,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 32,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 33,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 34,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 35,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 36,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 37,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 38,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 39,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 40,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 41,
          BodyPartId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchMovementId: 42,
          BodyPartId: 1,
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
          description: 'Home Office routine with Marina Buck',
          imageFileUrl:
            'https://www.dropbox.com/s/zly0ftbfg32c2p8/Cover%20Image.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Wrist Stretch',
          description: 'Home Office routine with Marina Buck',
          imageFileUrl:
            'https://www.dropbox.com/s/q1xax8rqe9p7n6a/Cover%20Image.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'Seated Stretch',
          description: 'Home Office routine with Marina Buck',
          imageFileUrl:
            'https://www.dropbox.com/s/xcokeg6gcoddetw/Cover%20Image.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )

    await queryInterface.bulkInsert(
      'StretchSessionStretchMovements',
      [
        //Low Body Stretch
        {
          StretchSessionId: 1,
          StretchMovementId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 1,
          StretchMovementId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //Wrist Stretch ----------------------------------------
        {
          StretchSessionId: 2,
          StretchMovementId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 2,
          StretchMovementId: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //Seated Stretch ----------------------------------------
        {
          StretchSessionId: 3,
          StretchMovementId: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 3,
          StretchMovementId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 3,
          StretchMovementId: 37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 3,
          StretchMovementId: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 3,
          StretchMovementId: 39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 3,
          StretchMovementId: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 3,
          StretchMovementId: 41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          StretchSessionId: 3,
          StretchMovementId: 42,
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
