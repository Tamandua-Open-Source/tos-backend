'use strict'

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('BodyParts', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
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
  await queryInterface.dropTable('BodyParts')
}
