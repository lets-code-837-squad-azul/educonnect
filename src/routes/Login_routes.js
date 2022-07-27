const Login_controller = require('../controller/Login_controller');
const express = require('express');
const router = express.Router();

router.get('/', Login_controller.login);

module.exports = router;
