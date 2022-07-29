//  Requisições para o banco de dados da tabela estados

const Estado = require('../models/Estado');

//  Criar um novo estado
const createEstado = async (estado) => {
    const res = await Estado.create(estado);
    return res;
}

//  Retorna todos os estados
const getEstados = async () => {
    const res = await Estado.findAll( { attributes: ['id', 'nome'] } ); //  attributes define quais colunas serão retornadas
    return res;
}

//  Retorna um estado pelo id
const getEstadoById = async (id) => {
    const res = await Estado.findByPk(id);
    return res;
}

//  Atualiza um estado
const updateEstado = async (id, estado) => {
    const res = await Estado.update(estado, {
        where: { id: id }
    });
    return res;
}

//  Deleta um estado
const deleteEstado = async (id) => {
    const res = await Estado.destroy({
        where: { id: id }
    });
    return res;
}

module.exports = {
    createEstado,
    getEstados,
    updateEstado,
    deleteEstado,
    getEstadoById,
}
