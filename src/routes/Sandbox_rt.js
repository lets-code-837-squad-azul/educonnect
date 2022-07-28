//  TEST AREA

const Sandbox_ctrl = require('../controller/Sandbox_ctrl');
const express = require('express');
const router = express.Router();

router.post('/', Sandbox_ctrl.createTodosEstados);

module.exports = router;

