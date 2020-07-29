'use strict'

export async function up(queryInterface, _) {
  await queryInterface.bulkInsert(
    'Exercices',
    [
      {
        id: 1,
        name: 'Exercise #01',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis tortor in dui porta imperdiet. Aenean malesuada a nulla vel luctus. Sed turpis odio, tincidunt sit amet nibh eu, finibus venenatis nibh. Nunc ornare tellus sit amet ornare aliquam. Curabitur suscipit justo et sapien sodales, eget aliquam lectus dapibus. Praesent elit est, cursus vitae metus non, rhoncus pharetra neque. Proin euismod urna sit amet urna sagittis, ac consequat diam dignissim.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Exercise #02',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis tortor in dui porta imperdiet. Aenean malesuada a nulla vel luctus. Sed turpis odio, tincidunt sit amet nibh eu, finibus venenatis nibh. Nunc ornare tellus sit amet ornare aliquam. Curabitur suscipit justo et sapien sodales, eget aliquam lectus dapibus. Praesent elit est, cursus vitae metus non, rhoncus pharetra neque. Proin euismod urna sit amet urna sagittis, ac consequat diam dignissim.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Exercise #03',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis tortor in dui porta imperdiet. Aenean malesuada a nulla vel luctus. Sed turpis odio, tincidunt sit amet nibh eu, finibus venenatis nibh. Nunc ornare tellus sit amet ornare aliquam. Curabitur suscipit justo et sapien sodales, eget aliquam lectus dapibus. Praesent elit est, cursus vitae metus non, rhoncus pharetra neque. Proin euismod urna sit amet urna sagittis, ac consequat diam dignissim.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Exercise #04',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis tortor in dui porta imperdiet. Aenean malesuada a nulla vel luctus. Sed turpis odio, tincidunt sit amet nibh eu, finibus venenatis nibh. Nunc ornare tellus sit amet ornare aliquam. Curabitur suscipit justo et sapien sodales, eget aliquam lectus dapibus. Praesent elit est, cursus vitae metus non, rhoncus pharetra neque. Proin euismod urna sit amet urna sagittis, ac consequat diam dignissim.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Exercise #05',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis tortor in dui porta imperdiet. Aenean malesuada a nulla vel luctus. Sed turpis odio, tincidunt sit amet nibh eu, finibus venenatis nibh. Nunc ornare tellus sit amet ornare aliquam. Curabitur suscipit justo et sapien sodales, eget aliquam lectus dapibus. Praesent elit est, cursus vitae metus non, rhoncus pharetra neque. Proin euismod urna sit amet urna sagittis, ac consequat diam dignissim.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  )
}

export async function down(queryInterface, _) {
  await queryInterface.bulkDelete('Exercices', null, {})
}
