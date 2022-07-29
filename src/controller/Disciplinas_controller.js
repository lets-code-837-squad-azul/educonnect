const Disciplina_service = require('../services/Disciplinas_service');

//  Criar uma nova disciplina
const createDisciplina = async (req, res) => {
    const disciplina = req.body;
    const response = await Disciplina_service.createDisciplina(disciplina);
    return res.status(response.statusCode).json(response.data);
}

//  Retornar todas as disciplinas
const getDisciplinas = async (req, res) => {
    const response = await Disciplina_service.getDisciplinas();
    return res.status(response.statusCode).json(response.data);
}

//  Retornar uma disciplina por id
const getDisciplinaById = async (req, res) => {
    const id = req.params.id;
    const response = await Disciplina_service.getDisciplinaById(id);
    return res.status(response.statusCode).json(response.data);
}

//  Atualizar uma disciplina
const updateDisciplina = async (req, res) => {
    const id = req.params.id;
    const disciplina = req.body;
    const response = await Disciplina_service.updateDisciplina(id, disciplina);
    return res.status(response.statusCode).json(response.data);
}

//  Deletar uma disciplina
const deleteDisciplina = async (req, res) => {
    const id = req.params.id;
    const response = await Disciplina_service.deleteDisciplina(id);
    return res.status(response.statusCode).json(response.data);
}

module.exports = {
    createDisciplina,
    getDisciplinas,
    updateDisciplina,
    deleteDisciplina,
    getDisciplinaById,
}
