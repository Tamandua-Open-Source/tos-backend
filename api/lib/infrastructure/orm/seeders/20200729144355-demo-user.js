'use strict'

export async function up(queryInterface, _) {
  await queryInterface.bulkInsert(
    'Users',
    [
      {
        id: 'sbKnhMLSphQvD9gXLKPWXkPbAuu2',
        name: 'Otávio Baziewicz Filho',
        email: 'otavio.baziewicz.filho@gmail.com',
        fcmToken: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  )
}

export async function down(queryInterface, _) {
  await queryInterface.bulkDelete('Users', null, {})
}
