//  Arquivo para iniciar o servidor

const express = require('express');
const conectar_db = require('./database/conexao');
const cors = require('cors');

//  Iniciando a API
const app = express();
app.use(express.json());
app.use(cors());

//  Fazendo o require das rotas (GERENCIADOR DE ROTAS)
app.use('/api', require('./routes/index'));

//  Testando a conexão com o banco de dados
(async () => { await conectar_db(); })();

module.exports = app;
