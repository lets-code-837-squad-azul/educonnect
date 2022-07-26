//  Arquivo que encaminha as requisições do cliente para o controller

const EstadosController = require('../controller/Estados_controller');
const express = require('express');
const router = express.Router();

router.post('/', EstadosController.createEstado);

module.exports = router;
