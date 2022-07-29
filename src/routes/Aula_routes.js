const Aula_controller = require('../controller/Aula_controller');
const express = require('express');
const router = express.Router();

router.post('/', Aula_controller.createAula);
router.get('/', Aula_controller.getAulas);
router.get('/:id', Aula_controller.getAulaById);
router.patch('/:id', Aula_controller.updateAula);
router.delete('/:id', Aula_controller.deleteAula);

module.exports = router;
