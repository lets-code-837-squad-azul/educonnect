const Aula_service = require('../services/Aula_service');

//  Criar uma nova aula
const createAula = async (req, res) => {
    const aula = req.body;
    const response = await Aula_service.createAula(aula);
    return res.status(response.statusCode).json(response.data);
}

//  Retornar todas as aulas
const getAulas = async (req, res) => {
    const response = await Aula_service.getAulas();
    return res.status(response.statusCode).json(response.data);
}

//  Atuallizar uma aula
const updateAula = async (req, res) => {
    const id = req.params.id;
    const aula = req.body;
    const response = await Aula_service.updateAula(id, aula);
    return res.status(response.statusCode).json(response.data);
}

//  Deletar uma aula
const deleteAula = async (req, res) => {
    const id = req.params.id;
    const response = await Aula_service.deleteAula(id);
    return res.status(response.statusCode).json(response.data);
}

module.exports = {
    createAula,
    getAulas,
    updateAula,
    deleteAula,
}
