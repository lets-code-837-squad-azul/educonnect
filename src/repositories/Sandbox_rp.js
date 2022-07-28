//  TEST AREA

const Estado = require('../models/Estado');

//  Criar todos os estados
const createTodosEstados = async (estados) => {
    const res = await Estado.bulkCreate(estados);
    return res;
}

module.exports = {
    createTodosEstados,
}
