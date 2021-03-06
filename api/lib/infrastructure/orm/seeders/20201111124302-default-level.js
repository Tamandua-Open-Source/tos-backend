'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Levels',
      [
        { id: 1, xp: 0, createdAt: new Date(), updatedAt: new Date() },
        { id: 2, xp: 100, createdAt: new Date(), updatedAt: new Date() },
        { id: 3, xp: 200, createdAt: new Date(), updatedAt: new Date() },
        { id: 4, xp: 300, createdAt: new Date(), updatedAt: new Date() },
        { id: 5, xp: 400, createdAt: new Date(), updatedAt: new Date() },
        { id: 6, xp: 500, createdAt: new Date(), updatedAt: new Date() },
        { id: 7, xp: 600, createdAt: new Date(), updatedAt: new Date() },
        { id: 8, xp: 700, createdAt: new Date(), updatedAt: new Date() },
        { id: 9, xp: 800, createdAt: new Date(), updatedAt: new Date() },
        { id: 10, xp: 1000, createdAt: new Date(), updatedAt: new Date() },
        { id: 11, xp: 1200, createdAt: new Date(), updatedAt: new Date() },
        { id: 12, xp: 1400, createdAt: new Date(), updatedAt: new Date() },
        { id: 13, xp: 1800, createdAt: new Date(), updatedAt: new Date() },
        { id: 14, xp: 2000, createdAt: new Date(), updatedAt: new Date() },
        { id: 15, xp: 2200, createdAt: new Date(), updatedAt: new Date() },
        { id: 16, xp: 2400, createdAt: new Date(), updatedAt: new Date() },
        { id: 17, xp: 2800, createdAt: new Date(), updatedAt: new Date() },
        { id: 18, xp: 3000, createdAt: new Date(), updatedAt: new Date() },
        { id: 19, xp: 3200, createdAt: new Date(), updatedAt: new Date() },
        { id: 20, xp: 3400, createdAt: new Date(), updatedAt: new Date() },
        { id: 21, xp: 4000, createdAt: new Date(), updatedAt: new Date() },
        { id: 22, xp: 4500, createdAt: new Date(), updatedAt: new Date() },
        { id: 23, xp: 5000, createdAt: new Date(), updatedAt: new Date() },
        { id: 24, xp: 5500, createdAt: new Date(), updatedAt: new Date() },
        { id: 25, xp: 6000, createdAt: new Date(), updatedAt: new Date() },
        { id: 26, xp: 6500, createdAt: new Date(), updatedAt: new Date() },
        { id: 27, xp: 7000, createdAt: new Date(), updatedAt: new Date() },
        { id: 28, xp: 7500, createdAt: new Date(), updatedAt: new Date() },
        { id: 29, xp: 8000, createdAt: new Date(), updatedAt: new Date() },
        { id: 30, xp: 8500, createdAt: new Date(), updatedAt: new Date() },
        { id: 31, xp: 9000, createdAt: new Date(), updatedAt: new Date() },
        { id: 32, xp: 9500, createdAt: new Date(), updatedAt: new Date() },
        { id: 33, xp: 10000, createdAt: new Date(), updatedAt: new Date() },
        { id: 34, xp: 11000, createdAt: new Date(), updatedAt: new Date() },
        { id: 35, xp: 12000, createdAt: new Date(), updatedAt: new Date() },
        { id: 36, xp: 13000, createdAt: new Date(), updatedAt: new Date() },
        { id: 37, xp: 14000, createdAt: new Date(), updatedAt: new Date() },
        { id: 38, xp: 15000, createdAt: new Date(), updatedAt: new Date() },
        { id: 39, xp: 16000, createdAt: new Date(), updatedAt: new Date() },
        { id: 40, xp: 17000, createdAt: new Date(), updatedAt: new Date() },
        { id: 41, xp: 18000, createdAt: new Date(), updatedAt: new Date() },
        { id: 42, xp: 19000, createdAt: new Date(), updatedAt: new Date() },
        { id: 43, xp: 20000, createdAt: new Date(), updatedAt: new Date() },
        { id: 44, xp: 25000, createdAt: new Date(), updatedAt: new Date() },
        { id: 45, xp: 30000, createdAt: new Date(), updatedAt: new Date() },
        { id: 46, xp: 35000, createdAt: new Date(), updatedAt: new Date() },
        { id: 47, xp: 40000, createdAt: new Date(), updatedAt: new Date() },
        { id: 48, xp: 50000, createdAt: new Date(), updatedAt: new Date() },
        { id: 49, xp: 80000, createdAt: new Date(), updatedAt: new Date() },
        { id: 50, xp: 100000, createdAt: new Date(), updatedAt: new Date() },
        { id: 51, xp: 100000000, createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Levels', null, {})
  },
}
