//  Arquivo para receber a requisição do cliente

const EnderecoService = require('../services/Enderecos_service');

//  Criar um novo endereço (POST)
const createEndereco = async (req, res) => {
    const endereco = req.body;
    const response = await EnderecoService.createEndereco(endereco);
    return res.status(response.statusCode).json(response.data);
}

//  Retorna todos os endereços (GET)
const getEnderecos = async (req, res) => {
    const response = await EnderecoService.getEnderecos();
    return res.status(response.statusCode).json(response.data);
}

//  Atualiza um endereço (PATCH)
const updateEndereco = async (req, res) => {
    const id = req.params.id;
    const endereco = req.body;
    const response = await EnderecoService.updateEndereco(id, endereco);
    return res.status(response.statusCode).json(response.data);
}

//  Deleta um endereço (DELETE)
const deleteEndereco = async (req, res) => {
    const id = req.params.id;
    const response = await EnderecoService.deleteEndereco(id);
    return res.status(response.statusCode).json(response.data);
}

module.exports = {
    createEndereco,
    getEnderecos,
    updateEndereco,
    deleteEndereco,
}
