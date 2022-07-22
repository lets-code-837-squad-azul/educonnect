const { DataTypes } = require('sequelize');
const database = require('../db');

const Endereco = database.define('Endereco', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    logradouro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { tableName: 'enderecos' });

module.exports = Endereco;
