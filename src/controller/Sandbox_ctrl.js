//  TEST AREA

const Sandbox_srv = require('../services/Sandbox_srv');

//  Criar todos os estados (POST)
const createTodosEstados = async (req, res) => {
    const estados = req.body;
    const response = await Sandbox_srv.createTodosEstados(estados);
    return res.status(response.statusCode).json(response.data);
}

module.exports = {
    createTodosEstados,
}
