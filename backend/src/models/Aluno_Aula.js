const { DataTypes } = require('sequelize');
const database = require('../database/db');

const Aluno_Aula = database.define('Aluno_Aula', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    aluno_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    aula_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, { tableName: 'aluno_aula' });

module.exports = Aluno_Aula;
