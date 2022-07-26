//  Arquivo de distribuição das rotas

const EstadosRoutes = require('./Estados_routes');
const AlunosRoutes = require('./Alunos_routes');
const express = require('express');
const router = express.Router();

router.use('/estados', EstadosRoutes);
router.use('/alunos', AlunosRoutes);

module.exports = router;
