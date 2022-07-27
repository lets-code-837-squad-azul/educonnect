const Disciplina_controller = require('../controller/Disciplinas_controller');
const express = require('express');
const router = express.Router();

router.post('/', Disciplina_controller.createDisciplina);
router.get('/', Disciplina_controller.getDisciplinas);
router.patch('/:id', Disciplina_controller.updateDisciplina);
router.delete('/:id', Disciplina_controller.deleteDisciplina);

module.exports = router;
