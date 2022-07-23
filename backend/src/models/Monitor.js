const { DataTypes } = require('sequelize');
const database = require('../db');

const Monitor = database.define('Monitor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cpf: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    data_de_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    escolaridade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    etnia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, { tableName: 'monitor' });

module.exports = Monitor;