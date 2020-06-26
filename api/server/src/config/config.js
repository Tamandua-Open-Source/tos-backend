require('dotenv').config();


module.exports = {

  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    database: 'tos_development',
    username: 'otavio',
    password: '3132',
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  test: {
    database: 'tos_test',
    username: 'otavio',
    password: '3132',
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};