const mysql = require('mysql2')
const keys = require('../keys/index')

const connection = mysql.createConnection({
    host: 'localhost',
    database: keys.DB_NAME,
    user: keys.DB_USER,
    password: keys.DB_PASSWORD,
})

module.exports = connection