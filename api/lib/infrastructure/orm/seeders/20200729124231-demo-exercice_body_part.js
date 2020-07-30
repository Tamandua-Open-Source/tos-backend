'use strict'

export async function up(queryInterface, _) {
  await queryInterface.bulkInsert(
    'ExercicesBodyParts',
    [
      {
        BodyPartId: 1,
        ExerciceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        BodyPartId: 2,
        ExerciceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        BodyPartId: 3,
        ExerciceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        BodyPartId: 4,
        ExerciceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        BodyPartId: 6,
        ExerciceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        BodyPartId: 4,
        ExerciceId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        BodyPartId: 5,
        ExerciceId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        BodyPartId: 1,
        ExerciceId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        BodyPartId: 1,
        ExerciceId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        BodyPartId: 2,
        ExerciceId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        BodyPartId: 3,
        ExerciceId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        BodyPartId: 4,
        ExerciceId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        BodyPartId: 5,
        ExerciceId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        BodyPartId: 6,
        ExerciceId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  )
}

export async function down(queryInterface, _) {
  await queryInterface.bulkDelete('ExercicesBodyParts', null, {})
}
