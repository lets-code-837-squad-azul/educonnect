const { DataTypes } = require('sequelize');
const database = require('../database/db');

const Disciplina = database.define('Disciplina', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, { tableName: 'disciplinas' });

module.exports = Disciplina;
