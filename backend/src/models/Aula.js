const { DataTypes } = require('sequelize');
const database = require('../db');

const Aula = database.define('Aula', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    diciplina: {
        type: DataTypes.STRING,
        allowNull: true
    },
    hora_inicio: {
        type: DataTypes.DATETIME,
        allowNull: true
    },
    hora_fim: {
        type: DataTypes.DATETIME,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }  
}, { tableName: 'aula' });

module.exports = Aula;