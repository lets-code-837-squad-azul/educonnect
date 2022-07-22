//  Arquivo de distribuição das rotas

const EstadosRoutes = require('./Estados_routes');
const express = require('express');
const router = express.Router();

router.use('/estados', EstadosRoutes);

module.exports = router;
