const Sequelize = require('sequelize')
const sequelize = require('../utils/db')


const AuthData = sequelize.define('AuthData',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = AuthData
