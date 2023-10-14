const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'j4asbc56', { dialect: 'postgres', host: 'localhost'});

module.exports = sequelize