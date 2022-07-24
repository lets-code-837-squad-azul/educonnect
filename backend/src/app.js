//  Arquivo para iniciar o servidor

const express = require('express');
const conectar_db = require('./database/conexao');

//  Iniciando a API
const app = express();
app.use(express.json());

//  Fazendo o require das rotas (GERENCIADOR DE ROTAS)
app.use('/api', require('./routes/index'));

//  Testando a conexão com o banco de dados
(async () => { await conectar_db(); })();

module.exports = app;
