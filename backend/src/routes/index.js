//  Arquivo de distribuição das rotas

const EstadosRoutes = require('./Estados_routes');
const EnderecosRoutes = require('./Enderecos_routes');
const express = require('express');
const router = express.Router();

router.use('/estados', EstadosRoutes);
router.use('/enderecos', EnderecosRoutes);

module.exports = router;
