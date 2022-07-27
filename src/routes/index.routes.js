const express = require('express');
const routes = express.Router();
const AulaRouter = require('./Aula.Router') // ROTA AULA
const AlunoRouter = require('./Aluno.Router') // ROTA ALUNO
const MonitorRouter = require('./Monitor.Router') // ROTA MONITOR
const EnderecoRouter = require('./Endereco.Router') // ROTA ENDEREÇO
const EstadoRouter = require('./Estado.Router') // ROTA ESTADO

// GERENCIADOR DE ROTAS
routes.use('/aula', AulaRouter) // acesso as rotas
routes.use('/aluno', AlunoRouter) // acesso as rotas
routes.use('/monitor', MonitorRouter) // acesso as rotas
routes.use('/endereco', EnderecoRouter) // acesso as rotas
routes.use('/estado', EstadoRouter) // acesso as rotas

module.exports = routes;