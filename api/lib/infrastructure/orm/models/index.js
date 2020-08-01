'use strict'

import fs from 'fs'
import path from 'path'
import { Sequelize, DataTypes } from 'sequelize'
import * as Config from '../config/config'

const env = process.env.NODE_ENV || 'development'
const config = Config[env]
const basename = path.basename(__filename)
const db = {}

console.log(`Server enviroment: ${env}`)

let sequelize
if (config.url) {
  sequelize = new Sequelize(config.url, config)
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  )
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize

export default db
