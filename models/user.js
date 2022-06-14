const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const user = sequelize.define('User', {
    id:{
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
    },
name: {
    allowNull: false,
        type: Sequelize.STRING,
},
surname: {
    type: Sequelize.STRING,
},
email:{
    allowNull: false,
        type: Sequelize.STRING,
},
password: {
    allowNull: false,
        type: Sequelize.STRING,
},
gender: {
    type: Sequelize.STRING,
},
photo_url: {
    type: Sequelize.STRING,
},
})

module.exports = user