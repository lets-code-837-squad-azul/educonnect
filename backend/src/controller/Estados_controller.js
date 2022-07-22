//  Arquivo para receber a requisição do cliente

const EstadosService = require('../services/Estados_service');


//  Criar um novo estado (POST)
const createEstado = async (req, res) => {
    const estado = req.body;
    const response = await EstadosService.createEstado(estado);
    res.status(response.statusCode).json(response.data);
}

module.exports = {
    createEstado,
}
