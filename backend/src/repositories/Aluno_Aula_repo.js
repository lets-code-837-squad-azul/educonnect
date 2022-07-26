const Aluno_Aula = require('../models/Aluno_Aula');

//  Criar um novo aluno_aula
const createAluno_Aula = async (aluno_aula) => {
    const res = await Aluno_Aula.create(aluno_aula);
    return res;
}

//  Retornar todos os aluno_aulas
const getAluno_Aulas = async () => {
    const res = await Aluno_Aula.findAll();
    return res;
}

//  Atualizar um aluno_aula
const updateAluno_Aula = async (id, aluno_aula) => {
    const res = await Aluno_Aula.update(aluno_aula, {
        where: {
            id: id
        }
    });
    return res;
}

//  Deletar um aluno_aula
const deleteAluno_Aula = async (id) => {
    const res = await Aluno_Aula.destroy({
        where: {
            id: id
        }
    });
    return res;
}

module.exports = {
    createAluno_Aula,
    getAluno_Aulas,
    updateAluno_Aula,
    deleteAluno_Aula,
}
