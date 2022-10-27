const { Sequelize } = require('sequelize');

const db = new Sequelize('USERS_DB', 'root', 'stefa2022',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;