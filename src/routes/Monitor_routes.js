const Monitor_controller = require('../controller/Monitor_controller');
const express = require('express');
const router = express.Router();

router.post('/', Monitor_controller.createMonitor);
router.get('/', Monitor_controller.getMonitores);
router.get('/email/:email', Monitor_controller.getMonitorByEmail);
router.get('/cpf/:cpf', Monitor_controller.getMonitorByCpf);
router.patch('/:id', Monitor_controller.updateMonitor);
router.delete('/:id', Monitor_controller.deleteMonitor);

module.exports = router;
