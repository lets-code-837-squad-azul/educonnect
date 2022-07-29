//  Arquivo para receber a requisição do cliente

const EstadosService = require('../services/Estados_service');


//  Criar um novo estado (POST)
const createEstado = async (req, res) => {
    const estado = req.body;
    const response = await EstadosService.createEstado(estado);
    return res.status(response.statusCode).json(response.data);
}

//  Retorna todos os estados (GET)
const getEstados = async (req, res) => {
    const response = await EstadosService.getEstados();
    return res.status(response.statusCode).json(response.data);
}

//  Retorna um estado pelo id (GET)
const getEstadoById = async (req, res) => {
    const id = req.params.id;
    const response = await EstadosService.getEstadoById(id);
    return res.status(response.statusCode).json(response.data);
}

//  Atualiza um estado (PATCH)
const updateEstado = async (req, res) => {
    const id = req.params.id;
    const estado = req.body;
    const response = await EstadosService.updateEstado(id, estado);
    return res.status(response.statusCode).json(response.data);
}

//  Deleta um estado (DELETE)
const deleteEstado = async (req, res) => {
    const id = req.params.id;
    const response = await EstadosService.deleteEstado(id);
    return res.status(response.statusCode).json(response.data);
}

module.exports = {
    createEstado,
    getEstados,
    updateEstado,
    deleteEstado,
    getEstadoById,
}
