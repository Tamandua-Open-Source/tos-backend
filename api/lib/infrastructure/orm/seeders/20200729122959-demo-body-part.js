'use strict'

export async function up(queryInterface, _) {
  await queryInterface.bulkInsert(
    'BodyParts',
    [
      {
        id: -1,
        name: 'Arms',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: -2,
        name: 'Legs',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: -3,
        name: 'Neck',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  )
}

export async function down(queryInterface, _) {
  await queryInterface.bulkDelete('BodyParts', null, {})
}
