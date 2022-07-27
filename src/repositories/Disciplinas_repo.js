const Disciplina = require('../models/Disciplina');

//  Criar uma nova disciplina
const createDisciplina = async (disciplina) => {
    const res = await Disciplina.create(disciplina);
    return res;
}

//  Retornar todas as disciplinas
const getDisciplinas = async () => {
    const res = await Disciplina.findAll();
    return res;
}

//  Atualizar uma disciplina
const updateDisciplina = async (id, disciplina) => {
    const res = await Disciplina.update(disciplina, {
        where: {
            id: id
        }
    });
    return res;
}

//  Deletar uma disciplina
const deleteDisciplina = async (id) => {
    const res = await Disciplina.destroy({
        where: {
            id: id
        }
    });
    return res;
}

module.exports = {
    createDisciplina,
    getDisciplinas,
    updateDisciplina,
    deleteDisciplina,
}
