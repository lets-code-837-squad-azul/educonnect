const Aula = require('../models/Aula');

//  Criar uma nova aula
const createAula = async (aula) => {
    const res = await Aula.create(aula);
    return res;
}

//  Retornar todas as aulas
const getAulas = async () => {
    const res = await Aula.findAll();
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
}
