'use strict'

export async function up(queryInterface, _) {
  await queryInterface.bulkInsert(
    'Users',
    [
      {
        id: 'vN7Kodp84zQg1KDTPd3IfwvaF1r1',
        name: 'Teste Miguel Oliveira',
        email: 'teste@gmail.com',
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
