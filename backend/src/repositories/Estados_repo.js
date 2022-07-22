//  Requisições para o banco de dados da tabela estados

const Estado = require('../models/Estado');

//  Criar um novo estado
const createEstado = async (estado) => {
    const res = await Estado.create(estado);
    return res;
}

module.exports = {
    createEstado,
}
