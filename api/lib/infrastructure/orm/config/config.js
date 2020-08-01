import * as dotenv from 'dotenv'
dotenv.config()

export const development = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: 'postgres',
}

export const test = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: 'postgres',
}

export const production = {
  url: process.env.DATABASE_URL,
  dialect: 'postgres',
}
