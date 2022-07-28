//  TEST AREA

const Sandbox_ctrl = require('../controller/Sandbox_ctrl');
const express = require('express');
const router = express.Router();

router.post('/estados', Sandbox_ctrl.createTodosEstados);
router.post('/disciplinas', Sandbox_ctrl.createTodasDisciplinas);

module.exports = router;
