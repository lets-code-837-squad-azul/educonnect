//  TEST AREA

const Estado = require('../models/Estado');
const Disciplina = require('../models/Disciplina');

//  Criar todos os estados
const createTodosEstados = async (estados) => {
    const res = await Estado.bulkCreate(estados);
    return res;
}

//  Criar todas as disciplinas
const createTodasDisciplinas = async (disciplinas) => {
    const res = await Disciplina.bulkCreate(disciplinas);
    return res;
}

module.exports = {
    createTodosEstados,
    createTodasDisciplinas,
}
