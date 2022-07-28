//  TEST AREA

const Sandbox_srv = require('../services/Sandbox_srv');

//  Criar todos os estados (POST)
const createTodosEstados = async (req, res) => {
    const estados = req.body;
    const response = await Sandbox_srv.createTodosEstados(estados);
    return res.status(response.statusCode).json(response.data);
}

//  Criar todas as disciplinas (POST)
const createTodasDisciplinas = async (req, res) => {
    const disciplinas = req.body;
    const response = await Sandbox_srv.createTodasDisciplinas(disciplinas);
    return res.status(response.statusCode).json(response.data);
}

module.exports = {
    createTodosEstados,
    createTodasDisciplinas,
}
