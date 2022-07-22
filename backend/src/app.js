//  Arquivo para iniciar o servidor

const express = require('express');
const requireDir = require('require-dir');
const database = require('./db');
requireDir('./models');

//  Iniciando a API
const app = express();
app.use(express.json());
app.use('/api', require('./routes/index'));

//  Testando a conexão com o banco de dados
(async () => {
    try {
        await database.sync( { alter: true, logging: false } );
        console.log('Conexão com o banco de dados realizada com sucesso!');
    }
    catch (error) {
        console.log('Erro ao conectar com o banco de dados: ' + error);
    }
})();

module.exports = app;
