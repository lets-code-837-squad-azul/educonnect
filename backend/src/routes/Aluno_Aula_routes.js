const Aluno_Aula_controller = require('../controller/Aluno_Aula_controller');
const express = require('express');
const router = express.Router();

router.post('/', Aluno_Aula_controller.createAluno_Aula);
router.get('/', Aluno_Aula_controller.getAluno_Aulas);
router.patch('/:id', Aluno_Aula_controller.updateAluno_Aula);
router.delete('/:id', Aluno_Aula_controller.deleteAluno_Aula);

module.exports = router;
