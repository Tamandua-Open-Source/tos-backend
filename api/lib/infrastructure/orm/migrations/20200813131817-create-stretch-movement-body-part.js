'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StretchMovementBodyParts', {
      StretchMovementId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      BodyPartId: {
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('StretchMovementBodyParts')
  },
}
