const Sequelize = require('sequelize')
const keys = require('../keys/index')

const sequelize = new Sequelize(keys.DB_NAME, keys.DB_USER, keys.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize