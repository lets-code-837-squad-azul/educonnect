const { DataTypes } = require('sequelize');
const database = require('../database/db');

const Aluno = database.define('Aluno', {
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
    estado_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, { tableName: 'aluno' });

module.exports = Aluno;
