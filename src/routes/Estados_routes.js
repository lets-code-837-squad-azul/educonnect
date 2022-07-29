//  Arquivo que encaminha as requisições do cliente para o controller

const EstadosController = require('../controller/Estados_controller');
const express = require('express');
const router = express.Router();

router.post('/', EstadosController.createEstado);
router.get('/', EstadosController.getEstados);
router.get('/:id', EstadosController.getEstadoById);
router.patch('/:id', EstadosController.updateEstado);
router.delete('/:id', EstadosController.deleteEstado);

module.exports = router;
