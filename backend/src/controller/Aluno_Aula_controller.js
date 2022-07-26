const Aluno_Aula_service = require('../services/Aluno_Aula_service');

//  Criar um novo aluno_aula
const createAluno_Aula = async (req, res) => {
    const aluno_aula = req.body;
    const response = await Aluno_Aula_service.createAluno_Aula(aluno_aula);
    return res.status(response.statusCode).json(response.data);
}

//  Retornar todos os aluno_aulas
const getAluno_Aulas = async (req, res) => {
    const response = await Aluno_Aula_service.getAluno_Aulas();
    return res.status(response.statusCode).json(response.data);
}

//  Atualizar um aluno_aula
const updateAluno_Aula = async (req, res) => {
    const id = req.params.id;
    const aluno_aula = req.body;
    const response = await Aluno_Aula_service.updateAluno_Aula(id, aluno_aula);
    return res.status(response.statusCode).json(response.data);
}

//  Deletar um aluno_aula
const deleteAluno_Aula = async (req, res) => {
    const id = req.params.id;
    const response = await Aluno_Aula_service.deleteAluno_Aula(id);
    return res.status(response.statusCode).json(response.data);
}

module.exports = {
    createAluno_Aula,
    getAluno_Aulas,
    updateAluno_Aula,
    deleteAluno_Aula,
}
