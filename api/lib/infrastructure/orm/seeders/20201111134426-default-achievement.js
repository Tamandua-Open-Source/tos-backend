'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Achievements',
      [
        //activity
        {
          id: 1,
          name: '1 week of activity',
          GameActionId: 1,
          requirement: 7,
          xp: 100,
          badgeImageUrl:
            'https://www.dropbox.com/s/278an6wmfwjw08q/medalha_1weeks.png?raw=1',
          iconImageUrl:
            'https://www.dropbox.com/s/278an6wmfwjw08q/medalha_1weeks.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: '2 weeks of activity',
          GameActionId: 1,
          requirement: 14,
          xp: 200,
          badgeImageUrl:
            'https://www.dropbox.com/s/jdg2cvdlc4u44at/medalha_2weeks.png?raw=1',
          iconImageUrl:
            'https://www.dropbox.com/s/jdg2cvdlc4u44at/medalha_2weeks.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: '5 weeks of activity',
          GameActionId: 1,
          requirement: 35,
          xp: 500,
          badgeImageUrl:
            'https://www.dropbox.com/s/glunk3ax7xwmivr/medalha_5weeks.png?raw=1',
          iconImageUrl:
            'https://www.dropbox.com/s/glunk3ax7xwmivr/medalha_5weeks.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: '10 weeks of activity',
          GameActionId: 1,
          requirement: 70,
          xp: 1000,
          badgeImageUrl:
            'https://www.dropbox.com/s/pcymx6dryo54zzp/medalha_10weeks.png?raw=1',
          iconImageUrl:
            'https://www.dropbox.com/s/pcymx6dryo54zzp/medalha_10weeks.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //movement
        {
          id: 5,
          name: 'Finish 25 movements',
          GameActionId: 2,
          requirement: 25,
          xp: 250,
          badgeImageUrl:
            'https://www.dropbox.com/s/mswvybsgw9f7d8n/medalha_25movements.png?raw=1',
          iconImageUrl:
            'https://www.dropbox.com/s/mswvybsgw9f7d8n/medalha_25movements.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: 'Finish 50 movements',
          GameActionId: 2,
          requirement: 50,
          xp: 500,
          badgeImageUrl:
            'https://www.dropbox.com/s/m6fx22kwdy3cimy/medalha_50movements.png?raw=1',
          iconImageUrl:
            'https://www.dropbox.com/s/m6fx22kwdy3cimy/medalha_50movements.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: 'Finish 100 movements',
          GameActionId: 2,
          requirement: 100,
          xp: 1000,
          badgeImageUrl:
            'https://www.dropbox.com/s/ilqsrz04y7wqlth/medalha_100movements.png?raw=1',
          iconImageUrl:
            'https://www.dropbox.com/s/ilqsrz04y7wqlth/medalha_100movements.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //session
        {
          id: 8,
          name: 'Finish 10 sessions',
          GameActionId: 3,
          requirement: 10,
          xp: 200,
          badgeImageUrl:
            'https://www.dropbox.com/s/biqyly0s7for3a7/medalha_10sessions.png?raw=1',
          iconImageUrl:
            'https://www.dropbox.com/s/biqyly0s7for3a7/medalha_10sessions.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name: 'Finish 25 sessions',
          GameActionId: 3,
          requirement: 25,
          xp: 500,
          badgeImageUrl:
            'https://www.dropbox.com/s/pa5km5kfrbiqqoy/medalha_25sessions.png?raw=1',
          iconImageUrl:
            'https://www.dropbox.com/s/pa5km5kfrbiqqoy/medalha_25sessions.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          name: 'Finish 50 sessions',
          GameActionId: 3,
          requirement: 50,
          xp: 1000,
          badgeImageUrl:
            'https://www.dropbox.com/s/12z9iy1kto297wm/medalha_50sessions.png?raw=1',
          iconImageUrl:
            'https://www.dropbox.com/s/12z9iy1kto297wm/medalha_50sessions.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //challenge
        {
          id: 11,
          name: 'Finish 5 challenges',
          GameActionId: 4,
          requirement: 5,
          xp: 250,
          badgeImageUrl:
            'https://www.dropbox.com/s/8n2qodtvuhkwo82/medalha_5challenges.png?raw=1',
          iconImageUrl:
            'https://www.dropbox.com/s/8n2qodtvuhkwo82/medalha_5challenges.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          name: 'Finish 10 challenges',
          GameActionId: 4,
          requirement: 10,
          xp: 500,
          badgeImageUrl:
            'https://www.dropbox.com/s/qetga6ssiohycyt/medalha_10challenges.png?raw=1',
          iconImageUrl:
            'https://www.dropbox.com/s/qetga6ssiohycyt/medalha_10challenges.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //break
        {
          id: 13,
          name: 'Take 10 breaks',
          GameActionId: 5,
          requirement: 10,
          xp: 100,
          badgeImageUrl:
            'https://www.dropbox.com/s/eqzruweum34efi7/medalha_10breaks.png?raw=1',
          iconImageUrl:
            'https://www.dropbox.com/s/eqzruweum34efi7/medalha_10breaks.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          name: 'Take 30 breaks',
          GameActionId: 5,
          requirement: 30,
          xp: 300,
          badgeImageUrl:
            'https://www.dropbox.com/s/7mszi86t9e37jp8/medalha_30breaks.png?raw=1',
          iconImageUrl:
            'https://www.dropbox.com/s/7mszi86t9e37jp8/medalha_30breaks.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          name: 'Take 50 breaks',
          GameActionId: 5,
          requirement: 50,
          xp: 500,
          badgeImageUrl:
            'https://www.dropbox.com/s/grbs96h427msiny/medalha_50breaks.png?raw=1',
          iconImageUrl:
            'https://www.dropbox.com/s/grbs96h427msiny/medalha_50breaks.png?raw=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Achievements', null, {})
  },
}
