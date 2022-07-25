//  Arquivo que encaminha as requisições do cliente para o controller

const EnderecosController = require('../controller/Enderecos_controller');
const express = require('express');
const router = express.Router();

router.post('/', EnderecosController.createEndereco);
router.get('/', EnderecosController.getEnderecos);
router.patch('/:id', EnderecosController.updateEndereco);
router.delete('/:id', EnderecosController.deleteEndereco);

module.exports = router;
