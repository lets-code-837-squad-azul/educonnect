const { DataTypes } = require('sequelize');
const database = require('../database/db');

const Aula = database.define('Aula', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    disciplina_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hora_inicio: {
        type: DataTypes.TIME,
    },
    hora_fim: {
        type: DataTypes.TIME,
    },
    monitor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    aluno_id: {
        type: DataTypes.INTEGER,
    }
}, { tableName: 'aulas' });

module.exports = Aula;
