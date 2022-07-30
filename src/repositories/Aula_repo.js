const Aula = require('../models/Aula');
const Monitor = require('../models/Monitor');
const Aluno = require('../models/Aluno');

//  Criar uma nova aula
const createAula = async (aula) => {
    const res = await Aula.create(aula);
    return res;
}

//  Retornar todas as aulas
const getAulas = async () => {
    const res = await Aula.findAll({ include: [Monitor, Aluno] });
    return res;
}

//  Retornar uma aula pelo id
const getAulaById = async (id) => {
    const res = await Aula.findByPk(id);
    return res;
}

//  Retornar todas as aulas de um aluno
const getAulasByAluno = async (id) => {
    const res = await Aula.findAll({
        where: { aluno_id: id },
        include: [Monitor, Aluno]
    });
    return res;
}

//  Atuallizar uma aula
const updateAula = async (id, aula) => {
    const res = await Aula.update(aula, {
        where: {
            id: id
        }
    });
    return res;
}

//  Deletar uma aula
const deleteAula = async (id) => {
    const res = await Aula.destroy({
        where: {
            id: id
        }
    });
    return res;
}

module.exports = {
    createAula,
    getAulas,
    updateAula,
    deleteAula,
    getAulaById,
    getAulasByAluno,
}
