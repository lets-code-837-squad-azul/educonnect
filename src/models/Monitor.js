const { DataTypes } = require('sequelize');
const database = require('../database/db');

const Monitor = database.define('Monitor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    data_de_nascimento: {
        type: DataTypes.DATEONLY,
    },
    escolaridade: {
        type: DataTypes.STRING,
    },
    etnia: {
        type: DataTypes.STRING,
    },
    genero: {
        type: DataTypes.STRING,
    },
    horario_disponivel_inicio: {
        type: DataTypes.TIME,
    },
    horario_disponivel_final: {
        type: DataTypes.TIME,
    },
    estado_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, { tableName: 'monitores' });

module.exports = Monitor;
