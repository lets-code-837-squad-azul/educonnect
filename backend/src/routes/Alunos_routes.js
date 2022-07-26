const Alunos_controller = require('../controller/Alunos_controller') // CONTROLE DE METODOS
const express = require('express')
const routerAluno = express.Router()

// ROTA ALUNO

// rotas para os metodos (GET, POST, DELETE, PATCH) <=(VERBOS)
routerAluno.post('', Alunos_controller.createAluno);
routerAluno.get('', Alunos_controller.getAlunos);
routerAluno.delete('/:id', Alunos_controller.deleteAluno);
routerAluno.patch('/:id', Alunos_controller.updateAluno);

module.exports = routerAluno
