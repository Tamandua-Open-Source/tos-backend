'use strict'

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('ExercicesBodyParts', {
    BodyPartId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    ExerciceId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  })
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('ExercicesBodyParts')
}
