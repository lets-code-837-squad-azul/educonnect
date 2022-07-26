const Monitor_controller = require('../controller/Monitor_controller');
const express = require('express');
const router = express.Router();

router.post('/', Monitor_controller.createMonitor);
router.get('/', Monitor_controller.getMonitores);
router.patch('/:id', Monitor_controller.updateMonitor);
router.delete('/:id', Monitor_controller.deleteMonitor);

module.exports = router;
