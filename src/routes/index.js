//  Arquivo de distribuição das rotas

const Estados_Routes = require('./Estados_routes');
const Alunos_Routes = require('./Alunos_routes');
const Monitor_Routes = require('./Monitor_routes');
const Aula_Routes = require('./Aula_routes');
const Disciplinas_Routes = require('./Disciplinas_routes');
const Login_Routes = require('./Login_routes');
const express = require('express');
const router = express.Router();

router.use('/estados', Estados_Routes);
router.use('/alunos', Alunos_Routes);
router.use('/monitores', Monitor_Routes);
router.use('/aulas', Aula_Routes);
router.use('/disciplinas', Disciplinas_Routes);
router.use('/login', Login_Routes);

module.exports = router;
