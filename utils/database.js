const Sequelize = require('sequelize')

const DB_NAME = "node_todo"
const USER_NAME = 'root'
const PASSWORD = 'pixar1995'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize