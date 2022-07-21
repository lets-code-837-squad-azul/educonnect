const { DataTypes } = require('sequelize');
const database = require('../db');

const Estado = database.define('Estado', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { tableName: 'estados' });

module.exports = Estado;
